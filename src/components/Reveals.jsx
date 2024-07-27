import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function RevealHome({ children }) {
  const size = useWindowSize();
  const threshold = size.width <= 768 ? 0.2 : 0.5; // Modifica la soglia in base alla larghezza dello schermo
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <div ref={ref} className="relative w-full h-full">
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 900 }}
        className="bg-[#ffbb00]"
      />
      <motion.div
        variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealYUp({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.4, delay: 0.25, ease: 'easeIn' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export function RevealYDown({ children }) {
  const size = useWindowSize();
  const threshold = size.width <= 768 ? 0.2 : 0.5;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeIn' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export function RevealXRight({ children }) {
  const size = useWindowSize();
  const threshold = size.width <= 768 ? 0.2 : 0.5;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeIn' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export function RevealXLeft({ children }) {
  const size = useWindowSize();
  const threshold = size.width <= 768 ? 0.2 : 0.5;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeIn' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default RevealHome;
