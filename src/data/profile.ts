export const profile = {
  name: "Muhamad Arga Reksapati",
  handle: "areksaxyz",
  aliases: ["areksaxyz", "nobcoder"],
  googleHandle: "argareksapati",
  title: "Security Researcher & Bug Bounty Hunter",
  location: "Bandung, Indonesia",
  tagline:
    "I research real-world security issues in open source, cloud, authentication, and protocol edge cases with reproducible proof-of-concepts and responsible disclosure.",
  avatar: "/profile/profile.jpeg",
  links: {
    email: "mailto:m.argareksapati21@gmail.com",
    github: "https://github.com/areksaxyz",
    linkedin: "https://www.linkedin.com/in/arga-reksapati-695a67323",
    instagram: "https://www.instagram.com/argareksapati",
    googleBugHuntersProfile:
      "https://bughunters.google.com/profile/e2461b18-a672-4e62-bc32-f86f1fdf8427"
  },
  proofImages: {
    googleBugHunters: {
      src: "/proofs/google-bug-hunters.png",
      width: 1919,
      height: 870
    }
  },
  publicStats: {
    curlCves: 4,
    googleProfileRank: 1595,
    googlePublishedReports: 0,
    googleAwards: 4,
    googleJoined: "2025-12-08",
    basedIn: "Indonesia"
  },
  verificationNotes: [
    "note.curl",
    "note.google",
    "note.private"
  ]
} as const;

export const highlights = [
  {
    value: "4",
    label: "stats.curl",
    detail: "stats.curl.detail"
  },
  {
    value: "#1595",
    label: "stats.googleRank",
    detail: "stats.googleRank.detail"
  },
  {
    value: "4",
    label: "stats.awards",
    detail: "stats.awards.detail"
  },
  {
    value: "ID",
    label: "stats.indonesia",
    detail: "stats.indonesia.detail"
  }
] as const;

export const researchFocus = [
  "focus.source",
  "focus.bounty",
  "focus.cloud",
  "focus.auth",
  "focus.credentials",
  "focus.proxy",
  "focus.protocol",
  "focus.state",
  "focus.poc",
  "focus.disclosure"
] as const;

export const methodology = [
  {
    title: "methodology.scope.title",
    description: "methodology.scope.description"
  },
  {
    title: "methodology.source.title",
    description: "methodology.source.description"
  },
  {
    title: "methodology.evidence.title",
    description: "methodology.evidence.description"
  },
  {
    title: "methodology.disclosure.title",
    description: "methodology.disclosure.description"
  }
] as const;

export const skills = [
  "GitHub",
  "Linux",
  "Python",
  "Go tests",
  "Rust / cargo",
  "Node.js",
  "TypeScript",
  "curl/libcurl",
  "Burp Suite",
  "gcloud CLI",
  "Docker",
  "HTTP/proxy testing",
  "Vulnerability report writing"
] as const;

export const researchAreas = [
  "HTTP proxy connection reuse",
  "Credential and token propagation",
  "Cloud metadata and information disclosure",
  "Authentication state boundaries",
  "Authorization bypass patterns",
  "Redirect and cookie edge cases",
  "libcurl behavior under shared handles",
  "Secure report writing and triage communication"
] as const;
