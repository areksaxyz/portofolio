export type CveCredit = {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  published: string;
  impact: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  advisory: string;
  report: string;
  credit: string;
  source: string;
};

export const cves: CveCredit[] = [
  {
    id: "CVE-2026-3784",
    title: "wrong proxy connection reuse with credentials",
    severity: "Low",
    published: "2026-03-11",
    impact:
      "curl could reuse an HTTP proxy CONNECT connection even when a later request used different proxy credentials, potentially crossing expected proxy-auth boundaries.",
    image: {
      src: "/cves/CVE-2026-3784.png",
      width: 1841,
      height: 789
    },
    advisory: "https://curl.se/docs/CVE-2026-3784.html",
    report: "https://hackerone.com/reports/3584903",
    credit: "Reported-by: Muhamad Arga Reksapati (HackerOne: nobcoder)",
    source: "Official curl security advisory"
  },
  {
    id: "CVE-2026-6276",
    title: "stale custom cookie host causes cookie leak",
    severity: "Low",
    published: "2026-04-29",
    impact:
      "A reused libcurl easy handle could retain stale custom Host information and send cookies intended for one host in a later request.",
    image: {
      src: "/cves/CVE-2026-6276.png",
      width: 1837,
      height: 793
    },
    advisory: "https://curl.se/docs/CVE-2026-6276.html",
    report: "https://hackerone.com/reports/3671818",
    credit: "Reported-by: Muhamad Arga Reksapati",
    source: "Official curl security advisory"
  },
  {
    id: "CVE-2026-6429",
    title: "netrc credential leak with reused proxy connection",
    severity: "Medium",
    published: "2026-04-29",
    impact:
      "Under specific netrc, redirect, HTTP, and proxy reuse conditions, libcurl could leak credentials used for an original host to a redirected host.",
    image: {
      src: "/cves/CVE-2026-6429.png",
      width: 1846,
      height: 802
    },
    advisory: "https://curl.se/docs/CVE-2026-6429.html",
    report: "https://hackerone.com/reports/3677759",
    credit: "Reported-by: Muhamad Arga Reksapati",
    source: "Official curl security advisory"
  },
  {
    id: "CVE-2026-7168",
    title: "cross-proxy Digest auth state leak",
    severity: "Medium",
    published: "2026-04-29",
    impact:
      "Reusing a handle across two HTTP proxies could pass Proxy-Authorization state meant for the first proxy to a second proxy.",
    image: {
      src: "/cves/CVE-2026-7168.png",
      width: 1837,
      height: 793
    },
    advisory: "https://curl.se/docs/CVE-2026-7168.html",
    report: "https://hackerone.com/reports/3697719",
    credit: "Reported-by: Muhamad Arga Reksapati",
    source: "Official curl security advisory"
  }
];
