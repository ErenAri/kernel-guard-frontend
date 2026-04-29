import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append Web3Forms access key from environment variables
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('Form submission failed:', data.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after a few seconds
      if (submitStatus !== 'error') {
          setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={t.contact.seo.title}
        description={t.contact.seo.description}
        keywords={t.contact.seo.keywords}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight">
            {t.contact.title}
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl font-medium text-foreground mb-6">
                {t.contact.info.title}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/70 mb-8 leading-relaxed font-light">
                {t.contact.info.desc}
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">
                    {t.contact.info.email}
                  </h3>
                  <a href="mailto:iletisim@kernelguard.net" className="text-foreground text-lg hover:text-primary transition-colors">
                    iletisim@kernelguard.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">
                    {t.contact.info.location}
                  </h3>
                  <p className="text-foreground text-lg">
                    {t.contact.info.locationValue}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 border-t border-border/50">
              <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-6">
                {t.contact.info.social}
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Kernel-Guard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface hover:text-primary hover:border-primary/50 transition-all group"
                  aria-label={t.contact.info.github}
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Optional Subject for Web3Forms */}
              <input type="hidden" name="subject" value="New Contact Form Submission - Kernel Guard" />
              <input type="hidden" name="from_name" value="Kernel Guard Website" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{t.contact.form.success}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{t.contact.form.error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-6 py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-foreground/40 mt-4">
                Powered by Web3Forms
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
