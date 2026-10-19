export function getTodayISO(): string {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}

export function getTodayStart(): Date {
    return new Date(`${getTodayISO()}T00:00:00.000Z`)
}

export function formatDateBR(date: Date): string {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC"
    }).format(date)
}

export function formatCurrencyBRL(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
}
