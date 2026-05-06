import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, EyeOff, ShieldCheck } from "lucide-react";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/src/data/profile";

const googleAwards = [
  "It's over 9000",
  "First report",
  "Crickets",
  "Snake"
] as const;

export function GoogleVrpSection() {
  return (
    <section id="google-vrp" className="border-y bg-secondary/35">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="google.kicker"
            title="google.title"
            description="google.description"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal delay={0.05}>
            <Card className="interactive-card h-full">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle>
                  <T id="google.status" />
                </CardTitle>
                <CardDescription>
                  <T id="google.statusDescription" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-center gap-4 rounded-2xl border bg-background/70 p-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border">
                    <Image
                      src={profile.avatar}
                      alt="Muhamad Arga Reksapati profile photo"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold">
                      {profile.name}
                    </p>
                    <p className="mt-1 truncate text-sm text-muted-foreground">
                      @{profile.googleHandle}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="interactive-bar rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">
                      <T id="google.profile" />
                    </p>
                    <p className="mt-1 font-semibold">@{profile.googleHandle}</p>
                  </div>
                  <div className="interactive-bar rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">
                      <T id="google.country" />
                    </p>
                    <p className="mt-1 font-semibold">Indonesia</p>
                  </div>
                  <div className="interactive-bar rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">
                      <T id="highlights.publicReports" />
                    </p>
                    <p className="mt-1 font-semibold">
                      {profile.publicStats.googlePublishedReports}
                    </p>
                  </div>
                  <div className="interactive-bar rounded-2xl border bg-background/70 p-4">
                    <p className="text-sm text-muted-foreground">
                      <T id="highlights.joined" />
                    </p>
                    <p className="mt-1 font-semibold">December 8, 2025</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link
                      href={profile.links.googleBugHuntersProfile}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <T id="google.openProfile" />
                      <ArrowUpRight className="interactive-link-icon h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="interactive-card h-full">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle>
                  <T id="google.publicAwards" />
                </CardTitle>
                <CardDescription>
                  <T id="google.publicAwardsDescription" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={profile.links.googleBugHuntersProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="group mb-6 block overflow-hidden rounded-2xl border bg-muted"
                >
                  <Image
                    src={profile.proofImages.googleBugHunters.src}
                    alt="Google Bug Hunters profile screenshot"
                    width={profile.proofImages.googleBugHunters.width}
                    height={profile.proofImages.googleBugHunters.height}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="aspect-[2.2/1] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="flex flex-wrap gap-2">
                  {googleAwards.map((award) => (
                    <Badge key={award} variant="outline">
                      {award}
                    </Badge>
                  ))}
                </div>
                <div className="interactive-bar mt-6 flex gap-3 rounded-2xl border bg-background/70 p-4 text-sm leading-6 text-muted-foreground">
                  <EyeOff className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    <T id="google.omitted" />
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
