import { Layout, Server, Database, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SecurityTerminal from '../components/SecurityTerminal';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Layout className="w-6 h-6 text-primary" />,
      title: t.home.features.frontend.title,
      description: t.home.features.frontend.desc,
      link: '/services/secure-frontend'
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: t.home.features.backend.title,
      description: t.home.features.backend.desc,
      link: '/services/hardened-backend'
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: t.home.features.data.title,
      description: t.home.features.data.desc,
      link: '/services/data-protection'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: t.home.features.performance.title,
      description: t.home.features.performance.desc,
      link: '/services/high-performance'
    }
  ];

  return (
    <div className="flex flex-col bg-background">
      <SEO 
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
      />
      {/* Hero Section - IBM Style */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl relative z-10">
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.1] mb-8">
                {t.home.heroTitle1} <br />
                <span className="font-semibold">{t.home.heroTitle2}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl leading-relaxed font-light">
                {t.home.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-between px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors w-full sm:w-64"
                >
                  <span className="font-medium">{t.home.viewArch}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/completed-projects"
                  className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64"
                >
                  <span className="font-medium">{t.home.viewCompletedProjects}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://github.com/Kernel-Guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64"
                >
                  <span className="font-medium">{t.home.githubRepo}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Animation Container */}
            <div className="hidden lg:flex justify-center items-center relative">
              <SecurityTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Editorial Style */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          >
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-6">{t.home.missionTitle}</h2>
            </div>
            <div className="lg:col-span-8 space-y-8 text-lg text-foreground leading-relaxed font-light">
              <p>{t.home.missionP1}</p>
              <p>{t.home.missionP2}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="py-24 border-t border-border bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-light mb-4">{t.home.techStackTitle}</h2>
          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">{t.home.techStackDesc}</p>
        </div>
        
        <div className="relative w-full flex overflow-hidden">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Track */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-8 px-4 items-center">
              {['React', 'TypeScript', 'Node.js', 'Rust', 'Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'WebAssembly'].map((tech, i) => (
                <div key={i} className="px-6 py-3 border border-border bg-background text-foreground font-mono text-lg font-medium shadow-[0_0_15px_rgba(15,98,254,0.1)]">
                  {tech}
                </div>
              ))}
            </div>
            {/* Duplicate Set for infinite loop */}
            <div className="flex gap-8 px-4 items-center">
              {['React', 'TypeScript', 'Node.js', 'Rust', 'Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'WebAssembly'].map((tech, i) => (
                <div key={`dup-${i}`} className="px-6 py-3 border border-border bg-background text-foreground font-mono text-lg font-medium shadow-[0_0_15px_rgba(15,98,254,0.1)]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              // Bento Grid layout logic
              const isLarge = index === 0 || index === 3;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  className={`${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  <Link 
                    to={feature.link} 
                    className="group relative block h-full p-8 bg-surface border border-border hover:border-primary/50 transition-colors overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-12">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                      <p className="text-foreground/80 text-base leading-relaxed font-light flex-grow">
                        {feature.description}
                      </p>
                      <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Principles Section - Startup Focus */}
      <section className="py-24 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-16 max-w-2xl">{t.home.principles.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            {t.home.principles.items.map((item: any, index: number) => (
              <div key={index} className={`pt-8 md:pt-0 ${index === 0 ? 'md:pr-8' : index === 1 ? 'md:px-8' : 'md:pl-8'}`}>
                <div className="text-xl font-medium text-primary mb-4">{item.title}</div>
                <div className="text-base font-light leading-relaxed text-foreground/80">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Build in Public */}
      <section className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-6">{t.home.community.title}</h2>
            <p className="text-xl font-light text-foreground/70 mb-10 leading-relaxed">
              {t.home.community.desc}
            </p>
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
            >
              <span className="font-medium">{t.nav.github}</span>
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
