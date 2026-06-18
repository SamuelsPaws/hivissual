type ItemTypeIdentifier = 'image' | 'video' | 'project'
type ItemTypeText = 'Fotografía' | 'Video' | 'Proyecto'

export default function itemTypeMapper(itemType: ItemTypeIdentifier | ItemTypeText): ItemTypeIdentifier | ItemTypeText {
    if (itemType === 'image') return 'Fotografía'
    if (itemType === 'video') return 'Video'
    if (itemType === 'project') return 'Proyecto'
    if (itemType === 'Fotografía') return 'image'
    if (itemType === 'Video') return 'video'
    if (itemType === 'Proyecto') return 'project'
    return 'Fotografía'
}