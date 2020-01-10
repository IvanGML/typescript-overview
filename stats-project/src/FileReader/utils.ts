export const getDateFromString = (date: string): Date => {
    const arrayWithDates = date
        .split('/')
        .map((item: string) => {
            return parseInt(item);
        });
    return new Date(arrayWithDates[2], arrayWithDates[1] - 1, arrayWithDates[0]);
}