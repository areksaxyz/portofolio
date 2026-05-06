import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { T } from "@/components/language-provider";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { methodology } from "@/src/data/profile";

export function MethodologySection() {
  return (
    <section id="methodology" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="methodology.kicker"
          title="methodology.title"
          description="methodology.description"
        />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {methodology.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <Card className="group interactive-card h-full">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-sm font-semibold text-primary transition-transform duration-300 group-hover:scale-105">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">
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
    </section>
  );
}
