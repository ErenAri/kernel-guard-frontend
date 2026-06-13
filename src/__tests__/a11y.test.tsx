import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { CompatibilityMatrix } from '../pages/bpfcompat/parts';

/**
 * Accessibility smoke test for the compatibility matrix — the page's most
 * interactive component. axe-core's color-contrast rule is disabled because
 * jsdom has no layout engine; contrast is checked manually (see cellClasses).
 */

async function seriousViolations(container: HTMLElement) {
  const results = await axe.run(container, {
    rules: { 'color-contrast': { enabled: false } },
  });
  return results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
}

describe('compatibility matrix accessibility', () => {
  it('has no serious or critical axe violations', async () => {
    const { container } = render(<CompatibilityMatrix animateOnView={false} />);
    const violations = await seriousViolations(container);
    expect(violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
  });

  it('gives every interactive cell an accessible name', () => {
    const { container } = render(<CompatibilityMatrix animateOnView={false} />);
    const buttons = Array.from(container.querySelectorAll('button'));
    expect(buttons.length).toBeGreaterThan(0);
    for (const button of buttons) {
      const name = button.getAttribute('aria-label') || button.textContent?.trim() || '';
      expect(name.length, 'a cell button is missing an accessible name').toBeGreaterThan(0);
    }
  });
});
