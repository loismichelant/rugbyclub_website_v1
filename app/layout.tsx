import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club de Rugby Les Gaulois",
  description: "Site officiel du club de rugby Les Gaulois",
};

const navLinks = [
  { href: "/adn", label: "Notre ADN" },
  { href: "/ecole", label: "École de Rugby" },
  { href: "/inscription", label: "Inscription" },
  { href: "/contact", label: "Contactez-nous" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#f8fafc] text-[#000049] antialiased">
        <header className="sticky top-0 z-50 bg-[#f8fafc] border-b border-[#000049]/10 shadow-sm">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Logo Les Gaulois"
                width={75}
                height={75}
              />
              <span className="text-[#000049] font-extrabold text-base md:text-lg tracking-wide leading-tight group-hover:text-[#f368f1] transition-colors duration-300">
                Club de Rugby<br className="hidden sm:block" />
                <span className="text-[#f368f1]"> Les Gaulois</span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative text-[#000049]/70 font-semibold text-sm tracking-wide uppercase hover:text-[#f368f1] transition-colors duration-300 group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#f368f1] group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/inscription"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#f368f1] text-white font-bold text-sm tracking-wide uppercase shadow-lg hover:bg-[#000049] hover:shadow-xl transition-all duration-300"
            >
              Rejoindre le club
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-[#000049] text-white/60 py-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Les Gaulois Rugby Club — Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
