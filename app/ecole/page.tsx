import Link from "next/link";

const CATEGORIES = [
  {
    num: "01",
    age: "U6 à U10",
    years: "5 à 10 ans",
    title: "L'Éveil & Le Jeu",
    features: [
      "Rugby sans contact (Flag rugby)",
      "Participation à des tournois festifs",
      "Approche non compétitive axée sur le fun",
      "Apprentissage de la rigueur et des valeurs",
    ],
    pink: false,
  },
  {
    num: "02",
    age: "U12 à U14",
    years: "11 à 14 ans",
    title: "Le Développement",
    features: [
      "Introduction progressive au rugby avec contact",
      "Saison prolongée",
      "Tournois régionaux réguliers",
      "Esprit fort de solidarité et de collectif",
    ],
    pink: true,
  },
  {
    num: "03",
    age: "U16 à U18",
    years: "15 à 18 ans",
    title: "La Compétition",
    features: [
      "Participation au championnat provincial",
      "Partenariat avec le Rugby Club de Montréal",
      "Sélections possibles pour Rugby Québec",
      "Haut niveau technique",
    ],
    pink: false,
  },
];

const CALENDAR = [
  { period: "Janvier à Mars", title: "Session d'Hiver", desc: "Pratiques intérieures le samedi matin en gymnase.", highlight: false },
  { period: "Avril", title: "Jeux de Montréal", desc: "Préparation et participation à l'événement montréalais de référence.", highlight: true },
  { period: "Mai", title: "Lancement officiel", desc: "Grand BBQ de début de saison et début des entraînements extérieurs.", highlight: true },
  { period: "Mi-Avril à Mi-Juillet", title: "Saison Régulière", desc: "Le cœur de l'année ! Pratiques régulières et enchaînement des tournois (5-6 par an).", highlight: false },
  { period: "Juillet", title: "Mi-Saison", desc: "BBQ de mi-saison, idéal pour la cohésion des familles.", highlight: true },
  { period: "Mi-Août à Mi-Septembre", title: "Le Sprint Final", desc: "Reprise intense des pratiques et derniers tournois de l'année.", highlight: false },
  { period: "Fin Septembre", title: "Clôture", desc: "Fête de fin d'année du club et remises des prix.", highlight: true },
  { period: "Octobre à Décembre", title: "Maintien", desc: "Pratiques légères le samedi matin (transition intérieur).", highlight: false },
];

export default function EcolePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#000049] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-[#000049] text-white py-28 px-6 text-center overflow-hidden">
        <div className="blob-animate absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f368f1]/25 blur-3xl pointer-events-none" />
        <div className="blob-animate-delay absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#f368f1]/15 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#f368f1 1px, transparent 1px), linear-gradient(90deg, #f368f1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1] bg-[#f368f1]/10 border border-[#f368f1]/20 px-5 py-2 rounded-full mb-6">
            Guide des parents
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
            École de <span className="text-[#f368f1]">Rugby</span>
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Retrouvez ici l&apos;organisation de notre école de rugby pour planifier sereinement
            l&apos;année de vos jeunes champions.
          </p>
        </div>
      </section>

      {/* ── CRÉNEAUX ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Organisation</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2">
            Les Créneaux de Référence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Entraînements */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#000049]/5 hover:border-[#f368f1]/20 hover:shadow-xl hover:shadow-[#f368f1]/5 transition-all duration-300">
            <div className="bg-[#000049] p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f368f1]/15 flex items-center justify-center text-[#f368f1] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-black uppercase tracking-wide text-white">Les Entraînements</h2>
                <p className="text-[#f368f1] text-xs font-semibold mt-0.5">Tous les samedis matins · 9h30 → 11h30</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#000049]/65 font-light leading-relaxed">
                Les entraînements ont lieu à l&apos;extérieur sur le{" "}
                <strong className="text-[#000049]">Terrain Henri Julien</strong> pendant la saison
                estivale, et basculent en{" "}
                <strong className="text-[#000049]">Gymnase (intérieur)</strong> pendant les mois
                d&apos;hiver. Notre équipe d&apos;éducateurs qualifiés propose des ateliers adaptés à
                chaque âge.
              </p>
              <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-200/60 rounded-xl p-4">
                <span className="text-lg shrink-0">⚠️</span>
                <p className="text-xs text-amber-800 font-medium leading-relaxed">
                  <strong>Présence parentale obligatoire</strong> pour les moins de 6 ans pour
                  accompagner l&apos;intégration et veiller aux pauses nécessaires.
                </p>
              </div>
            </div>
          </div>

          {/* Tournois */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#000049]/5 hover:border-[#f368f1]/20 hover:shadow-xl hover:shadow-[#f368f1]/5 transition-all duration-300">
            <div className="bg-[#000049] p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f368f1]/15 flex items-center justify-center text-[#f368f1] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-black uppercase tracking-wide text-white">Les Tournois annuels</h2>
                <p className="text-[#f368f1] text-xs font-semibold mt-0.5">5 à 6 tournois · les dimanches de 9h00 → 13h00</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#000049]/65 font-light leading-relaxed">
                Les tournois sont des moments forts de camaraderie. Ils regroupent les écoles de
                rugby de la région sous forme de petits matchs festifs et rassembleurs.
                C&apos;est l&apos;occasion rêvée pour les parents de venir encourager les Gaulois !
              </p>
              <div className="mt-5 flex items-start gap-3 bg-[#000049]/4 rounded-xl p-4">
                <span className="text-lg shrink-0">🏉</span>
                <p className="text-xs text-[#000049]/55 italic font-light leading-relaxed">
                  Le rugby est un sport complet qui développe la coordination, la dextérité, la
                  prise d&apos;appuis et la vision du jeu dès le plus jeune âge.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CATÉGORIES D'ÂGE ── */}
      <section className="bg-[#000049] py-24 px-6 relative overflow-hidden">
        <div className="blob-animate absolute -top-10 right-0 w-72 h-72 rounded-full bg-[#f368f1]/10 blur-3xl pointer-events-none" />
        <div className="blob-animate-delay absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#f368f1]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Filière sportive</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2 text-white">
              Les Catégories d&apos;Âge
            </h2>
            <p className="text-white/35 mt-2 text-sm">Une progression pensée de 5 à 18 ans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden hover:bg-white/10 hover:border-[#f368f1]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${cat.pink ? "bg-[#f368f1]" : "bg-white/20"}`} />
                <span className="absolute -right-2 -top-2 text-8xl font-black text-white/4 select-none leading-none pointer-events-none group-hover:text-[#f368f1]/10 transition-colors duration-300">
                  {cat.num}
                </span>

                <div className="relative">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/15 px-3 py-1 rounded-full mb-1">
                    {cat.age}
                  </span>
                  <p className="text-white/30 text-[10px] font-light mb-3">{cat.years}</p>
                  <h3 className="text-lg font-black uppercase tracking-wide text-white mb-4">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-white/55 font-light">
                        <span className="text-[#f368f1] mt-0.5 shrink-0">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Progression indicator */}
          <div className="mt-10 flex items-center justify-center gap-4 text-white/25 text-xs font-light">
            <span>5 ans</span>
            <div className="flex-1 max-w-sm relative h-px bg-linear-to-r from-white/10 via-[#f368f1]/50 to-white/10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-[5px] border-t-transparent border-b-transparent border-l-[#f368f1]/50" />
            </div>
            <span>18 ans</span>
          </div>
        </div>
      </section>

      {/* ── CALENDRIER TIMELINE ── */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Planifier</span>
          <h2 className="text-3xl font-black uppercase tracking-tight mt-2">Calendrier de la Saison</h2>
          <p className="text-[#000049]/40 mt-2 text-sm">
            Repérez facilement les temps forts du club tout au long de l&apos;année.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-[#f368f1] via-[#000049]/15 to-transparent" />

          <div className="space-y-5">
            {CALENDAR.map((item, idx) => (
              <div key={idx} className="relative flex gap-6">
                {/* Point */}
                <div
                  className={`relative z-10 shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.highlight
                      ? "bg-[#f368f1] border-[#f368f1] shadow-lg shadow-[#f368f1]/30"
                      : "bg-white border-[#000049]/15"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${item.highlight ? "bg-white" : "bg-[#000049]/25"}`} />
                </div>

                {/* Carte */}
                <div
                  className={`flex-1 mb-1 bg-white rounded-xl border p-4 hover:shadow-md transition-all duration-200 ${
                    item.highlight ? "border-[#f368f1]/25" : "border-[#000049]/5"
                  }`}
                >
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 ${
                      item.highlight
                        ? "text-[#f368f1] bg-[#f368f1]/10"
                        : "text-[#000049]/45 bg-[#000049]/5"
                    }`}
                  >
                    {item.period}
                  </span>
                  <h4 className="font-black text-sm text-[#000049] uppercase tracking-wide">{item.title}</h4>
                  <p className="text-xs text-[#000049]/55 font-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#000049] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="blob-animate absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-[#f368f1]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1] bg-[#f368f1]/10 border border-[#f368f1]/20 px-5 py-2 rounded-full mb-6">
            Rejoindre le club
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Prêt à faire <span className="text-[#f368f1]">l&apos;essai ?</span>
          </h2>
          <p className="text-sm text-white/50 mt-5 font-light leading-relaxed max-w-lg mx-auto">
            Le club offre des{" "}
            <strong className="text-white/80">initiations gratuites de 4 semaines</strong>{" "}
            (cohortes automne, hiver, printemps, été) afin de confirmer l&apos;intérêt de votre
            enfant avant de l&apos;inscrire officiellement.
          </p>
          <div className="mt-10">
            <Link
              href="/inscription"
              className="inline-flex items-center gap-3 bg-[#f368f1] text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-2xl shadow-[#f368f1]/30 hover:bg-white hover:text-[#000049] transition-all duration-300 hover:scale-105"
            >
              Découvrir les cohortes & S&apos;inscrire
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
