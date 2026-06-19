"use client";

import { useEffect, useState } from "react";

const TOURNOIS = [
  { nom: "Festival Mini-Rugby de Montréal", date: "2026-05-24", lieu: "Parc Jean-Drapeau", categories: "U6 à U12" },
  { nom: "Tournoi Provincial des Gaulois", date: "2026-06-14", lieu: "Terrain Henri Julien", categories: "Toutes catégories" },
  { nom: "Coupe Jeunesse de Québec", date: "2026-07-05", lieu: "Stade Université Laval", categories: "U14 à U18" },
  { nom: "Défi d'Automne de Saint-Jérôme", date: "2026-09-12", lieu: "Parc Multisports", categories: "U8 à U14" },
];

interface TimeLeft {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
  estAujourdhui: boolean;
}

export default function ProchainTournoi() {
  const [prochainTournoi, setProchainTournoi] = useState<typeof TOURNOIS[0] | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recherche et tri du tournoi à venir le plus proche
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);

    const tournoisFuturs = TOURNOIS.filter((t) => {
      const dateTournoi = new Date(t.date + "T00:00:00");
      return dateTournoi >= aujourdhui;
    });

    let tournoiCible: typeof TOURNOIS[0] | null = null;
    if (tournoisFuturs.length > 0) {
      tournoisFuturs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      tournoiCible = tournoisFuturs[0];
      setProchainTournoi(tournoiCible);
    }

    setLoading(false);

    if (!tournoiCible) return;

    // Calcul et mise à jour du compte à rebours
    const cibleMs = new Date(tournoiCible.date + "T08:00:00").getTime();

    const calculerTemps = () => {
      const maintenant = new Date().getTime();
      const difference = cibleMs - maintenant;

      const dateActuelleText = new Date().toISOString().split("T")[0];
      if (tournoiCible && dateActuelleText === tournoiCible.date) {
        setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0, estAujourdhui: true });
        return;
      }

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        secondes: Math.floor((difference % (1000 * 60)) / (1000)),
        estAujourdhui: false
      });
    };

    calculerTemps();
    const intervalle = setInterval(calculerTemps, 1000);

    return () => clearInterval(intervalle);
  }, []);

  if (loading) {
    return <div className="animate-pulse bg-[#000049] rounded-2xl h-40 mt-6" />;
  }

  const getDateDetails = (dateString: string) => {
    const dateObj = new Date(dateString + "T00:00:00");
    const jour = dateObj.toLocaleDateString("fr-CA", { day: "numeric" });
    const mois = dateObj.toLocaleDateString("fr-CA", { month: "short" }).replace(".", "");
    return { jour, mois };
  };

  return (
    <div className="relative bg-[#000049] rounded-2xl border border-white/10 p-6 shadow-xl overflow-hidden mt-6">
      {prochainTournoi ? (
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Informations principales du tournoi */}
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-[#f368f1] text-white px-2.5 py-1 rounded-md shadow-xs">
                Prochain tournoi
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/95 px-2.5 py-1 rounded-md border border-white/10">
                {prochainTournoi.categories}
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              {prochainTournoi.nom}
            </h3>
            
            <div className="text-xs text-white/70 font-light flex items-center gap-1.5">
              <span className="text-[#f368f1]">📍</span> {prochainTournoi.lieu}
            </div>
          </div>

          {/* Affichage des chiffres du compte à rebours */}
          {timeLeft && (
            <div className="flex items-center gap-2 bg-black/20 p-3 rounded-xl border border-white/5 shrink-0 justify-center sm:justify-start">
              {timeLeft.estAujourdhui ? (
                <span className="text-sm font-black text-[#f368f1] uppercase tracking-widest px-4 py-1 animate-pulse">
                  ⚡ C&apos;est aujourd&apos;hui ! Bon match !
                </span>
              ) : (
                <>
                  <div className="text-center min-w-[45px]">
                    <p className="text-lg font-mono font-black text-white leading-none">{timeLeft.jours}</p>
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider mt-1">Jours</p>
                  </div>
                  <span className="text-white/30 font-mono mb-4">:</span>
                  <div className="text-center min-w-[45px]">
                    <p className="text-lg font-mono font-black text-white leading-none">{timeLeft.heures}</p>
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider mt-1">Heures</p>
                  </div>
                  <span className="text-white/30 font-mono mb-4">:</span>
                  <div className="text-center min-w-[45px]">
                    <p className="text-lg font-mono font-black text-[#f368f1] leading-none">{timeLeft.minutes}</p>
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider mt-1">Min</p>
                  </div>
                  <span className="text-white/30 font-mono mb-4">:</span>
                  <div className="text-center min-w-[45px]">
                    <p className="text-lg font-mono font-black text-white/60 leading-none">{timeLeft.secondes}</p>
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider mt-1">Sec</p>
                  </div>
                </>
              )}
            </div>
          )}
          
          {/* Bloc d'affichage de la date au format calendrier */}
          <div className="relative flex lg:flex-col items-center justify-center gap-1 bg-white text-[#000049] px-5 py-3 lg:py-2.5 rounded-xl min-w-[100px] shadow-lg border-l-4 border-[#f368f1] shrink-0 self-start lg:self-auto">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#000049]/40 font-mono leading-none">
              {getDateDetails(prochainTournoi.date).mois}
            </p>
            <p className="text-2xl font-black font-mono tracking-tighter leading-none text-[#000049] mt-0.5">
              {getDateDetails(prochainTournoi.date).jour}
            </p>
          </div>

        </div>
      ) : (
        /* État d'affichage hors saison ou sans tournoi prévu */
        <div className="py-4 text-center">
          <h4 className="text-base font-black uppercase tracking-tight text-white">
            Saison régulière complétée !
          </h4>
          <p className="text-xs text-white/60 font-light mt-1 max-w-md mx-auto">
            Tous les tournois officiels sont terminés. Restez à l&apos;affût pour l&apos;annonce des matchs de la prochaine cohorte.
          </p>
        </div>
      )}
    </div>
  );
}