import Banner from "@/components/Banner";
import FooterWrapper from "@/components/FooterWrapper";
import SectionContentFr from "@/components/SectionContentFr";
import SectionCTA from "@/components/SectionCTA";

export default function About() {
    return (
    <main>
        <Banner
            title="Quién Soy"
            description={null}
        />
        <SectionContentFr
            bgColor="bg-brandblack-100"
        >
            <p>
                Hivissual es un estudio creativo especializado en la creación de contenido visual y gestión de redes sociales, enfocado en ayudar a emprendedores y marcas personales a destacar en el entorno digital.
            </p>
        </SectionContentFr>
        <SectionCTA bgColor="bg-brandgray-100" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}