import { createContext, useContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/translations/en.ts
var en = {
	seo: {
		home: {
			title: "Kernel Guard | Secure Web Development & Cybersecurity Solutions",
			description: "Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions. Discover our zero-trust approach.",
			keywords: "Kernel Guard, secure web development, cybersecurity solutions, hardened backend, post-quantum cryptography, React security, zero-trust architecture, eBPF security, data protection"
		},
		projects: {
			title: "Open Source Security Projects | Kernel Guard",
			description: "Explore Kernel Guard's open-source cybersecurity tools, eBPF security modules, post-quantum cryptography apps, and systems programming initiatives.",
			keywords: "Kernel Guard open source, cybersecurity tools, eBPF security, post-quantum cryptography, secure coding, web security tools"
		},
		completedProjects: {
			title: "Completed Secure Web Projects | Kernel Guard",
			description: "Review Kernel Guard's portfolio of completed secure web development projects. See how we implement zero-trust architectures and high-performance frontends.",
			keywords: "Kernel Guard portfolio, secure web projects, zero-trust architecture examples, high-performance web apps, cybersecurity case studies"
		},
		services: {
			title: "Our Services | Kernel Guard",
			description: "Explore the comprehensive web development and cybersecurity services offered by Kernel Guard.",
			keywords: "Kernel Guard services, web design, cybersecurity, custom software development, SaaS development, cloud management"
		}
	},
	nav: {
		home: "Home",
		services: "Services",
		openSource: "Open Source",
		completedProjects: "Completed Projects",
		github: "GitHub",
		contact: "Contact"
	},
	servicesPage: {
		title: "Our Services",
		subtitle: "Secure and scalable technology solutions to propel your business into the future.",
		services: [
			{
				title: "Web Design",
				desc: "Modern, user-friendly, and conversion-focused interface designs.",
				icon: "layout"
			},
			{
				title: "Cybersecurity",
				desc: "Protecting your systems and data against the latest threats.",
				icon: "shield"
			},
			{
				title: "Custom Software Dev",
				desc: "Scalable software solutions tailored to your specific business needs.",
				icon: "code"
			},
			{
				title: "Web Development",
				desc: "High-performance, secure, and modern web applications.",
				icon: "globe"
			},
			{
				title: "SaaS Development",
				desc: "Building cloud-based, subscription-model software products.",
				icon: "box"
			},
			{
				title: "Information Security",
				desc: "Ensuring the confidentiality, integrity, and availability of your corporate data.",
				icon: "lock"
			},
			{
				title: "Cloud App Development",
				desc: "Modern applications built to run natively in cloud environments.",
				icon: "cloud"
			},
			{
				title: "Cloud Management",
				desc: "Optimization, security, and 24/7 monitoring of your cloud infrastructure.",
				icon: "server"
			},
			{
				title: "Database Development",
				desc: "Secure, fast, and scalable database architectures for big data loads.",
				icon: "database"
			}
		],
		ctaTitle: "Ready for your project?",
		ctaDesc: "Contact us to build a secure and modern infrastructure.",
		ctaButton: "Get in Touch"
	},
	home: {
		systemSecure: "SYSTEMS_SECURE // V2.4.1",
		heroTitle1: "Secure & Scalable",
		heroTitle2: "Web Development",
		heroDesc: "Kernel-Guard specializes in building high-performance web applications with a security-first approach. We combine modern web development with advanced threat defense mechanisms.",
		viewArch: "View Open Source",
		viewCompletedProjects: "Completed Projects",
		githubRepo: "GitHub Repository",
		status: "STATUS:",
		operational: "OPERATIONAL",
		latency: "LATENCY:",
		encryption: "ENCRYPTION:",
		uptime: "UPTIME:",
		missionTitle: "Security-First Web Engineering",
		missionP1: "At Kernel-Guard, we believe that true security cannot be bolted onto a web application as an afterthought. It must be engineered into the very foundation of the codebase. We are a team of full-stack developers and security researchers dedicated to building robust digital experiences.",
		missionP2: "Our focus spans from secure frontend architectures to hardened backend APIs and database management. We don't just build websites; we build resilient web infrastructure that stands against evolving threats.",
		techStackTitle: "Our Arsenal",
		techStackDesc: "We engineer our solutions using industry-leading, secure, and high-performance technologies.",
		features: {
			frontend: {
				title: "Secure Frontend",
				desc: "Modern, responsive user interfaces built with React and fortified against XSS and client-side vulnerabilities."
			},
			backend: {
				title: "Hardened Backend",
				desc: "Scalable server architectures and APIs designed with zero-trust principles and robust authentication."
			},
			data: {
				title: "Data Protection",
				desc: "Implementing state-of-the-art encryption and secure database practices to ensure user data confidentiality."
			},
			performance: {
				title: "High Performance",
				desc: "Optimized web applications that deliver lightning-fast load times without compromising on security checks."
			}
		},
		principles: {
			title: "Our Engineering Principles",
			items: [
				{
					title: "Open by Default",
					desc: "Transparent security through open-source code and public peer review."
				},
				{
					title: "Zero Trust",
					desc: "Verify every request, trust no entity, and assume breach by default."
				},
				{
					title: "Community Driven",
					desc: "Built collaboratively by and for systems engineers and security researchers."
				}
			]
		},
		community: {
			title: "Building in Public",
			desc: "We are actively building our core infrastructure and open-sourcing our progress. Follow our journey."
		},
		proof: {
			badge: "MEASURED // PUBLIC_EVIDENCE",
			title: "Proof, not presentation",
			desc: "A transparent quality snapshot based on Lighthouse CLI, prerender output, and public GitHub repository data measured on June 1, 2026.",
			cards: {
				lighthouse: {
					label: "Desktop Lighthouse",
					detail: "Performance / accessibility on the production domain."
				},
				delivery: {
					label: "Prerendered routes",
					detail: "Static routes generated at build time across localized pages."
				},
				openSource: {
					label: "Public repositories",
					detail: "Kernel-Guard organization repositories visible on GitHub."
				},
				languages: {
					label: "Supported languages",
					detail: "Turkish, English, German, Japanese, Chinese, Spanish, French, and Korean."
				}
			},
			summary: {
				indexableUrls: "indexable URLs",
				desktopTbt: "desktop TBT",
				latestUpdate: "latest public repo update"
			},
			footnote: "Metrics are intentionally shown as measured values, not marketing claims."
		}
	},
	projects: {
		badge: "DIRECTORY // OPEN_SOURCE",
		title1: "Open Source",
		title2: "Projects",
		desc: "A comprehensive index of our open-source tools, security modules, and systems programming initiatives.",
		colName: "Project Name",
		colDesc: "Description",
		colTech: "Tech Stack",
		colLinks: "Links"
	},
	completedProjects: {
		badge: "DIRECTORY // COMPLETED_PROJECTS",
		title1: "Completed",
		title2: "Projects",
		desc: "Explore our portfolio of completed web development projects and success stories.",
		noAccount: "Public access enabled. No account required.",
		credentials: "Authentication Data",
		email: "User",
		visit: "Visit Project",
		links: "Project Links",
		colName: "Name",
		colDesc: "Description",
		colTags: "Tags",
		colLinks: "Links"
	},
	projectDetails: {
		architectureDiagram: "System Architecture",
		technicalOverview: "Technical Overview",
		marketingOverview: "Value Proposition",
		viewSource: "View Source Code",
		liveDemo: "Live Preview",
		backToProjects: "Back to Directory",
		repositoryEvidence: {
			title: "Repository Evidence",
			measuredAt: "Measured from GitHub public repository data on May 31, 2026.",
			primaryLanguage: "Primary language",
			lastPublicUpdate: "Last public update",
			trackedIssues: "Tracked issues",
			repositorySize: "Repository size",
			languageMix: "Language mix"
		}
	},
	footer: {
		desc: "Securing the future through advanced systems programming, kernel-level defense, and open-source innovation. Engineered for enterprise resilience.",
		discover: "Discover",
		connect: "Connect",
		rights: "Kernel-Guard. All rights reserved.",
		terms: "Terms of Service",
		privacy: "Privacy Policy",
		cookies: "Cookie Preferences",
		newsletter: {
			title: "Subscribe to our newsletter",
			desc: "Get the latest updates on kernel security and infrastructure protection.",
			placeholder: "Enter your email",
			button: "Subscribe"
		}
	},
	terms: {
		title: "Terms of Service",
		lastUpdated: "Last Updated: April 2024",
		section1: {
			title: "1. Acceptance of Terms",
			content: "By accessing and using the Kernel-Guard website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
		},
		section2: {
			title: "2. Use License",
			content: "Permission is granted to temporarily download one copy of the materials on Kernel-Guard's website for personal, non-commercial transitory viewing only."
		},
		section3: {
			title: "3. Disclaimer",
			content: "The materials on Kernel-Guard's website are provided on an 'as is' basis. Kernel-Guard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
		}
	},
	privacy: {
		title: "Privacy Policy",
		lastUpdated: "Last Updated: April 2024",
		section1: {
			title: "1. Information We Collect",
			content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support."
		},
		section2: {
			title: "2. How We Use Your Information",
			content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Kernel-Guard and our users."
		},
		section3: {
			title: "3. Data Security",
			content: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."
		}
	},
	cookies: {
		title: "Cookie Preferences",
		lastUpdated: "Last Updated: April 2024",
		desc: "This site uses cookies to provide a better user experience. You can manage your preferences below.",
		essential: {
			title: "Essential Cookies",
			desc: "These cookies are necessary for the website to function and cannot be switched off."
		},
		analytics: {
			title: "Analytics Cookies",
			desc: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
		},
		save: "Save Preferences"
	},
	contact: {
		seo: {
			title: "Contact Us | Kernel Guard",
			description: "Get in touch with Kernel Guard for secure web development, cybersecurity consulting, and infrastructure management.",
			keywords: "contact kernel guard, cybersecurity consulting, web development agency"
		},
		title: "Get in Touch",
		subtitle: "Have a project in mind or need security consultation? We'd love to hear from you.",
		info: {
			title: "Contact Information",
			desc: "Reach out to us directly through the following channels.",
			email: "Email Us",
			location: "Location",
			locationValue: "İzmir, Turkey",
			social: "Social Media",
			github: "GitHub Repository"
		},
		form: {
			name: "Full Name",
			namePlaceholder: "John Doe",
			email: "Email Address",
			emailPlaceholder: "john@example.com",
			message: "Your Message",
			messagePlaceholder: "How can we help you?",
			submit: "Send Message",
			sending: "Sending...",
			success: "Message sent successfully! We will get back to you soon.",
			error: "An error occurred while sending the message. Please try again later."
		}
	}
};
//#endregion
//#region src/translations/tr.ts
var tr = {
	seo: {
		home: {
			title: "Kernel Guard | Güvenli Web Geliştirme ve Siber Güvenlik Çözümleri",
			description: "Kernel Guard, yüksek performanslı ve güvenli web uygulamaları, güçlendirilmiş arka uç (backend) mimarileri ve kuantum sonrası kriptografi çözümleri sunar. Sıfır güven (zero-trust) yaklaşımımızı keşfedin.",
			keywords: "Kernel Guard, güvenli web geliştirme, siber güvenlik çözümleri, güçlendirilmiş backend, kuantum sonrası kriptografi, React güvenliği, sıfır güven mimarisi, eBPF güvenliği, veri koruma"
		},
		projects: {
			title: "Açık Kaynak Siber Güvenlik Projeleri | Kernel Guard",
			description: "Kernel Guard'ın açık kaynaklı siber güvenlik araçlarını, eBPF güvenlik modüllerini, kuantum sonrası kriptografi uygulamalarını ve sistem programlama projelerini keşfedin.",
			keywords: "Kernel Guard açık kaynak, siber güvenlik araçları, eBPF güvenliği, kuantum sonrası kriptografi, güvenli kodlama, web güvenlik araçları"
		},
		completedProjects: {
			title: "Tamamlanan Güvenli Web Projeleri | Kernel Guard",
			description: "Kernel Guard'ın tamamlanmış güvenli web geliştirme projeleri portföyünü inceleyin. Sıfır güven mimarilerini ve yüksek performanslı önyüzleri nasıl uyguladığımızı görün.",
			keywords: "Kernel Guard portfolyo, güvenli web projeleri, sıfır güven mimarisi örnekleri, yüksek performanslı web uygulamaları, siber güvenlik vaka çalışmaları"
		},
		services: {
			title: "Hizmetlerimiz | Kernel Guard",
			description: "Kernel Guard tarafından sunulan kapsamlı web geliştirme ve siber güvenlik hizmetlerini keşfedin.",
			keywords: "Kernel Guard hizmetler, web tasarımı, siber güvenlik, kişisel yazılım geliştirme, SaaS geliştirme, bulut yönetimi"
		}
	},
	nav: {
		home: "Ana Sayfa",
		services: "Hizmetlerimiz",
		openSource: "Açık Kaynak",
		completedProjects: "Tamamlanan Projeler",
		github: "GitHub",
		contact: "İletişim"
	},
	servicesPage: {
		title: "Hizmetlerimiz",
		subtitle: "İşletmenizi geleceğe taşıyacak güvenli ve ölçeklenebilir teknoloji çözümleri.",
		services: [
			{
				title: "Web Tasarımı",
				desc: "Modern, kullanıcı dostu ve dönüşüm odaklı arayüz tasarımları.",
				icon: "layout"
			},
			{
				title: "Siber Güvenlik",
				desc: "Sistemlerinizi ve verilerinizi en güncel tehditlere karşı koruma.",
				icon: "shield"
			},
			{
				title: "Özel Yazılım Geliştirme",
				desc: "İşletmenizin özel ihtiyaçlarına tam uyan, ölçeklenebilir yazılım çözümleri.",
				icon: "code"
			},
			{
				title: "Web Geliştirme",
				desc: "Yüksek performanslı, güvenli ve modern web uygulamaları.",
				icon: "globe"
			},
			{
				title: "SaaS Geliştirme",
				desc: "Bulut tabanlı, abonelik modeliyle çalışan yazılım ürünleri inşası.",
				icon: "box"
			},
			{
				title: "Bilgi Güvenliği",
				desc: "Kurumsal verilerinizin gizliliğini, bütünlüğünü ve erişilebilirliğini sağlama.",
				icon: "lock"
			},
			{
				title: "Bulut Uygulama Geliştirme",
				desc: "Bulut ortamında (AWS, Azure) native çalışan modern uygulamalar.",
				icon: "cloud"
			},
			{
				title: "Bulut Yönetimi",
				desc: "Bulut altyapınızın optimizasyonu, güvenliği ve 7/24 izlenmesi.",
				icon: "server"
			},
			{
				title: "Veritabanı Geliştirme",
				desc: "Güvenli, hızlı ve büyük veri yüklerini kaldırabilen veritabanı mimarileri.",
				icon: "database"
			}
		],
		ctaTitle: "Projeniz için hazır mısınız?",
		ctaDesc: "Güvenli ve modern bir altyapı kurmak için bizimle iletişime geçin.",
		ctaButton: "Bize Ulaşın"
	},
	home: {
		systemSecure: "SİSTEM_GÜVENLİ // V2.4.1",
		heroTitle1: "Güvenli ve Ölçeklenebilir",
		heroTitle2: "Web Geliştirme",
		heroDesc: "Kernel-Guard, güvenlik odaklı bir yaklaşımla yüksek performanslı web uygulamaları oluşturma konusunda uzmanlaşmıştır. Modern web geliştirmeyi gelişmiş tehdit savunma mekanizmalarıyla birleştiriyoruz.",
		viewArch: "Açık Kaynak Projeler",
		viewCompletedProjects: "Tamamlanan Projeler",
		githubRepo: "GitHub Deposu",
		status: "DURUM:",
		operational: "AKTİF",
		latency: "GECİKME:",
		encryption: "ŞİFRELEME:",
		uptime: "ÇALIŞMA SÜRESİ:",
		missionTitle: "Güvenlik Odaklı Web Mühendisliği",
		missionP1: "Kernel-Guard olarak, gerçek güvenliğin bir web uygulamasına sonradan eklenemeyeceğine inanıyoruz. Kod tabanının tam temeline mühendislik edilmelidir. Bizler, sağlam dijital deneyimler oluşturmaya adanmış full-stack geliştiriciler ve güvenlik araştırmacılarıyız.",
		missionP2: "Odak noktamız, güvenli frontend mimarilerinden güçlendirilmiş backend API'lerine ve veritabanı yönetimine kadar uzanır. Biz sadece web sitesi yapmıyoruz; gelişen tehditlere karşı ayakta kalan dayanıklı web altyapıları inşa ediyoruz.",
		techStackTitle: "Teknoloji Cephaneliğimiz",
		techStackDesc: "Çözümlerimizi endüstri lideri, güvenli ve yüksek performanslı teknolojiler kullanarak inşa ediyoruz.",
		features: {
			frontend: {
				title: "Güvenli Frontend",
				desc: "React ile oluşturulmuş, XSS ve istemci tarafı güvenlik açıklarına karşı güçlendirilmiş modern, duyarlı kullanıcı arayüzleri."
			},
			backend: {
				title: "Güçlendirilmiş Backend",
				desc: "Sıfır güven (zero-trust) prensipleri ve sağlam kimlik doğrulama ile tasarlanmış ölçeklenebilir sunucu mimarileri ve API'ler."
			},
			data: {
				title: "Veri Koruması",
				desc: "Kullanıcı verilerinin gizliliğini sağlamak için en son teknoloji şifreleme ve güvenli veritabanı uygulamaları."
			},
			performance: {
				title: "Yüksek Performans",
				desc: "Güvenlik kontrollerinden ödün vermeden ışık hızında yükleme süreleri sunan optimize edilmiş web uygulamaları."
			}
		},
		principles: {
			title: "Mühendislik Prensiplerimiz",
			items: [
				{
					title: "Varsayılan Olarak Açık",
					desc: "Açık kaynak kod ve halka açık kod incelemesi ile şeffaf güvenlik."
				},
				{
					title: "Sıfır Güven (Zero Trust)",
					desc: "Her isteği doğrulayın, hiçbir varlığa güvenmeyin ve her zaman tetikte olun."
				},
				{
					title: "Topluluk Odaklı",
					desc: "Sistem mühendisleri ve güvenlik araştırmacıları tarafından ortaklaşa inşa ediliyor."
				}
			]
		},
		community: {
			title: "Açık Geliştirme (Build in Public)",
			desc: "Çekirdek altyapımızı aktif olarak inşa ediyor ve kodlarımızı açık kaynak olarak paylaşıyoruz. Yolculuğumuza katılın."
		},
		proof: {
			badge: "ÖLÇÜLDÜ // AÇIK_KANIT",
			title: "Sunum değil, kanıt",
			desc: "1 Haziran 2026 tarihinde Lighthouse CLI, prerender çıktısı ve herkese açık GitHub repo verileriyle ölçülmüş şeffaf kalite özeti.",
			cards: {
				lighthouse: {
					label: "Masaüstü Lighthouse",
					detail: "Canlı domain üzerinde performans / erişilebilirlik."
				},
				delivery: {
					label: "Prerender rota",
					detail: "Çok dilli sayfalar için build sırasında üretilen statik rotalar."
				},
				openSource: {
					label: "Public repo",
					detail: "GitHub üzerindeki Kernel-Guard organizasyon repoları."
				},
				languages: {
					label: "Desteklenen dil",
					detail: "Türkçe, İngilizce, Almanca, Japonca, Çince, İspanyolca, Fransızca ve Korece."
				}
			},
			summary: {
				indexableUrls: "indexlenebilir URL",
				desktopTbt: "masaüstü TBT",
				latestUpdate: "son public repo güncellemesi"
			},
			footnote: "Metrikler pazarlama iddiası değil, ölçülmüş değer olarak gösterilir."
		}
	},
	projects: {
		badge: "DİZİN // AÇIK_KAYNAK",
		title1: "Açık Kaynak",
		title2: "Projelerimiz",
		desc: "Açık kaynaklı araçlarımızın, güvenlik modüllerimizin ve sistem programlama girişimlerimizin kapsamlı bir indeksi.",
		colName: "Proje Adı",
		colDesc: "Açıklama",
		colTech: "Teknoloji",
		colLinks: "Bağlantılar"
	},
	completedProjects: {
		badge: "DİZİN // TAMAMLANAN_PROJELER",
		title1: "Tamamlanan",
		title2: "Projeler",
		desc: "Tamamlanmış web geliştirme projelerimizden oluşan portfolyomuzu inceleyin.",
		noAccount: "Herkese açık erişim. Hesap gerekmez.",
		credentials: "Kimlik Doğrulama Verileri",
		email: "Kullanıcı",
		visit: "Projeyi İncele",
		links: "Proje Bağlantıları",
		colName: "İsim",
		colDesc: "Açıklama",
		colTags: "Etiketler",
		colLinks: "Bağlantılar"
	},
	projectDetails: {
		architectureDiagram: "Sistem Mimarisi",
		technicalOverview: "Teknik Genel Bakış",
		marketingOverview: "Değer Önerisi",
		viewSource: "Kaynak Kodunu Görüntüle",
		liveDemo: "Canlı Önizleme",
		backToProjects: "Dizine Dön",
		repositoryEvidence: {
			title: "Repo Kanıtları",
			measuredAt: "31 Mayıs 2026 tarihinde herkese açık GitHub repo verilerinden ölçüldü.",
			primaryLanguage: "Ana dil",
			lastPublicUpdate: "Son public güncelleme",
			trackedIssues: "Takip edilen issue",
			repositorySize: "Repo boyutu",
			languageMix: "Dil dağılımı"
		}
	},
	footer: {
		desc: "Gelişmiş sistem programlama, çekirdek düzeyinde savunma ve açık kaynaklı inovasyon ile geleceği güvence altına alıyoruz. Kurumsal dayanıklılık için tasarlandı.",
		discover: "Keşfet",
		connect: "Bağlan",
		rights: "Kernel-Guard. Tüm hakları saklıdır.",
		terms: "Hizmet Şartları",
		privacy: "Gizlilik Politikası",
		cookies: "Çerez Tercihleri",
		newsletter: {
			title: "Bültenimize abone olun",
			desc: "Çekirdek güvenliği ve altyapı koruması hakkındaki en son güncellemeleri alın.",
			placeholder: "E-posta adresiniz",
			button: "Abone Ol"
		}
	},
	terms: {
		title: "Hizmet Şartları",
		lastUpdated: "Son Güncelleme: Nisan 2024",
		section1: {
			title: "1. Şartların Kabulü",
			content: "Kernel-Guard web sitesine ve hizmetlerine erişerek ve bunları kullanarak, bu Hizmet Şartlarına ve tüm ilgili yasa ve düzenlemelere bağlı kalmayı kabul etmiş olursunuz."
		},
		section2: {
			title: "2. Kullanım Lisansı",
			content: "Kernel-Guard web sitesindeki materyallerin bir kopyasının yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirilmesine izin verilir."
		},
		section3: {
			title: "3. Feragatname",
			content: "Kernel-Guard web sitesindeki materyaller 'olduğu gibi' sunulmaktadır. Kernel-Guard, açık veya zımni hiçbir garanti vermez ve işbu belgeyle, zımni garantiler veya satılabilirlik koşulları dahil ancak bunlarla sınırlı olmamak üzere diğer tüm garantileri reddeder."
		}
	},
	privacy: {
		title: "Gizlilik Politikası",
		lastUpdated: "Son Güncelleme: Nisan 2024",
		section1: {
			title: "1. Topladığımız Bilgiler",
			content: "Bir hesap oluşturduğunuzda, bültenimize abone olduğunuzda veya destek için bizimle iletişime geçtiğinizde olduğu gibi, doğrudan bize verdiğiniz bilgileri topluyoruz."
		},
		section2: {
			title: "2. Bilgilerinizi Nasıl Kullanıyoruz",
			content: "Topladığımız bilgileri hizmetlerimizi sunmak, sürdürmek ve iyileştirmek, yenilerini geliştirmek ve Kernel-Guard'ı ve kullanıcılarımızı korumak için kullanıyoruz."
		},
		section3: {
			title: "3. Veri Güvenliği",
			content: "Kişisel bilgilerinizi girdiğinizde, gönderdiğinizde veya bunlara eriştiğinizde kişisel bilgilerinizin güvenliğini sağlamak için çeşitli güvenlik önlemleri uyguluyoruz."
		}
	},
	cookies: {
		title: "Çerez Tercihleri",
		lastUpdated: "Son Güncelleme: Nisan 2024",
		desc: "Bu site, daha iyi bir kullanıcı deneyimi sunmak için çerezleri kullanır. Tercihlerinizi aşağıdan yönetebilirsiniz.",
		essential: {
			title: "Zorunlu Çerezler",
			desc: "Bu çerezler web sitesinin çalışması için gereklidir ve kapatılamaz."
		},
		analytics: {
			title: "Analiz Çerezleri",
			desc: "Bu çerezler, sitemizin performansını ölçebilmemiz ve iyileştirebilmemiz için ziyaretleri ve trafik kaynaklarını saymamıza olanak tanır."
		},
		save: "Tercihleri Kaydet"
	},
	contact: {
		seo: {
			title: "İletişim | Kernel Guard",
			description: "Güvenli web geliştirme, siber güvenlik danışmanlığı ve altyapı yönetimi için Kernel Guard ile iletişime geçin.",
			keywords: "kernel guard iletişim, siber güvenlik danışmanlığı, web geliştirme ajansı"
		},
		title: "Bize Ulaşın",
		subtitle: "Aklınızda bir proje mi var veya güvenlik danışmanlığına mı ihtiyacınız var? Sizinle tanışmak isteriz.",
		info: {
			title: "İletişim Bilgileri",
			desc: "Aşağıdaki kanallar üzerinden bizimle doğrudan iletişime geçebilirsiniz.",
			email: "E-posta Gönderin",
			location: "Konum",
			locationValue: "İzmir, Türkiye",
			social: "Sosyal Medya",
			github: "GitHub Deposu"
		},
		form: {
			name: "Adınız Soyadınız",
			namePlaceholder: "Ahmet Yılmaz",
			email: "E-posta Adresiniz",
			emailPlaceholder: "ahmet@ornek.com",
			message: "Mesajınız",
			messagePlaceholder: "Size nasıl yardımcı olabiliriz?",
			submit: "Mesaj Gönder",
			sending: "Gönderiliyor...",
			success: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
			error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
		}
	}
};
//#endregion
//#region src/translations/de.ts
var de = {
	...en,
	seo: {
		home: {
			title: "Kernel Guard | Sichere Webentwicklung und Cybersecurity",
			description: "Kernel Guard entwickelt sichere, performante Webanwendungen, gehärtete Backend-Architekturen und moderne Sicherheitslösungen.",
			keywords: "Kernel Guard, sichere Webentwicklung, Cybersecurity, gehärtetes Backend, Zero Trust, Datensicherheit"
		},
		projects: {
			title: "Open-Source-Sicherheitsprojekte | Kernel Guard",
			description: "Entdecken Sie die Open-Source-Sicherheitswerkzeuge, Systemprojekte und Web-Security-Initiativen von Kernel Guard.",
			keywords: "Kernel Guard Open Source, Cybersecurity Tools, sichere Software, Web Security"
		},
		completedProjects: {
			title: "Abgeschlossene sichere Webprojekte | Kernel Guard",
			description: "Ein Überblick über abgeschlossene Webentwicklungsprojekte von Kernel Guard mit Fokus auf Sicherheit, Performance und zuverlässige Architektur.",
			keywords: "Kernel Guard Portfolio, sichere Webprojekte, Zero Trust, Webentwicklung"
		},
		services: {
			title: "Leistungen | Kernel Guard",
			description: "Sichere Webentwicklung, Cybersecurity-Beratung und skalierbare Infrastrukturleistungen von Kernel Guard.",
			keywords: "Kernel Guard Leistungen, Webentwicklung, Cybersecurity, SaaS Entwicklung, Cloud Management"
		}
	},
	nav: {
		home: "Startseite",
		services: "Leistungen",
		openSource: "Open Source",
		completedProjects: "Referenzen",
		github: "GitHub",
		contact: "Kontakt"
	},
	servicesPage: {
		title: "Unsere Leistungen",
		subtitle: "Sichere und skalierbare Technologielösungen für belastbare digitale Produkte.",
		services: [
			{
				title: "Webdesign",
				desc: "Moderne, nutzerfreundliche und conversion-orientierte Oberflächen.",
				icon: "layout"
			},
			{
				title: "Cybersecurity",
				desc: "Schutz von Systemen und Daten vor aktuellen Bedrohungen.",
				icon: "shield"
			},
			{
				title: "Individuelle Software",
				desc: "Skalierbare Softwarelösungen für spezifische Geschäftsanforderungen.",
				icon: "code"
			},
			{
				title: "Webentwicklung",
				desc: "Performante, sichere und moderne Webanwendungen.",
				icon: "globe"
			},
			{
				title: "SaaS-Entwicklung",
				desc: "Cloudbasierte Softwareprodukte mit Abonnementmodellen.",
				icon: "box"
			},
			{
				title: "Informationssicherheit",
				desc: "Schutz von Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Daten.",
				icon: "lock"
			},
			{
				title: "Cloud-App-Entwicklung",
				desc: "Moderne Anwendungen für cloud-native Umgebungen.",
				icon: "cloud"
			},
			{
				title: "Cloud-Management",
				desc: "Optimierung, Absicherung und Überwachung Ihrer Cloud-Infrastruktur.",
				icon: "server"
			},
			{
				title: "Datenbankentwicklung",
				desc: "Sichere, schnelle und skalierbare Datenbankarchitekturen.",
				icon: "database"
			}
		],
		ctaTitle: "Bereit für Ihr Projekt?",
		ctaDesc: "Kontaktieren Sie uns für eine sichere und moderne Infrastruktur.",
		ctaButton: "Kontakt aufnehmen"
	},
	home: {
		...en.home,
		systemSecure: "SYSTEME_SICHER // V2.4.1",
		heroTitle1: "Sichere und skalierbare",
		heroTitle2: "Webentwicklung",
		heroDesc: "Kernel Guard entwickelt performante Webanwendungen mit Security-first-Ansatz und verbindet moderne Produktentwicklung mit robuster Abwehr gegen Bedrohungen.",
		viewArch: "Open Source ansehen",
		viewCompletedProjects: "Referenzen",
		missionTitle: "Security-first Web Engineering",
		missionP1: "Echte Sicherheit wird nicht nachträglich ergänzt. Sie muss in Architektur, Codebasis und Betrieb von Anfang an mitgedacht werden.",
		missionP2: "Unser Fokus reicht von sicheren Frontend-Architekturen über gehärtete Backend-APIs bis zu Datenbank- und Cloud-Sicherheit.",
		techStackTitle: "Unser Werkzeugkasten",
		techStackDesc: "Wir nutzen moderne, sichere und performante Technologien für belastbare digitale Produkte.",
		features: {
			frontend: {
				title: "Sicheres Frontend",
				desc: "Moderne React-Oberflächen, gehärtet gegen XSS und clientseitige Schwachstellen."
			},
			backend: {
				title: "Gehärtetes Backend",
				desc: "Skalierbare APIs und Serverarchitekturen nach Zero-Trust-Prinzipien."
			},
			data: {
				title: "Datenschutz",
				desc: "Verschlüsselung und sichere Datenbankpraktiken zum Schutz sensibler Informationen."
			},
			performance: {
				title: "Hohe Performance",
				desc: "Schnelle Webanwendungen ohne Kompromisse bei Sicherheitskontrollen."
			}
		},
		principles: {
			title: "Unsere Engineering-Prinzipien",
			items: [
				{
					title: "Offen als Standard",
					desc: "Transparente Sicherheit durch Open-Source-Code und öffentliche Code-Reviews."
				},
				{
					title: "Zero Trust",
					desc: "Jede Anfrage prüfen, keiner Entität blind vertrauen und Kompromittierung als Möglichkeit einplanen."
				},
				{
					title: "Community-orientiert",
					desc: "Gemeinsam mit und für Systemingenieure und Sicherheitsforschende entwickelt."
				}
			]
		},
		community: {
			title: "Öffentlich entwickeln",
			desc: "Wir bauen unsere Kerninfrastruktur aktiv auf und veröffentlichen Fortschritte als Open Source."
		},
		proof: {
			badge: "GEMESSEN // ÖFFENTLICHE_NACHWEISE",
			title: "Nachweise statt Behauptungen",
			desc: "Ein transparenter Qualitätsstand auf Basis von Lighthouse CLI, Prerender-Ausgabe und öffentlichen GitHub-Repository-Daten, gemessen am 1. Juni 2026.",
			cards: {
				lighthouse: {
					label: "Desktop Lighthouse",
					detail: "Performance / Barrierefreiheit auf der Produktionsdomain."
				},
				delivery: {
					label: "Prerender-Routen",
					detail: "Statische Routen, die beim Build über lokalisierte Seiten erzeugt werden."
				},
				openSource: {
					label: "Öffentliche Repos",
					detail: "Sichtbare Repositories der Kernel-Guard-Organisation auf GitHub."
				},
				languages: {
					label: "Unterstützte Sprachen",
					detail: "Türkisch, Englisch, Deutsch, Japanisch, Chinesisch, Spanisch, Französisch und Koreanisch."
				}
			},
			summary: {
				indexableUrls: "indexierbare URLs",
				desktopTbt: "Desktop-TBT",
				latestUpdate: "letztes öffentliches Repo-Update"
			},
			footnote: "Die Kennzahlen werden bewusst als gemessene Werte gezeigt, nicht als Marketingbehauptungen."
		}
	},
	projects: {
		...en.projects,
		badge: "VERZEICHNIS // OPEN_SOURCE",
		title1: "Open Source",
		title2: "Projekte",
		desc: "Ein Überblick über unsere offenen Werkzeuge, Sicherheitsmodule und Systemprojekte.",
		colName: "Projektname",
		colDesc: "Beschreibung",
		colTech: "Technologien",
		colLinks: "Links"
	},
	completedProjects: {
		...en.completedProjects,
		badge: "VERZEICHNIS // REFERENZEN",
		title1: "Abgeschlossene",
		title2: "Projekte",
		desc: "Entdecken Sie abgeschlossene Webentwicklungsprojekte und Referenzen.",
		noAccount: "Öffentlicher Zugriff. Kein Konto erforderlich.",
		credentials: "Zugangsdaten",
		email: "Benutzer",
		visit: "Projekt öffnen",
		links: "Projektlinks",
		colName: "Name",
		colDesc: "Beschreibung",
		colTags: "Tags",
		colLinks: "Links"
	},
	projectDetails: {
		...en.projectDetails,
		architectureDiagram: "Systemarchitektur",
		technicalOverview: "Technischer Überblick",
		marketingOverview: "Wertversprechen",
		viewSource: "Quellcode ansehen",
		liveDemo: "Live-Vorschau",
		backToProjects: "Zurück zum Verzeichnis",
		repositoryEvidence: {
			title: "Repository-Nachweise",
			measuredAt: "Gemessen aus öffentlichen GitHub-Repository-Daten am 31. Mai 2026.",
			primaryLanguage: "Hauptsprache",
			lastPublicUpdate: "Letztes öffentliches Update",
			trackedIssues: "Verfolgte Issues",
			repositorySize: "Repository-Größe",
			languageMix: "Sprachmix"
		}
	},
	footer: {
		...en.footer,
		desc: "Wir entwickeln sichere, performante und belastbare Webinfrastruktur für moderne digitale Produkte.",
		discover: "Entdecken",
		connect: "Kontakt",
		rights: "Kernel-Guard. Alle Rechte vorbehalten.",
		terms: "Nutzungsbedingungen",
		privacy: "Datenschutz",
		cookies: "Cookie-Einstellungen"
	},
	terms: {
		title: "Nutzungsbedingungen",
		lastUpdated: "Zuletzt aktualisiert: April 2024",
		section1: {
			title: "1. Annahme der Bedingungen",
			content: "Durch die Nutzung der Website und Dienste von Kernel Guard stimmen Sie diesen Nutzungsbedingungen zu."
		},
		section2: {
			title: "2. Nutzungslizenz",
			content: "Die Materialien auf dieser Website dürfen vorübergehend für persönliche, nicht-kommerzielle Ansicht genutzt werden."
		},
		section3: {
			title: "3. Haftungsausschluss",
			content: "Die Materialien werden ohne ausdrückliche oder stillschweigende Gewährleistung bereitgestellt."
		}
	},
	privacy: {
		title: "Datenschutzerklärung",
		lastUpdated: "Zuletzt aktualisiert: April 2024",
		section1: {
			title: "1. Erfasste Informationen",
			content: "Wir erfassen Informationen, die Sie uns direkt bereitstellen, zum Beispiel bei Kontaktanfragen."
		},
		section2: {
			title: "2. Nutzung Ihrer Informationen",
			content: "Wir nutzen Informationen zur Bereitstellung, Wartung und Verbesserung unserer Dienste."
		},
		section3: {
			title: "3. Datensicherheit",
			content: "Wir setzen Sicherheitsmaßnahmen ein, um personenbezogene Informationen zu schützen."
		}
	},
	cookies: {
		title: "Cookie-Einstellungen",
		lastUpdated: "Zuletzt aktualisiert: April 2024",
		desc: "Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.",
		essential: {
			title: "Notwendige Cookies",
			desc: "Diese Cookies sind für den Betrieb der Website erforderlich."
		},
		analytics: {
			title: "Analyse-Cookies",
			desc: "Diese Cookies helfen uns, die Leistung der Website zu messen und zu verbessern."
		},
		save: "Einstellungen speichern"
	},
	contact: {
		seo: {
			title: "Kontakt | Kernel Guard",
			description: "Kontaktieren Sie Kernel Guard für sichere Webentwicklung, Cybersecurity-Beratung und Infrastrukturmanagement.",
			keywords: "Kernel Guard Kontakt, Cybersecurity Beratung, Webentwicklung"
		},
		title: "Kontakt aufnehmen",
		subtitle: "Sie planen ein Projekt oder benötigen Sicherheitsberatung? Wir hören gern von Ihnen.",
		info: {
			title: "Kontaktinformationen",
			desc: "Sie erreichen uns direkt über die folgenden Kanäle.",
			email: "E-Mail",
			location: "Standort",
			locationValue: "Izmir, Türkei",
			social: "Social Media",
			github: "GitHub Repository"
		},
		form: {
			name: "Vollständiger Name",
			namePlaceholder: "Max Mustermann",
			email: "E-Mail-Adresse",
			emailPlaceholder: "max@example.com",
			message: "Ihre Nachricht",
			messagePlaceholder: "Wie können wir helfen?",
			submit: "Nachricht senden",
			sending: "Wird gesendet...",
			success: "Nachricht erfolgreich gesendet. Wir melden uns zeitnah.",
			error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
		}
	}
};
//#endregion
//#region src/translations/ja.ts
var ja = {
	...en,
	seo: {
		home: {
			title: "Kernel Guard | セキュアなWeb開発とサイバーセキュリティ",
			description: "Kernel Guardは、高性能で安全なWebアプリケーション、堅牢なバックエンド、現代的なセキュリティ設計を提供します。",
			keywords: "Kernel Guard, セキュアWeb開発, サイバーセキュリティ, Zero Trust, データ保護"
		},
		projects: {
			title: "オープンソースセキュリティプロジェクト | Kernel Guard",
			description: "Kernel Guardのオープンソースセキュリティツール、Webセキュリティプロジェクト、システム開発の取り組みをご覧ください。",
			keywords: "Kernel Guard オープンソース, セキュリティツール, Webセキュリティ, セキュアコーディング"
		},
		completedProjects: {
			title: "完了済みセキュアWebプロジェクト | Kernel Guard",
			description: "Kernel Guardが手がけたセキュアで高性能なWeb開発プロジェクトをご覧ください。",
			keywords: "Kernel Guard 実績, セキュアWebプロジェクト, Web開発, Zero Trust"
		},
		services: {
			title: "サービス | Kernel Guard",
			description: "Kernel Guardが提供するWeb開発、サイバーセキュリティ、クラウドインフラ支援サービス。",
			keywords: "Kernel Guard サービス, Web開発, サイバーセキュリティ, SaaS開発, クラウド管理"
		}
	},
	nav: {
		home: "ホーム",
		services: "サービス",
		openSource: "オープンソース",
		completedProjects: "実績",
		github: "GitHub",
		contact: "お問い合わせ"
	},
	servicesPage: {
		title: "サービス",
		subtitle: "安全でスケーラブルな技術基盤により、信頼できるデジタル製品を構築します。",
		services: [
			{
				title: "Webデザイン",
				desc: "使いやすく、成果につながるモダンなUI設計。",
				icon: "layout"
			},
			{
				title: "サイバーセキュリティ",
				desc: "最新の脅威からシステムとデータを保護します。",
				icon: "shield"
			},
			{
				title: "カスタムソフトウェア開発",
				desc: "事業要件に合わせたスケーラブルなソフトウェア。",
				icon: "code"
			},
			{
				title: "Web開発",
				desc: "高性能で安全なモダンWebアプリケーション。",
				icon: "globe"
			},
			{
				title: "SaaS開発",
				desc: "クラウドベースのサブスクリプション型プロダクト構築。",
				icon: "box"
			},
			{
				title: "情報セキュリティ",
				desc: "企業データの機密性、完全性、可用性を守ります。",
				icon: "lock"
			},
			{
				title: "クラウドアプリ開発",
				desc: "クラウドネイティブ環境向けのアプリケーション。",
				icon: "cloud"
			},
			{
				title: "クラウド管理",
				desc: "クラウド基盤の最適化、保護、監視。",
				icon: "server"
			},
			{
				title: "データベース開発",
				desc: "安全で高速、拡張性の高いデータベース設計。",
				icon: "database"
			}
		],
		ctaTitle: "プロジェクトを始めますか？",
		ctaDesc: "安全でモダンな基盤づくりについてご相談ください。",
		ctaButton: "お問い合わせ"
	},
	home: {
		...en.home,
		systemSecure: "SYSTEMS_SECURE // V2.4.1",
		heroTitle1: "安全でスケーラブルな",
		heroTitle2: "Web開発",
		heroDesc: "Kernel Guardは、セキュリティファーストの設計で高性能なWebアプリケーションを構築します。",
		viewArch: "オープンソースを見る",
		viewCompletedProjects: "実績を見る",
		missionTitle: "セキュリティファーストのWebエンジニアリング",
		missionP1: "本当のセキュリティは後から追加するものではありません。アーキテクチャとコードベースの基礎に組み込む必要があります。",
		missionP2: "安全なフロントエンド、堅牢なAPI、データベースとクラウドの保護まで、幅広く支援します。",
		techStackTitle: "技術スタック",
		techStackDesc: "安全性と性能を重視した技術で、信頼できるプロダクトを構築します。",
		features: {
			frontend: {
				title: "セキュアフロントエンド",
				desc: "ReactベースのUIをXSSなどのクライアント側リスクに備えて設計します。"
			},
			backend: {
				title: "堅牢なバックエンド",
				desc: "Zero Trust原則に基づくスケーラブルなAPIとサーバー設計。"
			},
			data: {
				title: "データ保護",
				desc: "暗号化と安全なデータベース運用により機密情報を守ります。"
			},
			performance: {
				title: "高性能",
				desc: "高速なロード時間とセキュリティチェックを両立します。"
			}
		},
		principles: {
			title: "エンジニアリング原則",
			items: [
				{
					title: "オープンを標準に",
					desc: "オープンソースコードと公開レビューにより、透明性の高いセキュリティを実現します。"
				},
				{
					title: "Zero Trust",
					desc: "すべてのリクエストを検証し、どの主体も無条件には信頼しません。"
				},
				{
					title: "コミュニティ主導",
					desc: "システムエンジニアとセキュリティ研究者のために共同で構築します。"
				}
			]
		},
		community: {
			title: "公開しながら構築",
			desc: "中核インフラを継続的に構築し、その進捗をオープンソースとして公開しています。"
		},
		proof: {
			badge: "MEASURED // PUBLIC_EVIDENCE",
			title: "見せ方ではなく、実測値",
			desc: "2026年6月1日に Lighthouse CLI、prerender 出力、公開 GitHub リポジトリデータから取得した透明な品質スナップショットです。",
			cards: {
				lighthouse: {
					label: "Desktop Lighthouse",
					detail: "本番ドメインでのパフォーマンス / アクセシビリティ。"
				},
				delivery: {
					label: "Prerender ルート",
					detail: "多言語ページを含め、ビルド時に生成される静的ルート数。"
				},
				openSource: {
					label: "公開リポジトリ",
					detail: "GitHub 上で確認できる Kernel-Guard organization のリポジトリ。"
				},
				languages: {
					label: "対応言語",
					detail: "トルコ語、英語、ドイツ語、日本語、中国語、スペイン語、フランス語、韓国語。"
				}
			},
			summary: {
				indexableUrls: "indexable URL",
				desktopTbt: "desktop TBT",
				latestUpdate: "最新の公開リポジトリ更新"
			},
			footnote: "数値はマーケティング文句ではなく、測定値として表示しています。"
		}
	},
	projects: {
		...en.projects,
		badge: "DIRECTORY // OPEN_SOURCE",
		title1: "オープンソース",
		title2: "プロジェクト",
		desc: "公開しているツール、セキュリティモジュール、システム開発プロジェクトの一覧です。",
		colName: "プロジェクト名",
		colDesc: "説明",
		colTech: "技術スタック",
		colLinks: "リンク"
	},
	completedProjects: {
		...en.completedProjects,
		badge: "DIRECTORY // COMPLETED_PROJECTS",
		title1: "完了済み",
		title2: "プロジェクト",
		desc: "Web開発プロジェクトと実績をご覧ください。",
		noAccount: "公開アクセス可能。アカウントは不要です。",
		credentials: "認証情報",
		email: "ユーザー",
		visit: "プロジェクトを見る",
		links: "プロジェクトリンク",
		colName: "名前",
		colDesc: "説明",
		colTags: "タグ",
		colLinks: "リンク"
	},
	projectDetails: {
		...en.projectDetails,
		architectureDiagram: "システム構成",
		technicalOverview: "技術概要",
		marketingOverview: "価値提案",
		viewSource: "ソースコードを見る",
		liveDemo: "ライブプレビュー",
		backToProjects: "一覧に戻る",
		repositoryEvidence: {
			title: "リポジトリ情報",
			measuredAt: "2026年5月31日に公開 GitHub リポジトリデータから測定。",
			primaryLanguage: "主要言語",
			lastPublicUpdate: "最終公開更新",
			trackedIssues: "追跡中の issue",
			repositorySize: "リポジトリサイズ",
			languageMix: "言語構成"
		}
	},
	footer: {
		...en.footer,
		desc: "安全で高性能、信頼性の高いWebインフラを構築します。",
		discover: "見る",
		connect: "連絡先",
		rights: "Kernel-Guard. All rights reserved.",
		terms: "利用規約",
		privacy: "プライバシーポリシー",
		cookies: "Cookie設定"
	},
	terms: {
		title: "利用規約",
		lastUpdated: "最終更新: 2024年4月",
		section1: {
			title: "1. 規約への同意",
			content: "Kernel GuardのWebサイトとサービスを利用することで、本規約に同意したものとみなされます。"
		},
		section2: {
			title: "2. 利用許諾",
			content: "本サイトの資料は、個人的かつ非商用の閲覧目的に限り一時的に利用できます。"
		},
		section3: {
			title: "3. 免責事項",
			content: "本サイトの資料は現状有姿で提供され、明示または黙示の保証はありません。"
		}
	},
	privacy: {
		title: "プライバシーポリシー",
		lastUpdated: "最終更新: 2024年4月",
		section1: {
			title: "1. 収集する情報",
			content: "お問い合わせなどで直接提供された情報を収集する場合があります。"
		},
		section2: {
			title: "2. 情報の利用",
			content: "収集した情報は、サービスの提供、維持、改善のために利用します。"
		},
		section3: {
			title: "3. データセキュリティ",
			content: "個人情報を保護するため、適切なセキュリティ対策を実施します。"
		}
	},
	cookies: {
		title: "Cookie設定",
		lastUpdated: "最終更新: 2024年4月",
		desc: "本サイトは利用体験を改善するためCookieを使用します。",
		essential: {
			title: "必須Cookie",
			desc: "サイトの動作に必要なCookieです。"
		},
		analytics: {
			title: "分析Cookie",
			desc: "サイトのパフォーマンス測定と改善に利用します。"
		},
		save: "設定を保存"
	},
	contact: {
		seo: {
			title: "お問い合わせ | Kernel Guard",
			description: "安全なWeb開発、サイバーセキュリティ、インフラ管理についてKernel Guardへお問い合わせください。",
			keywords: "Kernel Guard お問い合わせ, サイバーセキュリティ, Web開発"
		},
		title: "お問い合わせ",
		subtitle: "プロジェクトのご相談やセキュリティ支援が必要ですか？お気軽にご連絡ください。",
		info: {
			title: "連絡先情報",
			desc: "以下の方法で直接ご連絡いただけます。",
			email: "メール",
			location: "所在地",
			locationValue: "イズミル, トルコ",
			social: "ソーシャル",
			github: "GitHubリポジトリ"
		},
		form: {
			name: "氏名",
			namePlaceholder: "Taro Yamada",
			email: "メールアドレス",
			emailPlaceholder: "taro@example.com",
			message: "メッセージ",
			messagePlaceholder: "どのようにお手伝いできますか？",
			submit: "送信",
			sending: "送信中...",
			success: "メッセージを送信しました。追ってご連絡します。",
			error: "送信中にエラーが発生しました。後でもう一度お試しください。"
		}
	}
};
//#endregion
//#region src/translations/zh-CN.ts
var zhCN = {
	...en,
	seo: {
		home: {
			title: "Kernel Guard | 安全 Web 开发与网络安全解决方案",
			description: "Kernel Guard 专注于高性能、安全的 Web 应用、加固后端架构和现代网络安全工程。",
			keywords: "Kernel Guard, 安全 Web 开发, 网络安全, Zero Trust, 数据保护, 后端安全"
		},
		projects: {
			title: "开源安全项目 | Kernel Guard",
			description: "浏览 Kernel Guard 的开源安全工具、Web 安全项目和系统工程实践。",
			keywords: "Kernel Guard 开源, 网络安全工具, Web 安全, 安全编码"
		},
		completedProjects: {
			title: "已完成的安全 Web 项目 | Kernel Guard",
			description: "查看 Kernel Guard 已完成的安全 Web 开发项目、性能优化和架构实践。",
			keywords: "Kernel Guard 项目案例, 安全 Web 项目, Zero Trust, Web 开发"
		},
		services: {
			title: "服务 | Kernel Guard",
			description: "Kernel Guard 提供安全 Web 开发、网络安全咨询、SaaS 和云基础设施服务。",
			keywords: "Kernel Guard 服务, Web 开发, 网络安全, SaaS 开发, 云管理"
		}
	},
	nav: {
		home: "首页",
		services: "服务",
		openSource: "开源项目",
		completedProjects: "案例",
		github: "GitHub",
		contact: "联系"
	},
	servicesPage: {
		title: "我们的服务",
		subtitle: "构建安全、可扩展且面向未来的数字产品。",
		services: [
			{
				title: "Web 设计",
				desc: "现代、易用、以转化为目标的界面设计。",
				icon: "layout"
			},
			{
				title: "网络安全",
				desc: "保护系统和数据免受最新威胁影响。",
				icon: "shield"
			},
			{
				title: "定制软件开发",
				desc: "面向业务需求的可扩展软件解决方案。",
				icon: "code"
			},
			{
				title: "Web 开发",
				desc: "高性能、安全、现代的 Web 应用。",
				icon: "globe"
			},
			{
				title: "SaaS 开发",
				desc: "构建云端订阅型软件产品。",
				icon: "box"
			},
			{
				title: "信息安全",
				desc: "保障企业数据的机密性、完整性和可用性。",
				icon: "lock"
			},
			{
				title: "云应用开发",
				desc: "面向云原生环境构建现代应用。",
				icon: "cloud"
			},
			{
				title: "云管理",
				desc: "云基础设施优化、安全加固与监控。",
				icon: "server"
			},
			{
				title: "数据库开发",
				desc: "安全、快速、可扩展的数据库架构。",
				icon: "database"
			}
		],
		ctaTitle: "准备开始项目了吗？",
		ctaDesc: "联系我们，共同构建安全、现代的基础设施。",
		ctaButton: "联系我们"
	},
	home: {
		...en.home,
		systemSecure: "SYSTEMS_SECURE // V2.4.1",
		heroTitle1: "安全且可扩展的",
		heroTitle2: "Web 开发",
		heroDesc: "Kernel Guard 以安全优先的方式构建高性能 Web 应用，将现代开发实践与强健的威胁防护结合起来。",
		viewArch: "查看开源项目",
		viewCompletedProjects: "查看案例",
		missionTitle: "安全优先的 Web 工程",
		missionP1: "真正的安全不能事后补丁式加入，而应从架构和代码基础中设计出来。",
		missionP2: "我们覆盖安全前端、加固后端 API、数据库保护和云基础设施安全。",
		techStackTitle: "技术栈",
		techStackDesc: "我们使用安全、高性能的现代技术构建可靠产品。",
		features: {
			frontend: {
				title: "安全前端",
				desc: "基于 React 的现代界面，面向 XSS 和客户端风险进行加固。"
			},
			backend: {
				title: "加固后端",
				desc: "遵循 Zero Trust 原则的可扩展 API 和服务端架构。"
			},
			data: {
				title: "数据保护",
				desc: "通过加密和安全数据库实践保护敏感信息。"
			},
			performance: {
				title: "高性能",
				desc: "在不牺牲安全检查的前提下实现快速加载。"
			}
		},
		principles: {
			title: "工程原则",
			items: [
				{
					title: "默认开放",
					desc: "通过开源代码和公开代码审查实现透明安全。"
				},
				{
					title: "Zero Trust",
					desc: "验证每个请求，不默认信任任何实体，并默认假设存在风险。"
				},
				{
					title: "社区驱动",
					desc: "由系统工程师和安全研究人员共同构建。"
				}
			]
		},
		community: {
			title: "公开构建",
			desc: "我们正在持续构建核心基础设施，并以开源方式公开进展。"
		},
		proof: {
			badge: "已测量 // 公开证据",
			title: "不是展示，而是证据",
			desc: "基于 2026 年 6 月 1 日的 Lighthouse CLI、预渲染输出和公开 GitHub 仓库数据生成的透明质量快照。",
			cards: {
				lighthouse: {
					label: "桌面 Lighthouse",
					detail: "生产域名上的性能 / 可访问性。"
				},
				delivery: {
					label: "预渲染路由",
					detail: "构建时为多语言页面生成的静态路由。"
				},
				openSource: {
					label: "公开仓库",
					detail: "GitHub 上可见的 Kernel-Guard 组织仓库。"
				},
				languages: {
					label: "支持语言",
					detail: "土耳其语、英语、德语、日语、中文、西班牙语、法语和韩语。"
				}
			},
			summary: {
				indexableUrls: "可索引 URL",
				desktopTbt: "桌面 TBT",
				latestUpdate: "最新公开仓库更新"
			},
			footnote: "这些指标按实测值展示，而不是营销声明。"
		}
	},
	projects: {
		...en.projects,
		badge: "DIRECTORY // OPEN_SOURCE",
		title1: "开源",
		title2: "项目",
		desc: "我们的开源工具、安全模块和系统工程项目索引。",
		colName: "项目名称",
		colDesc: "描述",
		colTech: "技术栈",
		colLinks: "链接"
	},
	completedProjects: {
		...en.completedProjects,
		badge: "DIRECTORY // COMPLETED_PROJECTS",
		title1: "已完成",
		title2: "项目",
		desc: "查看我们已完成的 Web 开发项目和成功案例。",
		noAccount: "公开访问，无需账户。",
		credentials: "认证信息",
		email: "用户",
		visit: "访问项目",
		links: "项目链接",
		colName: "名称",
		colDesc: "描述",
		colTags: "标签",
		colLinks: "链接"
	},
	projectDetails: {
		...en.projectDetails,
		architectureDiagram: "系统架构",
		technicalOverview: "技术概览",
		marketingOverview: "价值主张",
		viewSource: "查看源代码",
		liveDemo: "在线预览",
		backToProjects: "返回目录",
		repositoryEvidence: {
			title: "仓库证据",
			measuredAt: "基于 2026 年 5 月 31 日的公开 GitHub 仓库数据测量。",
			primaryLanguage: "主要语言",
			lastPublicUpdate: "最后公开更新",
			trackedIssues: "跟踪中的 issue",
			repositorySize: "仓库大小",
			languageMix: "语言组成"
		}
	},
	footer: {
		...en.footer,
		desc: "为现代数字产品构建安全、高性能、可靠的 Web 基础设施。",
		discover: "发现",
		connect: "联系",
		rights: "Kernel-Guard. 保留所有权利。",
		terms: "服务条款",
		privacy: "隐私政策",
		cookies: "Cookie 设置"
	},
	terms: {
		title: "服务条款",
		lastUpdated: "最后更新：2024 年 4 月",
		section1: {
			title: "1. 接受条款",
			content: "访问和使用 Kernel Guard 网站与服务，即表示您同意遵守本服务条款。"
		},
		section2: {
			title: "2. 使用许可",
			content: "本网站资料仅可用于个人、非商业性的临时查看。"
		},
		section3: {
			title: "3. 免责声明",
			content: "本网站资料按“现状”提供，不作任何明示或默示保证。"
		}
	},
	privacy: {
		title: "隐私政策",
		lastUpdated: "最后更新：2024 年 4 月",
		section1: {
			title: "1. 我们收集的信息",
			content: "我们会收集您在联系我们时直接提供的信息。"
		},
		section2: {
			title: "2. 信息使用方式",
			content: "我们使用信息来提供、维护和改进服务。"
		},
		section3: {
			title: "3. 数据安全",
			content: "我们采用安全措施保护您的个人信息。"
		}
	},
	cookies: {
		title: "Cookie 设置",
		lastUpdated: "最后更新：2024 年 4 月",
		desc: "本网站使用 Cookie 以改善用户体验。",
		essential: {
			title: "必要 Cookie",
			desc: "这些 Cookie 是网站正常运行所必需的。"
		},
		analytics: {
			title: "分析 Cookie",
			desc: "这些 Cookie 帮助我们衡量并改进网站性能。"
		},
		save: "保存设置"
	},
	contact: {
		seo: {
			title: "联系 | Kernel Guard",
			description: "联系 Kernel Guard，获取安全 Web 开发、网络安全咨询和基础设施管理支持。",
			keywords: "Kernel Guard 联系, 网络安全咨询, Web 开发"
		},
		title: "联系我们",
		subtitle: "有项目计划或需要安全咨询？欢迎与我们联系。",
		info: {
			title: "联系信息",
			desc: "您可以通过以下渠道直接联系我们。",
			email: "电子邮件",
			location: "地点",
			locationValue: "土耳其 伊兹密尔",
			social: "社交媒体",
			github: "GitHub 仓库"
		},
		form: {
			name: "姓名",
			namePlaceholder: "Zhang Wei",
			email: "电子邮件地址",
			emailPlaceholder: "zhang@example.com",
			message: "留言",
			messagePlaceholder: "我们可以如何帮助您？",
			submit: "发送消息",
			sending: "发送中...",
			success: "消息已成功发送，我们会尽快回复。",
			error: "发送消息时出现错误，请稍后再试。"
		}
	}
};
//#endregion
//#region src/translations/es.ts
var es = {
	...en,
	seo: {
		...en.seo,
		home: {
			title: "Kernel Guard | Desarrollo web seguro y soluciones de ciberseguridad",
			description: "Kernel Guard construye aplicaciones web de alto rendimiento con arquitecturas backend reforzadas y enfoque security-first.",
			keywords: en.seo.home.keywords
		},
		services: {
			title: "Servicios | Kernel Guard",
			description: "Servicios de ingeniería web segura, ciberseguridad e infraestructura cloud de Kernel Guard.",
			keywords: en.seo.services.keywords
		}
	},
	nav: {
		home: "Inicio",
		services: "Servicios",
		openSource: "Open Source",
		completedProjects: "Casos",
		github: "GitHub",
		contact: "Contacto"
	},
	servicesPage: {
		title: "Servicios",
		subtitle: "Soluciones tecnológicas seguras y escalables para productos digitales exigentes.",
		services: [
			{
				title: "Diseño web",
				desc: "Interfaces modernas, claras y orientadas a conversión.",
				icon: "layout"
			},
			{
				title: "Ciberseguridad",
				desc: "Protección de sistemas, APIs y datos frente a amenazas actuales.",
				icon: "shield"
			},
			{
				title: "Software a medida",
				desc: "Soluciones escalables adaptadas a necesidades de negocio concretas.",
				icon: "code"
			},
			{
				title: "Desarrollo web",
				desc: "Aplicaciones web modernas, rápidas y seguras.",
				icon: "globe"
			},
			{
				title: "Desarrollo SaaS",
				desc: "Productos cloud con modelo de suscripción y operación estable.",
				icon: "box"
			},
			{
				title: "Seguridad de la información",
				desc: "Controles para confidencialidad, integridad y disponibilidad.",
				icon: "lock"
			},
			{
				title: "Apps cloud",
				desc: "Aplicaciones diseñadas para ejecutarse de forma nativa en cloud.",
				icon: "cloud"
			},
			{
				title: "Gestión cloud",
				desc: "Optimización, seguridad y monitorización de infraestructura cloud.",
				icon: "server"
			},
			{
				title: "Bases de datos",
				desc: "Arquitecturas de datos seguras, rápidas y preparadas para crecer.",
				icon: "database"
			}
		],
		ctaTitle: "¿Listo para tu proyecto?",
		ctaDesc: "Hablemos para construir una infraestructura segura y moderna.",
		ctaButton: "Contactar"
	},
	home: {
		...en.home,
		heroTitle1: "Desarrollo web",
		heroTitle2: "seguro y escalable",
		heroDesc: "Kernel-Guard construye aplicaciones web de alto rendimiento con enfoque security-first y mecanismos avanzados de defensa.",
		viewArch: "Ver open source",
		viewCompletedProjects: "Casos",
		missionTitle: "Ingeniería web security-first",
		missionP1: "La seguridad real no se añade al final; se diseña desde la base del código, la arquitectura y el proceso de entrega.",
		missionP2: "Nuestro trabajo cubre frontends seguros, APIs reforzadas, administración de datos y operaciones cloud resistentes.",
		techStackTitle: "Nuestro arsenal",
		techStackDesc: "Construimos con tecnologías modernas, medibles y preparadas para entornos exigentes.",
		proof: {
			...en.home.proof,
			badge: "MEDIDO // EVIDENCIA_PUBLICA",
			title: "Evidencia, no presentación",
			desc: "Resumen transparente basado en Lighthouse CLI, prerender y datos públicos de GitHub medidos el 1 de junio de 2026.",
			cards: {
				...en.home.proof.cards,
				languages: {
					label: "Idiomas soportados",
					detail: "Turco, inglés, alemán, japonés, chino, español, francés y coreano."
				}
			},
			footnote: "Los valores se muestran como mediciones, no como claims de marketing."
		}
	},
	projects: {
		...en.projects,
		badge: "DIRECTORIO // OPEN_SOURCE",
		title1: "Proyectos",
		title2: "Open Source",
		desc: "Índice de herramientas abiertas, módulos de seguridad e iniciativas de sistemas.",
		colName: "Proyecto",
		colDesc: "Descripción",
		colTech: "Tecnología",
		colLinks: "Enlaces"
	},
	completedProjects: {
		...en.completedProjects,
		title1: "Casos",
		title2: "completados",
		desc: "Portafolio de proyectos web completados y accesibles públicamente.",
		visit: "Ver proyecto"
	},
	projectDetails: {
		...en.projectDetails,
		architectureDiagram: "Arquitectura del sistema",
		technicalOverview: "Resumen técnico",
		marketingOverview: "Propuesta de valor",
		viewSource: "Ver código fuente",
		liveDemo: "Demo en vivo",
		backToProjects: "Volver al directorio"
	},
	footer: {
		...en.footer,
		desc: "Infraestructura web segura, eficiente y resistente para productos digitales modernos.",
		discover: "Explorar",
		connect: "Conectar",
		rights: "Kernel-Guard. Todos los derechos reservados."
	},
	contact: {
		...en.contact,
		title: "Contacto",
		subtitle: "¿Tienes un proyecto o necesitas una revisión de seguridad? Escríbenos."
	}
};
//#endregion
//#region src/translations/fr.ts
var fr = {
	...en,
	seo: {
		...en.seo,
		home: {
			title: "Kernel Guard | Développement web sécurisé et cybersécurité",
			description: "Kernel Guard conçoit des applications web performantes, des backends renforcés et des architectures security-first.",
			keywords: en.seo.home.keywords
		},
		services: {
			title: "Services | Kernel Guard",
			description: "Services de développement web sécurisé, cybersécurité et infrastructure cloud.",
			keywords: en.seo.services.keywords
		}
	},
	nav: {
		home: "Accueil",
		services: "Services",
		openSource: "Open Source",
		completedProjects: "Réalisations",
		github: "GitHub",
		contact: "Contact"
	},
	servicesPage: {
		title: "Services",
		subtitle: "Des solutions technologiques sûres et évolutives pour produits numériques exigeants.",
		services: [
			{
				title: "Design web",
				desc: "Interfaces modernes, lisibles et orientées conversion.",
				icon: "layout"
			},
			{
				title: "Cybersécurité",
				desc: "Protection des systèmes, APIs et données contre les menaces actuelles.",
				icon: "shield"
			},
			{
				title: "Logiciel sur mesure",
				desc: "Solutions évolutives adaptées à vos besoins métier.",
				icon: "code"
			},
			{
				title: "Développement web",
				desc: "Applications web modernes, rapides et sécurisées.",
				icon: "globe"
			},
			{
				title: "Développement SaaS",
				desc: "Produits cloud fiables avec modèle d’abonnement.",
				icon: "box"
			},
			{
				title: "Sécurité de l’information",
				desc: "Contrôles de confidentialité, intégrité et disponibilité.",
				icon: "lock"
			},
			{
				title: "Applications cloud",
				desc: "Applications conçues pour des environnements cloud natifs.",
				icon: "cloud"
			},
			{
				title: "Gestion cloud",
				desc: "Optimisation, sécurité et supervision de l’infrastructure.",
				icon: "server"
			},
			{
				title: "Bases de données",
				desc: "Architectures de données sécurisées, rapides et scalables.",
				icon: "database"
			}
		],
		ctaTitle: "Prêt pour votre projet ?",
		ctaDesc: "Contactez-nous pour construire une infrastructure moderne et sécurisée.",
		ctaButton: "Nous contacter"
	},
	home: {
		...en.home,
		heroTitle1: "Développement web",
		heroTitle2: "sécurisé et scalable",
		heroDesc: "Kernel-Guard construit des applications web performantes avec une approche security-first et des mécanismes de défense avancés.",
		viewArch: "Voir l’open source",
		viewCompletedProjects: "Réalisations",
		missionTitle: "Ingénierie web security-first",
		missionP1: "La sécurité réelle ne s’ajoute pas après coup ; elle se conçoit dès le socle du code, de l’architecture et de la livraison.",
		missionP2: "Nous couvrons les frontends sécurisés, les APIs renforcées, la gestion des données et les opérations cloud résilientes.",
		techStackTitle: "Notre arsenal",
		techStackDesc: "Nous construisons avec des technologies modernes, mesurables et adaptées aux environnements critiques.",
		proof: {
			...en.home.proof,
			badge: "MESURE // PREUVE_PUBLIQUE",
			title: "Des preuves, pas une vitrine",
			desc: "Synthèse qualité basée sur Lighthouse CLI, le prerender et les données GitHub publiques mesurées le 1er juin 2026.",
			cards: {
				...en.home.proof.cards,
				languages: {
					label: "Langues prises en charge",
					detail: "Turc, anglais, allemand, japonais, chinois, espagnol, français et coréen."
				}
			},
			footnote: "Les métriques sont affichées comme mesures, pas comme slogans marketing."
		}
	},
	projects: {
		...en.projects,
		title1: "Projets",
		title2: "Open Source",
		desc: "Index de nos outils ouverts, modules de sécurité et initiatives systèmes.",
		colName: "Projet",
		colDesc: "Description",
		colTech: "Technologies",
		colLinks: "Liens"
	},
	completedProjects: {
		...en.completedProjects,
		title1: "Réalisations",
		title2: "livrées",
		desc: "Portefeuille de projets web terminés et vérifiables.",
		visit: "Voir le projet"
	},
	footer: {
		...en.footer,
		desc: "Infrastructure web sécurisée, performante et résiliente pour produits numériques modernes.",
		discover: "Découvrir",
		connect: "Contact",
		rights: "Kernel-Guard. Tous droits réservés."
	},
	contact: {
		...en.contact,
		title: "Contact",
		subtitle: "Un projet ou un besoin de conseil sécurité ? Écrivez-nous."
	}
};
//#endregion
//#region src/translations/ko.ts
var ko = {
	...en,
	seo: {
		...en.seo,
		home: {
			title: "Kernel Guard | 보안 중심 웹 개발 및 사이버보안",
			description: "Kernel Guard는 고성능 웹 애플리케이션, 강화된 백엔드, security-first 아키텍처를 구축합니다.",
			keywords: en.seo.home.keywords
		},
		services: {
			title: "서비스 | Kernel Guard",
			description: "보안 웹 개발, 사이버보안 컨설팅, 클라우드 인프라 서비스를 제공합니다.",
			keywords: en.seo.services.keywords
		}
	},
	nav: {
		home: "홈",
		services: "서비스",
		openSource: "오픈소스",
		completedProjects: "사례",
		github: "GitHub",
		contact: "문의"
	},
	servicesPage: {
		title: "서비스",
		subtitle: "디지털 제품을 위한 안전하고 확장 가능한 기술 솔루션.",
		services: [
			{
				title: "웹 디자인",
				desc: "명확하고 현대적인 사용자 인터페이스 설계.",
				icon: "layout"
			},
			{
				title: "사이버보안",
				desc: "시스템, API, 데이터를 최신 위협으로부터 보호합니다.",
				icon: "shield"
			},
			{
				title: "맞춤 소프트웨어",
				desc: "비즈니스 요구에 맞춘 확장 가능한 소프트웨어.",
				icon: "code"
			},
			{
				title: "웹 개발",
				desc: "빠르고 안전한 현대적 웹 애플리케이션.",
				icon: "globe"
			},
			{
				title: "SaaS 개발",
				desc: "구독 기반 클라우드 제품 구축.",
				icon: "box"
			},
			{
				title: "정보보안",
				desc: "기밀성, 무결성, 가용성을 위한 보안 제어.",
				icon: "lock"
			},
			{
				title: "클라우드 앱",
				desc: "클라우드 네이티브 환경을 위한 애플리케이션.",
				icon: "cloud"
			},
			{
				title: "클라우드 관리",
				desc: "인프라 최적화, 보안, 모니터링.",
				icon: "server"
			},
			{
				title: "데이터베이스",
				desc: "안전하고 빠르며 확장 가능한 데이터 아키텍처.",
				icon: "database"
			}
		],
		ctaTitle: "프로젝트를 시작할 준비가 되셨나요?",
		ctaDesc: "안전하고 현대적인 인프라를 함께 구축해 보세요.",
		ctaButton: "문의하기"
	},
	home: {
		...en.home,
		heroTitle1: "안전하고 확장 가능한",
		heroTitle2: "웹 개발",
		heroDesc: "Kernel-Guard는 security-first 접근과 고급 방어 메커니즘으로 고성능 웹 애플리케이션을 구축합니다.",
		viewArch: "오픈소스 보기",
		viewCompletedProjects: "사례 보기",
		missionTitle: "Security-first 웹 엔지니어링",
		missionP1: "진짜 보안은 나중에 덧붙이는 것이 아니라 코드, 아키텍처, 배포 프로세스의 기초부터 설계되어야 합니다.",
		missionP2: "보안 프론트엔드, 강화된 API, 데이터 관리, 탄력적인 클라우드 운영까지 다룹니다.",
		techStackTitle: "기술 스택",
		techStackDesc: "현대적이고 측정 가능한 기술로 안정적인 솔루션을 만듭니다.",
		proof: {
			...en.home.proof,
			badge: "측정됨 // 공개_증거",
			title: "프레젠테이션이 아닌 증거",
			desc: "2026년 6월 1일 Lighthouse CLI, prerender 결과, 공개 GitHub 데이터를 기반으로 한 품질 요약.",
			cards: {
				...en.home.proof.cards,
				languages: {
					label: "지원 언어",
					detail: "터키어, 영어, 독일어, 일본어, 중국어, 스페인어, 프랑스어, 한국어."
				}
			},
			footnote: "마케팅 문구가 아니라 실제 측정값을 표시합니다."
		}
	},
	projects: {
		...en.projects,
		title1: "오픈소스",
		title2: "프로젝트",
		desc: "보안 도구, 시스템 프로그래밍 프로젝트, 공개 소스 이니셔티브 목록.",
		colName: "프로젝트",
		colDesc: "설명",
		colTech: "기술",
		colLinks: "링크"
	},
	completedProjects: {
		...en.completedProjects,
		title1: "완료된",
		title2: "프로젝트",
		desc: "완료된 웹 개발 사례와 공개 포트폴리오.",
		visit: "프로젝트 보기"
	},
	footer: {
		...en.footer,
		desc: "현대 디지털 제품을 위한 안전하고 빠르며 탄력적인 웹 인프라.",
		discover: "탐색",
		connect: "연결",
		rights: "Kernel-Guard. 모든 권리 보유."
	},
	contact: {
		...en.contact,
		title: "문의",
		subtitle: "프로젝트 또는 보안 상담이 필요하시면 연락해 주세요."
	}
};
//#endregion
//#region src/context/LanguageContext.tsx
var LanguageContext = createContext(void 0);
var translations = {
	tr,
	en,
	de,
	ja,
	"zh-CN": zhCN,
	es,
	fr,
	ko
};
var LanguageProvider = ({ children, initialLanguage = "tr" }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const t = translations[language];
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value: {
			language,
			setLanguage,
			t
		},
		children
	});
};
var useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === void 0) throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
};
//#endregion
//#region src/config/site.ts
var DEFAULT_SITE_URL = "https://www.kernelguard.net";
var SITE_EMAILS = {
	contact: "contact@kernelguard.net",
	support: "support@kernelguard.net",
	security: "security@kernelguard.net",
	legal: "legal@kernelguard.net",
	privacy: "privacy@kernelguard.net",
	sales: "sales@kernelguard.net"
};
function mailto(email) {
	return `mailto:${email}`;
}
function normalizeSiteUrl(value) {
	return value.trim().replace(/\/$/, "");
}
function normalizeCanonicalPath(inputPath) {
	const withoutQuery = inputPath.split("?")[0]?.split("#")[0] ?? "/";
	const deduped = (withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`).replace(/\/+/g, "/");
	if (deduped === "/") return "/";
	return deduped.endsWith("/") ? deduped : `${deduped}/`;
}
function buildCanonicalUrl(siteUrl, path) {
	return `${normalizeSiteUrl(siteUrl)}${normalizeCanonicalPath(path)}`;
}
//#endregion
export { normalizeCanonicalPath as a, useLanguage as c, mailto as i, SITE_EMAILS as n, normalizeSiteUrl as o, buildCanonicalUrl as r, LanguageProvider as s, DEFAULT_SITE_URL as t };
