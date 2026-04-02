// src/components/LoopComponents/AccordionItem.tsx
import type { ReactNode } from "react";

export interface AccordionItemProps {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  isExpanded: boolean;
  onToggle: () => void;
  headerClassName?: string;
  headerSlot?: ReactNode;
}

export default function AccordionItem({
  id,
  title,
  className = "",
  children,
  isExpanded,
  onToggle,
  headerClassName = "",
  headerSlot,
}: AccordionItemProps) {
  return (
    <div className={`border-b border-heading/12 ${className}`}>
      <button
        type="button"
        className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 text-left transition-colors duration-200 md:gap-8 md:py-8 ${headerClassName}`}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`${id}-content`}
      >
        {headerSlot ? (
          <div className="min-w-0">{headerSlot}</div>
        ) : (
          <div className="min-w-0">
            <h3 className="text-[1.55rem] font-medium leading-[1.15] tracking-[-0.03em] text-heading md:text-[2rem]">
              {title}
            </h3>
          </div>
        )}
        <span
          className={`inline-flex h-10 w-10 items-center justify-center text-[2.35rem] font-light leading-none text-heading transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isExpanded && children && (
        <div id={`${id}-content`} className="pb-8 pr-12 md:pb-10 md:pr-16">
          <div className="prose prose-surface max-w-3xl text-text">{children}</div>
        </div>
      )}
    </div>
  );
}
