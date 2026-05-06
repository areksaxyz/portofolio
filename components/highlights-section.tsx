import Link from "next/link";
import { ArrowUpRight, FileCheck2, ShieldCheck, Trophy } from "lucide-react";
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
import { profile } from "@/src/data/profile";
import { publicMentions } from "@/src/data/projects";

const securityHighlights = [
  {
    icon: FileCheck2,
    title: "highlights.curl.title",
    description: "highlights.curl.description"
  },
  {
    icon: ShieldCheck,
    title: "highlights.google.title",
    description: "highlights.google.description"
  },
  {
    icon: Trophy,
    title: "highlights.profile.title",
    description: "highlights.profile.description"
  }
] as const;

export function HighlightsSection() {
  return (
    <section id="highlights" className="border-y bg-secondary/35">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="highlights.kicker"
            title="highlights.title"
            description="highlights.description"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {securityHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="interactive-card h-full">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>
                    <T id={item.title} />
                  </CardTitle>
                  <CardDescription>
                    <T id={item.description} />
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <Card className="interactive-card mt-6">
            <CardContent className="p-6">
              <div className="grid gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    <T id="highlights.googleRank" />
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    #{profile.publicStats.googleProfileRank}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    <T id="highlights.awards" />
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    {profile.publicStats.googleAwards}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    <T id="highlights.publicReports" />
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    {profile.publicStats.googlePublishedReports}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    <T id="highlights.joined" />
                  </p>
                  <p className="mt-1 text-2xl font-semibold">Dec 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <T id="highlights.publicMentions" />
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {publicMentions.map((mention) => (
                <Link
                  key={mention.href}
                  href={mention.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group interactive-card rounded-2xl border bg-card p-4"
                >
                  <Badge variant="outline">{mention.source}</Badge>
                  <p className="mt-3 text-sm font-medium leading-6">
                    {mention.title}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                    <T id="highlights.openReference" />
                    <ArrowUpRight className="interactive-link-icon h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
