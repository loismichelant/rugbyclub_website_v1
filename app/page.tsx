import Image from "next/image";
import Link from "next/link";
interface SectionData {
  id: string;
  content: string;
}

async function getFirstSection(): Promise<SectionData | null> {
  try {
    const res = await fetch("https://6a1b5e1bbc2f944754931f93.mockapi.io/v1/sections");

    if (!res.ok) throw new Error("Erreur MockAPI");
    
    const data: SectionData[] = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Erreur lors du fetch direct de MockAPI :", error);
    return null;
  }
}

export default async function HomePage() {

  const firstSection = await getFirstSection();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen max-h-175 w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/melee.jpg"
          alt="Mêlée des Gaulois"
          fill
          priority
          className="object-cover object-[center_50%]"
        />

        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-linear-to-br from-[#000049]/85 via-[#000049]/60 to-[#000049]/30" />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
          <span className="mb-4 inline-block rounded-full border border-[#f368f1]/60 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#f368f1]">
            Club de Rugby · Les Gaulois
          </span>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight text-white drop-shadow-2xl">
            L&apos;esprit du combat,{" "}
            <br />
            <span className="text-[#f368f1]">la force du collectif.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl font-light text-white/80 max-w-xl leading-relaxed">
            Rejoignez les Gaulois et portez fièrement nos couleurs sur chaque terrain.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/infos-pratiques"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#000049] text-sm uppercase tracking-widest shadow-lg hover:bg-[#f368f1] hover:text-white hover:shadow-[#f368f1]/40 hover:shadow-2xl transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              Horaires et terrains
            </Link>

            <a
              href="https://affiliated-sports.com/fr/collections/les-gaulois-rugby"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#f368f1] px-8 py-4 font-bold text-[#f368f1] text-sm uppercase tracking-widest hover:bg-[#f368f1] hover:text-white hover:shadow-[#f368f1]/40 hover:shadow-2xl transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Boutique officielle
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1]">
            Découvrir
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#f368f1] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SECTION SUIVANTE (DYNAMIQUE) ── */}
      <section className="block w-full bg-[#f8fafc] px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          {firstSection ? (
            <>
              <p className="mt-4 text-[#000049]/80 leading-relaxed text-lg font-light">
                {firstSection.content}
              </p>
            </>
          ) : (
            <>
              {/* Code de secours si l'API ne répond pas */}
              <h2 className="text-3xl font-extrabold text-[#000049] uppercase tracking-tight">
                Dernières actualités
              </h2>
              <p className="mt-4 text-[#000049]/40">
                Le contenu de la V1 arrive très bientôt...
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
