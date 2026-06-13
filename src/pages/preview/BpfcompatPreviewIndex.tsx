/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Landing index for the bpfcompat product-page design previews.
 */

import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow, PreviewNote, useLangPrefix } from '../bpfcompat/parts';

const CONCEPTS = [
  {
    to: '/preview/bpfcompat/launch',
    tag: 'Apple-style launch',
    name: 'Launch',
    blurb: 'The Narrative story told as a product launch: centered display type, cinematic spacing, scroll reveals, a "by the numbers" band, and a full Documentation section. Sits inside the open-source project family (breadcrumb, repo evidence, source/docs CTAs).',
    notes: ['Cinematic, centered hero', 'Documentation section + GitHub docs links', 'Native project-page elements'],
  },
  {
    to: '/preview/bpfcompat/verdict',
    tag: 'Recommended',
    name: 'The Verdict Matrix',
    blurb: 'Evidence-first flagship. The real pass/fail matrix is the centerpiece, framed in the site’s "evidence over claims" voice. Clear in 10 seconds, credible to engineers.',
    notes: ['Jargon-free headline', 'Interactive matrix + evidence drawer', 'Honest Technical Preview framing'],
  },
  {
    to: '/preview/bpfcompat/proof-loop',
    tag: 'Animated',
    name: 'The Proof Loop',
    blurb: 'The hero performs the product: a looping simulated run boots kernels and fills the matrix live, ending on a real FAIL. The failure is the sales pitch.',
    notes: ['Live "SIMULATED RUN" terminal', 'Dedicated exit-2 band', 'Most motion-forward'],
  },
  {
    to: '/preview/bpfcompat/narrative',
    tag: 'Scroll story',
    name: 'Narrative — Will It Load?',
    blurb: 'A developer-marketing scroll built on the pain: it works on your kernel, will it load on theirs? Real libbpf errors carry the credibility.',
    notes: ['Pain-first storytelling', 'Pinned anchor subnav', 'Real kernel error texture'],
  },
];

export default function BpfcompatPreviewIndex() {
  const prefix = useLangPrefix();
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10"><PreviewNote /></div>
        <Eyebrow>Design previews</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
          bpfcompat product page — <span className="font-semibold">three directions</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-foreground/70 max-w-3xl mb-16 leading-relaxed">
          Same product, same Carbon design system, three different ways to tell the story. Open each
          one, toggle light/dark in the navbar, and pick a direction. They all share the same
          interactive compatibility matrix and adoption paths.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CONCEPTS.map((c) => (
            <NavLink
              key={c.to}
              to={`${prefix}${c.to}`}
              className="group border border-border bg-surface p-8 flex flex-col hover:border-primary transition-colors"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-primary mb-6">{c.tag}</div>
              <h2 className="text-2xl font-medium text-foreground mb-4">{c.name}</h2>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">{c.blurb}</p>
              <ul className="space-y-2 mb-8">
                {c.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-xs font-mono text-foreground/60">
                    <span className="mt-1 w-2 h-2 bg-primary shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
                View this design
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
