import type { Transition, Variants } from "motion/react";

// A restrained, critically damped house style. Interactive elements should
// settle quickly and never bounce unless momentum came from a gesture.
export const springSmooth: Transition = {
    type: "spring",
    duration: 0.4,
    bounce: 0,
};

export const springSnappy: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 16,
};

export const springMomentum: Transition = {
    type: "spring",
    duration: 0.38,
    bounce: 0.18,
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: springSmooth },
};

export const fadeUpSmall: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: springSnappy },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } },
};

export const scaleReveal: Variants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: springSmooth },
};

export const press = { scale: 0.97 };
export const lift = { y: -3, scale: 1.015 };

export const viewportOnce = { once: true, margin: "-24px 0px" } as const;
