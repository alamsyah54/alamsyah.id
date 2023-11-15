import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
    title: "ALAMSYAH.ID",
    description: "Trusted Premium Account Market",
    icons: {
        icon: [
            {
                url: "/icons/AHeaderLight.webp",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icons/AHeaderDark.webp",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body>{children}</body>
        </html>
    )
}
