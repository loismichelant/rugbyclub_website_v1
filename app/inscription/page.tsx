"use client";

import { useState } from "react";
import Image from "next/image";
import { sendTrialRequest } from "@/app/actions/sendTrialRequest";

const COHORTES = [
  { inscription: "Septembre & Octobre", initiation: "Novembre – Décembre – Janvier", lieu: "Gymnase", indoor: true },
  { inscription: "Décembre & Janvier", initiation: "Février – Mars", lieu: "Gymnase", indoor: true },
  { inscription: "Mars & Avril", initiation: "Mai – Juin", lieu: "Terrain Henri Julien", indoor: false },
  { inscription: "Juillet & Août", initiation: "Septembre – Octobre", lieu: "Terrain Henri Julien", indoor: false },
];

const inputClass =
  "w-full bg-white border border-[#000049]/15 rounded-xl px-4 py-3 text-sm text-[#000049] placeholder:text-[#000049]/30 focus:border-[#000049] focus:ring-1 focus:ring-[#000049] focus:outline-none transition-all duration-200";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.12em] text-[#000049]/60 mb-1.5";

function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  {/* Génération dynamique des années de naissance selon l'année civile en cours */}
  const ageBracketsDynamic = [
    { label: "Moins de 18 ans (U18)", years: `${currentYear - 18}, ${currentYear - 17}` },
    { label: "Moins de 16 ans (U16)", years: `${currentYear - 16}, ${currentYear - 15}` },
    { label: "Moins de 14 ans (U14)", years: `${currentYear - 14}, ${currentYear - 13}` },
    { label: "Moins de 12 ans (U12)", years: `${currentYear - 12}, ${currentYear - 11}` },
    { label: "Moins de 10 ans (U10)", years: `${currentYear - 10}, ${currentYear - 9}` },
    { label: "Moins de 8 ans (U8)", years: `${currentYear - 8}, ${currentYear - 7}` },
    { label: "Moins de 6 ans (U6)*", years: `${currentYear - 6}, ${currentYear - 5}` },
  ];

  {/* Soumission du formulaire d'essai à l'action serveur */}
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    const data = {
      email: formData.get("email") as string,
      periode: formData.get("periode") as string,
      nomParticipant: formData.get("nomParticipant") as string,
      ageParticipant: formData.get("ageParticipant") as string,
      contactUrgence: formData.get("contactUrgence") as string,
    };

    const response = await sendTrialRequest(data);

    setLoading(false);
    if (response.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(response.error || "Une erreur est survenue.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#000049]">
      
      {/* Section Hero */}
      <section className="relative bg-[#000049] text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#000049] via-[#000049]/90 to-[#f368f1]/20 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 px-4 py-1.5 rounded-full">
            Saison {currentYear}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
            Rejoindre <span className="text-[#f368f1]">Les Gaulois</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg font-light">
            Découvrez le rugby en douceur avec nos initiations gratuites ou finalisez votre licence officielle pour la saison complète.
          </p>
        </div>
      </section>

      {/* Contenu principal de la page d'inscription */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          
          {/* Bloc 1: Informations et demande d'essais gratuits */}
          <section className="bg-white rounded-2xl border border-[#000049]/10 p-8 shadow-xs">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#000049]/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f368f1] text-white text-base font-black shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#000049]">
                  Cohortes d&apos;initiation Gratuite
                </h2>
                <p className="text-[#000049]/60 text-xs font-light mt-0.5">4 semaines d&apos;essai · Sans engagement</p>
              </div>
            </div>

            <p className="text-sm text-[#000049]/70 leading-relaxed font-light mb-8">
              Le club offre une <strong className="font-semibold text-[#000049]">initiation gratuite de 4 semaines</strong> pour confirmer l&apos;intérêt de votre enfant avant de vous engager. Les cohortes requièrent un minimum de 6 joueurs par tranche d&apos;âge (U6-U8 / U10-U12 / U14).
            </p>

            {/* Tableau récapitulatif des différentes cohortes d'intégration */}
            <div className="overflow-hidden rounded-xl border border-[#000049]/10 mb-8">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#000049]/5 text-[#000049] font-bold uppercase tracking-wider border-b border-[#000049]/10">
                    <th className="px-4 py-3.5">Période d&apos;Inscription</th>
                    <th className="px-4 py-3.5">Période d&apos;Initiation</th>
                    <th className="px-4 py-3.5 hidden sm:table-cell">Lieu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#000049]/5">
                  {COHORTES.map((row, i) => (
                    <tr key={i} className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-4 py-3.5 font-medium text-[#000049]">{row.inscription}</td>
                      <td className="px-4 py-3.5 text-[#000049]/70 font-light">{row.initiation}</td>
                      <td className="px-4 py-3.5 hidden sm:table-cell text-[#000049]/60 font-light">
                        {row.lieu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#f8fafc] rounded-xl border border-[#000049]/5 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-6 text-[#000049]/80">
                Formulaire de demande d&apos;essai
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Courriel *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={inputClass}
                        placeholder="parent@exemple.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Période souhaitée *</label>
                      <select name="periode" required className={inputClass}>
                        <option value="">Choisir une période...</option>
                        <option value="Novembre – Janvier (Gymnase)">Novembre – Janvier (Gymnase)</option>
                        <option value="Février – Mars (Gymnase)">Février – Mars (Gymnase)</option>
                        <option value="Mai – Juin (Henri Julien)">Mai – Juin (Henri Julien)</option>
                        <option value="Septembre – Octobre (Henri Julien)">Septembre – Octobre (Henri Julien)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nom & Prénom du participant *</label>
                      <input
                        type="text"
                        name="nomParticipant"
                        required
                        className={inputClass}
                        placeholder="Nom de l'enfant"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Âge du participant *</label>
                      <input
                        type="number"
                        name="ageParticipant"
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
                      name="contactUrgence"
                      required
                      className={inputClass}
                      placeholder="Nom du parent – (514) 123-4567"
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-red-600 font-medium bg-red-50 border border-red-200 rounded-xl p-3">
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#000049] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-[#f368f1] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Envoi en cours..." : "Envoyer la demande"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-emerald-800 uppercase tracking-wide text-xs mb-1">
                    Demande envoyée avec succès
                  </h4>
                  <p className="text-xs text-emerald-700/80 font-light">
                    L&apos;équipe des Gaulois vous contactera sous peu pour confirmer votre place.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Bloc 2: Processus d'affiliation officiel via SportLomo */}
          <section className="bg-white rounded-2xl border border-[#000049]/10 p-8 shadow-xs">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#000049]/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#000049] text-white text-base font-black shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-[#000049]">
                  Inscription Officielle (Saison complète)
                </h2>
                <p className="text-[#000049]/60 text-xs font-light mt-0.5">Affiliation obligatoire · Rugby Canada</p>
              </div>
            </div>

            <p className="text-sm text-[#000049]/70 leading-relaxed font-light mb-6">
              Votre enfant souhaite porter fièrement les couleurs des Gaulois pour toute la saison ? L&apos;inscription officielle et l&apos;émission des licences obligatoires se font sur la plateforme officielle de <strong className="font-semibold text-[#000049]">Rugby Canada (SportLomo)</strong>.
            </p>

            <div className="bg-[#f8fafc] border border-[#000049]/10 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[#000049] font-bold uppercase tracking-wide text-xs">
                  Espace d&apos;affiliation SportLomo
                </p>
                <p className="text-[#000049]/60 text-xs font-light mt-0.5">
                  Gestion sécurisée par Rugby Canada & Rugby Québec
                </p>
              </div>
              <a
                href="https://rugbycanada.sportlomo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f368f1] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-[#000049] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Accéder au site
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Barre latérale droite contenant les compléments d'informations */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Détails sur la validité de l'inscription */}
          <div className="bg-white rounded-2xl border border-[#000049]/10 p-6 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f368f1]">Tarification</span>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#000049] mt-1 mb-4">
              Transparence totale
            </h3>
            <div className="space-y-3 text-xs font-light text-[#000049]/70 leading-relaxed">
              <div className="bg-[#f8fafc] rounded-xl p-4 border border-[#000049]/5">
                <p className="font-bold text-[#000049] mb-1">Ouverture des inscriptions</p>
                <p>Les licences peuvent être prises sur SportLomo à partir du mois de <strong>février</strong>.</p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-4 border border-[#000049]/5">
                <p className="font-bold text-[#000049] mb-1">Durée de validité</p>
                <p>La licence couvre l&apos;intégralité des activités et assurances jusqu&apos;au <strong>30 avril {nextYear}</strong>.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#000049]/10 flex items-center gap-2 text-[10px] text-[#000049]/50 font-medium uppercase tracking-wider">
              <span>Aucun frais caché pour les tournois.</span>
            </div>
          </div>

          {/* Table de correspondance des tranches d'âge par rapport aux années civiles */}
          <div className="bg-white rounded-2xl border border-[#000049]/10 p-6 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f368f1]">Catégories</span>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#000049] mt-1 mb-4">
              Tranches d&apos;âge
            </h3>
            <div className="space-y-1.5">
              {ageBracketsDynamic.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 text-xs py-2 px-3 rounded-lg bg-[#f8fafc]/50 border border-[#000049]/5"
                >
                  <span className="font-medium text-[#000049] text-[11px]">{item.label}</span>
                  <span className="font-mono text-[10px] font-bold text-[#000049]/50">
                    {item.years}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#000049]/40 font-light italic mt-4 leading-relaxed">
              * L&apos;âge est calculé au cours de l&apos;année civile. La catégorie U6 s&apos;adresse aux enfants de 5 ans et plus.
            </p>
          </div>

          <div className="text-[10px] text-[#000049]/30 text-center font-mono">
            Catégories synchronisées sur l&apos;année {currentYear}
          </div>
        </div>
      </div>
    </main>
  );
}

export default InscriptionPage;