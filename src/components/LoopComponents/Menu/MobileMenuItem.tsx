// src/components/LoopComponents/Menu/MobileMenuItem.tsx
/**
 * Mobile Menu Item Component
 *
 * Collapsible menu item for mobile navigation.
 * Accessible navigation pattern with proper ARIA.
 * Handles parent items with hasPage: false (no URL) by showing expand button only.
 */

import { useState } from "react";

interface MobileMenuItemProps {
  title: string;
  url?: string;
  slug: string;
  children?: any[];
  openInNewTab?: boolean;
  onNavigate: () => void;
  level?: number;
}

export default function MobileMenuItem({
  title,
  url,
  slug,
  children = [],
  openInNewTab = false,
  onNavigate,
  level = 0,
}: MobileMenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = children.length > 0;
  const nestedOffset = level > 0 ? level * 16 : 0;

  // Parent with children - always show expand/collapse button
  if (hasChildren) {
    // If parent has a URL, show clickable link + expand button
    // If parent has no URL (hasPage: false), only show expand button
    const hasUrl = Boolean(url);

    return (
      <li>
        <div
          className="flex items-center justify-between gap-2 rounded-xl transition-colors"
          style={{ paddingLeft: `${nestedOffset}px` }}
        >
          {hasUrl ? (
            <a
              href={url}
              onClick={onNavigate}
              target={openInNewTab ? "_blank" : undefined}
              rel={openInNewTab ? "noopener noreferrer" : undefined}
              className="flex-1 rounded-xl px-4 py-3 text-base font-normal text-text transition-colors hover:bg-white/10 hover:text-primary [font-family:var(--font-plus-jakarta)]"
            >
              {title}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 rounded-xl px-4 py-3 text-left text-base font-normal text-text transition-colors hover:bg-white/10 hover:text-primary [font-family:var(--font-plus-jakarta)]"
            >
              {title}
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-xl p-3 text-text transition-colors hover:bg-white/10 hover:text-primary"
            aria-expanded={isExpanded}
            aria-controls={`mobile-submenu-${slug}`}
            aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
            type="button"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {isExpanded && (
          <ul id={`mobile-submenu-${slug}`} className="mt-1 space-y-1">
            {children.map((child) => (
              <MobileMenuItem
                key={child.slug || child.id}
                {...child}
                onNavigate={onNavigate}
                level={level + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Leaf item with no children - must have URL to be clickable
  if (!url) {
    return null; // Don't render items without URL and without children
  }

  return (
    <li>
      <a
        href={url}
        onClick={onNavigate}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="block rounded-xl px-4 py-3 text-base text-text transition-colors hover:bg-white/10 hover:text-primary [font-family:var(--font-plus-jakarta)]"
        style={{ paddingLeft: `${nestedOffset + 16}px` }}
      >
        {title}
      </a>
    </li>
  );
}
