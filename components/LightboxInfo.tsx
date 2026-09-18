"use client";

import itemTypeMapper from "@/lib/utils/itemTypeMapper";
import clsx from "clsx"
import { AnimatePresence, motion } from "motion/react";
import { springSmooth } from "@/lib/motion";

interface Props {
    isOpen: boolean;
    type: string;
    client: string;
    year: string | null;
}

const LightboxInfo = ({ isOpen, type, client, year }: Props) => {

    return (
    <motion.div
      layout
      transition={springSmooth}
      className={clsx(
        isOpen ? 'w-[calc(100%-2rem)] md:w-100 h-30 md:h-50' : 'w-24 h-12',
        "absolute bottom-4 left-4 z-[9970]",
        "bg-brandblack",
        "rounded-xl border border-[#fff5] overflow-hidden",
        "md:hover:border-[#fffa]",
        "shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
    )}>
        {/* Button to open info */}
        <AnimatePresence mode="wait" initial={false}>
        {!isOpen ?
            <motion.div
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                w-full h-full
                text-lg text-brandwhite
                flex justify-center items-center
                rounded-lg
                cursor-pointer"
            >
                <i className="fa fa-info-circle scale-90 mr-2"></i>
                Info
            </motion.div>
        :
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={springSmooth}
              className="
                w-full h-full relative
                p-4
                flex flex-col
                text-brandwhite"
            >
                {/* Close button */}
                <div className="
                    absolute right-2 top-2
                    px-3 py-1
                    text-lg cursor-pointer"
                >
                    <i className="fa fa-chevron-down"></i>
                </div>
                <p className="mb-4 text-lg lg:text-xl font-semibold">
                    {itemTypeMapper(type)}
                </p>
                {/* Wrapper for client, year, etc */}
                <div className="
                    flex-1
                    flex flex-col justify-between"
                >
                    <p className="mb-2 text-sm lg:text-md">
                        <span className="font-semibold">Cliente: </span>{client}
                    </p>
                    {year !== null &&
                        <p className="text-sm lg:text-md">
                            <span className="font-semibold">Año: </span>{year}
                        </p>
                    }
                </div>
            </motion.div>
        }
        </AnimatePresence>
    </motion.div>
    )
}

export default LightboxInfo
