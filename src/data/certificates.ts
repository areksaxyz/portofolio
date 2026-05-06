export type Certificate = {
  title: string;
  organization: string;
  system: string;
  date: string;
  summary: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const certificates: Certificate[] = [
  {
    title: "UTB vulnerability acknowledgement",
    organization: "Universitas Teknologi Bandung",
    system: "E-Learning V2",
    date: "2025-08-28",
    summary:
      "Menemukan dan melaporkan bypass otorisasi lintas peran yang memungkinkan akun mahasiswa memperoleh akses dosen serta membuka kredensial akun internal berprivilege.",
    image: {
      src: "/certificates/utb1.jpeg",
      width: 1166,
      height: 1600
    }
  },
  {
    title: "UTB vulnerability acknowledgement",
    organization: "Universitas Teknologi Bandung",
    system: "OASIS V2",
    date: "2025-11-25",
    summary:
      "Menemukan dan melaporkan celah account takeover yang berpotensi mengambil alih akun pengguna pada sistem OASIS V2.",
    image: {
      src: "/certificates/utb2.jpeg",
      width: 1128,
      height: 1600
    }
  },
  {
    title: "ITB vulnerability acknowledgement",
    organization: "Institut Teknologi Bandung",
    system: "Information system and technology services",
    date: "2026-02-03",
    summary:
      "Menemukan dan melaporkan paparan URL repositori Git yang memungkinkan akses ke source code dan data sensitif.",
    image: {
      src: "/certificates/itb.jpeg",
      width: 1600,
      height: 1146
    }
  }
];
