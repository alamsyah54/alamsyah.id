import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import type { Metadata } from "next"

import React from "react"
export const metadata: Metadata = {
    title: "ALAMSYAH.ID | Netflix Premium Murah dan Terpercaya",
    description:
        "ALAMSYAH.ID your trusted source for premium Netflix accounts. Enjoy high-quality, secure platform, and Tailored exclusively for Netflix enthusiasts.",
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
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative '>
            <Navbar />
            <div className='flex'>
                <div className='flex min-h-screen flex-1 flex-col pt-24'>
                    <div className='mx-auto w-full'>{children}</div>
                </div>
            </div>
            {/* Toaster */}
            <Footer />
            <div className='galaxy-background opacity-75 -z-50' />
            {/* <div className='w-full h-2 fixed bottom-0 bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500' /> */}
        </main>
    )
}

export default Layout
