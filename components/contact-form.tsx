"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2, Mail, Send } from "lucide-react";
import { T } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/src/data/profile";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

function openMailFallback(payload: Record<string, FormDataEntryValue>) {
  const name = String(payload.name ?? "");
  const email = String(payload.email ?? "");
  const subject = String(payload.subject ?? "Portfolio contact");
  const message = String(payload.message ?? "");
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message
  ].join("\n");

  window.location.href = `${profile.links.email}?subject=${encodeURIComponent(
    `[Portfolio] ${subject}`
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as {
        ok: boolean;
        message: string;
        fallback?: boolean;
      };

      if (!response.ok || !data.ok) {
        if (data.fallback) {
          openMailFallback(payload);
          setStatus({
            type: "success",
            message:
              "Draft email sudah dibuka agar pesan tetap bisa dikirim langsung."
          });
          return;
        }

        setStatus({
          type: "error",
          message: data.message
        });
        return;
      }

      event.currentTarget.reset();
      setStatus({ type: "success", message: data.message });
    } catch {
      openMailFallback(payload);
      setStatus({
        type: "success",
        message:
          "Draft email sudah dibuka karena layanan kontak sedang tidak dapat dijangkau."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="name">
            <T id="contact.name" />
          </label>
          <Input id="name" name="name" autoComplete="name" required minLength={2} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="email">
            <T id="contact.email" />
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="subject">
          <T id="contact.subject" />
        </label>
        <Input id="subject" name="subject" required minLength={4} />
      </div>
      <div className="absolute left-[-5000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <Input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="message">
          <T id="contact.message" />
        </label>
        <Textarea id="message" name="message" required minLength={20} />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} aria-label="Send message">
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          <T id="contact.send" />
        </Button>
        <Button asChild variant="outline" aria-label="Contact via email">
          <Link href={profile.links.email}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            <T id="contact.fallback" />
          </Link>
        </Button>
      </div>
      {status.message ? (
        <p
          role="status"
          className={
            status.type === "success"
              ? "text-sm text-emerald-600 dark:text-emerald-300"
              : "text-sm text-destructive"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
