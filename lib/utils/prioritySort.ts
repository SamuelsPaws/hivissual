import { PortfolioItem } from "../types";

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


// Make a mapper for portfolio item priority
export function portfolioPrioritySort(a: PortfolioItem, b: PortfolioItem): number {
    return 2 - 1
}