import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { c as createLucideIcon, u as useLanguage, S as SEO, M as Mail, G as Github } from "../entry-server.js";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "cookie";
import "set-cookie-parser";
import "react-dom";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        console.error("Form submission failed:", data.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      if (submitStatus !== "error") {
        setTimeout(() => setSubmitStatus("idle"), 5e3);
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background pt-32 pb-24", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: t.contact.seo.title,
        description: t.contact.seo.description,
        keywords: t.contact.seo.keywords
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-16",
          initial: "hidden",
          animate: "visible",
          variants: fadeInUp,
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight", children: t.contact.title }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto font-light", children: t.contact.subtitle })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: "hidden",
            animate: "visible",
            variants: staggerContainer,
            className: "space-y-10",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(motion.h2, { variants: fadeInUp, className: "text-2xl font-medium text-foreground mb-6", children: t.contact.info.title }),
                /* @__PURE__ */ jsx(motion.p, { variants: fadeInUp, className: "text-foreground/70 mb-8 leading-relaxed font-light", children: t.contact.info.desc })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1", children: t.contact.info.email }),
                    /* @__PURE__ */ jsx("a", { href: "mailto:iletisim@kernelguard.net", className: "text-foreground text-lg hover:text-primary transition-colors", children: "iletisim@kernelguard.net" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1", children: t.contact.info.location }),
                    /* @__PURE__ */ jsx("p", { className: "text-foreground text-lg", children: t.contact.info.locationValue })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "pt-8 border-t border-border/50", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground/60 uppercase tracking-wider mb-6", children: t.contact.info.social }),
                /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://github.com/Kernel-Guard",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface hover:text-primary hover:border-primary/50 transition-all group",
                    "aria-label": t.contact.info.github,
                    children: /* @__PURE__ */ jsx(Github, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "bg-surface border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 relative z-10", children: [
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "subject", value: "New Contact Form Submission - Kernel Guard" }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "from_name", value: "Kernel Guard Website" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground/80 mb-2", children: t.contact.form.name }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      required: true,
                      placeholder: t.contact.form.namePlaceholder,
                      className: "w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground/80 mb-2", children: t.contact.form.email }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      required: true,
                      placeholder: t.contact.form.emailPlaceholder,
                      className: "w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-foreground/80 mb-2", children: t.contact.form.message }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "message",
                      name: "message",
                      required: true,
                      rows: 5,
                      placeholder: t.contact.form.messagePlaceholder,
                      className: "w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    }
                  )
                ] }),
                submitStatus === "success" && /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg flex items-start gap-3",
                    children: [
                      /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm", children: t.contact.form.success })
                    ]
                  }
                ),
                submitStatus === "error" && /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg flex items-start gap-3",
                    children: [
                      /* @__PURE__ */ jsx(CircleAlert, { className: "w-5 h-5 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm", children: t.contact.form.error })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "w-full bg-primary text-primary-foreground font-medium rounded-lg px-6 py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group",
                    children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                      t.contact.form.sending
                    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" }),
                      t.contact.form.submit
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-foreground/40 mt-4", children: "Powered by Web3Forms" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Contact as default
};
