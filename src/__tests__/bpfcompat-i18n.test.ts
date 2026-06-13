import { describe, it, expect } from 'vitest';
import { BP_CONTENT, getBpStrings } from '../pages/bpfcompat/content';
import { SUPPORTED_LANGUAGES } from '../i18n/route';

/**
 * Guards the bpfcompat page's localization: every supported language must exist
 * and have the exact same shape as the English source — no missing translations,
 * no mismatched list lengths. This is what keeps "8 languages" actually true.
 */

type Json = unknown;

function shape(value: Json): Json {
  if (Array.isArray(value)) return { __array_len: value.length, item: value.length ? shape(value[0]) : null };
  if (value && typeof value === 'object') {
    const out: Record<string, Json> = {};
    for (const k of Object.keys(value as Record<string, Json>).sort()) {
      out[k] = shape((value as Record<string, Json>)[k]);
    }
    return out;
  }
  return typeof value;
}

describe('bpfcompat i18n content', () => {
  it('covers every supported language', () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      expect(BP_CONTENT[lang], `missing language: ${lang}`).toBeTruthy();
    }
  });

  it('every language matches the English structure exactly', () => {
    const reference = shape(BP_CONTENT.en);
    for (const lang of SUPPORTED_LANGUAGES) {
      expect(shape(BP_CONTENT[lang]), `shape mismatch for ${lang}`).toEqual(reference);
    }
  });

  it('has the expected list lengths in every language', () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      const c = BP_CONTENT[lang];
      expect(c.problem.cards).toHaveLength(3);
      expect(c.stats).toHaveLength(4);
      expect(c.how.stages).toHaveLength(4);
      expect(c.docs.items).toHaveLength(6);
      expect(c.adopt.webSteps).toHaveLength(3);
      expect(c.scope.isList).toHaveLength(4);
      expect(c.scope.isNotList).toHaveLength(3);
    }
  });

  it('never ships an empty string', () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      const walk = (v: Json, path: string): void => {
        if (typeof v === 'string') {
          expect(v.trim().length, `empty string at ${lang}.${path}`).toBeGreaterThan(0);
        } else if (Array.isArray(v)) {
          v.forEach((x, i) => walk(x, `${path}[${i}]`));
        } else if (v && typeof v === 'object') {
          for (const [k, val] of Object.entries(v as Record<string, Json>)) walk(val, `${path}.${k}`);
        }
      };
      walk(BP_CONTENT[lang], '');
    }
  });

  it('falls back to English for an unknown language', () => {
    // @ts-expect-error intentionally passing an unsupported code
    expect(getBpStrings('xx')).toBe(BP_CONTENT.en);
  });
});
