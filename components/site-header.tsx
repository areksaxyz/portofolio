import Link from "next/link";
import { Shield } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { T } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "nav.about", href: "#about" },
  { label: "nav.cves", href: "#cves" },
  { label: "nav.google", href: "#google-vrp" },
  { label: "nav.certificates", href: "#certificates" },
  { label: "nav.contact", href: "#contact" }
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="areksaxyz portfolio home"
          className="flex items-center gap-3 font-semibold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>areksaxyz</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>
                <T id={item.label} />
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
