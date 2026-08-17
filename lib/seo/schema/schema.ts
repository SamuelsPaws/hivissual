import { Breadcrumb } from "../../types";

export function getBreadcrumbSchema(breadcrumbs: Breadcrumb[], baseUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: `${baseUrl}/${breadcrumb.url}`,
        })),
    }
}