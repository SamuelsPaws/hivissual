import Banner from "@/components/Banner";
import FooterWrapper from "@/components/FooterWrapper";
import SectionContentCen from "@/components/SectionContentCen";
import SectionContentFr from "@/components/SectionContentFr";
import SectionContentSt from "@/components/SectionContentSt";
import SectionCTA from "@/components/SectionCTA";
import TeamCard from "./components/TeamCard";
import TrustCard from "./components/TrustCard";
import ImageGrid from "./components/ImageGrid";
import StoryGrid from "./components/StoryGrid";
import ServiceGrid from "./components/ServiceGrid";

export default function About() {
    return (
    <main>
        <Banner
            title="Quién Soy"
            description={null}
            bgSrc="/assets/banner.webp"
        />
        <SectionContentFr
            bgColor="bg-brandblack-100"
        >
            {/* Div with two columns */}
            <div className="
                w-full
                flex flex-col lg:flex-row items-start gap-4 lg:gap-8"
            >
                {/* Text column */}
                <div className="
                    w-full flex-auto
                    lg:w-auto lg:flex-1
                    flex flex-col"
                >
                    <p className="
                        mb-4 lg:mb-8 p-8 relative
                        text-sm lg:text-lg text-black
                        bg-linear-to-b from-gray-100 to-gray-300 rounded-2xl"
                    >
                        Hivissual es un estudio creativo especializado en la creación de contenido visual y gestión de redes sociales, enfocado en ayudar a emprendedores y marcas personales a destacar en el entorno digital.
                    </p>
                    <p className="
                        p-8 relative
                        text-sm lg:text-lg text-gray-200
                        gradient-border rounded-2xl"
                    >
                        Mi trabajo se basa en una idea simple: cada marca tiene una historia que merece ser contada de la mejor manera posible. Disfruto acompañar a mis clientes desde la idea inicial hasta el resultado final, construyendo una relación cercana que me permite comprender a fondo sus objetivos y necesidades. Esta forma de trabajar me ayuda a crear contenido visual auténtico, estratégico y alineado con el crecimiento de cada marca.
                    </p>
                </div>
                {/* Images grid */}
                <ImageGrid />
            </div>
        </SectionContentFr>
        <SectionContentSt
            title="Mi Historia"
            bgColor="bg-brandblack-200"
        >
            <StoryGrid />
        </SectionContentSt>
        <SectionContentCen
            bgColor="bg-brandgray-100"
            title="Mi Experiencia"
        >
            <p className="mb-8 lg:mb-16 text-md lg:text-lg text-center text-gray-200">
                Más de <span className="font-semibold">5 años</span> ayudando a marcas y negocios a fortalecer su presencia digital mediante contenido visual estratégico.
            </p>
            <ServiceGrid />
        </SectionContentCen>
        <SectionContentSt
            title="Mi Equipo"
            bgColor="bg-brandgray-200"
        >
            <div className="
                w-fit mx-auto
                flex justify-center gap-x-8 gap-y-8 lg:gap-y-16 flex-wrap"
            >
                <TeamCard
                    name="Milena Ayala"
                    role="Project Manager"
                    imgSrc="/assets/about-2.webp"
                />
                <TeamCard
                    name="Adri Guzmán"
                    role="Editora"
                    imgSrc="/assets/about-2.webp"
                />
                <TeamCard
                    name="Martín A. Borja"
                    role="Especialista en Pauta Digital"
                    imgSrc="/assets/about-2.webp"
                />
                <TeamCard
                    name="Juan M. Carvajal"
                    role="Editor"
                    imgSrc="/assets/about-2.webp"
                />
            </div>
            <div className="
                w-full lg:w-fit
                mt-8 lg:mt-16
                mx-auto flex justify-center"
            >
                <TeamCard
                    name="Martín Espín"
                    role="Filmmaker y Fundador"
                    imgSrc="/assets/about-2.webp"
                />
            </div>
        </SectionContentSt>
        <SectionContentCen
            title="Por Qué mis Clientes Trabajan Conmigo"
            bgColor="bg-brandgray-300"
        >
            <p className="
                w-full lg:w-[80%] mx-auto mb-8 lg:mb-16
                text-md lg:text-lg text-brandwhite text-center"
            >
                Cada proyecto es diferente, pero mi enfoque siempre parte de la misma idea: entender la visión de cada cliente y transformarla en contenido que genere impacto.
            </p>
            <div className="
                w-fit mx-auto
                flex gap-4 lg:gap-8 flex-wrap"
            >
                <TrustCard
                    title="Cercanía y trato directo"
                    text="Trabajo de forma cercana con cada cliente para comprender sus objetivos, necesidades y visión. Esta colaboración me permite crear soluciones visuales alineadas con lo que realmente necesita la marca."
                />
                <TrustCard
                    title="Creatividad con estrategia"
                    text="Combino dirección visual y marketing digital para crear contenido que no solo se vea bien, sino que también contribuya al crecimiento y posicionamiento de la marca."
                />
                <TrustCard
                    title="Ideas que se convierten en resultados"
                    text="Mi objetivo es transformar conceptos en piezas visuales capaces de comunicar, conectar y generar impacto en la audiencia correcta."
                />
            </div>
        </SectionContentCen>
        <SectionCTA bgColor="bg-brandgray-400" />
        <FooterWrapper bgColor="bg-brandgray-400" />
    </main>
    )
}