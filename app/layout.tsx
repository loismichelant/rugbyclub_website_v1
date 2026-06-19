import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";

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
      <body className="bg-[#f8fafc] text-[#000049] antialiased flex flex-col min-h-screen">
        
        {/* ── HEADER ── */}
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

            <MobileMenu />
          </nav>
        </header>

        {/* ── MAIN ── */}
        <main className="flex-grow">{children}</main>

        {/* ── FOOTER ENRICHI ── */}
        <footer className="bg-[#000049] text-white/80 pt-16 pb-8 border-t-0">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            
            {/* Colonne 1 : Logo & Description (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo Les Gaulois Blanc"
                  width={60}
                  height={60}
                  className="brightness-0 invert" // Rend le logo blanc si ton image de base est sombre
                />
                <span className="font-black uppercase tracking-wider text-white text-lg">
                  Les Gaulois <br />
                  <span className="text-[#f368f1] text-xs tracking-widest font-bold block">Rugby Club</span>
                </span>
              </div>
              <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">
                Fondé sur des valeurs de courage, de respect et de camaraderie, le club des Gaulois fait rayonner le rugby au Québec auprès des petits et des grands.
              </p>
            </div>

            {/* Colonne 2 : Liens Rapides (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
                Le Club
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-light">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-[#f368f1] text-white/70 transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://affiliated-sports.com/fr/collections/les-gaulois-rugby" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#f368f1] text-white/70 transition-colors duration-200"
                  >
                    Boutique Officielle
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Contact & Terrains (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
                Contact & Terrain
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-light text-white/70">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f368f1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Parc Marie-Victorin, Montréal, QC</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f368f1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v11z" />
                  </svg>
                  <a href="mailto:info@gauloisrugby.com" className="hover:text-[#f368f1] transition-colors">
                    info@gauloisrugby.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Réseaux Sociaux / Suivez-nous (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
                Suivez les Gaulois
              </h4>
              <p className="text-xs text-white/60 font-light mb-4">
                Ne manquez aucun match, résultat ou événement du club !
              </p>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f368f1] text-white hover:scale-110 transition-all duration-200" aria-label="Facebook">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f368f1] text-white hover:scale-110 transition-all duration-200" aria-label="Instagram">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Ligne inférieure de Copyright */}
          <div className="mx-auto max-w-7xl px-6 pt-8 border-t border-white/10 text-center text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Les Gaulois Rugby Club — Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              <span>•</span>
              <Link href="/reglements" className="hover:text-white transition-colors">Règlements du club</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}