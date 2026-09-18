type ItemWithCreatedAt = {
    createdAt: string
}

export default function createdAtSort<T extends ItemWithCreatedAt>(a: T, b: T): number {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt)
}
