'use server'

import { getMedia } from "./contentful-queries";

export async function loadMedia(limit: number, offset: number) {
    return getMedia(limit, offset)
}