import {
  Braces,
  Bug,
  Cloud,
  Code2,
  Container,
  FileCode2,
  FileText,
  Github,
  Globe2,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  TestTube2,
  type LucideIcon
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { T } from "@/components/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { researchAreas, skills } from "@/src/data/profile";

const skillIcons: Record<
  (typeof skills)[number],
  {
    icon: LucideIcon;
    mark?: string;
    className: string;
  }
> = {
  GitHub: {
    icon: Github,
    className: "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
  },
  Linux: {
    icon: Terminal,
    className: "bg-amber-400 text-zinc-950"
  },
  Python: {
    icon: FileCode2,
    mark: "Py",
    className: "bg-blue-600 text-white"
  },
  "Go tests": {
    icon: TestTube2,
    mark: "Go",
    className: "bg-cyan-500 text-white"
  },
  "Rust / cargo": {
    icon: Code2,
    mark: "Rs",
    className: "bg-orange-600 text-white"
  },
  "Node.js": {
    icon: Braces,
    mark: "JS",
    className: "bg-green-600 text-white"
  },
  TypeScript: {
    icon: FileCode2,
    mark: "TS",
    className: "bg-blue-500 text-white"
  },
  "curl/libcurl": {
    icon: Globe2,
    mark: "C",
    className: "bg-emerald-600 text-white"
  },
  "Burp Suite": {
    icon: Bug,
    className: "bg-orange-500 text-white"
  },
  "gcloud CLI": {
    icon: Cloud,
    className: "bg-sky-500 text-white"
  },
  Docker: {
    icon: Container,
    className: "bg-blue-600 text-white"
  },
  "HTTP/proxy testing": {
    icon: Network,
    className: "bg-violet-600 text-white"
  },
  "Vulnerability report writing": {
    icon: FileText,
    className: "bg-rose-600 text-white"
  }
};

const researchAreaIcons = [
  Network,
  ShieldCheck,
  Cloud,
  Server,
  Bug,
  Globe2,
  Code2,
  FileText
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="border-y bg-secondary/35">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="skills.kicker"
            title="skills.title"
            description="skills.description"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <Card className="interactive-card h-full">
              <CardContent className="p-6">
                <p className="mb-5 text-lg font-semibold">
                  <T id="skills.tools" />
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {skills.map((skill) => {
                    const skillIcon = skillIcons[skill];
                    const Icon = skillIcon.icon;

                    return (
                      <div
                        key={skill}
                        className="interactive-bar flex items-center gap-3 rounded-xl border bg-background/70 px-3 py-2.5 text-sm font-medium"
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${skillIcon.className}`}
                          aria-hidden="true"
                        >
                          {skillIcon.mark ? (
                            <span className="text-[11px] font-bold leading-none">
                              {skillIcon.mark}
                            </span>
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </span>
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="interactive-card h-full">
              <CardContent className="p-6">
                <p className="mb-5 text-lg font-semibold">
                  <T id="skills.areas" />
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {researchAreas.map((area, index) => {
                    const Icon = researchAreaIcons[index % researchAreaIcons.length];

                    return (
                    <div
                      key={area}
                      className="interactive-bar flex items-center gap-3 rounded-xl border bg-background/70 px-4 py-3 text-sm font-medium"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{area}</span>
                    </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
