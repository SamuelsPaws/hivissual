import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { useEffect, useId, useRef } from "react";

interface Props {
    isOpen: boolean;
    state: 'success' | 'error';
    onClose: () => void;
}

const SubmissionModal = ({
    isOpen,
    state,
    onClose
}: Props) => {
    const dialogRef = useRef<HTMLDivElement>(null)
    const titleId = useId()
    const descriptionId = useId()

    useEffect(() => {
        if (!isOpen) return

        const previouslyFocused = document.activeElement as HTMLElement | null
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus()

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown)
            previouslyFocused?.focus()
        }
    }, [isOpen, onClose])

    const successTitleLabel = '¡Mensaje enviado!'
    const successCopyLabel = 'Gracias por contactarnos. Hemos recibido tu solicitud y te responderemos lo antes posible.'
    const errorTitleLabel = 'No pudimos enviar tu mensaje'
    const errorCopyLabel = 'Ocurrió un error al enviar tu solicitud. Por favor, inténtalo de nuevo en unos minutos.'

    if (!isOpen) return null

    return (
    <div>
        {/* Backdrop */}
        <div
            onClick={onClose}
            aria-hidden="true"
            className="
                fixed top-0 left-0 z-[9900]
                w-screen h-screen
                bg-white/20"
        />
        {/* Modal area */}
        <div
            ref={dialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            className={clsx(
                "fixed top-1/2 left-1/2 -translate-1/2 z-[9950]",
                "w-[80vw] h-[70vh] md:w-[40vw] md:h-[50vh]",
                "p-8",
                "flex flex-col items-center justify-center gap-4 md:gap-8",
                "bg-brandwhite",
                "rounded-2xl md:rounded-4xl overflow-hidden shadow-lg",
                false && "animate-fade-in-up-1200"
            )}
        >
            {/* Check */}
            <div className={clsx(
                "flex justify-center items-center",
                "text-[120px] text-center",
                state === 'success' ? "text-green-500" : "text-red-500"
            )}>
                <CustomIcon
                    iconId={state === 'success' ? "check-solid" : "x-solid"}
                />
            </div>
            {/* Title */}
            <p id={titleId} className="text-2xl md:text-4xl text-black text-center font-semibold">
                {state === 'success' ? successTitleLabel : errorTitleLabel}
            </p>
            {/* Copy */}
            <p id={descriptionId} className="text-myf-md text-gray-600 text-center">
                {state === 'success' ? successCopyLabel : errorCopyLabel}
            </p>
            <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar aviso"
                className="
                    absolute top-4 right-4
                    w-8 aspect-square
                    flex justify-center items-center
                    text-3xl text-gray-600"
            >
                <CustomIcon
                    iconId="x"
                    className="scale-105"
                />
            </button>
        </div>
    </div>
    )
}

export default SubmissionModal
