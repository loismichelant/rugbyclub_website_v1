import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      {/* Section Hero: Accueil principal plein écran */}
      <section className="relative h-screen max-h-175 w-full overflow-hidden flex items-center justify-center">
        {/* Image de fond avec préchargement pour le haut de page */}
        <Image
          src="/melee.jpg"
          alt="Mêlée des Gaulois"
          fill
          priority
          className="object-cover object-[center_50%]"
        />
        
        {/* Overlay sombre pour assurer le contraste du texte */}
        <div className="absolute inset-0 bg-linear-to-br from-[#000049]/85 via-[#000049]/60 to-[#000049]/30" />

        {/* Bloc central de contenu */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
          <span className="mb-4 inline-block rounded-full border border-[#f368f1]/60 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#f368f1]">
            Club de Rugby · Les Gaulois
          </span>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight text-white drop-shadow-2xl">
            L&apos;esprit du combat, <br />
            <span className="text-[#f368f1]">la force du collectif.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl font-light text-white/80 max-w-xl leading-relaxed">
            Rejoignez les Gaulois et portez fièrement nos couleurs sur chaque terrain.
          </p>

          {/* Boutons d'action principale */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            
            {/* Lien vers la page des horaires et de l'école de rugby */}
            <Link
              href="/ecole"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#000049] text-sm uppercase tracking-widest shadow-lg hover:bg-[#f368f1] hover:text-white hover:shadow-[#f368f1]/40 hover:shadow-2xl transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              Horaires et terrains
            </Link>

            {/* Lien externe vers la boutique du partenaire officiel */}
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

        {/* Indicateur visuel de défilement */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1]">Découvrir</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f368f1] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Section Présentation: Valeurs et culture du club */}
      <section className="w-full bg-[#f8fafc] px-6 py-20 md:py-28 text-[#000049]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Bloc d'images asymétrique (Côté gauche) */}
          <div className="lg:col-span-5 relative grid grid-cols-2 gap-4 h-[450px] md:h-[550px]">
            {/* Effet graphique en arrière-plan */}
            <div className="absolute -inset-4 bg-[#f368f1]/5 rounded-3xl -z-10 transform -rotate-1 hidden md:block" />
            
            {/* Image principale: Action en match */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-300/40 group bg-slate-200">
              <Image 
                src="https://images.unsplash.com/photo-1580720320997-d26327263582?q=80&w=2070&auto=format&fit=crop"
                alt="Match de rugby"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000049]/40 to-transparent" />
            </div>

            {/* Colonne secondaire: Deux images empilées */}
            <div className="grid grid-rows-2 gap-4 h-full">
              {/* Image d'entraînement */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-slate-300/30 group bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/flagged/photo-1552803516-06cc17c06ab3?q=80&w=2070&auto=format&fit=crop"
                  alt="Entraînement de rugby"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Image de la communauté avec badge du club */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-slate-300/30 group bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1777177163385-b4408a941bd3?q=80&w=2070&auto=format&fit=crop"
                  alt="Équipe unie"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#f368f1] text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
                  #FamilleGaulois
                </div>
              </div>
            </div>
          </div>

          {/* Contenu textuel et arguments (Côté droit) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f368f1] mb-3">
              Prêt à plaquer la routine ?
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6">
              Le rugby, c&apos;est l&apos;art <br />
              <span className="text-[#f368f1]">de se dépasser ensemble.</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-[#000049]/80 font-normal mb-6">
              Oublie les préjugés : pas besoin d&apos;être un colosse pour triompher ici. Le rugby est l&apos;un des rares sports où chaque morphologie trouve son rôle idéal. Que tu sois rapide comme l&apos;éclair, robuste comme un roc ou stratège dans l&apos;âme, il y a un maillot des Gaulois qui t&apos;attend.
            </p>

            {/* Arguments clés du club */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 border-l-4 border-[#000049] pl-6 py-2">
              <div>
                <h4 className="text-base font-bold uppercase text-[#000049] flex items-center gap-2">
                  Sur le terrain
                </h4>
                <p className="text-sm text-[#000049]/70 font-light mt-1">
                  De l&apos;adrénaline pure, des plaquages sécuritaires, de l&apos;impact et des tactiques pour déjouer la défense adverse.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold uppercase text-[#000049] flex items-center gap-2">
                  Après le coup de sifflet
                </h4>
                <p className="text-sm text-[#000049]/70 font-light mt-1">
                  La fameuse troisième mi-temps. On refait le match avec les adversaires autour de collations, parce que la camaraderie passe avant tout.
                </p>
              </div>
            </div>
            
            <p className="text-base leading-relaxed text-[#000049]/70 font-light mt-4 mb-8">
              Ici au Québec, notre communauté grandit à toute allure. Chez les Gaulois, on s&apos;entraîne fort l&apos;hiver au chaud, on performe tout l&apos;été sur le gazon, et surtout, on accueille tout le monde à bras ouverts, des joueurs d&apos;expérience aux parfaits débutants.
            </p>

            <div>
              <Link 
                href="/adn"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-white bg-[#000049] px-6 py-3 rounded-xl hover:bg-[#f368f1] transition-colors duration-300"
              >
                Découvrir notre ADN
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}