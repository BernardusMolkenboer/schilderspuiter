import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent"
    >
      Schilder-Spuiter.nl
    </Link>
  );
}
