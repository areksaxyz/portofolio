"use client";

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type Language = "en" | "id";

type Dictionary = Record<Language, Record<string, string>>;

const dictionary: Dictionary = {
  en: {
    "nav.about": "About",
    "nav.cves": "CVEs",
    "nav.google": "Google VRP",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "hero.badge": "Based in Bandung, Indonesia",
    "hero.title": "Security Researcher & Bug Bounty Hunter",
    "hero.tagline":
      "I research real-world security issues in open source, cloud, authentication, and protocol edge cases with reproducible proof-of-concepts and responsible disclosure.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.google": "Google Bug Hunters",
    "hero.review": "Review verified credits",
    "stats.curl": "curl CVEs",
    "stats.curl.detail": "Official public curl advisory credits",
    "stats.googleRank": "Google profile rank",
    "stats.googleRank.detail": "Public Google Bug Hunters profile value",
    "stats.awards": "Google awards",
    "stats.awards.detail": "Public Google Bug Hunters profile awards",
    "stats.indonesia": "Based in Indonesia",
    "stats.indonesia.detail": "Security researcher from Bandung",
    "about.kicker": "About",
    "about.title": "Security research with clear impact and careful disclosure.",
    "about.description":
      "I focus on finding issues that matter, explaining security impact clearly, and helping teams reproduce and fix vulnerabilities through responsible disclosure.",
    "about.body":
      "I am Muhamad Arga Reksapati, known as @areksaxyz and @nobcoder, a security researcher and bug bounty hunter based in Bandung, Indonesia. My public work includes official curl CVE credits, a public Google Bug Hunters profile, and institutional acknowledgements for reported vulnerabilities.",
    "about.verification": "Verification posture",
    "note.curl": "curl CVE credits are sourced from official curl security advisories.",
    "note.google":
      "Google Bug Hunters statistics are public profile data visible from the Google Bug Hunters profile endpoint.",
    "note.private":
      "Private VRP work is represented through public status, awards, and acknowledgement signals.",
    "focus.source": "Source-code security review",
    "focus.bounty": "Bug bounty research",
    "focus.cloud": "Cloud information disclosure",
    "focus.auth": "Authentication and authorization bugs",
    "focus.credentials": "Credential leakage",
    "focus.proxy": "Proxy/auth state bugs",
    "focus.protocol": "Protocol edge cases",
    "focus.state": "State/cache confusion",
    "focus.poc": "Reproducible proof-of-concept development",
    "focus.disclosure": "Responsible disclosure",
    "highlights.kicker": "Security Highlights",
    "highlights.title": "Publicly verifiable credibility signals.",
    "highlights.description":
      "Public, official, and credible sources are represented here, with impact summaries where disclosure is appropriate.",
    "highlights.curl.title": "Official curl CVE credits",
    "highlights.curl.description":
      "Four public curl advisories credit Muhamad Arga Reksapati for vulnerability reports across proxy auth, credential leakage, and state confusion.",
    "highlights.google.title": "Google VRP work",
    "highlights.google.description":
      "Private valid Google VRP report. Fixed and rewarded by Google, represented through public profile and award signals.",
    "highlights.profile.title": "Public profile signals",
    "highlights.profile.description":
      "Google Bug Hunters profile shows rank, awards, public report count, country, and joined date as public profile metadata.",
    "highlights.googleRank": "Google rank",
    "highlights.awards": "Awards",
    "highlights.publicReports": "Public reports",
    "highlights.joined": "Joined",
    "highlights.publicMentions": "Public Mentions",
    "highlights.openReference": "Open reference",
    "cves.kicker": "curl CVE Credits",
    "cves.title": "Official public curl advisories.",
    "cves.description":
      "Each item links directly to the curl advisory and uses safe impact summaries without exploit walkthroughs.",
    "cves.source": "Official advisory",
    "cves.report": "HackerOne report",
    "cves.published": "Published",
    "google.kicker": "Google Bug Hunters / VRP",
    "google.title": "Private valid Google VRP work, represented safely.",
    "google.description":
      "The public Google Bug Hunters profile confirms profile metadata, leaderboard rank, and awards.",
    "google.status": "Google VRP status",
    "google.statusDescription":
      "Private valid Google VRP report. Fixed and rewarded by Google, represented through public profile signals.",
    "google.profile": "Profile",
    "google.country": "Country",
    "google.openProfile": "Open profile",
    "google.leaderboard": "Profile leaderboard",
    "google.publicAwards": "Public awards",
    "google.publicAwardsDescription":
      "Awards visible on the public Google Bug Hunters profile.",
    "google.omitted":
      "The Google Bug Hunters profile highlights verified status, awards, and public metadata.",
    "certificates.kicker": "Certificates",
    "certificates.title": "Vulnerability finding acknowledgements.",
    "certificates.description":
      "Certificates from institutions where reported findings helped improve website and system security.",
    "certificates.date": "Issued",
    "certificates.safeNote":
      "Each certificate is paired with a concise impact summary from the reported finding.",
    "certificates.proof":
      "The certificate acts as public recognition that a vulnerability was found and reported responsibly.",
    "timeline.kicker": "Timeline",
    "timeline.title": "Security work milestones.",
    "timeline.description":
      "A concise view of institutional acknowledgements, public profile signals, and public advisory credits.",
    "timeline.safeNote":
      "Timeline summaries focus on impact, recognition, and responsible disclosure milestones.",
    "methodology.kicker": "Methodology",
    "methodology.title": "Structured research, small proofs, clean reporting.",
    "methodology.description":
      "My approach is practical: reduce ambiguity, prove impact safely, and make the fix path easier for maintainers and security teams.",
    "methodology.scope.title": "Scope and threat model",
    "methodology.scope.description":
      "Understand the boundary first: trusted components, attacker position, credential flow, cache/state behavior, and impact path.",
    "methodology.source.title": "Source-guided testing",
    "methodology.source.description":
      "Combine code review with focused harnesses and small experiments, especially around auth state, redirects, proxy handling, and protocol transitions.",
    "methodology.evidence.title": "Reproducible evidence",
    "methodology.evidence.description":
      "Build minimal proof-of-concepts that show security impact without exposing unrelated data or private implementation details.",
    "methodology.disclosure.title": "Responsible disclosure",
    "methodology.disclosure.description":
      "Report with clear impact, affected versions or conditions, mitigation notes, and safe communication until the issue is fixed.",
    "skills.kicker": "Skills & Tools",
    "skills.title": "Hands-on tools for application and protocol research.",
    "skills.description":
      "A focused stack for source review, web testing, cloud investigation, reproducible test cases, and clear vulnerability reports.",
    "skills.tools": "Tools and languages",
    "skills.areas": "Selected research areas",
    "projects.kicker": "Selected Research Areas",
    "projects.title": "A portfolio oriented around security impact.",
    "projects.description":
      "Selected public work and research themes, with private customer or program details kept out of the page.",
    "projects.view": "View reference",
    "contact.kicker": "Contact",
    "contact.title": "Security research collaboration and remote opportunities.",
    "contact.description":
      "For collaboration, remote work, or responsible disclosure conversations, send a short note with context and the best place to reply.",
    "contact.connect": "Connect",
    "contact.copy":
      "Public profiles are the best starting point for verification, collaboration, and follow-up. Contact form email delivery uses environment variables and falls back gracefully when not set.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.fallback": "Email fallback",
    "footer.title": "Security Researcher & Bug Bounty Hunter"
  },
  id: {
    "nav.about": "Tentang",
    "nav.cves": "CVE",
    "nav.google": "Google VRP",
    "nav.certificates": "Sertifikat",
    "nav.contact": "Kontak",
    "hero.badge": "Berbasis di Bandung, Indonesia",
    "hero.title": "Security Researcher & Bug Bounty Hunter",
    "hero.tagline":
      "Saya meneliti isu keamanan nyata di open source, cloud, autentikasi, dan edge case protokol dengan proof-of-concept yang bisa direproduksi serta responsible disclosure.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.google": "Google Bug Hunters",
    "hero.review": "Lihat kredit terverifikasi",
    "stats.curl": "curl CVE",
    "stats.curl.detail": "Kredit dari advisory resmi curl",
    "stats.googleRank": "Peringkat profil Google",
    "stats.googleRank.detail": "Nilai publik dari profil Google Bug Hunters",
    "stats.awards": "Award Google",
    "stats.awards.detail": "Award profil publik Google Bug Hunters",
    "stats.indonesia": "Berbasis di Indonesia",
    "stats.indonesia.detail": "Security researcher dari Bandung",
    "about.kicker": "Tentang",
    "about.title": "Riset keamanan dengan impact jelas dan disclosure yang hati-hati.",
    "about.description":
      "Saya fokus menemukan isu yang berdampak, menjelaskan impact keamanan dengan jelas, dan membantu tim mereproduksi serta memperbaiki kerentanan melalui responsible disclosure.",
    "about.body":
      "Saya Muhamad Arga Reksapati, dikenal sebagai @areksaxyz dan @nobcoder, security researcher dan bug bounty hunter berbasis di Bandung, Indonesia. Karya publik saya mencakup kredit CVE resmi di curl, profil publik Google Bug Hunters, dan pengakuan institusi atas laporan kerentanan.",
    "about.verification": "Posisi verifikasi",
    "note.curl": "Kredit CVE curl bersumber dari advisory keamanan resmi curl.",
    "note.google":
      "Statistik Google Bug Hunters adalah data profil publik dari endpoint profil Google Bug Hunters.",
    "note.private":
      "Pekerjaan VRP private direpresentasikan melalui status publik, awards, dan sinyal pengakuan.",
    "focus.source": "Review keamanan source code",
    "focus.bounty": "Riset bug bounty",
    "focus.cloud": "Information disclosure di cloud",
    "focus.auth": "Bug autentikasi dan otorisasi",
    "focus.credentials": "Credential leakage",
    "focus.proxy": "Bug state proxy/auth",
    "focus.protocol": "Edge case protokol",
    "focus.state": "State/cache confusion",
    "focus.poc": "Pengembangan proof-of-concept yang reproduktif",
    "focus.disclosure": "Responsible disclosure",
    "highlights.kicker": "Highlight Keamanan",
    "highlights.title": "Sinyal kredibilitas yang bisa diverifikasi publik.",
    "highlights.description":
      "Sumber publik, resmi, dan kredibel ditampilkan di sini, disertai ringkasan impact ketika disclosure memungkinkan.",
    "highlights.curl.title": "Kredit CVE resmi curl",
    "highlights.curl.description":
      "Empat advisory publik curl mencantumkan Muhamad Arga Reksapati untuk laporan vulnerability terkait proxy auth, credential leakage, dan state confusion.",
    "highlights.google.title": "Pekerjaan Google VRP",
    "highlights.google.description":
      "Private valid Google VRP report. Fixed and rewarded by Google, direpresentasikan melalui profil publik dan award.",
    "highlights.profile.title": "Sinyal profil publik",
    "highlights.profile.description":
      "Profil Google Bug Hunters menampilkan rank, awards, jumlah public report, country, dan joined date sebagai metadata publik.",
    "highlights.googleRank": "Rank Google",
    "highlights.awards": "Awards",
    "highlights.publicReports": "Public reports",
    "highlights.joined": "Bergabung",
    "highlights.publicMentions": "Mention Publik",
    "highlights.openReference": "Buka referensi",
    "cves.kicker": "Kredit CVE curl",
    "cves.title": "Advisory publik resmi curl.",
    "cves.description":
      "Setiap item menautkan langsung ke advisory curl dan memakai ringkasan impact yang aman tanpa walkthrough eksploitasi.",
    "cves.source": "Advisory resmi",
    "cves.report": "Report HackerOne",
    "cves.published": "Dipublikasikan",
    "google.kicker": "Google Bug Hunters / VRP",
    "google.title": "Pekerjaan Google VRP private yang ditampilkan secara aman.",
    "google.description":
      "Profil publik Google Bug Hunters mengonfirmasi metadata profil, rank leaderboard, dan awards.",
    "google.status": "Status Google VRP",
    "google.statusDescription":
      "Private valid Google VRP report. Fixed and rewarded by Google, direpresentasikan melalui sinyal profil publik.",
    "google.profile": "Profil",
    "google.country": "Negara",
    "google.openProfile": "Buka profil",
    "google.leaderboard": "Profile leaderboard",
    "google.publicAwards": "Awards publik",
    "google.publicAwardsDescription":
      "Awards yang terlihat di profil publik Google Bug Hunters.",
    "google.omitted":
      "Profil Google Bug Hunters menampilkan status terverifikasi, awards, dan metadata publik.",
    "certificates.kicker": "Sertifikat",
    "certificates.title": "Pengakuan atas temuan kerentanan.",
    "certificates.description":
      "Sertifikat dari institusi tempat temuan yang dilaporkan membantu meningkatkan keamanan website dan sistem.",
    "certificates.date": "Diterbitkan",
    "certificates.safeNote":
      "Setiap sertifikat disertai ringkasan impact dari temuan yang dilaporkan.",
    "certificates.proof":
      "Sertifikat ini menjadi pengakuan publik bahwa kerentanan ditemukan dan dilaporkan secara bertanggung jawab.",
    "timeline.kicker": "Timeline",
    "timeline.title": "Milestone riset keamanan.",
    "timeline.description":
      "Ringkasan pengakuan institusi, sinyal profil publik, dan kredit advisory publik.",
    "timeline.safeNote":
      "Ringkasan timeline berfokus pada impact, pengakuan, dan milestone responsible disclosure.",
    "methodology.kicker": "Metodologi",
    "methodology.title": "Riset terstruktur, proof kecil, reporting bersih.",
    "methodology.description":
      "Pendekatan saya praktis: mengurangi ambiguitas, membuktikan impact secara aman, dan membantu maintainer atau security team memperbaiki isu.",
    "methodology.scope.title": "Scope dan threat model",
    "methodology.scope.description":
      "Memahami boundary terlebih dahulu: komponen tepercaya, posisi attacker, alur credential, perilaku cache/state, dan jalur impact.",
    "methodology.source.title": "Testing berbasis source",
    "methodology.source.description":
      "Menggabungkan code review dengan harness terfokus dan eksperimen kecil, terutama pada auth state, redirect, proxy handling, dan transisi protokol.",
    "methodology.evidence.title": "Evidence yang bisa direproduksi",
    "methodology.evidence.description":
      "Membuat proof-of-concept minimal yang menunjukkan impact keamanan tanpa mengekspos data tidak terkait atau detail implementasi private.",
    "methodology.disclosure.title": "Responsible disclosure",
    "methodology.disclosure.description":
      "Melaporkan impact, versi atau kondisi terdampak, catatan mitigasi, dan komunikasi yang aman hingga isu diperbaiki.",
    "skills.kicker": "Skill & Tools",
    "skills.title": "Tools praktis untuk riset aplikasi dan protokol.",
    "skills.description":
      "Stack yang fokus untuk source review, web testing, investigasi cloud, test case reproduktif, dan report vulnerability yang jelas.",
    "skills.tools": "Tools dan bahasa",
    "skills.areas": "Area riset pilihan",
    "projects.kicker": "Area Riset Pilihan",
    "projects.title": "Portfolio yang berorientasi pada impact keamanan.",
    "projects.description":
      "Karya publik dan tema riset pilihan, tanpa menampilkan detail customer, program private, atau data sensitif.",
    "projects.view": "Lihat referensi",
    "contact.kicker": "Kontak",
    "contact.title": "Kolaborasi riset keamanan dan peluang remote.",
    "contact.description":
      "Untuk kolaborasi, pekerjaan remote, atau responsible disclosure, kirim catatan singkat berisi konteks dan kontak balasan terbaik.",
    "contact.connect": "Terhubung",
    "contact.copy":
      "Profil publik adalah titik awal terbaik untuk verifikasi, kolaborasi, dan follow-up. Pengiriman email contact form memakai environment variable dan fallback dengan aman jika belum diset.",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.subject": "Subjek",
    "contact.message": "Pesan",
    "contact.send": "Kirim pesan",
    "contact.fallback": "Fallback email",
    "footer.title": "Security Researcher & Bug Bounty Hunter"
  }
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
} | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");
    if (stored === "id" || stored === "en") {
      const frame = window.requestAnimationFrame(() => setLanguageState(stored));
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: (key: string) => dictionary[language][key] ?? dictionary.en[key] ?? key
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function T({ id }: { id: string }) {
  const { t } = useLanguage();
  return <>{t(id)}</>;
}
