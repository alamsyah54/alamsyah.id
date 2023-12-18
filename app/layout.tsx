import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
    title: {
        template: "ALAMSYAH.ID | %s",
        default: "ALAMSYAH.ID | Netflix Premium Terpercaya",
    },
    description:
        "Your trusted destination for premium Netflix accounts. Elevate your streaming experience with our high-quality, affordable Netflix solutions. We specialize in providing a seamless and secure platform for your entertainment needs. Choose ALAMSYAH.ID for premium quality at an affordable price, exclusively tailored for Netflix enthusiasts.",
    icons: {
        icon: [
            {
                url: "/icons/AHeaderDark.webp",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icons/AHeaderLight.webp",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    keywords:
        "netflix, premium, 4k, uhd, full garansi, netflix account, netflix premium uhd, netflix murah, netflix shared, netflix private, netflix terpercaya, murah, terpercaya, film terbaru, alamsyah.id, alamsyah, bergaransi",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body className='selection:bg-fuchsia-500 selection:text-white dark:bg-dark-700 bg-gray-50 text-dark-800 dark:text-gray-300 duration-700'>
                {children}
            </body>
        </html>
    )
}
