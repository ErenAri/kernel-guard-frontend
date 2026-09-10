export const tr = {
  seo: {
    home: {
      title: 'Kernel Guard | Linux ve eBPF Güvenlik Altyapısı',
      description: 'Kernel Guard, eBPF yazılımlarını dağıtımdan önce gerçek Linux çekirdeklerinde doğrulamak ve çalışma zamanında politika uygulamak için açık kaynak altyapı geliştirir.',
      keywords: 'Kernel Guard, güvenli web geliştirme, siber güvenlik çözümleri, güçlendirilmiş backend, kuantum sonrası kriptografi, React güvenliği, sıfır güven mimarisi, eBPF güvenliği, veri koruma'
    },
    projects: {
      title: 'Açık Kaynak Siber Güvenlik Projeleri | Kernel Guard',
      description: 'Kernel Guard\'ın açık kaynaklı siber güvenlik araçlarını, eBPF güvenlik modüllerini, kuantum sonrası kriptografi uygulamalarını ve sistem programlama projelerini keşfedin.',
      keywords: 'Kernel Guard açık kaynak, siber güvenlik araçları, eBPF güvenliği, kuantum sonrası kriptografi, güvenli kodlama, web güvenlik araçları'
    },
    completedProjects: {
      title: 'Tamamlanan Güvenli Web Projeleri | Kernel Guard',
      description: 'Kernel Guard\'ın tamamlanmış güvenli web geliştirme projeleri portföyünü inceleyin. Sıfır güven mimarilerini ve yüksek performanslı önyüzleri nasıl uyguladığımızı görün.',
      keywords: 'Kernel Guard portfolyo, güvenli web projeleri, sıfır güven mimarisi örnekleri, yüksek performanslı web uygulamaları, siber güvenlik vaka çalışmaları'
    },
    services: {
      title: 'Hizmetlerimiz | Kernel Guard',
      description: 'Kernel Guard tarafından sunulan kapsamlı web geliştirme ve siber güvenlik hizmetlerini keşfedin.',
      keywords: 'Kernel Guard hizmetler, web tasarımı, siber güvenlik, kişisel yazılım geliştirme, SaaS geliştirme, bulut yönetimi'
    }
  },
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetlerimiz',
    openSource: 'Açık Kaynak',
    completedProjects: 'Tamamlanan Projeler',
    github: 'GitHub',
    contact: 'İletişim',
  },
  servicesPage: {
    title: 'Hizmetlerimiz',
    subtitle: 'İşletmenizi geleceğe taşıyacak güvenli ve ölçeklenebilir teknoloji çözümleri.',
    services: [
      { title: 'Web Tasarımı', desc: 'Modern, kullanıcı dostu ve dönüşüm odaklı arayüz tasarımları.', icon: 'layout' },
      { title: 'Siber Güvenlik', desc: 'Sistemlerinizi ve verilerinizi en güncel tehditlere karşı koruma.', icon: 'shield' },
      { title: 'Özel Yazılım Geliştirme', desc: 'İşletmenizin özel ihtiyaçlarına tam uyan, ölçeklenebilir yazılım çözümleri.', icon: 'code' },
      { title: 'Web Geliştirme', desc: 'Yüksek performanslı, güvenli ve modern web uygulamaları.', icon: 'globe' },
      { title: 'SaaS Geliştirme', desc: 'Bulut tabanlı, abonelik modeliyle çalışan yazılım ürünleri inşası.', icon: 'box' },
      { title: 'Bilgi Güvenliği', desc: 'Kurumsal verilerinizin gizliliğini, bütünlüğünü ve erişilebilirliğini sağlama.', icon: 'lock' },
      { title: 'Bulut Uygulama Geliştirme', desc: 'Bulut ortamında (AWS, Azure) native çalışan modern uygulamalar.', icon: 'cloud' },
      { title: 'Bulut Yönetimi', desc: 'Bulut altyapınızın optimizasyonu, güvenliği ve 7/24 izlenmesi.', icon: 'server' },
      { title: 'Veritabanı Geliştirme', desc: 'Güvenli, hızlı ve büyük veri yüklerini kaldırabilen veritabanı mimarileri.', icon: 'database' }
    ],
    ctaTitle: 'Projeniz için hazır mısınız?',
    ctaDesc: 'Güvenli ve modern bir altyapı kurmak için bizimle iletişime geçin.',
    ctaButton: 'Bize Ulaşın'
  },
  home: {
    systemSecure: 'SİSTEM_GÜVENLİ // V2.4.1',
    heroTitle1: 'Linux & eBPF',
    heroTitle2: 'Güvenlik Altyapısı',
    heroDesc: 'Kernel Guard, eBPF yazılımlarını dağıtımdan önce gerçek Linux çekirdeklerinde doğrulayan ve çalışma zamanında politika uygulayan açık kaynak araçlar geliştirir.',
    viewArch: 'BPFCompat\'ı İncele',
    viewCompletedProjects: 'AegisBPF\'yi İncele',
    githubRepo: 'GitHub Deposu',
    status: 'DURUM:',
    operational: 'AKTİF',
    latency: 'GECİKME:',
    encryption: 'ŞİFRELEME:',
    uptime: 'ÇALIŞMA SÜRESİ:',
    missionTitle: 'Kernel sınırında güvenlik',
    missionP1: 'BPFCompat yayın öncesinde pratik bir soruyu yanıtlar: derlediğimiz eBPF artifact\'i ve gerçekten dağıttığımız loader, kullanıcıların çalıştırdığı Linux çekirdeklerinde çalışacak mı? Gerçek kernel ortamlarında test ederek uyumluluk kanıtı üretir.',
    missionP2: 'AegisBPF aynı sınırın çalışma zamanı tarafını BPF LSM enforcement, scope\'lu politika kontrolleri ve yapılandırılmış güvenlik olaylarıyla ele alır. İki proje birlikte Kernel Guard\'ı dağıtım öncesi doğrulama ve dağıtım sonrası enforcement üzerine odaklar.',
    techStackTitle: 'Kernel-side teknoloji stack\'i',
    techStackDesc: 'Linux, eBPF, uyumluluk ve runtime security çalışmalarımızın arkasındaki teknolojiler.',
    features: {
      frontend: { title: 'BPFCompat', desc: 'Derlenmiş eBPF artifact\'lerini ve gerçek proje loader\'larını yayın öncesinde gerçek Linux çekirdeklerinde doğrular.' },
      backend: { title: 'AegisBPF', desc: 'BPF LSM, scope\'lu kontroller ve yapılandırılmış forensic olaylarla Linux runtime politikasını uygular.' },
      data: { title: 'Açık Kaynak', desc: 'Ana araçlar, uyumluluk kanıtları ve teknik geliştirme süreci kamuya açık incelemeye açıktır.' },
      performance: { title: 'Güvenlik ve Provenance', desc: 'İmzalı release\'ler, SBOM, provenance ve açık failure mode\'lar kanıtın doğrulanabilir kalmasını sağlar.' },
    },
    principles: {
      title: 'Mühendislik Prensiplerimiz',
      items: [
        { title: 'Varsayım Değil Kanıt', desc: 'Sürüm tahminleri yerine gerçek çekirdeklerde ölçülen davranışı tercih ederiz.' },
        { title: 'Runtime Gerçeği', desc: 'Doğrulamayı ve enforcement\'ı yazılımın gerçekten çalıştığı ortama mümkün olduğunca yakın yaparız.' },
        { title: 'Açık Teknik İnceleme', desc: 'Ana araçları, sınırları ve mühendislik kanıtlarını bağımsız incelemeye açık tutarız.' },
      ],
    },
    community: {
      title: 'Açık geliştiriyoruz',
      desc: 'Kernel Guard\'ın Linux ve eBPF araçları GitHub üzerinde açık geliştirilir; upstream entegrasyonları ve teknik kanıtları kamuya açıktır.'
    },
    proof: {
      badge: 'ÖLÇÜLDÜ // AÇIK_KANIT',
      title: 'Sunum değil, kanıt',
      desc: 'Genel güvenlik iddiaları yerine ölçülmüş mühendislik verileri ve kamuya açık repository kanıtları yayımlıyoruz.',
      cards: {
        lighthouse: {
          label: 'Masaüstü Lighthouse',
          detail: 'Canlı domain üzerinde performans / erişilebilirlik.',
        },
        delivery: {
          label: 'Prerender rota',
          detail: 'Çok dilli sayfalar için build sırasında üretilen statik rotalar.',
        },
        openSource: {
          label: 'Public repo',
          detail: 'GitHub üzerindeki Kernel-Guard organizasyon repoları.',
        },
        languages: {
          label: 'Desteklenen dil',
          detail: 'Türkçe, İngilizce, Almanca, Japonca, Çince, İspanyolca, Fransızca ve Korece.',
        },
      },
      summary: {
        indexableUrls: 'indexlenebilir URL',
        desktopTbt: 'masaüstü TBT',
        latestUpdate: 'son public repo güncellemesi',
      },
      footnote: 'Metrikler pazarlama iddiası değil, ölçülmüş değer olarak gösterilir.',
    }
  },
  projects: {
    badge: 'DİZİN // AÇIK_KAYNAK',
    title1: 'Açık Kaynak',
    title2: 'Projelerimiz',
    desc: 'Açık kaynaklı araçlarımızın, güvenlik modüllerimizin ve sistem programlama girişimlerimizin kapsamlı bir indeksi.',
    colName: 'Proje Adı',
    colDesc: 'Açıklama',
    colTech: 'Teknoloji',
    colLinks: 'Bağlantılar',
  },
  completedProjects: {
    badge: 'DİZİN // TAMAMLANAN_PROJELER',
    title1: 'Tamamlanan',
    title2: 'Projeler',
    desc: 'Tamamlanmış web geliştirme projelerimizden oluşan portfolyomuzu inceleyin.',
    noAccount: 'Herkese açık erişim. Hesap gerekmez.',
    credentials: 'Kimlik Doğrulama Verileri',
    email: 'Kullanıcı',
    visit: 'Projeyi İncele',
    links: 'Proje Bağlantıları',
    colName: 'İsim',
    colDesc: 'Açıklama',
    colTags: 'Etiketler',
    colLinks: 'Bağlantılar'
  },
  projectDetails: {
    architectureDiagram: 'Sistem Mimarisi',
    technicalOverview: 'Teknik Genel Bakış',
    marketingOverview: 'Değer Önerisi',
    viewSource: 'Kaynak Kodunu Görüntüle',
    liveDemo: 'Canlı Önizleme',
    backToProjects: 'Dizine Dön',
    repositoryEvidence: {
      title: 'Repo Kanıtları',
      measuredAt: '31 Mayıs 2026 tarihinde herkese açık GitHub repo verilerinden ölçüldü.',
      primaryLanguage: 'Ana dil',
      lastPublicUpdate: 'Son public güncelleme',
      trackedIssues: 'Takip edilen issue',
      repositorySize: 'Repo boyutu',
      languageMix: 'Dil dağılımı',
    },
  },
  footer: {
    desc: 'Gelişmiş sistem programlama, çekirdek düzeyinde savunma ve açık kaynaklı inovasyon ile geleceği güvence altına alıyoruz. Kurumsal dayanıklılık için tasarlandı.',
    discover: 'Keşfet',
    connect: 'Bağlan',
    rights: 'Kernel-Guard. Tüm hakları saklıdır.',
    terms: 'Hizmet Şartları',
    privacy: 'Gizlilik Politikası',
    cookies: 'Çerez Tercihleri',
    newsletter: {
      title: 'Bültenimize abone olun',
      desc: 'Çekirdek güvenliği ve altyapı koruması hakkındaki en son güncellemeleri alın.',
      placeholder: 'E-posta adresiniz',
      button: 'Abone Ol',
    }
  },
  terms: {
    title: 'Hizmet Şartları',
    lastUpdated: 'Son Güncelleme: Nisan 2024',
    section1: {
      title: '1. Şartların Kabulü',
      content: 'Kernel-Guard web sitesine ve hizmetlerine erişerek ve bunları kullanarak, bu Hizmet Şartlarına ve tüm ilgili yasa ve düzenlemelere bağlı kalmayı kabul etmiş olursunuz.'
    },
    section2: {
      title: '2. Kullanım Lisansı',
      content: 'Kernel-Guard web sitesindeki materyallerin bir kopyasının yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirilmesine izin verilir.'
    },
    section3: {
      title: '3. Feragatname',
      content: 'Kernel-Guard web sitesindeki materyaller \'olduğu gibi\' sunulmaktadır. Kernel-Guard, açık veya zımni hiçbir garanti vermez ve işbu belgeyle, zımni garantiler veya satılabilirlik koşulları dahil ancak bunlarla sınırlı olmamak üzere diğer tüm garantileri reddeder.'
    }
  },
  privacy: {
    title: 'Gizlilik Politikası',
    lastUpdated: 'Son Güncelleme: Nisan 2024',
    section1: {
      title: '1. Topladığımız Bilgiler',
      content: 'Bir hesap oluşturduğunuzda, bültenimize abone olduğunuzda veya destek için bizimle iletişime geçtiğinizde olduğu gibi, doğrudan bize verdiğiniz bilgileri topluyoruz.'
    },
    section2: {
      title: '2. Bilgilerinizi Nasıl Kullanıyoruz',
      content: 'Topladığımız bilgileri hizmetlerimizi sunmak, sürdürmek ve iyileştirmek, yenilerini geliştirmek ve Kernel-Guard\'ı ve kullanıcılarımızı korumak için kullanıyoruz.'
    },
    section3: {
      title: '3. Veri Güvenliği',
      content: 'Kişisel bilgilerinizi girdiğinizde, gönderdiğinizde veya bunlara eriştiğinizde kişisel bilgilerinizin güvenliğini sağlamak için çeşitli güvenlik önlemleri uyguluyoruz.'
    }
  },
  cookies: {
    title: 'Çerez Tercihleri',
    lastUpdated: 'Son Güncelleme: Nisan 2024',
    desc: 'Bu site, daha iyi bir kullanıcı deneyimi sunmak için çerezleri kullanır. Tercihlerinizi aşağıdan yönetebilirsiniz.',
    essential: {
      title: 'Zorunlu Çerezler',
      desc: 'Bu çerezler web sitesinin çalışması için gereklidir ve kapatılamaz.'
    },
    analytics: {
      title: 'Analiz Çerezleri',
      desc: 'Bu çerezler, sitemizin performansını ölçebilmemiz ve iyileştirebilmemiz için ziyaretleri ve trafik kaynaklarını saymamıza olanak tanır.'
    },
    save: 'Tercihleri Kaydet'
  },
  contact: {
    seo: {
      title: 'İletişim | Kernel Guard',
      description: 'Güvenli web geliştirme, siber güvenlik danışmanlığı ve altyapı yönetimi için Kernel Guard ile iletişime geçin.',
      keywords: 'kernel guard iletişim, siber güvenlik danışmanlığı, web geliştirme ajansı'
    },
    title: 'Bize Ulaşın',
    subtitle: 'Aklınızda bir proje mi var veya güvenlik danışmanlığına mı ihtiyacınız var? Sizinle tanışmak isteriz.',
    info: {
      title: 'İletişim Bilgileri',
      desc: 'Aşağıdaki kanallar üzerinden bizimle doğrudan iletişime geçebilirsiniz.',
      email: 'E-posta Gönderin',
      location: 'Konum',
      locationValue: 'İzmir, Türkiye',
      social: 'Sosyal Medya',
      github: 'GitHub Deposu'
    },
    form: {
      name: 'Adınız Soyadınız',
      namePlaceholder: 'Ahmet Yılmaz',
      email: 'E-posta Adresiniz',
      emailPlaceholder: 'ahmet@ornek.com',
      message: 'Mesajınız',
      messagePlaceholder: 'Size nasıl yardımcı olabiliriz?',
      submit: 'Mesaj Gönder',
      sending: 'Gönderiliyor...',
      success: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
      error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    }
  }
};
