import type { Metadata } from "next"
import "../styles/globals.css"
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import FacebookChat from "@/components/FacebookChat"

export const metadata: Metadata = {
    title: {
        template: "ALAMSYAH.ID | %s",
        default: "ALAMSYAH.ID | Netflix Premium Terpercaya",
    },
    description:
        "ALAMSYAH.ID your trusted Netflix Premium Accounts Seller. high-quality, secured, and exclusively for Netflix enthusiasts.",
    icons: {
        icon: [
            {
                url: "/icons/ALight.webp",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icons/ADark.webp",
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
        <>
            <GoogleAnalytics measurementId='G-Z86GVT7LTC' />
            <html lang='en' className='!scroll-smooth'>
                <body className='selection:bg-fuchsia-500 selection:text-white dark:bg-dark-700 bg-gray-50 text-dark-800 dark:text-gray-300 duration-700'>
                    <FacebookChat />
                    {children}
                    <SpeedInsights />
                    <Analytics />
                </body>
            </html>
        </>
    )
}
