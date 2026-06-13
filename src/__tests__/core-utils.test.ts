import { describe, it, expect } from 'vitest';
import { localizedText } from '../i18n/text';
import { normalizeCanonicalPath } from '../config/site';

describe('localizedText', () => {
  it('returns the requested language when present', () => {
    expect(localizedText({ en: 'Hello', tr: 'Merhaba' }, 'tr')).toBe('Merhaba');
  });
  it('falls back to English when the language is missing', () => {
    expect(localizedText({ en: 'Hello', tr: 'Merhaba' }, 'de')).toBe('Hello');
  });
  it('returns empty string when nothing is available', () => {
    expect(localizedText({}, 'en')).toBe('');
  });
});

describe('normalizeCanonicalPath', () => {
  it('keeps the root as "/"', () => {
    expect(normalizeCanonicalPath('/')).toBe('/');
  });
  it('appends a trailing slash', () => {
    expect(normalizeCanonicalPath('/projects/bpfcompat')).toBe('/projects/bpfcompat/');
  });
  it('leaves an already-normalized path unchanged', () => {
    expect(normalizeCanonicalPath('/projects/bpfcompat/')).toBe('/projects/bpfcompat/');
  });
  it('collapses duplicate slashes', () => {
    expect(normalizeCanonicalPath('/projects//bpfcompat')).toBe('/projects/bpfcompat/');
  });
});
