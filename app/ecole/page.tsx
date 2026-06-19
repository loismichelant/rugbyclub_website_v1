import Link from "next/link";

/**
 * CONFIGURATION DES DONNÉES : Filière sportive par catégories d'âge
 * Permet de maintenir et de faire évoluer facilement les caractéristiques de chaque groupe d'âge.
 */
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
    pink: false, // Indicateur esthétique pour la bordure supérieure de la carte
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

/**
 * CONFIGURATION DES DONNÉES : Planification annuelle (Timeline)
 * 'highlight' permet de mettre visuellement en avant les événements clés (ex: BBQ, événements phares).
 */
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

/**
 * CONFIGURATION DES DONNÉES : Grille de la semaine
 * Le tableau gère les 7 jours de la semaine. 'activity: null' représente un jour de repos.
 */
const WEEK_DAYS = [
  { day: "Lun", label: "Lundi", activity: null },
  { day: "Mar", label: "Mardi", activity: null },
  { day: "Mer", label: "Mercredi", activity: null },
  { day: "Jeu", label: "Jeudi", activity: null },
  { day: "Ven", label: "Vendredi", activity: null },
  { 
    day: "Sam", 
    label: "Samedi", 
    activity: {
      title: "Les Entraînements",
      time: "9h30 à 11h30",
      location: "Terrain Henri Julien (Été) / Gymnase (Hiver)",
      note: "Présence parentale obligatoire pour les U6.",
      isTraining: true // Utilisé pour le code couleur de l'indicateur (pastille)
    } 
  },
  { 
    day: "Dim", 
    label: "Dimanche", 
    activity: {
      title: "Les Tournois annuels",
      time: "9h00 à 13h00",
      location: "Stades de la région (5 à 6 par an)",
      note: "Matchs festifs et rassembleurs.",
      isTraining: false
    } 
  },
];

/**
 * Page École de Rugby (Server Component)
 * Sert de guide d'information pour les parents (horaires, calendrier annuel, catégories d'âge).
 */
export default function EcolePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#000049] overflow-x-hidden">

      {/* ── 🌌 SECTION HERO ── */}
      <section className="relative bg-[#000049] text-white py-20 px-6 text-center overflow-hidden">
        {/* Filtre d'opacité combiné avec un gradient linéaire pour la charte graphique et la lisibilité */}
        <div className="absolute inset-0 bg-linear-to-br from-[#000049] via-[#000049]/90 to-[#f368f1]/20 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 px-4 py-1.5 rounded-full">
            Guide des parents
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
            École de <span className="text-[#f368f1]">Rugby</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg font-light">
            Retrouvez ici l&apos;organisation de notre école de rugby pour planifier sereinement l&apos;année de vos jeunes champions.
          </p>
        </div>
      </section>

      {/* SECTION : CRÉNEAUX HEBDOMADAIRES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f368f1]">Organisation</span>
          <h2 className="text-3xl font-black uppercase tracking-tight mt-2 text-[#000049]">
            Calendrier Hebdomadaire
          </h2>
          <p className="text-[#000049]/50 mt-2 text-sm font-light">L&apos;organisation de nos activités au fil de la semaine.</p>
        </div>

        {/* Grille responsive asymétrique : 1 colonne (mobile) / 9 colonnes (large desktop) pour s'aligner sur une seule ligne */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 items-stretch">
          {WEEK_DAYS.map((item, idx) => (
            <div 
              key={idx} 
              // Affichage conditionnel Tailwind : les jours d'activité occupent plus d'espace (col-span-2)
              // tandis que les jours vides sont masqués sur mobile et réduits (col-span-1) sur desktop
              className={`rounded-xl border p-4 transition-all duration-200 min-h-[140px] flex flex-col justify-between ${
                item.activity 
                  ? "lg:col-span-2 bg-white border-[#000049]/10 shadow-xs" 
                  : "bg-[#000049]/2 border-[#000049]/5 opacity-40 hidden lg:flex lg:col-span-1"
              }`}
            >
              {/* Entête de la carte jour */}
              <div className="flex items-center justify-between border-b border-[#000049]/5 pb-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#000049]">
                  {item.label}
                </span>
                {item.activity && (
                  // Pastille couleur conditionnelle : Rose pour l'entraînement, Bleu foncé pour les tournois
                  <span className={`w-2 h-2 rounded-full ${item.activity.isTraining ? "bg-[#f368f1]" : "bg-[#000049]"}`} />
                )}
              </div>

              {/* Rendu du contenu selon la présence ou l'absence d'activité */}
              {item.activity ? (
                <div className="flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-tight text-[#000049]">
                      {item.activity.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#f368f1] mt-0.5">
                      {item.activity.time}
                    </p>
                    <p className="text-[11px] text-[#000049]/65 font-light mt-2 leading-tight">
                      📍 {item.activity.location}
                    </p>
                  </div>
                  
                  {/* Note d'avertissement stylisée (Alerte ambre pour l'entraînement U6 / fond neutre pour le reste) */}
                  <div className={`text-[10px] p-2 rounded-md font-light leading-snug mt-2 ${
                    item.activity.isTraining 
                      ? "bg-amber-50 text-amber-800 border border-amber-200/40" 
                      : "bg-[#000049]/4 text-[#000049]/60 italic"
                  }`}>
                    {item.activity.note}
                  </div>
                </div>
              ) : (
                /* Rendu par défaut pour les jours de repos (Masqué sur mobile pour éviter la surcharge cognitive) */
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#000049]/20">Repos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION : CATÉGORIES D'ÂGE */}
      <section className="bg-[#000049] py-24 px-6 relative overflow-hidden">
        {/* Blobs CSS décoratifs animés en arrière-plan (Basse opacité et flou pour préserver l'accessibilité) */}
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

          {/* Grille des catégories (3 cartes côte à côte sur desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden hover:bg-white/10 hover:border-[#f368f1]/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Ligne d'accentuation supérieure basée sur le paramètre booléen de l'objet (cat.pink) */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${cat.pink ? "bg-[#f368f1]" : "bg-white/20"}`} />
                
                {/* Grand numéro décoratif en arrière-plan avec effet de survol */}
                <span className="absolute -right-2 -top-2 text-8xl font-black text-white/4 select-none leading-none pointer-events-none group-hover:text-[#f368f1]/10 transition-colors duration-300">
                  {cat.num}
                </span>

                <div className="relative">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/15 px-3 py-1 rounded-full mb-1">
                    {cat.age}
                  </span>
                  <p className="text-white/30 text-[10px] font-light mb-3">{cat.years}</p>
                  <h3 className="text-lg font-black uppercase tracking-wide text-white mb-4">{cat.title}</h3>
                  
                  {/* Liste à puces des sous-caractéristiques de la catégorie */}
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

          {/* Indicateur de progression linéaire de la filière jeune */}
          <div className="mt-10 flex items-center justify-center gap-4 text-white/25 text-xs font-light">
            <span>5 ans</span>
            <div className="flex-1 max-w-sm relative h-px bg-linear-to-r from-white/10 via-[#f368f1]/50 to-white/10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-[5px] border-t-transparent border-b-transparent border-l-[#f368f1]/50" />
            </div>
            <span>18 ans</span>
          </div>
        </div>
      </section>

      {/* SECTION : CALENDRIER TIMELINE ANNUEL */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Planifier</span>
          <h2 className="text-3xl font-black uppercase tracking-tight mt-2">Calendrier de la Saison</h2>
          <p className="text-[#000049]/40 mt-2 text-sm">
            Repérez facilement les temps forts du club tout au long de l&apos;année.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale de repère pour l'effet visuel de Frise Chronologique (Timeline) */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-[#f368f1] via-[#000049]/15 to-transparent" />

          <div className="space-y-5">
            {CALENDAR.map((item, idx) => (
              <div key={idx} className="relative flex gap-6">
                
                {/* Point d'ancrage de la timeline (change de couleur si l'item est marqué en 'highlight') */}
                <div
                  className={`relative z-10 shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.highlight
                      ? "bg-[#f368f1] border-[#f368f1] shadow-lg shadow-[#f368f1]/30"
                      : "bg-white border-[#000049]/15"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${item.highlight ? "bg-white" : "bg-[#000049]/25"}`} />
                </div>

                {/* Carte de description de la période */}
                <div
                  className={`flex-1 mb-1 bg-white rounded-xl border p-4 hover:shadow-md transition-all duration-200 ${
                    item.highlight ? "border-[#f368f1]/25" : "border-[#000049]/5"
                  }`}
                >
                  {/* Tag temporel */}
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

      {/* SECTION : APPEL À L'ACTION (CTA) */}
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
            (cohortes automne, hiver, printemps, été) afin de confirmer l&apos;intérêt de votre enfant avant de l&apos;inscrire officiellement.
          </p>
          
          {/* Bouton de redirection finale vers la page d'inscription */}
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