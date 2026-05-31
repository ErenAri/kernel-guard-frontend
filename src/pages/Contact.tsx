import { Mail, MapPin, Github, Send } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO
        title={t.contact.seo.title}
        description={t.contact.seo.description}
        keywords={t.contact.seo.keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            {t.contact.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border bg-surface p-8 h-fit"
          >
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.contact.info.title}</h2>
            <p className="text-foreground/70 font-light leading-relaxed mb-10">
              {t.contact.info.desc}
            </p>

            <div className="space-y-6">
              <a
                href="mailto:iletisim@kernelguard.net"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-foreground/50">{t.contact.info.email}</span>
                  <span className="font-medium">iletisim@kernelguard.net</span>
                </span>
              </a>

              <div className="flex items-center gap-4 text-foreground/80">
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-foreground/50">{t.contact.info.location}</span>
                  <span className="font-medium">{t.contact.info.locationValue}</span>
                </span>
              </div>

              <a
                href="https://github.com/ErenAri/kernel-guard-frontend"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary">
                  <Github className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-foreground/50">{t.contact.info.social}</span>
                  <span className="font-medium">{t.contact.info.github}</span>
                </span>
              </a>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="border border-border bg-surface p-8 space-y-6"
          >
            <input type="hidden" name="access_key" value={accessKey || ''} />
            <input type="hidden" name="subject" value="Kernel Guard contact form" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t.contact.form.namePlaceholder}
                className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t.contact.form.emailPlaceholder}
                className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full resize-none border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={!accessKey}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-primary px-8 py-4 font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>{t.contact.form.submit}</span>
              <Send className="h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
