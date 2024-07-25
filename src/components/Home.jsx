import React from 'react';
import { GrSend } from 'react-icons/gr';
import RevealHome from './Reveals';

function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br dark:bg-gradient-to-br from-slate-100 dark:from-[#000051]  via-cyan-300 dark:via-[#6d6dde] to-lime-400 dark:to-[#ffbb00] w-full h-screen transition-colors duration-500"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-5 md:px-16 flex flex-col md:flex-row justify-center items-center h-full gap-6">
        <RevealHome>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#000051] dark:text-gray-100 transition-colors duration-500">
            LORENZO CASTELLETTI
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold italic text-[#8892b0] py-2">Sviluppatore Front End.</h2>
          <div className="text-xl lg:text-2xl py-4 max-w-[600px] text-black dark:text-gray-200 space-y-2 transition-colors duration-500">
            <p>Ciao è un piacere conoscerti</p>
            <p>sono un Front End Developer appassionato di creare esperienze utente coinvolgenti e interattive.</p>
            <p>
              Questo è il mio portoflio dove potrai trovare informazioni su di me, i miei progetti e la mia formazione.
            </p>
            <p>
              Prenditi un momento per esplorare tutte le sezioni del mio sito e se hai qualche domanda non esitare a
              contattarmi 😃
            </p>
          </div>
          <div>
            <a href="#contact" className="transition-colors duration-500">
              <button className="text-[#000051] dark:text-white dark:hover:text-[#000051] group border-2 border-[#000051] dark:border-white dark:hover:border-[#ffbb00] pl-6 pr-4 py-3 flex items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] hover:scale-105 active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-500 font-semibold rounded-2xl transition-all">
                Scrivimi!
                <span>
                  <GrSend className="mx-2" />
                </span>
              </button>
            </a>
          </div>
        </RevealHome>
      </div>
    </section>
  );
}

export default Home;
