import type { Language } from '../context/LanguageContext';
import type { LocalizedText } from '../i18n/text';

export interface ProjectCaseStudy {
  problem: LocalizedText;
  architecture: LocalizedText;
  securityApproach: LocalizedText;
  outcome: LocalizedText;
  metrics: string[];
  lessons: LocalizedText[];
}

export const caseStudyLabels: Partial<Record<Language, {
  title: string;
  problem: string;
  architecture: string;
  securityApproach: string;
  outcome: string;
  metrics: string;
  lessons: string;
}>> = {
  en: {
    title: 'Case Study',
    problem: 'Problem',
    architecture: 'Architecture',
    securityApproach: 'Security Approach',
    outcome: 'Outcome',
    metrics: 'Evidence',
    lessons: 'Lessons Learned',
  },
  tr: {
    title: 'Vaka Calismasi',
    problem: 'Problem',
    architecture: 'Mimari',
    securityApproach: 'Guvenlik Yaklasimi',
    outcome: 'Sonuc',
    metrics: 'Kanit',
    lessons: 'Cikarimlar',
  },
  de: {
    title: 'Fallstudie',
    problem: 'Problem',
    architecture: 'Architektur',
    securityApproach: 'Security-Ansatz',
    outcome: 'Ergebnis',
    metrics: 'Nachweise',
    lessons: 'Lessons Learned',
  },
  ja: {
    title: 'Case Study',
    problem: 'Problem',
    architecture: 'Architecture',
    securityApproach: 'Security Approach',
    outcome: 'Outcome',
    metrics: 'Evidence',
    lessons: 'Lessons Learned',
  },
  'zh-CN': {
    title: 'Case Study',
    problem: 'Problem',
    architecture: 'Architecture',
    securityApproach: 'Security Approach',
    outcome: 'Outcome',
    metrics: 'Evidence',
    lessons: 'Lessons Learned',
  },
  es: {
    title: 'Caso de estudio',
    problem: 'Problema',
    architecture: 'Arquitectura',
    securityApproach: 'Enfoque de seguridad',
    outcome: 'Resultado',
    metrics: 'Evidencia',
    lessons: 'Aprendizajes',
  },
  fr: {
    title: 'Etude de cas',
    problem: 'Probleme',
    architecture: 'Architecture',
    securityApproach: 'Approche securite',
    outcome: 'Resultat',
    metrics: 'Preuves',
    lessons: 'Lecons',
  },
  ko: {
    title: 'Case Study',
    problem: 'Problem',
    architecture: 'Architecture',
    securityApproach: 'Security Approach',
    outcome: 'Outcome',
    metrics: 'Evidence',
    lessons: 'Lessons Learned',
  },
};

export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  bpfcompat: {
    problem: {
      en: 'eBPF teams often discover verifier, BTF, or CO-RE compatibility failures only after deploying to a customer kernel.',
      tr: 'eBPF ekipleri dogrulayici, BTF veya CO-RE uyumluluk hatalarini cogu zaman ancak musteri cekirdegine dagitimdan sonra gorur.',
    },
    architecture: {
      en: 'A Go orchestrator boots disposable QEMU/KVM Linux guests, loads compiled BPF artifacts through a C/libbpf validator, and aggregates results by kernel profile.',
      tr: 'Go orkestrator tek kullanimlik QEMU/KVM Linux konuklari baslatir, derlenmis BPF yapitlarini C/libbpf dogrulayici ile yukler ve sonuclari cekirdek profiline gore toplar.',
    },
    securityApproach: {
      en: 'Compatibility checks run in disposable overlays instead of production hosts. The kernel verifier is treated as the authority, and CI fails on regression evidence.',
      tr: 'Uyumluluk kontrolleri uretim sunuculari yerine tek kullanimlik katmanlarda calisir. Cekirdek dogrulayici otorite kabul edilir ve CI gerileme kanitinda durur.',
    },
    outcome: {
      en: 'The project turns kernel compatibility into a repeatable CI gate with an artifact-by-kernel pass/fail matrix.',
      tr: 'Proje cekirdek uyumlulugunu yapit-cekirdek bazli gecis/kalma matrisiyle tekrar edilebilir bir CI kapisina donusturur.',
    },
    metrics: ['Kernel-by-artifact matrix', 'Disposable VM execution', 'CI regression exit code'],
    lessons: [
      { en: 'Compatibility claims need live-kernel evidence, not only compile-time checks.', tr: 'Uyumluluk iddialari yalniz derleme kontroluyle degil canli cekirdek kanitiyla desteklenmelidir.' },
      { en: 'A small, deterministic failure code makes CI adoption easier.', tr: 'Kucuk ve deterministik hata kodu CI benimsemesini kolaylastirir.' },
    ],
  },
  cathodex: {
    problem: {
      en: 'Battery material screening is expensive when candidates are evaluated manually or without uncertainty-aware ranking.',
      tr: 'Pil malzemesi taramasi, adaylar manuel veya belirsizlik hesaba katilmadan degerlendirildiginde pahali hale gelir.',
    },
    architecture: {
      en: 'A web UI submits material structures to a FastAPI inference layer backed by PyTorch graph models and ensemble-style scoring.',
      tr: 'Web arayuzu malzeme yapilarini PyTorch cizge modelleri ve topluluk skorlama kullanan FastAPI cikarim katmanina gonderir.',
    },
    securityApproach: {
      en: 'Parsing, inference, and presentation are separated so untrusted input can be validated before reaching model execution and user-facing results.',
      tr: 'Ayrisma, cikarim ve sunum ayrilir; boylece guvenilmeyen girdi model calismasina ve kullanici sonucuna ulasmadan dogrulanabilir.',
    },
    outcome: {
      en: 'Researchers get a faster candidate-screening workflow with ranked outputs and clearer confidence signals.',
      tr: 'Arastirmacilar sirali ciktilar ve daha net guven sinyalleriyle daha hizli aday tarama is akisi elde eder.',
    },
    metrics: ['GNN-based ranking', 'q10/q50/q90 output bands', 'Separate API inference layer'],
    lessons: [
      { en: 'Scientific AI tools need uncertainty presentation as much as prediction.', tr: 'Bilimsel AI araclari tahmin kadar belirsizlik sunumuna da ihtiyac duyar.' },
      { en: 'Keeping model execution behind an API boundary simplifies future hardening.', tr: 'Model calistirmayi API siniri arkasinda tutmak ileride guclendirmeyi kolaylastirir.' },
    ],
  },
  'post-quantum-messaging-app': {
    problem: {
      en: 'Sensitive communication systems face harvest-now-decrypt-later risk as quantum-capable attackers become more realistic.',
      tr: 'Hassas iletisim sistemleri, kuantum kapasiteli saldirganlar gercekci hale geldikce simdi-topla-sonra-coz riskine maruz kalir.',
    },
    architecture: {
      en: 'A Rust core provides cryptographic operations for CLI, mobile, web, and desktop bridges, while the server handles sealed inbox synchronization and relay duties.',
      tr: 'Rust cekirdek CLI, mobil, web ve masaustu kopruleri icin kriptografik islemleri saglar; sunucu kapali gelen kutusu senkronizasyonu ve aktarimi yapar.',
    },
    securityApproach: {
      en: 'The design favors memory-safe implementation, post-quantum primitives, sealed message handling, and protocol-model verification gates.',
      tr: 'Tasarim bellek-guvenli uygulama, kuantum sonrasi ilkeller, kapali mesaj isleme ve protokol model dogrulama kapilarini onceler.',
    },
    outcome: {
      en: 'The application demonstrates how a modern messaging stack can isolate cryptography from clients while preparing for post-quantum migration.',
      tr: 'Uygulama modern bir mesajlasma yigininin kriptografiyi istemcilerden nasil ayirabilecegini ve kuantum sonrasi gecise nasil hazirlanabilecegini gosterir.',
    },
    metrics: ['Rust cryptographic core', 'Cross-platform bridge model', 'Protocol verification artifacts'],
    lessons: [
      { en: 'Cryptographic products need protocol evidence, not only algorithm names.', tr: 'Kriptografik urunler sadece algoritma adi degil protokol kaniti gerektirir.' },
      { en: 'A shared core reduces drift across platform clients.', tr: 'Ortak cekirdek platform istemcileri arasinda sapmayi azaltir.' },
    ],
  },
  'aegis-bpf': {
    problem: {
      en: 'Host security policies are difficult to enforce consistently when user-space agents can miss kernel-level behavior.',
      tr: 'Kullanici-alani ajanlari cekirdek seviyesindeki davranisi kacirabildiginde host guvenlik politikalarini tutarli uygulamak zordur.',
    },
    architecture: {
      en: 'A user-space policy controller feeds pinned BPF maps and ring buffers while eBPF LSM hooks enforce or audit file, process, and socket activity.',
      tr: 'Kullanici-alani politika denetleyicisi sabitlenmis BPF mapleri ve ring bufferlari besler; eBPF LSM hooklari dosya, surec ve soket etkinligini uygular veya denetler.',
    },
    securityApproach: {
      en: 'CO-RE portability, kernel verifier checks, policy signing, and audit-first rollout reduce the risk of unsafe kernel instrumentation.',
      tr: 'CO-RE tasinabilirligi, cekirdek dogrulayici kontrolleri, politika imzalama ve once-denetim dagitimi guvensiz cekirdek enstrumantasyon riskini azaltir.',
    },
    outcome: {
      en: 'The prototype shows a path to low-overhead kernel-level policy enforcement with observable audit output.',
      tr: 'Prototip, gozlemlenebilir denetim ciktisiyla dusuk ek-yuklu cekirdek seviyesinde politika uygulama yolunu gosterir.',
    },
    metrics: ['eBPF LSM hooks', 'Pinned BPF maps', 'Audit and deny modes'],
    lessons: [
      { en: 'Kernel controls should start in audit mode before enforcement.', tr: 'Cekirdek kontrolleri uygulamadan once denetim modunda baslamalidir.' },
      { en: 'CO-RE support is essential for deployable eBPF security tooling.', tr: 'Dagitilabilir eBPF guvenlik araci icin CO-RE destegi esastir.' },
    ],
  },
  'ref-atelier': {
    problem: {
      en: 'The business needed a polished reference showcase that could present completed work without a heavy CMS or fragile media handling.',
      tr: 'Isletmenin agir CMS veya kirilgan medya yonetimi olmadan tamamlanan isleri gosterecek rafine bir referans vitrinine ihtiyaci vardi.',
    },
    architecture: {
      en: 'A responsive static portfolio structure organizes projects, media, and conversion paths around fast page loads and simple maintenance.',
      tr: 'Duyarli statik portfolyo yapisi projeleri, medyayi ve donusum yollarini hizli sayfa yukleme ve basit bakim etrafinda duzenler.',
    },
    securityApproach: {
      en: 'A static public surface keeps the attack area small, while external links and contact paths are explicit and easy to audit.',
      tr: 'Statik public yuzey saldiri alanini kucuk tutar; dis baglantilar ve iletisim yollari acik ve denetlenebilir kalir.',
    },
    outcome: {
      en: 'The result is a professional portfolio experience focused on clarity, media performance, and direct business inquiry paths.',
      tr: 'Sonuc; netlik, medya performansi ve dogrudan is talebi yollarina odaklanan profesyonel portfolyo deneyimidir.',
    },
    metrics: ['Static portfolio surface', 'Responsive media presentation', 'Direct inquiry path'],
    lessons: [
      { en: 'Portfolio credibility depends on clear project framing, not decorative complexity.', tr: 'Portfolyo guveni dekoratif karmasikliktan cok net proje cercevesine baglidir.' },
      { en: 'Static delivery is often the strongest default for showcase sites.', tr: 'Vitrin siteleri icin statik teslimat cogu zaman en guclu varsayilandir.' },
    ],
  },
  'dershane-management': {
    problem: {
      en: 'Education operators needed student tracking, attendance, grades, and reporting in one operational interface.',
      tr: 'Egitim operatorleri ogrenci takibi, yoklama, notlar ve raporlamayi tek operasyonel arayuzde toplamaya ihtiyac duydu.',
    },
    architecture: {
      en: 'The system groups enrollment, attendance, grade management, reporting, and admin workflows into a role-aware dashboard.',
      tr: 'Sistem kayit, yoklama, not yonetimi, raporlama ve admin akislarini rol-bilincli bir panelde toplar.',
    },
    securityApproach: {
      en: 'Administrative access is separated from public presentation, and demo credentials are treated as non-indexed evaluation material.',
      tr: 'Yonetim erisimi public sunumdan ayrilir ve demo kimlikleri noindex degerlendirme materyali olarak ele alinir.',
    },
    outcome: {
      en: 'Daily institution operations become easier to scan, update, and explain to staff.',
      tr: 'Gunluk kurum operasyonlari personel icin taranmasi, guncellenmesi ve aciklanmasi daha kolay hale gelir.',
    },
    metrics: ['Student lifecycle modules', 'Administrative reporting', 'Demo account noindex handling'],
    lessons: [
      { en: 'Operational dashboards need dense but predictable information architecture.', tr: 'Operasyonel paneller yogun ama ongorulebilir bilgi mimarisi ister.' },
      { en: 'Demo access should not create indexable credential pages.', tr: 'Demo erisimi indekslenebilir kimlik bilgisi sayfalari olusturmamalidir.' },
    ],
  },
  'technova-hr': {
    problem: {
      en: 'HR teams needed a single portal for employee records, leave requests, and performance workflows across multiple roles.',
      tr: 'IK ekipleri calisan kayitlari, izin talepleri ve performans akislarini coklu roller arasinda tek portala toplamak istedi.',
    },
    architecture: {
      en: 'The portal separates administrator and employee experiences while keeping records, requests, and review flows in one interface.',
      tr: 'Portal yonetici ve calisan deneyimlerini ayirir; kayitlari, talepleri ve inceleme akislarini tek arayuzde tutar.',
    },
    securityApproach: {
      en: 'Role-specific access patterns reduce accidental exposure, and public case-study pages avoid indexing demo credentials.',
      tr: 'Role ozgu erisim desenleri kazara ifsayi azaltir; public vaka sayfalari demo kimliklerinin indekslenmesini engeller.',
    },
    outcome: {
      en: 'The result is an enterprise-style HR portal with self-service paths for employees and operational control for administrators.',
      tr: 'Sonuc, calisanlar icin self-servis yollar ve yoneticiler icin operasyonel kontrol saglayan kurumsal tarzda IK portalidir.',
    },
    metrics: ['Multi-role access model', 'Employee self-service flow', 'Administrative review workflow'],
    lessons: [
      { en: 'HR portals must make role boundaries visible in the interface.', tr: 'IK portallari rol sinirlarini arayuzde gorunur kilmalidir.' },
      { en: 'Case-study demos need a clear separation from production identity data.', tr: 'Vaka demo sayfalari uretim kimlik verisinden net sekilde ayrilmalidir.' },
    ],
  },
  'algo-egitim': {
    problem: {
      en: 'Algorithm learning programs needed a dashboard that could make progress, modules, and practice work visible to students and admins.',
      tr: 'Algoritma egitim programlari ilerlemeyi, modulleri ve pratik calismayi ogrenciler ve adminler icin gorunur kilacak panele ihtiyac duydu.',
    },
    architecture: {
      en: 'A learning dashboard organizes modules, progress tracking, and student-facing views around repeated practice workflows.',
      tr: 'Ogrenme paneli modulleri, ilerleme takibini ve ogrenci gorunumlerini tekrarli pratik akislar etrafinda duzenler.',
    },
    securityApproach: {
      en: 'Admin-only paths and demo credential handling are separated from the public case-study surface.',
      tr: 'Admin-only yollar ve demo kimlik yonetimi public vaka yuzeyinden ayrilir.',
    },
    outcome: {
      en: 'Students get a clearer view of learning progress while administrators can inspect program activity from one place.',
      tr: 'Ogrenciler ogrenme ilerlemesini daha net gorur; yoneticiler program etkinligini tek yerden izleyebilir.',
    },
    metrics: ['Progress tracking dashboard', 'Interactive learning modules', 'Admin evaluation path'],
    lessons: [
      { en: 'Learning dashboards should optimize for repeated use, not a one-time presentation.', tr: 'Ogrenme panelleri tek seferlik sunum degil tekrarli kullanim icin optimize edilmelidir.' },
      { en: 'Education demos should expose workflow shape without exposing real learner data.', tr: 'Egitim demolari gercek ogrenci verisi acmadan is akisi yapisini gostermelidir.' },
    ],
  },
};
