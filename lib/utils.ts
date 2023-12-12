import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const formatPrice = (price: number): string => {
    // Format the price to have a dot as a thousand separator
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
