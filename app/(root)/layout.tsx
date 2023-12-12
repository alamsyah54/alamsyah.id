import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"

import React from "react"
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
