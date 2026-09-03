import { Variants } from "motion";

export const springRevealHover: Variants = {
    hidden: {
        opacity: 0,
        y: 48,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 16
        }
    },
    hovered: {
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 350,
            damping: 17,
        },
        border: '1px solid #fff5'
    }
}