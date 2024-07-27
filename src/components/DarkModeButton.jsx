import React from 'react';

// COMPONENTE PER IL PULSANTE DEL CAMBIO DI TEMA
function DarkModeButton({ onClick, children }) {
  return (
    <button
      id="dark-mode-button"
      onClick={onClick}
      className="fixed w-14 h-14 bottom-4 lg:bottom-[88px] right-3 md:right-8 rounded-full bg-[#000051] dark:bg-white text-white dark:text-[#000051] flex justify-center items-center no-transition z-[200]"
    >
      {children}
    </button>
  );
}

export default DarkModeButton;
