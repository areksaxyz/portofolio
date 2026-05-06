export const timeline = [
  {
    date: "2025-06-26",
    title: "UTB E-Learning V2 authorization finding",
    detail:
      "Reported a cross-role authorization bypass that could expose privileged internal account credentials.",
    tag: "UTB"
  },
  {
    date: "2025-11-06",
    title: "UTB OASIS V2 account takeover finding",
    detail:
      "Reported an account takeover issue affecting the OASIS V2 system.",
    tag: "UTB"
  },
  {
    date: "2025-12",
    title: "Google Bug Hunters profile",
    detail:
      "Public Google Bug Hunters profile with leaderboard rank and awards.",
    tag: "Google"
  },
  {
    date: "2026-02-03",
    title: "ITB exposed Git repository finding",
    detail:
      "Reported an exposed Git repository URL that could allow access to source code and sensitive data.",
    tag: "ITB"
  },
  {
    date: "2026-03 to 2026-04",
    title: "curl CVE disclosure credits",
    detail:
      "Received public advisory credits for curl/libcurl findings around proxy auth, credential leakage, and state confusion.",
    tag: "curl"
  }
] as const;
