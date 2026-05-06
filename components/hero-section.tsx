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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_45%),radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.10),transparent_36%)]" />
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <Reveal>
          <div className="mb-7 w-fit overflow-hidden rounded-2xl border bg-card shadow-soft">
            <Image
              src={profile.avatar}
              alt="Muhamad Arga Reksapati profile photo"
              width={1280}
              height={1600}
              sizes="(min-width: 1024px) 220px, 160px"
              className="aspect-[4/5] w-40 object-cover object-top sm:w-48 lg:w-56"
              priority
            />
          </div>
          <Badge variant="success" className="mb-6">
            <T id="hero.badge" />
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-primary sm:text-3xl">
            <T id="hero.title" />
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            <T id="hero.tagline" />
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="interactive-card rounded-2xl border bg-card/90 p-6 shadow-soft backdrop-blur">
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border">
                <Image
                  src={profile.avatar}
                  alt="Muhamad Arga Reksapati profile photo"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {profile.aliases.map((alias) => `@${alias}`).join(" / ")}
                </p>
                <p className="mt-1 text-xl font-semibold">
                  <T id="hero.title" />
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {profile.location}
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((stat) => (
                <div key={stat.label} className="interactive-bar rounded-2xl border bg-background/70 p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium">
                    <T id={stat.label} />
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    <T id={stat.detail} />
                  </p>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link href="#cves" className="group">
                <T id="hero.review" />
                <ArrowUpRight className="interactive-link-icon h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
