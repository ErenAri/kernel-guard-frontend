export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    tr: string;
  };
  technicalDetails: {
    en: string;
    tr: string;
  };
  marketingDetails: {
    en: string;
    tr: string;
  };
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  diagram?: string;
}

export const projects: Project[] = [
  {
    id: "cathodex",
    title: "CathodeX",
    description: {
      en: "AI-powered cathode material screening platform using graph neural networks for predicting battery material properties.",
      tr: "Pil malzemesi özelliklerini tahmin etmek için çizge sinir ağlarını kullanan yapay zeka destekli katot malzemesi tarama platformu."
    },
    technicalDetails: {
      en: "Built using PyTorch and Graph Neural Networks (GNNs) to model the atomic structure of cathode materials. It leverages high-throughput screening algorithms to predict key battery properties such as energy density and stability.",
      tr: "Katot malzemelerinin atomik yapısını modellemek için PyTorch ve Çizge Sinir Ağları (GNN'ler) kullanılarak oluşturulmuştur. Enerji yoğunluğu ve kararlılık gibi temel pil özelliklerini tahmin etmek için yüksek verimli tarama algoritmalarından yararlanır."
    },
    marketingDetails: {
      en: "Accelerating the future of energy storage. CathodeX reduces the time and cost of battery material discovery by orders of magnitude, empowering researchers to find the next generation of sustainable energy solutions.",
      tr: "Enerji depolamanın geleceğini hızlandırıyoruz. CathodeX, pil malzemesi keşfinin zamanını ve maliyetini büyük ölçüde azaltarak araştırmacıların yeni nesil sürdürülebilir enerji çözümlerini bulmalarını sağlar."
    },
    tags: ["Python", "AI", "Graph Neural Networks"],
    github: "https://github.com/Kernel-Guard/CathodeX",
    link: "https://cathode-screening.vercel.app/",
    diagram: `graph LR
    User[User / Chemist] -->|HTTPS| FE(Next.js on Vercel)
    FE -->|JSON| API(FastAPI on Render)
    subgraph "Inference Engine"
        API -->|Parse| Pymatgen(Structure Parser)
        Pymatgen -->|Graph| M1(MACE Member 1)
        Pymatgen -->|Graph| M2(MACE Member 2)
        Pymatgen -->|Graph| M3(MACE Member 3)
        Pymatgen -->|Graph| M4(MACE Member 4)
        Pymatgen -->|Graph| M5(MACE Member 5)
    end
    M1 & M2 & M3 & M4 & M5 -->|Aggregate| Stats[q10 / q50 / q90 + Conformal]
    Stats -->|Policy| Result[KEEP / MAYBE / KILL]`
  },
  {
    id: "post-quantum-messaging-app",
    title: "post-quantum-messaging-app",
    description: {
      en: "A secure messaging application implementing post-quantum cryptographic algorithms to ensure future-proof communication.",
      tr: "Geleceğe dönük iletişimi sağlamak için kuantum sonrası kriptografik algoritmalar uygulayan güvenli bir mesajlaşma uygulaması."
    },
    technicalDetails: {
      en: "Implemented in Rust for memory safety and performance. Utilizes NIST-approved post-quantum cryptographic algorithms (like CRYSTALS-Kyber and CRYSTALS-Dilithium) to secure message exchange against attacks from quantum computers.",
      tr: "Bellek güvenliği ve performans için Rust ile uygulanmıştır. Mesaj alışverişini kuantum bilgisayarlardan gelebilecek saldırılara karşı güvence altına almak için NIST onaylı kuantum sonrası kriptografik algoritmaları (CRYSTALS-Kyber ve CRYSTALS-Dilithium gibi) kullanır."
    },
    marketingDetails: {
      en: "Future-proof your communications. As quantum computing advances, traditional encryption will become obsolete. Our post-quantum messaging app ensures your sensitive data remains secure against tomorrow's threats, today.",
      tr: "İletişiminizi geleceğe hazırlayın. Kuantum hesaplama geliştikçe geleneksel şifreleme geçersiz hale gelecektir. Kuantum sonrası mesajlaşma uygulamamız, hassas verilerinizin bugünden yarının tehditlerine karşı güvende kalmasını sağlar."
    },
    tags: ["Rust", "Cryptography", "Post-Quantum"],
    github: "https://github.com/Kernel-Guard/post-quantum-messaging-app",
    diagram: `flowchart LR
    C["CLI / Android / iOS / Web / Desktop"] -->|HTTP JSON + TLS| S["pqmsg-server"]
    S -->|Sealed inbox sync / realtime relay| C
    A["Android bridge"] --> CORE["pqmsg-core"]
    I["iOS bridge"] --> CORE
    W["Web WASM bridge"] --> CORE
    D["Desktop wrapper"] --> W
    S --> DB["PostgreSQL / SQLite"]
    S --> RD["Redis rate limiter"]
    PV["ProVerif model"] -.-> V["CI verification gate"]
    TM["Tamarin model"] -.-> V`
  },
  {
    id: "aegis-bpf",
    title: "Aegis-BPF",
    description: {
      en: "A prototype for enforcing security policies using eBPF (Extended Berkeley Packet Filter) with CO-RE (Compile Once - Run Everywhere) support.",
      tr: "CO-RE (Bir Kere Derle - Her Yerde Çalıştır) desteğiyle eBPF (Genişletilmiş Berkeley Paket Filtresi) kullanarak güvenlik politikalarını uygulamak için bir prototip."
    },
    technicalDetails: {
      en: "Developed using C++ and eBPF technology. It utilizes CO-RE (Compile Once - Run Everywhere) to ensure portability across different Linux kernel versions without recompilation, providing low-overhead, kernel-level security enforcement.",
      tr: "C++ ve eBPF teknolojisi kullanılarak geliştirilmiştir. Yeniden derlemeye gerek kalmadan farklı Linux çekirdek sürümlerinde taşınabilirliği sağlamak için CO-RE (Bir Kere Derle - Her Yerde Çalıştır) kullanır ve düşük ek yüklü, çekirdek düzeyinde güvenlik uygulaması sağlar."
    },
    marketingDetails: {
      en: "Enterprise-grade security at the kernel level. Aegis provides deep visibility and control over system behavior with zero overhead. Protect your infrastructure from advanced persistent threats with our cutting-edge eBPF technology.",
      tr: "Çekirdek düzeyinde kurumsal düzeyde güvenlik. Aegis, sıfır ek yük ile sistem davranışı üzerinde derin görünürlük ve kontrol sağlar. En son eBPF teknolojimizle altyapınızı gelişmiş kalıcı tehditlerden koruyun."
    },
    tags: ["C++", "eBPF", "Security", "Linux Kernel"],
    github: "https://github.com/Kernel-Guard/Aegis-BPF",
    diagram: `graph TD
    subgraph "AegisBPF User Space"
        A[File/Net Deny Rules] --> Z
        B[Allow Allowlist] --> Z
        C[Policy + Signing] --> Z
        D[Metrics + Health] --> Z
        E[Plugins + Rules] --> Z
        Z[(Pinned BPF Maps & Ring Buffer)]
    end
    subgraph "Linux Kernel"
        Z --- F
        F[LSM Hooks Enforce/Audit]
        F --> G[file_open / inode_permission]
        F --> H[inode_copy_up overlayfs]
        F --> I[bprm_check + IMA hash]
        F --> J[socket connect/bind/listen/accept]
        F --> K[socket sendmsg/recvmsg]
        L[Tracepoint Fallback]
        L --> M[openat/exec/fork/exit]
    end`
  }
];
