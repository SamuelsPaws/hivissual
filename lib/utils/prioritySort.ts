import { Media } from "../types";

export function prioritySort(a: string, b: string, orderArr: string[]): number {
	const orderMap = new Map(
		orderArr.map((item, index) => [item, index])
	)
	const aIndex = orderMap.get(a);
	const bIndex = orderMap.get(b);

	if (aIndex === undefined && bIndex === undefined) return 0;
	if (aIndex === undefined) return 1;
	if (bIndex === undefined) return -1;

	return aIndex - bIndex;
}

export function mediaPrioritySorter(a: Media, b: Media): number {
    return a.priority - b.priority
}