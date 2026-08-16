import ServiceCard from "./ServiceCard"

const ServiceCardGrid = () => {
  return (
    <div
        className="
            w-fit mx-auto
            flex justify-center gap-8 flex-wrap"
    >
        <ServiceCard
            title="Fotografía"
            items={[
                'Fotografía comercial',
                'Fotografía de producto',
                'Fotografía para redes sociales',
            ]}
        />
        <ServiceCard
            title="Producción de Video"
            items={[
                'Videos promocionales',
                'Reels y contenido corto',
                'Producción audiovisual para marcas'
            ]}
        />
        <ServiceCard
            title="Estrategia de Contenido"
            items={[
                'Planificación de contenido',
                'Dirección creativa',
                'Contenido orientado al crecimiento digital'
            ]}
        />
    </div>
  )
}

export default ServiceCardGrid