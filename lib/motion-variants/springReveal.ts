import { Variants } from "motion";

export const springRevealHover: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 350,
            damping: 16
        }
    },
    hovered: {
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 350,
            damping: 16,
        },
        border: '1px solid #fff5'
    }
}