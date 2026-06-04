"use client";

import { useState } from "react";

const VALUES = [
  { num: "01", title: "Intégrité", desc: "Le socle du fair-play et de l'honnêteté absolue en toutes circonstances.", icon: "⚖️", pink: false },
  { num: "02", title: "Passion", desc: "Créer des liens émotionnels profonds et appartenir à la grande famille du rugby.", icon: "🔥", pink: true },
  { num: "03", title: "Solidarité", desc: "Un sens du collectif qui transcende toutes les différences culturelles.", icon: "🤝", pink: false },
  { num: "04", title: "Discipline", desc: "Le respect strict des règles du jeu et de la charte de notre club.", icon: "🎯", pink: true },
  { num: "05", title: "Respect", desc: "Envers coéquipiers, adversaires, officiels et la diversité de chacun.", icon: "🌟", pink: false },
];

const coaches = [
  { name: "Coach Head", role: "Directeur Technique & U14", bio: "Qualifié Rugby Canada, passionné de formation.", initials: "CH", gradientFrom: "#000049", gradientTo: "#1a1a8c" },
  { name: "Coach Adjoint", role: "Responsable École de Rugby", bio: "Spécialiste de l'initiation et de la motricité dès 5 ans.", initials: "CA", gradientFrom: "#f368f1", gradientTo: "#000049" },
  { name: "Bénévole Passion", role: "Accompagnateur U10", bio: "Ancien joueur, dévoué à la transmission des valeurs.", initials: "BP", gradientFrom: "#1a1a8c", gradientTo: "#f368f1" },
];

const DOCS = [
  "Règlements Généraux Gaulois 2022",
  "Règlements Généraux Gaulois 2023",
  "Règlements Généraux Rugby Québec",
];

const JOUEUR_DROITS = [
  "Une formation de qualité et du plaisir du jeu.",
  "Prendre des initiatives et faire des erreurs !",
  "Un temps de jeu équitable en compétition.",
  "Reconnaissance de tes progrès et écoute de tes difficultés.",
];

const JOUEUR_DEVOIRS = [
  "Être assidu, ponctuel et appliqué.",
  "Respecter l'arbitre, l'équipement et les adversaires.",
  "NE PAS OUBLIER TON PROTÈGE-DENT !",
  "Participer au rangement du matériel spontanément.",
];

const PARENTS_ENGAGEMENTS = [
  { label: "Pas d'ingérence", desc: "Je respecte l'éducateur, il est le seul habilité à diriger la séance." },
  { label: "Valeurs", desc: "J'apprends à mon enfant à rester humble dans la victoire et digne dans la défaite." },
  { label: "Ponctualité", desc: "Une association sportive n'est pas une garderie ! Je dépose et récupère mon enfant à l'heure." },
  { label: "Sécurité", desc: "Je me tiens en dehors du terrain lors des tournois pour la sécurité de tous." },
  { label: "Fair-play", desc: "Je respecte les décisions de l'arbitre et reste courtois en tribune." },
];

const EDUC_DROITS = [
  "Au respect total des enfants, parents et membres du club.",
  "À une formation continue et la reconnaissance de son bénévolat.",
  "À l'aide logistique et administrative du club.",
];

const EDUC_DEVOIRS = [
  "Préparer des séances sécuritaires axées sur le plaisir et la technique.",
  "Garantir du temps de jeu à TOUT LE MONDE.",
  "Avoir un langage et un comportement exemplaires.",
  "Positiver les progrès plutôt que de punir les erreurs.",
];

type TabId = "joueur" | "parents" | "educateur";

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "joueur", label: "Joueur", icon: "🏉" },
  { id: "parents", label: "Parents", icon: "👨‍👩‍👧" },
  { id: "educateur", label: "Éducateur", icon: "🏆" },
];

export default function AdnPage() {
  const [activeTab, setActiveTab] = useState<TabId>("joueur");

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
            Qui sommes-nous ?
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
            Notre{" "}
            <span className="text-[#f368f1]">ADN</span>
            <br />
            <span className="text-white/90">& Nos Valeurs</span>
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Représenter fièrement les Gaulois de Montréal, c&apos;est véhiculer un comportement
            exemplaire et porter des valeurs fortes sur le terrain et en dehors.
          </p>

          <div className="mt-12 inline-grid grid-cols-3 divide-x divide-white/10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { value: "+100", label: "Membres" },
              { value: "5", label: "Valeurs Fondatrices" },
              { value: "20+", label: "Ans d'Histoire" },
            ].map((s, i) => (
              <div key={i} className="px-8 py-4">
                <div className="text-2xl md:text-3xl font-black text-[#f368f1]">{s.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 VALEURS ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Les Fondations</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2">Les 5 Piliers du Club</h2>
          <p className="text-[#000049]/40 mt-2 text-sm">
            Les valeurs universelles du rugby mondial qui dictent la vie de notre club.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {VALUES.map((val, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-transparent hover:border-[#f368f1]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#f368f1]/10 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${val.pink ? "bg-[#f368f1]" : "bg-[#000049]"}`} />
              <span className="absolute -right-1 -top-2 text-8xl font-black select-none leading-none text-[#000049]/5 group-hover:text-[#f368f1]/8 transition-colors duration-300 pointer-events-none">
                {val.num}
              </span>
              <div className="relative">
                <span className="text-3xl mb-4 block">{val.icon}</span>
                <h3 className="text-sm font-black uppercase tracking-wider text-[#000049] mb-2">{val.title}</h3>
                <p className="text-xs text-[#000049]/55 font-light leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COACHS ── */}
      <section className="bg-[#000049] py-24 px-6 relative overflow-hidden">
        <div className="blob-animate absolute -top-10 right-0 w-72 h-72 rounded-full bg-[#f368f1]/10 blur-3xl pointer-events-none" />
        <div className="blob-animate-delay absolute bottom-0 left-1/2 w-56 h-56 rounded-full bg-[#f368f1]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">
                L&apos;équipe d&apos;encadrement
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-3 text-white">
                Des Coachs{" "}
                <span className="text-[#f368f1]">Qualifiés</span>
              </h2>
              <p className="mt-4 text-white/50 font-light leading-relaxed text-sm">
                Les Gaulois disposent d&apos;entraîneurs qualifiés proposant des séances adaptées.
                Nos programmes sont bâtis avec{" "}
                <strong className="text-white/80">Rugby Canada</strong> sur le modèle des grandes
                nations du rugby (France, Australie).
              </p>
              <blockquote className="mt-6 border-l-2 border-[#f368f1] pl-4 italic text-white/40 text-sm font-light">
                Vous souhaitez vous impliquer ? Rejoignez-nous comme bénévole, peu importe votre
                expérience !
              </blockquote>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {coaches.map((coach, i) => (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#f368f1]/30 transition-all duration-300"
                >
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${coach.gradientFrom}, ${coach.gradientTo})`,
                    }}
                  >
                    <span className="text-5xl font-black text-white/20 tracking-widest">
                      {coach.initials}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm">{coach.name}</h3>
                    <p className="text-[#f368f1] text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                      {coach.role}
                    </p>
                    <p className="text-white/40 text-xs mt-2 font-light leading-relaxed">{coach.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARTES ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Engagements</span>
          <h2 className="text-3xl font-black uppercase tracking-tight mt-2">Droits & Devoirs</h2>
          <p className="text-[#000049]/40 mt-2 text-sm">
            Cliquez sur chaque profil pour découvrir les engagements mutuels.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1.5 bg-white border border-[#000049]/8 p-1.5 rounded-2xl shadow-sm">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#000049] text-white shadow-md"
                    : "text-[#000049]/50 hover:text-[#000049] hover:bg-[#000049]/5"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div key={activeTab} className="tab-content-enter bg-white rounded-2xl border border-[#000049]/5 shadow-sm overflow-hidden">

          {activeTab === "joueur" && (
            <>
              <div className="bg-[#000049] px-8 py-5 flex items-center gap-3">
                <span className="text-2xl">🏉</span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Le Jeune Joueur</h3>
              </div>
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-green-50 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
                    Droits
                  </span>
                  <ul className="space-y-2.5">
                    {JOUEUR_DROITS.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-[#000049]/70 font-light">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f368f1]/5 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#c020b8] bg-[#f368f1]/15 px-2.5 py-1 rounded-full mb-3">
                    Devoirs
                  </span>
                  <ul className="space-y-2.5">
                    {JOUEUR_DEVOIRS.map((item, i) => (
                      <li
                        key={i}
                        className={`flex gap-2.5 text-xs font-light ${
                          item.includes("PROTÈGE") ? "font-bold text-[#000049]" : "text-[#000049]/70"
                        }`}
                      >
                        <span className="text-[#f368f1] mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "parents" && (
            <>
              <div className="bg-[#000049] px-8 py-5 flex items-center gap-3">
                <span className="text-2xl">👨‍👩‍👧</span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Engagement des Parents</h3>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm text-[#000049]/55 italic mb-6 border-l-2 border-[#f368f1] pl-4 font-light">
                  &quot;En inscrivant mon enfant, je suis conscient de la mission éducative du club
                  et je m&apos;y implique activement.&quot;
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PARENTS_ENGAGEMENTS.map((item, i) => (
                    <div key={i} className="bg-[#f8fafc] border border-[#000049]/5 rounded-xl p-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 px-2.5 py-0.5 rounded-full mb-2">
                        {item.label}
                      </span>
                      <p className="text-xs text-[#000049]/65 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "educateur" && (
            <>
              <div className="bg-[#000049] px-8 py-5 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">
                  Mission de l&apos;Éducateur
                </h3>
              </div>
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-green-50 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
                    Droits
                  </span>
                  <ul className="space-y-2.5">
                    {EDUC_DROITS.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-[#000049]/70 font-light">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f368f1]/5 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#c020b8] bg-[#f368f1]/15 px-2.5 py-1 rounded-full mb-3">
                    Devoirs
                  </span>
                  <ul className="space-y-2.5">
                    {EDUC_DEVOIRS.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-[#000049]/70 font-light">
                        <span className="text-[#f368f1] mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── DOCUMENTS & INTÉGRITÉ ── */}
      <section className="bg-[#000049]/4 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Bibliothèque</span>
            <h3 className="text-xl font-black uppercase tracking-wide mt-1 mb-5">
              Téléchargements & Règlements
            </h3>
            <div className="space-y-3">
              {DOCS.map((doc, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex items-center gap-4 bg-white p-4 rounded-xl border border-[#000049]/8 hover:border-[#f368f1]/40 hover:shadow-lg hover:shadow-[#f368f1]/5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f368f1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f368f1]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#f368f1]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wide text-[#000049] group-hover:text-[#f368f1] transition-colors flex-1">
                    {doc}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#000049]/20 group-hover:text-[#f368f1]/50 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#000049] rounded-2xl p-6 flex flex-col text-white relative overflow-hidden">
            <div className="blob-animate absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#f368f1]/20 blur-2xl pointer-events-none" />
            <div className="relative">
              <span className="inline-flex text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full">
                🛡️ Sécurité & Intégrité
              </span>
              <h3 className="text-xl font-black uppercase mt-5 tracking-wide">
                Vérification & Signalements
              </h3>
              <p className="text-white/45 mt-3 text-xs font-light leading-relaxed">
                Le club applique rigoureusement la politique de vérification des antécédents
                judiciaires pour tout son staff. Nous adhérons pleinement au code de conduite de
                Rugby Québec.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex justify-center items-center bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-xl hover:bg-red-500 transition-colors"
                >
                  Déposer une plainte
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center border border-white/15 text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Politique d&apos;Intégrité
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
