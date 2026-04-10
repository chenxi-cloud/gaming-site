import type { ReactNode } from "react";

const WIKI_BASE = "https://en.wikipedia.org/wiki";

type WikiLinkProps = {
  /** Wikipedia article title path (use underscores, e.g. `Return_to_player`). */
  page: string;
  children: ReactNode;
  className?: string;
};

/**
 * Anchor text link to English Wikipedia. Opens in a new tab.
 */
export function WikiLink({ page, children, className }: WikiLinkProps) {
  const href = `${WIKI_BASE}/${page}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "text-yellow-500/90 underline decoration-yellow-600/40 underline-offset-2 hover:text-yellow-400"
      }
    >
      {children}
    </a>
  );
}
