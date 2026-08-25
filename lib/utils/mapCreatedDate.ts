import mapMonthLabel from "./mapMonthLabel";

function mapCreatedDate(createdAt: string): string {
    const dateArr = createdAt.split('T')[0].split('-')
    const dateObj = {
        day: dateArr[2],
        month: mapMonthLabel(dateArr[1]).toLowerCase(),
        year: dateArr[0]
    }

    return `${dateObj.day} de ${dateObj.month} ${dateObj.year}`
}

export default mapCreatedDate