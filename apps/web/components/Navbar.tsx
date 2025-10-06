"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/store", label: "Store" },
  { href: "/me", label: "My Page" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center gap-6">
        <Link href="/" className="font-semibold text-pink-300">💘 Love Machine</Link>
        <div className="flex items-center gap-4 text-sm">
          {tabs.map(t => (
            <Link
              key={t.href}
              href={t.href}
              className={`px-2 py-1 rounded ${
                pathname === t.href
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}