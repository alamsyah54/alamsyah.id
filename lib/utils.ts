import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const formatPrice = (price: number): string => {
    // Format the price to have a dot as a thousand separator
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function colorfulLog(
    message: any,
    textColor: keyof typeof colors,
    bgColor: keyof typeof colors,
) {
    const colors = {
        reset: "\x1b[0m",
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        bgBlack: "\x1b[40m",
        bgRed: "\x1b[41m",
        bgGreen: "\x1b[42m",
        bgYellow: "\x1b[43m",
        bgBlue: "\x1b[44m",
        bgMagenta: "\x1b[45m",
        bgCyan: "\x1b[46m",
        bgWhite: "\x1b[47m",
    }

    const coloredMessage =
        (colors[textColor] ? colors[textColor] : "") +
        (colors[bgColor] ? colors[bgColor] : "") +
        message +
        colors.reset

    console.log(coloredMessage)
}
