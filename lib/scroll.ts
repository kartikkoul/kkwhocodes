import type Lenis from "lenis";

/** Offset from top when scrolling to in-page sections (clears fixed header). */
export const SECTION_SCROLL_OFFSET = -96;

export const SECTION_SCROLL_DURATION = 1.35;

export function getSectionIdFromHref(href: string): string | null {
  try {
    const url = new URL(href, window.location.origin);
    if (url.pathname !== "/" && url.pathname !== window.location.pathname) {
      return null;
    }
    const id = url.hash.replace(/^#/, "");
    return id || null;
  } catch {
    return null;
  }
}

export function scrollToSection(
  lenis: Lenis | null,
  sectionId: string,
  options?: { immediate?: boolean },
) {
  const target = document.getElementById(sectionId);
  if (!target) return false;

  if (lenis) {
    lenis.scrollTo(target, {
      offset: SECTION_SCROLL_OFFSET,
      duration: options?.immediate ? 0 : SECTION_SCROLL_DURATION,
      immediate: options?.immediate,
    });
    return true;
  }

  const top =
    target.getBoundingClientRect().top +
    window.scrollY +
    SECTION_SCROLL_OFFSET;
  window.scrollTo({ top, behavior: options?.immediate ? "auto" : "smooth" });
  return true;
}
