export function mapCategorySlug(label: string): string {
    switch (label) {
        case 'Corporativo':
            return 'corporativo';
        case 'Redes Sociales':
            return 'redes-sociales';
        case 'Cinemático':
            return 'cinematico';
        default:
            return 'redes-sociales';
    }
}

export function mapCategoryLabel(slug: string): string {
    switch (slug) {
        case 'corporativo':
            return 'Corporativo';
        case 'redes-sociales':
            return 'Redes Sociales';
        case 'cinematico':
            return 'Cinemático';
        default:
            return 'Redes Sociales';
    }
}