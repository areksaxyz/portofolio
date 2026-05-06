import { AboutSection } from "@/components/about-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { CveSection } from "@/components/cve-section";
import { GoogleVrpSection } from "@/components/google-vrp-section";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { MethodologySection } from "@/components/methodology-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <CveSection />
        <GoogleVrpSection />
        <CertificatesSection />
        <TimelineSection />
        <MethodologySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
