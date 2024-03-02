"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

interface NotFoundStateProps {
    error: Error
}

const NotFound: React.FC<NotFoundStateProps> = ({ error }) => {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.error(error)
    }, [error])

    return (
        <div className='absolute z-[999] top-0 left-0'>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-1 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-600 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-800 to-90%'>
                <p className='font-conthrax text-7xl text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                    404
                </p>
                <p className='font-thin select-none mb-5'>Page Not Found</p>
                <Link href='/' className='relative group w-fit h-fit'>
                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur py-4 px-6 transition group-hover:opacity-100 group-hover:blur-md '></div>
                    <div
                        className={`relative duration-500 text-sm md:text-md lg:text-xl border-white rounded-lg flex items-center justify-center py-2 px-4 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-600 w-fit hover:bg-dark-700 dark:hover:bg-gray-300 active:bg-black dark:active:bg-gray-400 ${roboto.className}`}
                    >
                        Go Home
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
