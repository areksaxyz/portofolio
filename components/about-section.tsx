import { CheckCircle2 } from "lucide-react";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile, researchFocus } from "@/src/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="about.kicker"
          title="about.title"
          description="about.description"
        />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal delay={0.05}>
          <Card className="interactive-card h-full">
            <CardContent className="p-6">
              <p className="text-lg leading-8 text-muted-foreground">
                <T id="about.body" />
              </p>
              <div className="interactive-bar mt-6 rounded-2xl border bg-secondary/50 p-5">
                <p className="font-medium">
                  <T id="about.verification" />
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {profile.verificationNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>
                        <T id={note} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {researchFocus.map((item) => (
              <div
                key={item}
                className="interactive-bar rounded-2xl border bg-card p-4 text-sm font-medium shadow-sm"
              >
                <T id={item} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
