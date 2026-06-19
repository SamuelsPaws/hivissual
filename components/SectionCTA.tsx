import clsx from "clsx";

interface Props {
    bgColor: string;
}

const SectionCTA = ({ bgColor }: Props) => {
  return (
    <section className={clsx(
        "h-120 lg:h-140 px-8",
        "flex flex-col justify-center items-center gap-8 lg:gap-16",
        bgColor
    )}>
        <h2 className="text-2xl lg:text-5xl text-brandwhite text-center font-semibold">
            ¿Listo para crear algo para tu marca?
        </h2>
        <p className="text-md lg:text-lg text-gray-200 text-center">
            Cuéntame sobre tu proyecto y te responderé personalmente.
        </p>
        <a
            href="https://wa.me/593983523721?text=%C2%A1Hola%21%20Me%20interesa%20solicitar%20un%20proyecto%20para%20mi%20marca."
            target="_blank"
            rel="noopener noreferrer"
            className="
                px-8 py-4
                lg:px-12 lg:py-6
                text-brandwhite text-md lg:text-2xl font-semibold whitespace-nowrap
                bg-whatsapp-400 rounded-full"
            aria-label="Chat on WhatsApp"
        >
            Escríbeme a WhatsApp
            <i className="fa fa-whatsapp scale-150 ml-6" aria-hidden="true"></i>
        </a>
    </section>
  )
}

export default SectionCTA