export const projects = [
  {
    title: "curl/libcurl vulnerability research",
    description:
      "Publicly credited security research across proxy authentication, credential propagation, cookie state, and handle reuse behavior in curl/libcurl.",
    tags: ["curl", "libcurl", "CVE", "proxy auth", "credential leakage"],
    href: "https://curl.se/docs/security.html"
  },
  {
    title: "Google VRP research",
    description:
      "Private valid Google VRP report. Fixed and rewarded by Google, represented through public profile and award signals.",
    tags: ["Google VRP", "bug bounty", "responsible disclosure"],
    href: "https://bughunters.google.com/profile/e2461b18-a672-4e62-bc32-f86f1fdf8427"
  },
  {
    title: "Public GitHub profile",
    description:
      "Public GitHub profile for code repositories and technical activity. No public security writeups are claimed here.",
    tags: ["GitHub", "public profile", "code repositories"],
    href: "https://github.com/areksaxyz"
  }
] as const;

export const publicMentions = [
  {
    title: "curl advisory: wrong proxy connection reuse with credentials",
    source: "curl.se",
    href: "https://curl.se/docs/CVE-2026-3784.html"
  },
  {
    title: "HackerOne Bug Bounty Disclosure: CVE-2026-3784",
    source: "RedPacket Security",
    href: "https://www.redpacketsecurity.com/hackerone-bugbounty-disclosure-cve-wrong-proxy-connection-reuse-with-credentials-nobcoder/"
  },
  {
    title: "Google Bug Hunters public profile",
    source: "Google Bug Hunters",
    href: "https://bughunters.google.com/profile/e2461b18-a672-4e62-bc32-f86f1fdf8427"
  }
] as const;
