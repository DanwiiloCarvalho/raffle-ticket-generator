export function addTimeToDate(date: Date, time: string) {
    if (time.match("^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$") === null) {
        throw new Error("Formato de data inválido");
    }
    return new Date(`${date.toISOString().split("T")[0]}T${time}Z`).toISOString();
}