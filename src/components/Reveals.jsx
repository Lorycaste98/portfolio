import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function RevealHome({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ position: 'absolute', top: 4, bottom: 4, left: 0, right: 0, zIndex: 200 }}
        className="bg-[#ffbb00]"
      />
      <motion.div
        ref={ref}
        variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function RevealYUp({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
