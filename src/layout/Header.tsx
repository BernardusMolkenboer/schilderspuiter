import { Logo } from "./header/Logo";
import { DesktopMenu } from "./header/DesktopMenu";
import { MobileMenu } from "./header/MobileMenu";

function Header() {
  return (
    <header className="fixed z-50 w-full border-b border-border bg-white text-black dark:bg-[#141414] dark:text-white">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
