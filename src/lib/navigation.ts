import type { MouseEvent } from 'react';

export function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

export function handleInternalNavigationClick(event: MouseEvent<HTMLElement>, currentPathname: string, href: string, afterNavigate?: () => void) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (!href.startsWith('/')) return;

  const [targetPath, rawHash] = href.split('#');
  const normalizedTarget = targetPath || '/';

  if (normalizedTarget !== currentPathname) return;

  event.preventDefault();
  afterNavigate?.();

  if (rawHash) {
    document.getElementById(rawHash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    return;
  }

  scrollToPageTop();
}
