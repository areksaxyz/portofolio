import { CalendarDays } from "lucide-react";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/src/data/timeline";

export function TimelineSection() {
  return (
    <section id="timeline" className="border-y bg-secondary/35">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="timeline.kicker"
            title="timeline.title"
            description="timeline.description"
          />
        </Reveal>
        <div className="mt-10 grid gap-4">
          {timeline.map((item, index) => (
            <Reveal key={`${item.date}-${item.title}`} delay={index * 0.04}>
              <Card className="interactive-card">
                <CardContent className="grid gap-4 p-5 sm:grid-cols-[180px_1fr] sm:items-start">
                  <div>
                    <Badge variant="outline">{item.tag}</Badge>
                    <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                      {item.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-normal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          <T id="timeline.safeNote" />
        </p>
      </div>
    </section>
  );
}
