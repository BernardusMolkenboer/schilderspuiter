import LogoSchilder from "@/svg/logo";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <LogoSchilder className="h-10 max-h-[35px] w-auto" aria-label="Logo" />
    </Link>
  );
}
