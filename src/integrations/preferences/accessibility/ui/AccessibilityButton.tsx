// src/integrations/preferences/ui/accessibility/components/AccessibilityButton.tsx
/**
 * Accessibility Button (Default UI)
 *
 * Triggers the accessibility modal. For custom UI, use the
 * useAccessibility hook from core directly.
 */
import { useState, lazy, Suspense, memo } from "react";
import Icon from "@/components/Icon";

const AccessibilityModal = lazy(() => import("./AccessibilityModal"));

function AccessibilityButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        aria-label="Manage reading preferences"
        aria-expanded={showModal}
        className="inline-flex items-center gap-2 border-0 bg-transparent p-0 text-current transition-colors duration-200 hover:text-white"
      >
        <Icon icon="lucide:book-open" size="sm" className="text-current" />
        <span className="text-sm leading-6 font-plus-jakarta">Reading Preferences</span>
      </button>

      {showModal && (
        <Suspense fallback={null}>
          <AccessibilityModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </>
  );
}

export default memo(AccessibilityButton);
