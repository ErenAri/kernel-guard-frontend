import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import { projects } from '../src/data/projects';

type DiagramWindow = Window & typeof globalThis;

const OUTPUT_DIR = resolve('public/generated/project-diagrams');
const MOCK_BBOX = { x: 0, y: 0, width: 666, height: 666 };
const DIAGRAM_THEME = 'dark';

function setGlobalProperty(key: string, value: unknown) {
  Object.defineProperty(globalThis, key, {
    configurable: true,
    enumerable: true,
    writable: true,
    value,
  });
}

function installBrowserGlobals() {
  const dom = new JSDOM('<!doctype html><html lang="en"><body id="cy"><svg id="svg"></svg></body></html>', {
    pretendToBeVisual: true,
    resources: 'usable',
    beforeParse(window) {
      window.Element.prototype.getBBox = () => MOCK_BBOX;
      window.Element.prototype.getComputedTextLength = () => 200;
      window.SVGElement.prototype.getBBox = () => MOCK_BBOX;
      window.SVGElement.prototype.getComputedTextLength = () => 200;
    },
  });

  const window = dom.window as DiagramWindow;
  setGlobalProperty('window', window);
  setGlobalProperty('document', window.document);
  setGlobalProperty('navigator', window.navigator);
  setGlobalProperty('Element', window.Element);
  setGlobalProperty('HTMLElement', window.HTMLElement);
  setGlobalProperty('SVGElement', window.SVGElement);
  setGlobalProperty('Node', window.Node);
  setGlobalProperty('DOMParser', window.DOMParser);
  setGlobalProperty('MutationObserver', window.MutationObserver);
}

async function renderDiagram(mermaid: typeof import('mermaid').default, diagram: string, diagramId: string) {
  const { svg } = await mermaid.render(diagramId, diagram);
  return svg;
}

async function main() {
  rmSync(OUTPUT_DIR, { recursive: true, force: true });
  mkdirSync(OUTPUT_DIR, { recursive: true });

  installBrowserGlobals();

  const { default: mermaid } = await import('mermaid');

  mermaid.initialize({
    startOnLoad: false,
    theme: DIAGRAM_THEME,
    securityLevel: 'loose',
    fontFamily: 'Inter, sans-serif',
    deterministicIds: true,
    deterministicIDSeed: 'kernel-guard-project-diagrams',
  });

  const generated: string[] = [];

  for (const project of projects) {
    if (!project.diagram) {
      continue;
    }

    const svg = await renderDiagram(mermaid, project.diagram, `project-${project.id}`);
    const filePath = resolve(OUTPUT_DIR, `${project.id}.svg`);
    writeFileSync(filePath, svg, 'utf8');
    generated.push(filePath);
  }

  console.log(`Generated ${generated.length} project diagrams in ${OUTPUT_DIR}`);
}

void main();
