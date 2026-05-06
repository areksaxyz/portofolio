import Link from "next/link";
import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/src/data/profile";

const contactLinks = [
  {
    label: "Email",
    href: profile.links.email,
    icon: Mail
  },
  {
    label: "GitHub",
    href: profile.links.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: Linkedin
  },
  {
    label: "Google Bug Hunters",
    href: profile.links.googleBugHuntersProfile,
    icon: ShieldCheck
  }
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="contact.kicker"
          title="contact.title"
          description="contact.description"
        />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.05}>
          <Card className="interactive-card h-full">
            <CardContent className="p-6">
              <p className="text-lg font-semibold">
                <T id="contact.connect" />
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                <T id="contact.copy" />
              </p>
              <div className="mt-6 space-y-3">
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-bar flex items-center gap-3 rounded-2xl border bg-background/70 p-4 text-sm font-medium"
                  >
                    <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="interactive-card">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
