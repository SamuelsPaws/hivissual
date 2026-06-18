'use client'
import { Media } from "@/lib/types";
import { useEffect, useState } from "react"
import MediaViewer from "./MediaViewer";
import Link from "next/link";

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
                className="
                    absolute left-8 top-8 z-[9910]
                    text-3xl text-brandwhite"
            >
                <i className="fa fa-times"></i>
            </button>
        </div>
        {/* Prev and next buttons */}
        <button
            onClick={previousMedia}
            className="
                fixed left-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-6
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                text-3xl text-black
                rounded-r-full"
        >
            <i className="fa fa-arrow-left"></i>
        </button>
        <button
            onClick={nextMedia}
            className="
                fixed right-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-6
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                text-3xl text-black
                rounded-l-full"
        >
            <i className="fa fa-arrow-right"></i>
        </button>
        {/* Media viewer wrapper */}
        <div className="
            fixed top-1/2 left-1/2 -translate-1/2
            w-[80vw] h-[80vh] z-[9950]
            bg-brandblack-100 rounded-2xl overflow-hidden"
        >
            <MediaViewer
                media={media}
            />
            {media !== null && media.type === 'project' &&
                <div className="
                    absolute bottom-4 left-4 z-[9960]
                    w-140 p-8
                    bg-brandgray-200/80 backdrop-blur-md
                    text-brandwhite
                    rounded-2xl"
                >
                    <p className="mb-4 text-3xl font-semibold">
                        Cliente: {media?.client}
                    </p>
                    <p className="mb-8 text-md">
                        Campaña de crecimiento en redes sociales con fotografía y producción de videos publicitarios
                    </p>
                    <p className="mb-8 text-xl font-semibold">
                        ¿Quieres saber cómo ayudé a este cliente a impulsar su marca?
                    </p>
                    <Link
                        href={`/proyectos/${media.projectSlug}`}
                        className="
                            block w-fit px-8 py-4
                            text-lg text-black font-semibold
                            bg-brandwhite rounded-full"
                    >
                        Ver Proyecto
                    </Link>
                </div>
            }
        </div>
    </div>
    )
}

export default Lightbox