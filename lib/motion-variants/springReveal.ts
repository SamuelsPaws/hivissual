import { Variants } from "motion";
import { springSmooth, springSnappy } from "@/lib/motion";

export const springRevealHover: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: springSnappy
    },
    hovered: {
        y: -3,
        scale: 1.05,
        transition: springSnappy,
        border: '1px solid #555'
    }
}
