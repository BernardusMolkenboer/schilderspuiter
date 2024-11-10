import LogoSchilder from "@/svg/logo";
import LogoSchilderWit from "@/svg/logoWit";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Logo for light theme */}
      <LogoSchilder
        className="block h-10 max-h-[35px] w-auto dark:hidden"
        aria-label="Logo"
      />
      {/* Logo for dark theme */}
      <LogoSchilderWit
        className="hidden h-10 max-h-[35px] w-auto dark:block"
        aria-label="Logo"
      />
    </Link>
  );
}
