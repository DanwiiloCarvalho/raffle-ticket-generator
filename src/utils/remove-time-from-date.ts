
export function removeTimeFromDate(dateOrtimestamp: string | number): string {
    
    if (typeof dateOrtimestamp === "string") {
        return new Date(dateOrtimestamp).toISOString().split("T")[0]
    } 
    return new Date(dateOrtimestamp).toISOString().split("T")[0]
}