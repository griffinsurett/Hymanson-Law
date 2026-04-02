// src/integrations/preferences/ui/consent/components/CookiePreferencesButton.tsx
import { useEffect, useState, lazy, Suspense, memo } from "react";
import { subscribeToCookiePreferencesRequests } from "@/integrations/preferences/consent/core/utils/events";
import Icon from "@/components/Icon";

const CookiePreferencesModal = lazy(() => import("./CookiePreferencesModal"));

function CookiePreferencesButton() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    return subscribeToCookiePreferencesRequests(() => {
      setShowModal(true);
    });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        aria-label="Manage cookie preferences"
        className="inline-flex items-center gap-2 border-0 bg-transparent p-0 text-current transition-colors duration-200 hover:text-white"
      >
        <Icon icon="lucide:settings" size="sm" className="text-current" />
        <span className="text-sm leading-6 font-plus-jakarta">Your Privacy Choices</span>
      </button>

      {showModal && (
        <Suspense fallback={null}>
          <CookiePreferencesModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </Suspense>
      )}
    </>
  );
}

export default memo(CookiePreferencesButton);
