import React from 'react';
import CV from '../assets/CURRICULUM.pdf';
import { GrDocumentDownload } from 'react-icons/gr';
import { RevealYUp, RevealYDown } from './Reveals';
import { FaLongArrowAltDown } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="w-full h-auto md:min-h-screen bg-stone-200 dark:bg-[#000051] py-20 flex items-center transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1100px] w-full">
          <RevealYUp>
            <div className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00]">
                LA MIA STORIA
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">La mia presentazione</p>
            </div>
          </RevealYUp>
        </div>
        <RevealYDown>
          <div className="flex items-center justify-center">
            <div className="max-w-[1100px] w-full dark:text-gray-200">
              <div className="text-3xl lg:text-4xl font-semibold md:text-center py-6 italic">
                <p>In questa sezione ti racconterò un po' di me.</p>
              </div>

              <div className="grid md:grid-cols-2 md:gap-8 text-lg lg:text-xl">
                <div className="md:text-right space-y-3">
                  <p>
                    Cresciuto a Brescia, ho iniziato la mia carriera come geometra, ma la mia passione per la
                    programmazione mi ha spinto a cambiare strada.
                  </p>
                  <p>
                    Dopo 6 anni di lavoro come geometra ho deciso di reinventarmi ed ho iniziato il percorso di studi
                    presso start2impact University, acquisendo competenze in alcuni linguaggi di programmazione come
                    HTML, CSS, JavaScript, React e Node.
                  </p>
                  <p>
                    Durante gli anni di esperienza da geometra, ho sviluppato abilità di problem solving, attenzione ai
                    dettagli, capacità di lavorare in team e gestire gruppi di persone. Tuttavia, ho sempre desiderato
                    esplorare il mondo dello sviluppo web.
                  </p>
                </div>
                <div className="md:text-left space-y-3">
                  <p>
                    La mia formazione come Front End Developer mi ha permesso di creare siti web full responsive,
                    ottimizzati per la velocità e accessibili.
                  </p>
                  <p>
                    Al momento sono alla ricerca del mio primo impiego in questo settore, ma uno dei miei obiettivi è
                    quello di espandere le mie conoscenze nell’ambito del lavoro digitale. Proprio per questo motivo sto
                    studiando il Back End Development e l'UX/UI Design in modo più approfondito rispetto a quanto fatto
                    durante il master in Front End.
                  </p>
                  <p className="flex gap-2">
                    <FaLongArrowAltDown className="animate-bounce" />
                    Se vuoi sapere di più, scarica il mio curriculum!
                    <FaLongArrowAltDown className="animate-bounce" />
                  </p>
                  <a href={CV} download="">
                    <button className="text-[#000051] dark:text-white dark:hover:text-[#000051] group border-2 border-[#000051] dark:border-white dark:hover:border-[#ffbb00] my-4 pl-6 pr-4 py-3 flex items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] hover:scale-105 active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-300 font-semibold rounded-2xl transition-all">
                      Download CV
                      <span className="ml-2">
                        <GrDocumentDownload size={18} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealYDown>
      </div>
    </section>
  );
}

export default About;
