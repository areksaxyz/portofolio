import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, ShieldCheck } from "lucide-react";
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
import { certificates } from "@/src/data/certificates";

export function CertificatesSection() {
  return (
    <section id="certificates" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker="certificates.kicker"
          title="certificates.title"
          description="certificates.description"
        />
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <Reveal key={`${certificate.organization}-${certificate.system}`} delay={index * 0.05}>
            <Card className="interactive-card h-full overflow-hidden">
              <Link
                href={certificate.image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full-size ${certificate.organization} ${certificate.system} certificate`}
                className="group block border-b bg-muted"
              >
                <Image
                  src={certificate.image.src}
                  alt={`${certificate.organization} ${certificate.system} certificate`}
                  width={certificate.image.width}
                  height={certificate.image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </Link>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{certificate.organization}</Badge>
                  <Badge variant="secondary">{certificate.system}</Badge>
                </div>
                <CardTitle>{certificate.title}</CardTitle>
                <CardDescription>{certificate.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                    <T id="certificates.date" /> {certificate.date}
                  </p>
                  <p className="flex items-start gap-2 leading-6">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <T id="certificates.safeNote" />
                  </p>
                  <p className="flex items-start gap-2 leading-6">
                    <Award className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <T id="certificates.proof" />
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
