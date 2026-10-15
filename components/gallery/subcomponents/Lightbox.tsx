"use client";

import { PortfolioItem } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import MediaViewer from "./MediaViewer";
import clsx from "clsx";
import LightboxInfo from "./LightboxInfo";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { press, springMomentum, springSmooth, springSnappy } from "@/lib/motion";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    item: PortfolioItem | null;
    previousMedia: () => void;
    nextMedia: () => void;
}

const Lightbox = ({ isOpen, onClose, item, previousMedia, nextMedia }: Props) => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const changeMedia = useCallback((direction: "previous" | "next") => {
        if (direction === "next") nextMedia();
        else previousMedia();
        setIsInfoOpen(false);
    }, [nextMedia, previousMedia]);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowRight") changeMedia("next");
            if (event.key === "ArrowLeft") changeMedia("previous");
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [changeMedia, isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9900] bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    onClick={onClose}
                >
                    <motion.button
                        onClick={onClose}
                        className="absolute z-[9910] left-4 top-4 lg:left-8 lg:top-8"
                        aria-label="Cerrar galería"
                        whileTap={press}
                        transition={springSnappy}
                    >
                        <img
                            src="/assets/x.svg"
                            className="
                                w-4 h-4
                                md:w-6 md:h-6
                                opacity-90"
                            alt=""
                        />
                    </motion.button>

                    <motion.button
                        onClick={(event) => {
                            event.stopPropagation();
                            changeMedia("previous");
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-[9910] h-48 px-7 hidden lg:block bg-brandwhite/35 hover:bg-brandwhite/65 backdrop-blur-lg rounded-r-full"
                        aria-label="Elemento anterior"
                        whileTap={press}
                        transition={springSnappy}
                    >
                        <img src="/assets/black-arrow-left.svg" className="w-8 h-8" alt="" />
                    </motion.button>

                    <motion.button
                        onClick={(event) => {
                            event.stopPropagation();
                            changeMedia("next");
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-[9910] h-48 px-7 hidden lg:block bg-brandwhite/35 hover:bg-brandwhite/65 backdrop-blur-lg rounded-l-full"
                        aria-label="Siguiente elemento"
                        whileTap={press}
                        transition={springSnappy}
                    >
                        <img src="/assets/black-arrow-right.svg" className="w-8 h-8" alt="" />
                    </motion.button>

                    <motion.div
                        onClick={(event) => {
                            event.stopPropagation();
                            setIsInfoOpen((open) => !open);
                        }}
                        className={clsx(
                            "absolute top-1/2 left-1/2 z-[9950] -translate-x-1/2 -translate-y-1/2",
                            "w-[82vw] h-[80vh] flex flex-col touch-pan-y",
                            "bg-white/10 backdrop-blur-xl border border-white/25",
                            "rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.55)]",
                        )}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
                        transition={springSmooth}
                        drag={shouldReduceMotion ? false : "x"}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.14}
                        dragTransition={springMomentum}
                        onDragEnd={(_, info) => {
                            const projectedX = info.offset.x + info.velocity.x * 0.18;
                            if (projectedX < -80) changeMedia("next");
                            if (projectedX > 80) changeMedia("previous");
                        }}
                    >
                        <MediaViewer
                            media={item ? {
                                type: item.media.type,
                                src: item.media.src,
                                alt: item.media.caption ?? ''
                            } : null}
                        />
                        {item && (
                            <LightboxInfo
                                isOpen={isInfoOpen}
                                type={item.media.type}
                                client={item.client}
                                date={item.date}
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
