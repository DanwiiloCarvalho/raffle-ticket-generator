type ContrastingText = "#FFFFFF" | "#241F1A"

function normalizeHex(hex: string): string {
    const value = hex.replace("#", "")

    if (value.length === 3) {
        return value
            .split("")
            .map(character => character + character)
            .join("")
    }

    return value.slice(0, 6)
}

export function getContrastingText(hex: string): ContrastingText {
    const normalized = normalizeHex(hex)

    if (normalized.length !== 6 || /[^0-9a-f]/i.test(normalized)) {
        return "#241F1A"
    }

    const channels = [0, 2, 4].map(offset => {
        const channel = parseInt(normalized.slice(offset, offset + 2), 16) / 255

        return channel <= 0.03928
            ? channel / 12.92
            : Math.pow((channel + 0.055) / 1.055, 2.4)
    })

    const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]

    return luminance > 0.36 ? "#241F1A" : "#FFFFFF"
}
