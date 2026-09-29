import ServiceCard from "./service-card/ServiceCard"

const ServiceCardGrid = () => {
  return (
    <div className="
        w-fit mx-auto mb-8 md:mb-16
        flex justify-center gap-8 flex-wrap"
    >
        <ServiceCard
            title="Fotografía"
            media={{
                type: 'image',
                src: '/assets/photo-watchout.jpg',
                alt: 'Sesión de fotografía profesional',
                cn: 'object-center'
            }}
            items={[
                'Fotografía comercial',
                'Fotografía de producto',
                'Fotografía para redes sociales',
            ]}
        />
        <ServiceCard
            title="Producción de Video"
            media={{
                type: 'video',
                src: '/assets/video-kyela.mp4',
                alt: 'Producción audiovisual para una marca'
            }}
            items={[
                'Videos promocionales',
                'Reels y contenido corto',
                'Producción audiovisual para marcas'
            ]}
        />
        <ServiceCard
            title="Estrategia de Contenido"
            media={{ type: 'image', src: '/assets/about-3.webp', alt: 'Planificación de una estrategia de contenido' }}
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
