import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, MapPin, ShieldCheck } from "lucide-react";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, highlights } from "@/src/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_35%_20%,hsl(var(--primary)/0.18),transparent_36%),radial-gradient(ellipse_at_80%_60%,hsl(var(--accent)/0.10),transparent_32%)]" />
      <div className="container grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-14 lg:py-16">
        <Reveal>
          <Badge variant="success" className="mb-5">
            <T id="hero.badge" />
          </Badge>
          <p className="mb-3 text-sm font-medium text-muted-foreground sm:text-base">
            {profile.aliases.map((alias) => `@${alias}`).join(" / ")}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-medium leading-tight text-primary sm:text-3xl">
            <T id="hero.title" />
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            <T id="hero.tagline" />
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {profile.location}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" aria-label="Open GitHub profile">
              <Link href={profile.links.github} target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" aria-hidden="true" />
                <T id="hero.github" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" aria-label="Open LinkedIn profile">
              <Link href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <T id="hero.linkedin" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              aria-label="Open Google Bug Hunters profile"
            >
              <Link
                href={profile.links.googleBugHuntersProfile}
                target="_blank"
                rel="noreferrer"
              >
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <T id="hero.google" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="overflow-hidden rounded-2xl border bg-card shadow-soft">
              <Image
                src={profile.avatar}
                alt="Muhamad Arga Reksapati profile photo"
                width={1280}
                height={1600}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="aspect-[4/5] w-full object-cover object-top"
                priority
              />
            </div>
            <div className="interactive-card -mt-16 mx-4 rounded-2xl border bg-card/95 p-4 shadow-soft backdrop-blur sm:-mt-20 sm:mx-8 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {profile.aliases.map((alias) => `@${alias}`).join(" / ")}
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    <T id="hero.title" />
                  </p>
                </div>
                <Button asChild variant="link" className="shrink-0 px-0">
                  <Link href="#cves" className="group">
                    <T id="hero.review" />
                    <ArrowUpRight className="interactive-link-icon h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
              {highlights.map((stat) => (
                <div key={stat.label} className="interactive-bar rounded-xl border bg-background/70 p-3">
                  <p className="text-xl font-semibold sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium sm:text-sm">
                    <T id={stat.label} />
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-2">
                    <T id={stat.detail} />
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
