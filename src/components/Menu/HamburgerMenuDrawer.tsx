// src/components/HamburgerMenuDrawer.tsx
/**
 * Mobile Menu Drawer Template
 *
 * Manages open/close state for mobile menu with checkbox-based hamburger button.
 */

import { useState, type ReactNode } from "react";
import Modal from "@/components/Modal";
import MobileMenuItem from "@/components/LoopComponents/Menu/MobileMenuItem";
import HamburgerButton from "./HamburgerButton";

interface MobileMenuDrawerProps {
  items: any[];
  className?: string;
  hamburgerTransform?: boolean;
  closeButton?: boolean;
  children?: ReactNode;
}

export default function MobileMenuDrawer({
  items,
  className = "",
  hamburgerTransform = true,
  closeButton = false,
  children,
}: MobileMenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Checkbox-based Hamburger Button */}
      <HamburgerButton
        isOpen={isOpen}
        onChange={setIsOpen}
        hamburgerTransform={hamburgerTransform}
        ariaLabel={isOpen ? "Close menu" : "Open menu"}
        id="mobile-menu-toggle"
      />

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="top-full"
        className="menu-mobile-dropdown mt-[5.5rem] w-full overflow-hidden rounded-none border-0 bg-white p-0 shadow-none"
        overlayClass="bg-transparent"
        closeButton={closeButton}
        ariaLabel="Mobile navigation menu"
        ssr={false}
      >
        <nav
          className={`${className} max-h-[calc(100vh-5.5rem)] overflow-y-auto px-6 py-5`}
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <MobileMenuItem
                key={item.slug || item.id}
                {...item}
                onNavigate={handleNavigate}
              />
            ))}
          </ul>

          {children && (
            <div className="mt-6 flex flex-col justify-center space-y-3 border-t border-black/10 pt-5">
              {children}
            </div>
          )}
        </nav>
      </Modal>
    </>
  );
}
