'use client'
import { Media } from "@/lib/types";
import { useEffect, useState } from "react"
import MediaViewer from "./MediaViewer";
import Link from "next/link";
import clsx from "clsx";
import LightboxInfo from "./LightboxInfo";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    media: Media | null;
    previousMedia: () => void;
    nextMedia: () => void;
}

const Lightbox = ({ isOpen, onClose, media, previousMedia, nextMedia }: Props) => {
    useEffect(() => {
        if (!isOpen) return

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose()
            }

            if (e.key === 'ArrowRight') {
                nextMedia()
            }
            
            if (e.key === 'ArrowLeft') {
                previousMedia()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen])
    
    if (!isOpen) return null

    return (
    <div>
        {/* Backdrop */}
        <div
            onClick={onClose}
            className="
                fixed top-0 left-0 z-[9900]
                w-screen h-screen
                bg-black/60"
        >
            <button
                onClick={onClose}
                className="absolute left-8 top-8 z-[9910]"
            >
                <img
                    src="/assets/x.svg"
                    className="w-8 h-8 opacity-90"
                />
            </button>
        </div>
        {/* Prev and next buttons */}
        <button
            onClick={previousMedia}
            className="
                fixed left-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-8
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                rounded-r-full"
        >
            <img
                src="/assets/black-arrow-left.svg"
                className="
                    w-8 h-8
                    absolute top-1/2 left-1/2 -translate-1/2"
            />
        </button>
        <button
            onClick={nextMedia}
            className="
                fixed right-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-8
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                rounded-l-full"
        >
            <img
                src="/assets/black-arrow-right.svg"
                className="
                    w-8 h-8
                    absolute top-1/2 left-1/2 -translate-1/2"
            />
        </button>
        {/* Media viewer wrapper */}
        <div className={clsx(
            "fixed top-1/2 left-1/2 -translate-1/2 z-[9950]",
            media?.type === 'video' ? "w-fit" : "w-[80vw] h-[80vh]",
            "flex flex-col",
            "bg-brandgray-200 rounded-2xl overflow-hidden"
        )}>
            <MediaViewer
                media={media}
            />
            {media !== null && media.type === 'project' &&
                <div className="
                    absolute bottom-4 left-4 z-[9960]
                    w-140 p-8
                    bg-brandblack/70 backdrop-blur-md
                    text-brandwhite
                    rounded-2xl"
                >
                    <p className="mb-4 text-2xl font-semibold">
                        Cliente: {media?.client}
                    </p>
                    <p className="mb-8 text-md">
                        Campaña de crecimiento en redes sociales con fotografía y producción de videos publicitarios
                    </p>
                    <p className="mb-6 text-xl font-semibold">
                        ¿Quieres saber cómo ayudé a este cliente a impulsar su marca?
                    </p>
                    <Link
                        href={`/proyectos/${media.projectSlug}`}
                        className="
                            block w-fit px-6 py-3
                            text-lg text-black font-semibold
                            bg-brandwhite rounded-full"
                    >
                        Ver Proyecto
                    </Link>
                </div>
            }
            {media !== null && media.type === 'video' &&
                <div className="
                    w-full pl-8 pr-4 py-4
                    flex items-center justify-between"
                >
                    <span className="text-lg text-brandwhite">
                        <span className="mr-2 font-semibold">
                            Cliente:
                        </span>
                        {media.client}
                    </span>
                    <a
                        href="/"
                        className="
                            block px-6 py-2
                            bg-linear-30 from-fuchsia-700 to-amber-600
                            text-lg text-brandwhite font-semibold
                            rounded-full"
                    >
                        Mira este post en Instagram
                    </a>
                </div>
            }
            {media !== null && media.type === 'image' &&
                <LightboxInfo />
            }
        </div>
    </div>
    )
}

export default Lightbox