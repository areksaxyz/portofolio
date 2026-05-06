import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
import { projects } from "@/src/data/projects";

export function ProjectsSection() {
  return (
    <section id="research" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="projects.kicker"
          title="projects.title"
          description="projects.description"
        />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <Card className="interactive-card h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="interactive-bar">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <T id="projects.view" />
                  <ArrowUpRight className="interactive-link-icon h-4 w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
