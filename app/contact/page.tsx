"use client";

import { useState, useTransition } from "react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

const inputClass =
  "w-full bg-[#f8fafc] border border-[#000049]/12 rounded-xl px-4 py-3 text-sm text-[#000049] placeholder:text-[#000049]/30 focus:border-[#f368f1] focus:bg-white focus:ring-2 focus:ring-[#f368f1]/15 focus:outline-none transition-all duration-200 disabled:opacity-50";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.12em] text-[#000049]/55 mb-1.5";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  {/* Gestion de l'état d'envoi asynchrone pour la Server Action */}
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      age: formData.get("age") as string,
      message: formData.get("message") as string,
    };

    {/* Exécution sécurisée de l'action d'envoi du courriel */}
    startTransition(async () => {
      const result = await sendContactEmail(data);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Une erreur est survenue.");
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#000049] overflow-x-hidden">

      {/* Section Hero */}
      <section className="relative bg-[#000049] text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#000049] via-[#000049]/90 to-[#f368f1]/20 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 px-4 py-1.5 rounded-full">
            Une question ?
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
            Contactez <span className="text-[#f368f1]">Les Gaulois</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto text-base md:text-lg font-light">
            Notre équipe de bénévoles et d'éducateurs est là pour vous répondre dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Informations de localisation et carte interactive */}
      <section id="map-section" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#000049]/5 shadow-sm">
            <div className="bg-[#000049] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f368f1]/15 flex items-center justify-center text-[#f368f1] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">Parc Henri-Julien</p>
                  <p className="text-white/80 text-xs font-light">9300 Rue Saint-Denis, Montréal, QC H2M 1P1</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=9300+Rue+Saint-Denis,+Montreal,+QC+H2M+1P1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f368f1] border border-[#f368f1]/30 bg-[#f368f1]/10 hover:bg-[#f368f1] hover:text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-200"
              >
                Ouvrir dans Maps
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="w-full h-96 bg-slate-200">
              <iframe
                src="https://maps.google.com/maps?q=Parc%20Henri-Julien,%209300%20Rue%20Saint-Denis,%20Montr%C3%A9al,%20QC%20H2M%201P1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte interactive du Parc Henri-Julien - Terrain des Gaulois"
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white rounded-2xl border border-[#000049]/5 shadow-sm p-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Nos coordonnées</span>
              <div className="mt-5 space-y-4">
                <a href="mailto:info@clubrugbygaulois.com" className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000049]/5 flex items-center justify-center text-[#000049]/50 shrink-0 mt-0.5 group-hover:bg-[#f368f1]/10 group-hover:text-[#f368f1] transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-[#000049] text-xs uppercase tracking-wide mb-0.5 group-hover:text-[#f368f1] transition-colors duration-200">Courriel</p>
                    <p className="break-all text-xs font-medium text-[#000049]/70">info@clubrugbygaulois.com</p>
                  </div>
                </a>
                <a href="tel:+14383944285" className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000049]/5 flex items-center justify-center text-[#000049]/50 shrink-0 mt-0.5 group-hover:bg-[#f368f1]/10 group-hover:text-[#f368f1] transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/xl" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-[#000049] text-xs uppercase tracking-wide mb-0.5 group-hover:text-[#f368f1] transition-colors duration-200">Téléphone</p>
                    <p className="text-xs font-medium text-[#000049]/70">+1 (438) 394-4285</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#000049]/5 shadow-sm p-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f368f1]">Notre terrain</span>
              <div className="mt-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#000049]/5 flex items-center justify-center text-[#000049]/50 shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm font-light text-[#000049]/70 leading-relaxed">
                  <p className="font-black text-[#000049] text-sm uppercase tracking-wide mb-1">Parc Henri-Julien</p>
                  <p>9300 Rue Saint-Denis</p>
                  <p>Montréal, QC H2M 1P1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de prise de contact */}
      <section className="bg-[#000049]/4 border-t border-[#000049]/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#000049]/5 shadow-sm overflow-hidden">
            <div className="bg-[#000049] px-8 py-6">
              <h2 className="text-xl font-black uppercase tracking-wide text-white">
                Demande de renseignements
              </h2>
              <p className="text-white/80 text-xs font-light mt-1">
                Pour toute question sur les entraînements, catégories ou événements à venir.
              </p>
            </div>

            <div className="p-8">
              {/* Message d'erreur global si l'action serveur échoue */}
              {errorMessage && (
                <div className="mb-4 p-4 text-xs font-bold uppercase tracking-wide bg-red-50 text-red-600 rounded-xl border border-red-200">
                  {errorMessage}
                </div>
              )}

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nom complet *</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        required 
                        disabled={isPending} 
                        className={inputClass} 
                        placeholder="Votre nom et prénom" 
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Courriel *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        disabled={isPending}
                        className={inputClass} 
                        placeholder="parent@exemple.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Âge du joueur / de la joueuse{" "}
                      <span className="normal-case font-light tracking-normal">(si applicable)</span>
                    </label>
                    <input 
                      type="number" 
                      name="age" 
                      min="4" 
                      max="18" 
                      disabled={isPending}
                      className={inputClass} 
                      placeholder="Ex: 10" 
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea 
                      required 
                      name="message" 
                      rows={5} 
                      disabled={isPending}
                      className={`${inputClass} resize-none`} 
                      placeholder="Votre question ou demande d'information détaillée..." 
                    />
                  </div>

                  <div className="pt-1">
                    {/* Désactivation du bouton durant la transition pour éviter le spam */}
                    <button
                      type="submit"
                      disabled={isPending} 
                      className="inline-flex items-center gap-3 bg-[#000049] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-[#f368f1] transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-[#f368f1]/25 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Envoi en cours..." : "Envoyer le message"}
                      {!isPending && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Écran de confirmation de l'envoi */
                <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-8 text-center">
                  <h4 className="font-black text-emerald-800 uppercase tracking-wide text-sm mb-2">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-xs text-emerald-700/80 font-light leading-relaxed max-w-sm mx-auto">
                    Merci ! Votre message a été transmis aux responsables du club. Une **copie conforme** vient également de vous être envoyée par courriel.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ContactPage;