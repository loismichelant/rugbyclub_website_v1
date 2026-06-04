"use client";

import { useState } from "react";

const COHORTES = [
  { inscription: "Septembre & Octobre", initiation: "Novembre – Décembre – Janvier", lieu: "Gymnase", indoor: true },
  { inscription: "Décembre & Janvier", initiation: "Février – Mars", lieu: "Gymnase", indoor: true },
  { inscription: "Mars & Avril", initiation: "Mai – Juin", lieu: "Terrain Henri Julien", indoor: false },
  { inscription: "Juillet & Août", initiation: "Septembre – Octobre", lieu: "Terrain Henri Julien", indoor: false },
];

const AGE_BRACKETS = [
  { label: "Moins de 18 ans (U18)", years: "2008, 2009" },
  { label: "Moins de 16 ans (U16)", years: "2010, 2011" },
  { label: "Moins de 14 ans (U14)", years: "2012, 2013" },
  { label: "Moins de 12 ans (U12)", years: "2014, 2015" },
  { label: "Moins de 10 ans (U10)", years: "2016, 2017" },
  { label: "Moins de 8 ans (U8)", years: "2018, 2019" },
  { label: "Moins de 6 ans (U6)*", years: "2020, 2021" },
];

const inputClass =
  "w-full bg-white border border-[#000049]/15 rounded-xl px-4 py-3 text-sm text-[#000049] placeholder:text-[#000049]/30 focus:border-[#f368f1] focus:ring-2 focus:ring-[#f368f1]/15 focus:outline-none transition-all duration-200";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.12em] text-[#000049]/55 mb-1.5";

function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Saison 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
            Rejoindre <span className="text-[#f368f1]">Les Gaulois</span>
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Découvrez le rugby en douceur avec nos initiations gratuites ou finalisez votre licence
            officielle pour la saison complète.
          </p>
        </div>
      </section>

      {/* ── CORPS ── */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ── COL PRINCIPALE ── */}
        <div className="lg:col-span-2 space-y-10">

          {/* ÉTAPE 1 */}
          <section className="bg-white rounded-2xl border border-[#000049]/5 overflow-hidden shadow-sm">
            <div className="bg-[#000049] px-8 py-6 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f368f1] text-white text-base font-black shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl font-black uppercase tracking-wide text-white">
                  Cohortes d&apos;initiation Gratuite
                </h2>
                <p className="text-[#f368f1] text-xs font-semibold mt-0.5">4 semaines · Aucun engagement</p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-sm text-[#000049]/60 leading-relaxed font-light mb-8">
                Le club offre une{" "}
                <strong className="text-[#000049]">initiation gratuite de 4 semaines</strong> pour
                confirmer l&apos;intérêt de votre enfant avant de vous engager. Les cohortes
                requièrent un minimum de 6 joueurs par tranche d&apos;âge (U6-U8 / U10-U12 / U14).
              </p>

              {/* Tableau cohortes */}
              <div className="overflow-hidden rounded-xl border border-[#000049]/8 mb-8">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#000049] text-white font-bold uppercase tracking-wider">
                      <th className="px-4 py-3">Inscription</th>
                      <th className="px-4 py-3">Initiation</th>
                      <th className="px-4 py-3 hidden sm:table-cell">Lieu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COHORTES.map((row, i) => (
                      <tr key={i} className="border-t border-[#000049]/5 hover:bg-[#f368f1]/5 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000049]">{row.inscription}</td>
                        <td className="px-4 py-3 text-[#000049]/65 font-light">{row.initiation}</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            row.indoor
                              ? "bg-[#000049]/8 text-[#000049]/60"
                              : "bg-[#f368f1]/10 text-[#f368f1]"
                          }`}>
                            {row.indoor ? "🏛️" : "🌿"} {row.lieu}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Formulaire */}
              <div className="bg-[#f8fafc] rounded-xl border border-[#000049]/5 p-6">
                <h3 className="text-sm font-black uppercase tracking-wide mb-6 text-[#000049]">
                  Formulaire d&apos;inscription — Cohorte d&apos;essai
                </h3>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Courriel *</label>
                        <input
                          type="email"
                          required
                          className={inputClass}
                          placeholder="parent@exemple.com"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Période souhaitée *</label>
                        <select required className={inputClass}>
                          <option value="">Choisir une période...</option>
                          <option value="nov-jan">Novembre – Janvier (Gymnase)</option>
                          <option value="feb-mar">Février – Mars (Gymnase)</option>
                          <option value="may-jun">Mai – Juin (Henri Julien)</option>
                          <option value="sep-oct">Septembre – Octobre (Henri Julien)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Nom & Prénom du participant *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          placeholder="Prénom Nom de l'enfant"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Âge du participant *</label>
                        <input
                          type="number"
                          required
                          min="5"
                          max="18"
                          className={inputClass}
                          placeholder="Ex: 8"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Contact & cellulaire en cas d&apos;urgence *</label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Nom du parent – (514) 123-4567"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 bg-[#000049] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-[#f368f1] transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-[#f368f1]/25"
                      >
                        Envoyer ma demande d&apos;essai
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="tab-content-enter bg-emerald-50 border border-emerald-200/60 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">🎉</div>
                    <h4 className="font-black text-emerald-800 uppercase tracking-wide text-sm mb-1">
                      Demande envoyée avec succès !
                    </h4>
                    <p className="text-xs text-emerald-700/80 font-light leading-relaxed">
                      L&apos;équipe des Gaulois vous contactera sous peu pour confirmer votre place
                      dans la cohorte.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ÉTAPE 2 */}
          <section className="bg-white rounded-2xl border border-[#000049]/5 overflow-hidden shadow-sm">
            <div className="bg-[#000049] px-8 py-6 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-base font-black shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl font-black uppercase tracking-wide text-white">
                  Inscription Officielle
                </h2>
                <p className="text-white/50 text-xs font-light mt-0.5">Saison complète · Licence Rugby Canada</p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-sm text-[#000049]/60 leading-relaxed font-light mb-8">
                Votre enfant a adoré son initiation et souhaite porter fièrement les couleurs des
                Gaulois pour toute la saison ? L&apos;inscription officielle et l&apos;émission des
                licences obligatoires se font directement sur la plateforme officielle de{" "}
                <strong className="text-[#000049]">Rugby Canada (SportLomo)</strong>.
              </p>

              <div className="bg-[#000049] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
                <div className="blob-animate absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#f368f1]/20 blur-2xl pointer-events-none" />
                <div className="relative">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 border border-[#f368f1]/20 px-2.5 py-1 rounded-full mb-2">
                    Plateforme officielle
                  </span>
                  <p className="text-white font-black uppercase tracking-wide text-sm">
                    Espace d&apos;affiliation SportLomo
                  </p>
                  <p className="text-white/45 text-xs font-light mt-1">
                    Rugby Canada & Rugby Québec
                  </p>
                </div>
                <a
                  href="https://rugbycanada.sportlomo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 bg-[#f368f1] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white hover:text-[#000049] transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  Accéder à SportLomo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="lg:col-span-1 space-y-6">

          {/* Tarification */}
          <div className="bg-[#000049] text-white rounded-2xl p-6 relative overflow-hidden">
            <div className="blob-animate absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#f368f1]/20 blur-2xl pointer-events-none" />
            <div className="relative">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 border border-[#f368f1]/20 px-2.5 py-1 rounded-full">
                Tarification
              </span>
              <h3 className="text-xl font-black uppercase tracking-wide mt-4 mb-4">
                Transparence totale
              </h3>

              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#f368f1] mb-1">Disponibilité</p>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    Les licences peuvent être prises sur SportLomo à partir du mois de{" "}
                    <strong className="text-white">février</strong>.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#f368f1] mb-1">Couverture</p>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    Entraînements, accès aux infrastructures et assurances jusqu&apos;au{" "}
                    <strong className="text-white">30 avril</strong> de l&apos;année suivante.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#f368f1] font-bold uppercase tracking-wider">
                <span>ℹ️</span>
                <span>Aucun frais caché pour les tournois réguliers.</span>
              </div>
            </div>
          </div>

          {/* Tranches d'âge */}
          <div className="bg-white rounded-2xl border border-[#000049]/5 shadow-sm p-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Saison actuelle</span>
            <h3 className="text-sm font-black uppercase tracking-wide text-[#000049] mt-1 mb-5">
              Tranches d&apos;âge
            </h3>

            <div className="space-y-2">
              {AGE_BRACKETS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 text-xs p-3 rounded-xl bg-[#f8fafc] border border-[#000049]/5 hover:border-[#f368f1]/20 transition-colors"
                >
                  <span className="font-medium text-[#000049] text-[11px]">{item.label}</span>
                  <span className="font-bold text-[#f368f1] bg-[#f368f1]/10 px-2.5 py-0.5 rounded-full text-[10px] shrink-0">
                    {item.years}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-[#000049]/40 font-light italic mt-5 leading-relaxed">
              * L&apos;âge est fêté au cours de l&apos;année calendaire. La catégorie U6 couvre
              les enfants de 5 ans et plus démontrant un intérêt pour le sport.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default InscriptionPage;
