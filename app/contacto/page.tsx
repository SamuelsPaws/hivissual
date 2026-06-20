import SectionContentSt from "@/components/SectionContentSt";
import Image from "next/image";
import SocialCard from "./components/SocialCard";
import SectionCTA from "@/components/SectionCTA";
import FooterWrapper from "@/components/FooterWrapper";

export default function Contact() {
    return (
    <main>
        {/* Hero */}
        <section className="
            relative
            px-8 pt-24 pb-8
            lg:px-32 lg:pt-32 lg:pb-16
            flex flex-col lg:flex-row gap-8
            bg-brandblack overflow-hidden"
        >
            {/* Left part */}
            <div className="
                w-full lg:w-1/2 z-10
                flex flex-col justify-center items-center gap-4 lg:gap-8"
            >
                <h1 className="
                    text-3xl leading-12
                    lg:text-5xl lg:leading-16
                    text-brandwhite text-center font-semibold">
                    Hablemos de Tu Proyecto
                </h1>
                <p className="text-sm lg:text-lg text-gray-200 text-center">
                    Cuéntame qué tienes en mente y veremos cómo transformarlo en contenido que impulse tu marca.
                </p>
                <div className="
                    w-[60%] lg:w-60 aspect-square relative
                    mt-2 lg:mt-0
                    rounded-full overflow-hidden shadow-lg"
                >
                    <Image
                        src="/assets/about-2.webp"
                        fill
                        sizes="100%"
                        priority
                        className="w-full h-full object-cover scale-200"
                        alt="Stock"
                    />
                </div>
            </div>
            {/* Right part */}
            <div className="
                lg:flex-1 z-10
                flex flex-col justify-center items-center gap-8"
            >
                <form
                    action=""
                    className="
                        w-full lg:w-auto relative
                        p-4
                        flex flex-col
                        bg-brandblack
                        gradient-border rounded-2xl"
                >
                    <label
                        htmlFor="name"
                        className="mb-2 text-lg lg:text-xl text-brandwhite font-semibold"
                    >
                        Tu nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="
                            w-full lg:w-75 mb-4
                            px-2 py-1
                            text-md lg:text-lg text-brandwhite
                            bg-brandgray-200
                            rounded-md"
                    />
                    <label
                        htmlFor="name"
                        className="mb-2 text-lg lg:text-xl text-brandwhite font-semibold"
                    >
                        Nombre de tu empresa
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="
                            w-full lg:w-75 mb-4
                            px-2 py-1
                            text-md lg:text-lg text-brandwhite
                            bg-brandgray-200
                            rounded-md"
                    />
                    <label
                        htmlFor="name"
                        className="mb-2 text-lg lg:text-xl text-brandwhite font-semibold"
                    >
                        Tu mensaje
                    </label>
                    <textarea
                        id="name"
                        className="
                            w-full lg:w-75 h-16 mb-4 resize-none
                            px-2 py-1
                            text-sm text-brandwhite
                            bg-brandgray-200
                            rounded-md"
                    />
                    <button
                        type="submit"
                        className="
                            w-fit mx-auto
                            px-4 py-2
                            lg:px-8 lg:py-2
                            text-brandblack text-lg lg:text-xl font-semibold
                            bg-brandwhite rounded-full"
                    >
                        Enviar
                    </button>
                </form>
                <p className="text-lg lg:text-xl text-brandwhite font-semibold">
                    O si prefieres
                </p>
                <a
                    href=""
                    className="
                        px-8 py-4
                        text-brandwhite text-lg lg:text-xl font-semibold whitespace-nowrap
                        bg-whatsapp-400 rounded-full"
                >
                    Escríbeme a WhatsApp
                    <i className="fa fa-whatsapp scale-150 ml-4" aria-hidden="true"></i>
                </a>
            </div>
            {/* Glow */}
            {/* <div className="
                absolute z-0
                bottom-1/2 left-0
                lg:bottom-8 lg:left-0
                w-160 h-60 mt-4
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-70 lg:opacity-80 mix-blend-screen blur-[80px]
                bg-contain"
            ></div> */}
            <img
                src="/assets/glow.svg"
                className="absolute top-[25%] left-[25%] w-240 opacity-60"
            />
        </section>
        <SectionContentSt
            title="Encuéntrame en Redes Sociales"
            bgColor="bg-brandblack-100"
        >
            <div className="
                w-fit mx-auto
                flex flex-col gap-8"
            >
                <SocialCard
                    text="hivissual"
                    iconClass="fa-instagram"
                    href="https://www.instagram.com/hivissual/"
                />
                <SocialCard
                    text="Hivissual"
                    iconClass="fa-facebook-square"
                    href="https://www.instagram.com/hivissual/"
                />
            </div>
        </SectionContentSt>
        <SectionContentSt
            title="Preguntas Frecuentes"
            bgColor="bg-brandblack-200"
        >
            <h3 className="mb-4 text-lg lg:text-2xl text-brandwhite font-semibold">
                ¿Qué tipo de proyectos realizas?
            </h3>
            <p className="
                mb-8 lg:mb-16 p-4
                text-sm lg:text-lg text-gray-200
                border border-gray-500 rounded-xl"
            >
                Trabajo en proyectos de fotografía, producción de video y creación de contenido para empresas, marcas y profesionales que buscan fortalecer su presencia digital.
            </p>
            <h3 className="mb-4 text-lg lg:text-2xl text-brandwhite font-semibold">
                ¿Trabajas con clientes de cualquier ciudad/país?
            </h3>
            <p className="
                mb-8 lg:mb-16 p-4
                text-sm lg:text-lg text-gray-200
                border border-gray-500 rounded-xl"
            >
                Sí. Dependiendo del proyecto, puedo trabajar tanto de forma local como remota.
            </p>
            <h3 className="mb-4 lg:mb-8 text-lg lg:text-2xl text-brandwhite font-semibold">
                ¿Cómo puedo solicitar una cotización?
            </h3>
            <p className="
                p-4
                text-sm lg:text-lg text-gray-200
                border border-gray-500 rounded-xl"
            >
                Puedes completar el formulario de contacto o escribirme directamente por WhatsApp para conversar sobre tu proyecto.
            </p>
        </SectionContentSt>
        <SectionCTA bgColor="bg-brandgray-100" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}