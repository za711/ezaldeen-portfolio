import type { Variants } from "framer-motion";

export const isRTL = () =>
  typeof document !== "undefined" && document.documentElement.dir === "rtl";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInSide: Variants = {
  hidden: { opacity: 0, x: isRTL() ? 40 : -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const headerDrop: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", delay: 0.2 } }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(15,39,66,0.08)" },
  hover: {
    y: -8,
    boxShadow: "0 16px 48px rgba(15,39,66,0.16)",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(214,168,79,0)",
      "0 0 0 8px rgba(214,168,79,0.12)",
      "0 0 0 0 rgba(214,168,79,0)"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
