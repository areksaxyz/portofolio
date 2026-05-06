import Link from "next/link";
import { T } from "@/components/language-provider";
import { socials } from "@/src/data/socials";
import { profile } from "@/src/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            <T id="footer.title" />
          </p>
        </div>
        <nav className="flex flex-wrap gap-3" aria-label="Social links">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.label}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background transition-colors hover:border-primary/50 hover:text-primary"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
