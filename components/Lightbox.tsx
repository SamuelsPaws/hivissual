"use client";

import { Media } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import MediaViewer from "./MediaViewer";
import Link from "next/link";
import clsx from "clsx";
import LightboxInfo from "./LightboxInfo";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { press, springMomentum, springSmooth, springSnappy } from "@/lib/motion";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    media: Media | null;
    previousMedia: () => void;
    nextMedia: () => void;
}

const Lightbox = ({ isOpen, onClose, media, previousMedia, nextMedia }: Props) => {
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
                        className="absolute z-[9910] left-4 top-4 lg:left-8 lg:top-8 p-3 rounded-full bg-white/10 backdrop-blur-xl"
                        aria-label="Cerrar galería"
                        whileTap={press}
                        transition={springSnappy}
                    >
                        <img src="/assets/x.svg" className="w-6 h-6 opacity-90" alt="" />
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
                        <MediaViewer media={media} />

                        {media?.type === "project" && (
                            <div className="absolute bottom-4 left-4 z-[9960] w-[calc(100%-2rem)] max-w-140 p-5 lg:p-8 bg-brandblack/75 backdrop-blur-xl text-brandwhite rounded-2xl border border-white/15">
                                <p className="mb-4 text-xl lg:text-2xl font-semibold">Cliente: {media.client}</p>
                                <p className="mb-6 text-sm lg:text-md">Campaña de crecimiento en redes sociales con fotografía y producción de videos publicitarios</p>
                                <p className="mb-5 text-lg lg:text-xl font-semibold">¿Quieres saber cómo ayudé a este cliente a impulsar su marca?</p>
                                <Link href={`/proyectos/${media.projectSlug}`} className="pressable block w-fit px-6 py-3 text-lg text-black font-semibold bg-brandwhite rounded-full">
                                    Ver Proyecto
                                </Link>
                            </div>
                        )}

                        {media?.type === "video" && (
                            <div className="w-full h-[15%] px-2 lg:px-8 py-2 lg:py-0 flex flex-col items-start justify-end gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-0 bg-brandblack-200">
                                <span className="ml-2 text-xs lg:text-lg text-brandwhite"><span className="mr-2 font-semibold">Cliente:</span>{media.client}</span>
                                {media.instaUrl && (
                                    <a href={media.instaUrl} className="pressable block px-4 lg:px-6 py-2 bg-linear-30 from-fuchsia-700 to-amber-600 text-xs lg:text-lg text-brandwhite font-semibold rounded-full">
                                        Mira este post en Instagram
                                    </a>
                                )}
                            </div>
                        )}

                        {media?.type === "image" && (
                            <LightboxInfo isOpen={isInfoOpen} type={media.type} client={media.client} year={media.year} />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
