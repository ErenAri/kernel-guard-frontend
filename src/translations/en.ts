export const en = {
  seo: {
    home: {
      title: 'Kernel Guard | Linux & eBPF Security Infrastructure',
      description: 'Kernel Guard builds open-source infrastructure for validating eBPF across real Linux kernels before deployment and enforcing policy at runtime.',
      keywords: 'Kernel Guard, secure web development, cybersecurity solutions, hardened backend, post-quantum cryptography, React security, zero-trust architecture, eBPF security, data protection'
    },
    projects: {
      title: 'Open Source Security Projects | Kernel Guard',
      description: 'Explore Kernel Guard\'s open-source cybersecurity tools, eBPF security modules, post-quantum cryptography apps, and systems programming initiatives.',
      keywords: 'Kernel Guard open source, cybersecurity tools, eBPF security, post-quantum cryptography, secure coding, web security tools'
    },
    completedProjects: {
      title: 'Completed Secure Web Projects | Kernel Guard',
      description: 'Review Kernel Guard\'s portfolio of completed secure web development projects. See how we implement zero-trust architectures and high-performance frontends.',
      keywords: 'Kernel Guard portfolio, secure web projects, zero-trust architecture examples, high-performance web apps, cybersecurity case studies'
    },
    services: {
      title: 'Our Services | Kernel Guard',
      description: 'Explore the comprehensive web development and cybersecurity services offered by Kernel Guard.',
      keywords: 'Kernel Guard services, web design, cybersecurity, custom software development, SaaS development, cloud management'
    }
  },
  nav: {
    home: 'Home',
    services: 'Services',
    openSource: 'Open Source',
    completedProjects: 'Completed Projects',
    github: 'GitHub',
    contact: 'Contact',
  },
  servicesPage: {
    title: 'Our Services',
    subtitle: 'Secure and scalable technology solutions to propel your business into the future.',
    services: [
      { title: 'Web Design', desc: 'Modern, user-friendly, and conversion-focused interface designs.', icon: 'layout' },
      { title: 'Cybersecurity', desc: 'Protecting your systems and data against the latest threats.', icon: 'shield' },
      { title: 'Custom Software Dev', desc: 'Scalable software solutions tailored to your specific business needs.', icon: 'code' },
      { title: 'Web Development', desc: 'High-performance, secure, and modern web applications.', icon: 'globe' },
      { title: 'SaaS Development', desc: 'Building cloud-based, subscription-model software products.', icon: 'box' },
      { title: 'Information Security', desc: 'Ensuring the confidentiality, integrity, and availability of your corporate data.', icon: 'lock' },
      { title: 'Cloud App Development', desc: 'Modern applications built to run natively in cloud environments.', icon: 'cloud' },
      { title: 'Cloud Management', desc: 'Optimization, security, and 24/7 monitoring of your cloud infrastructure.', icon: 'server' },
      { title: 'Database Development', desc: 'Secure, fast, and scalable database architectures for big data loads.', icon: 'database' }
    ],
    ctaTitle: 'Ready for your project?',
    ctaDesc: 'Contact us to build a secure and modern infrastructure.',
    ctaButton: 'Get in Touch'
  },
  home: {
    systemSecure: 'SYSTEMS_SECURE // V2.4.1',
    heroTitle1: 'Linux & eBPF',
    heroTitle2: 'Security Infrastructure',
    heroDesc: 'Kernel Guard builds open-source tooling to validate eBPF across real Linux kernels before deployment and enforce policy at runtime.',
    viewArch: 'Explore BPFCompat',
    viewCompletedProjects: 'Explore AegisBPF',
    githubRepo: 'GitHub Repository',
    status: 'STATUS:',
    operational: 'OPERATIONAL',
    latency: 'LATENCY:',
    encryption: 'ENCRYPTION:',
    uptime: 'UPTIME:',
    missionTitle: 'Security at the kernel boundary',
    missionP1: 'BPFCompat answers a practical question before release: will this compiled eBPF artifact and the loader we actually ship work on the Linux kernels our users run? It produces compatibility evidence by testing against real kernel environments.',
    missionP2: 'AegisBPF addresses the runtime side of the same boundary with BPF LSM enforcement, scoped policy controls and structured security events. Together, the projects focus Kernel Guard on validation before deployment and enforcement after it.',
    techStackTitle: 'Kernel-side stack',
    techStackDesc: 'The technologies behind our Linux, eBPF, compatibility and runtime-security work.',
    features: {
      frontend: { title: 'BPFCompat', desc: 'Validate compiled eBPF artifacts and real project loaders across real Linux kernels before release.' },
      backend: { title: 'AegisBPF', desc: 'Enforce Linux runtime policy with BPF LSM, scoped controls and structured forensic events.' },
      data: { title: 'Open Source', desc: 'Core tooling, compatibility evidence and technical development are available for public review.' },
      performance: { title: 'Security & Provenance', desc: 'Signed releases, SBOMs, provenance and explicit failure modes keep the evidence verifiable.' }
    },
    principles: {
      title: 'Our Engineering Principles',
      items: [
        { title: 'Evidence Over Assumptions', desc: 'Prefer measured behavior on real kernels over version heuristics and compatibility claims.' },
        { title: 'Runtime Truth', desc: 'Validate and enforce as close as practical to the environment where the software actually executes.' },
        { title: 'Open Technical Review', desc: 'Keep core tooling, limitations and engineering evidence visible for independent review.' }
      ]
    },
    community: {
      title: 'Built in public',
      desc: 'Kernel Guard develops its core Linux and eBPF tooling openly on GitHub, with upstream integrations and technical evidence available for review.'
    },
    proof: {
      badge: 'MEASURED // PUBLIC_EVIDENCE',
      title: 'Proof, not presentation',
      desc: 'A transparent quality snapshot based on Lighthouse CLI, prerender output, and public GitHub repository data measured on June 1, 2026.',
      cards: {
        lighthouse: {
          label: 'Desktop Lighthouse',
          detail: 'Performance / accessibility on the production domain.',
        },
        delivery: {
          label: 'Prerendered routes',
          detail: 'Static routes generated at build time across localized pages.',
        },
        openSource: {
          label: 'Public repositories',
          detail: 'Kernel-Guard organization repositories visible on GitHub.',
        },
        languages: {
          label: 'Supported languages',
          detail: 'Turkish, English, German, Japanese, Chinese, Spanish, French, and Korean.',
        },
      },
      summary: {
        indexableUrls: 'indexable URLs',
        desktopTbt: 'desktop TBT',
        latestUpdate: 'latest public repo update',
      },
      footnote: 'Metrics are intentionally shown as measured values, not marketing claims.',
    }
  },
  projects: {
    badge: 'DIRECTORY // OPEN_SOURCE',
    title1: 'Open Source',
    title2: 'Projects',
    desc: 'A comprehensive index of our open-source tools, security modules, and systems programming initiatives.',
    colName: 'Project Name',
    colDesc: 'Description',
    colTech: 'Tech Stack',
    colLinks: 'Links',
  },
  completedProjects: {
    badge: 'DIRECTORY // COMPLETED_PROJECTS',
    title1: 'Completed',
    title2: 'Projects',
    desc: 'Explore our portfolio of completed web development projects and success stories.',
    noAccount: 'Public access enabled. No account required.',
    credentials: 'Authentication Data',
    email: 'User',
    visit: 'Visit Project',
    links: 'Project Links',
    colName: 'Name',
    colDesc: 'Description',
    colTags: 'Tags',
    colLinks: 'Links'
  },
  projectDetails: {
    architectureDiagram: 'System Architecture',
    technicalOverview: 'Technical Overview',
    marketingOverview: 'Value Proposition',
    viewSource: 'View Source Code',
    liveDemo: 'Live Preview',
    backToProjects: 'Back to Directory',
    repositoryEvidence: {
      title: 'Repository Evidence',
      measuredAt: 'Measured from GitHub public repository data on May 31, 2026.',
      primaryLanguage: 'Primary language',
      lastPublicUpdate: 'Last public update',
      trackedIssues: 'Tracked issues',
      repositorySize: 'Repository size',
      languageMix: 'Language mix',
    },
  },
  footer: {
    desc: 'Securing the future through advanced systems programming, kernel-level defense, and open-source innovation. Engineered for enterprise resilience.',
    discover: 'Discover',
    connect: 'Connect',
    rights: 'Kernel-Guard. All rights reserved.',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Preferences',
    newsletter: {
      title: 'Subscribe to our newsletter',
      desc: 'Get the latest updates on kernel security and infrastructure protection.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    }
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: April 2024',
    section1: {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Kernel-Guard website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.'
    },
    section2: {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Kernel-Guard\'s website for personal, non-commercial transitory viewing only.'
    },
    section3: {
      title: '3. Disclaimer',
      content: 'The materials on Kernel-Guard\'s website are provided on an \'as is\' basis. Kernel-Guard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.'
    }
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: April 2024',
    section1: {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.'
    },
    section2: {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Kernel-Guard and our users.'
    },
    section3: {
      title: '3. Data Security',
      content: 'We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.'
    }
  },
  cookies: {
    title: 'Cookie Preferences',
    lastUpdated: 'Last Updated: April 2024',
    desc: 'This site uses cookies to provide a better user experience. You can manage your preferences below.',
    essential: {
      title: 'Essential Cookies',
      desc: 'These cookies are necessary for the website to function and cannot be switched off.'
    },
    analytics: {
      title: 'Analytics Cookies',
      desc: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.'
    },
    save: 'Save Preferences'
  },
  contact: {
    seo: {
      title: 'Contact Us | Kernel Guard',
      description: 'Get in touch with Kernel Guard for secure web development, cybersecurity consulting, and infrastructure management.',
      keywords: 'contact kernel guard, cybersecurity consulting, web development agency'
    },
    title: 'Get in Touch',
    subtitle: 'Have a project in mind or need security consultation? We\'d love to hear from you.',
    info: {
      title: 'Contact Information',
      desc: 'Reach out to us directly through the following channels.',
      email: 'Email Us',
      location: 'Location',
      locationValue: 'İzmir, Turkey',
      social: 'Social Media',
      github: 'GitHub Repository'
    },
    form: {
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@example.com',
      message: 'Your Message',
      messagePlaceholder: 'How can we help you?',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! We will get back to you soon.',
      error: 'An error occurred while sending the message. Please try again later.'
    }
  }
};
