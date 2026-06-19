"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdnPage() {
  const [activeTab, setActiveTab] = useState<"joueur" | "parents" | "educateur" | string>("joueur");

  const coaches = [
    { name: "Coach Head", role: "Directeur Technique & U14", bio: "Qualifié Rugby Canada, passionné de formation.", img: "/melee.jpg" },
    { name: "Coach Adjoint", role: "Responsable École de Rugby", bio: "Spécialiste de l'initiation et de la motricité dès 5 ans.", img: "/melee.jpg" },
    { name: "Bénévole Passion", role: "Accompagnateur U10", bio: "Ancien joueur, dévoué à la transmission des valeurs.", img: "/melee.jpg" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#000049]">
      
      {/* En-tête de la page */}
      <section className="relative bg-[#000049] text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#000049] via-[#000049]/90 to-[#f368f1]/20 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1] bg-[#f368f1]/10 px-4 py-1.5 rounded-full">
            Qui sommes-nous ?
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
            Notre <span className="text-[#f368f1]">ADN</span> & Nos Valeurs
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg font-light">
            Représenter fièrement les Gaulois de Montréal, c’est véhiculer un comportement exemplaire et porter des valeurs fortes sur le terrain et en dehors.
          </p>
        </div>
      </section>

      {/* Grille des 5 piliers du rugby mondial */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight">Les Fondations du Jeu</h2>
          <p className="text-[#000049]/60 mt-2">Les 5 piliers du rugby mondial qui dictent la vie de notre club.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Intégrité", desc: "Le socle du fair-play et de l'honnêteté absolue.", color: "border-t-4 border-[#000049]" },
            { title: "Passion", desc: "Créer des liens émotionnels et appartenir à la famille du rugby.", color: "border-t-4 border-[#f368f1]" },
            { title: "Solidarité", desc: "Un sens du collectif qui transcende toutes les différences.", color: "border-t-4 border-[#000049]" },
            { title: "Discipline", desc: "Le respect strict des règles du jeu et de la charte du club.", color: "border-t-4 border-[#f368f1]" },
            { title: "Respect", desc: "Envers les coéquipiers, adversaires, officiels et la diversité.", color: "border-t-4 border-[#000049]" },
          ].map((val, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl shadow-xs ${val.color} hover:shadow-md transition-all`}>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#000049] mb-2">{val.title}</h3>
              <p className="text-sm text-[#000049]/70 font-light leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Présentation de l'équipe d'encadrement */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1]">L&apos;Équipe d&apos;encadrement</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2 text-[#000049]">
                Des coachs <span className="text-[#f368f1]">Qualifiés</span>
              </h2>
              <p className="mt-4 text-[#000049]/70 font-light leading-relaxed">
                Les Gaulois disposent d’entraîneurs qualifiés proposant des séances adaptées. Nos programmes sont bâtis avec <strong>Rugby Canada</strong> ainsi que sur le modèle des grandes nations du rugby (France, Australie).
              </p>
              <blockquote className="mt-6 border-l-4 border-[#f368f1] pl-4 italic text-[#000049]/80 text-sm">
                Vous souhaitez vous impliquer (peu importe votre expérience) ? Rejoignez-nous comme bénévole !
              </blockquote>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coaches.map((coach, i) => (
                <div key={i} className="bg-[#f8fafc] rounded-2xl overflow-hidden border border-[#000049]/5 hover:border-[#f368f1]/30 transition-all group">
                  <div className="relative h-48 w-full bg-[#000049]/10">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-[#000049]/40">
                      [Photo Coach]
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base text-[#000049]">{coach.name}</h3>
                    <p className="text-xs text-[#f368f1] font-semibold uppercase">{coach.role}</p>
                    <p className="text-xs text-[#000049]/60 mt-2 font-light">{coach.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation et contenu des chartes du club */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight">Droits & Devoirs : Les Chartes</h2>
          <p className="text-[#000049]/60 mt-2">Cliquez sur chaque profil pour découvrir les engagements mutuels.</p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {[
            { id: "joueur", label: "Charte Joueur" },
            { id: "parents", label: "Charte Parents" },
            { id: "educateur", label: "Charte Éducateur" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id 
                  ? "bg-[#000049] text-white shadow-md shadow-[#000049]/20" 
                  : "bg-white text-[#000049] border border-[#000049]/10 hover:bg-[#000049]/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#000049]/5 shadow-xs">
          
          {activeTab === "joueur" && (
            <div>
              <h3 className="text-xl font-bold text-[#f368f1] uppercase mb-6">Le Jeune Joueur</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Tes Droits</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Une formation de qualité et le plaisir du jeu.</li>
                    <li>Prendre des initiatives (ce qui implique un risque d’erreurs).</li>
                    <li>Ton dû de temps de jeu en compétition.</li>
                    <li>Le respect de tes éducateurs, dirigeants, adversaires et de tout l’environnement.</li>
                    <li>T’exprimer auprès des responsables pour les problèmes que tu pourrais rencontrer.</li>
                    <li>La reconnaissance de tes efforts, de tes progrès et de tes difficultés.</li>
                    <li>Le respect de ta personnalité, de tes convictions et, le cas échéant, de ta différence.</li>
                    <li>L’attitude exemplaire de tes éducateurs, dirigeants, partenaires et adversaires.</li>
                    <li>Un rappel à l’ordre sans faiblesse sur les valeurs si ton comportement venait à aller à l’encontre de celles-ci.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Tes Devoirs</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Être assidu et ponctuel, pour ne nuire ni à ta formation ni au groupe.</li>
                    <li>Être appliqué, à l’écoute, et chercher à atteindre ton "meilleur niveau".</li>
                    <li>Être respectueux des règles du jeu, de ton encadrement, de tes partenaires, de tes adversaires, de l’arbitre, de ton équipement, du matériel et des installations.</li>
                    <li>Accepter en toute circonstance les décisions des responsables.</li>
                    <li>Accepter le partage du temps de jeu, des honneurs ou des reproches.</li>
                  </ul>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Règles de vie à respecter</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Connaître les règles de vie du groupe et les respecter.</li>
                    <li>Participer aux petites tâches matérielles quand on te le demande ou spontanément.</li>
                    <li>Gérer de manière responsable ton équipement personnel : <strong className="text-red-500">NE PAS OUBLIER TON PROTÈGE-DENT !</strong></li>
                    <li>Transmettre à tes parents toutes les informations qui leur sont destinées.</li>
                    <li>Donner en toutes circonstances une bonne image de ton club.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "parents" && (
            <div>
              <h3 className="text-xl font-bold text-[#f368f1] uppercase mb-4">Engagement des Parents</h3>
              <p className="text-xs text-[#000049]/70 italic mb-6 font-light">
                "En inscrivant mon enfant au club rugby Les Gaulois, je suis conscient de la mission éducative de cette structure et m’engage à participer à cette mission de manière active."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="text-xs text-[#000049]/80 space-y-3 list-disc pl-4 font-light">
                  <li><strong>Pas d&apos;ingérence :</strong> Je respecte l&apos;éducateur et son travail et n&apos;interviens pas pendant la séance.</li>
                  <li><strong>Communication :</strong> J&apos;informe l&apos;éducateur et les dirigeants des événements qui risquent de perturber mon enfant.</li>
                  <li><strong>Avis constructif :</strong> Je donne mon avis aux responsables de manière constructive et en dehors des matchs/entraînements.</li>
                  <li><strong>Valeurs :</strong> J&apos;apprends à mon enfant à rester humble dans la victoire et digne dans la défaite.</li>
                  <li><strong>Implication :</strong> Je m&apos;implique au maximum dans la vie du club.</li>
                </ul>
                <ul className="text-xs text-[#000049]/80 space-y-3 list-disc pl-4 font-light">
                  <li><strong>Ponctualité :</strong> Je faire en sorte que mon enfant soit à l&apos;heure et je viens le chercher dès la fin.</li>
                  <li><strong>Suivi & Disponibilité :</strong> Je me tiens au courant du programme d&apos;activité du club.</li>
                  <li><strong>Sécurité & Sérénité :</strong> Je me tiens toujours en dehors des terrains lors des tournois.</li>
                  <li><strong>Arbitrage :</strong> Je respecte les décisions de l&apos;arbitre, quelles qu&apos;elles soient.</li>
                  <li><strong>Fair-play & Image :</strong> Je me comporte en bon spectateur, courtois et poli en toute circonstance.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "educateur" && (
            <div>
              <h3 className="text-xl font-bold text-[#f368f1] uppercase mb-6">Mission de l&apos;Éducateur</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Tes Droits</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Le respect des enfants, des parents et de l’ensemble des membres du Club.</li>
                    <li>Une formation et un recyclage de qualité pour parfaire tes compétences.</li>
                    <li>L’appui et l’aide des autres fonctions du club (administratif, logistique, etc.).</li>
                    <li>La reconnaissance liée à ton investissement bénévole et ta mission éducative.</li>
                    <li>L’aide des parents si tu les sollicites.</li>
                    <li>Un échange constructif avec les parents sur l’évolution de leur enfant.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Tes Devoirs</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Te former continuellement pour mettre tes compétences au service des enfants.</li>
                    <li>Préparer des contenus de séances en relation étroite avec les objectifs de formation.</li>
                    <li>Veiller scrupuleusement à la sécurité des joueurs.</li>
                    <li>Transmettre une technique et une passion, tout en donnant du plaisir.</li>
                    <li>Faire de la compétition un "outil de formation" en laissant de l’initiative.</li>
                    <li>Avoir un comportement et un langage exemplaires en toutes circonstances.</li>
                    <li>Échanger régulièrement avec les parents sur l’évolution de leur enfant.</li>
                  </ul>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-[#000049] mb-3">Règles de vie à respecter</h4>
                  <ul className="text-xs text-[#000049]/80 space-y-2 list-disc pl-4 font-light">
                    <li>Établir, faire connaître et faire respecter aux enfants les règles de vie du groupe.</li>
                    <li>Être intransigeant sur le respect des valeurs phares.</li>
                    <li>Veiller à donner à <strong>TOUS</strong> du temps de jeu en compétition.</li>
                    <li>Positiver tout progrès plutôt que de stigmatiser les erreurs.</li>
                    <li>Informer clairement les parents sur les règles de vie, le programme et les horaires.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Règlements administratifs et conformité sportive */}
      <section className="bg-[#000049]/5 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-4">Téléchargements & Règlements</h3>
            <div className="space-y-3">
              {[
                { name: "Règlements Généraux Gaulois (En vigueur)", url: "#" },
                { name: "Code de conduite - Rugby Québec", url: "https://rugbyquebec.org/index.php/code-de-conduite/" },
                { name: "Formulaire d'adhésion & Assurances", url: "#" }
              ].map((doc, idx) => (
                <a 
                  key={idx} 
                  href={doc.url}
                  target={doc.url.startsWith("http") ? "_blank" : "_self"}
                  rel={doc.url.startsWith("http") ? "noopener noreferrer" : ""}
                  className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#000049]/10 hover:border-[#f368f1] text-xs font-bold tracking-wide transition-all group"
                >
                  <svg xmlns="http://www.w3.org/2000/xl" className="h-4 w-4 text-[#f368f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="group-hover:text-[#f368f1] transition-colors">{doc.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#000049]/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-full">
                Sécurité & Intégrité
              </span>
              <h3 className="text-lg font-black uppercase mt-3 tracking-wide">Vérification & Signalements</h3>
              <p className="text-xs text-[#000049]/70 mt-2 font-light leading-relaxed">
                Le club applique rigoureusement la politique de vérification des antécédents judiciaires pour tout son staff. Nous adhérons pleinement aux politiques de protection de l&apos;intégrité en vigueur.
              </p>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://www.quebec.ca/tourisme-loisirs-sport/encadrement-gouvernance-gestion-loisir-sport/porter-plainte-sport-loisir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-red-700 transition-colors text-center"
              >
                Déposer une plainte
              </a>
              <a 
                href="https://rugbyquebec.org/index.php/code-de-conduite/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center border border-[#000049]/20 text-[#000049] text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-[#000049]/5 transition-all text-center"
              >
                Politique d&apos;Intégrité
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}