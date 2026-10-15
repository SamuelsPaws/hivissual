"use client";

import itemTypeMapper from "@/lib/utils/itemTypeMapper";
import mapCreatedDate from "@/lib/utils/mapCreatedDate";
import clsx from "clsx";
import { useId } from "react";

interface Props {
    isOpen: boolean;
    type: string;
    client: string;
    date: string | null;
}

const LightboxInfo = ({ isOpen, type, client, date }: Props) => {
    const panelId = useId();
    const easing = "cubic-bezier(0.32, 0.72, 0, 1)";
    const surface = "bg-brandblack rounded-xl border border-[#fff5] shadow-[0_16px_45px_rgba(0,0,0,0.35)]";

    // Keep both surfaces mounted so rapid toggles reverse the current transition.
    return (
        <div
            className="absolute bottom-4 left-4 right-4 z-[9970] pointer-events-none"
        >
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-hidden={isOpen}
                inert={isOpen}
                className={clsx(
                    surface,
                    "absolute bottom-0 left-0 w-24 h-12 flex justify-center items-center text-lg text-brandwhite cursor-pointer md:hover:border-[#fffa]",
                    "transition-opacity duration-150 motion-reduce:duration-100",
                    isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto",
                )}
                style={{ transitionTimingFunction: easing }}
            >
                <i className="fa fa-info-circle scale-90 mr-2" aria-hidden="true" />
                Info
            </button>
            <div
                id={panelId}
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={clsx(
                    surface,
                    "relative w-full md:w-100 min-h-30 md:min-h-50 p-4 flex flex-col text-brandwhite cursor-pointer",
                    "transition-[translate,opacity] motion-reduce:translate-none motion-reduce:duration-100",
                    isOpen
                        ? "opacity-100 translate-y-0 duration-250 pointer-events-auto"
                        : "opacity-0 translate-y-2 duration-180 pointer-events-none",
                )}
                style={{ transitionTimingFunction: easing }}
            >
                <button
                    type="button"
                    aria-label="Cerrar información"
                    className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                >
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                </button>
                <p className="mb-4 pr-8 text-lg xl:text-xl font-semibold">
                    {itemTypeMapper(type)}
                </p>
                <div className="flex-1 flex flex-col justify-between">
                    <p className="mb-2 text-sm xl:text-base">
                        <span className="font-semibold">Cliente: </span>{client}
                    </p>
                    {date !== null && (
                        <p className="text-sm xl:text-base">
                            <span className="font-semibold">Fecha: </span>{mapCreatedDate(date)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LightboxInfo