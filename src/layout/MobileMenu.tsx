import React, { useEffect, useState, useCallback } from "react";

function MobileMenu({
  setActive,
  closeMenu,
  children,
}: {
  setActive?: (active: boolean) => void; // Optional if not always used
  closeMenu: () => void;
  children?: React.ReactNode; // Add children here
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuVisible) {
      setShowOverlay(true);
    }
  }, [menuVisible]);

  const handleCloseMenu = useCallback(() => {
    setShowOverlay(false);
    setTimeout(() => {
      closeMenu();
    }, 500);
  }, [closeMenu]);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("#mobileMenu")) {
        return;
      }
      if (!menuVisible) return;
      handleCloseMenu();
    };

    document.addEventListener("click", handler);
    const timer = setTimeout(() => {
      setMenuVisible(true);
    }, 10);

    return () => {
      document.removeEventListener("click", handler);
      clearTimeout(timer);
    };
  }, [menuVisible, handleCloseMenu]);

  useEffect(() => {
    if (!showOverlay) {
      const timer = setTimeout(() => {
        setActive?.(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showOverlay, setActive]);

  const overlayClasses = `fixed inset-0 transition-opacity duration-500 ${
    showOverlay ? "opacity-50" : "opacity-0 pointer-events-none"
  } bg-black`;

  const menuClasses = `fixed bottom-0 right-0 top-0 h-screen w-[70%] overflow-y-auto bg-white pt-5 dark:bg-dtmain dark:text-white ${
    menuVisible
      ? showOverlay
        ? "animate-slideIn"
        : "animate-slideOutDing"
      : "hidden"
  }`;

  const leftShadowStyle = {
    boxShadow: "-4px 0 15px -4px rgba(0, 0, 0, 0.5)",
  };

  return (
    <section className="font-work-sans fixed inset-0 text-xl">
      <div className={overlayClasses} onClick={handleCloseMenu}></div>

      <div className={menuClasses} style={leftShadowStyle} id="mobileMenu">
        {children && <div className="p-4">{children}</div>}{" "}
        {/* Render children */}
      </div>
    </section>
  );
}

export default MobileMenu;
