"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { RiKeyLine } from "react-icons/ri"
import { Roboto } from "next/font/google"
import { BsShieldLock } from "react-icons/bs"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
    const [Accounts, setAccounts] = useState("")
    const currentPathname = usePathname()
    const handleClick = () => {
        if (Accounts.length < 21) {
            alert("Masukan (21 Digit) Secret ID!")
            return
        } else if (Accounts.length < 21) {
            alert("Masukan (21 Digit) Secret ID!")
            return
        }

        const targetPathname = `/accounts/${Accounts}`

        // Only navigate if the target pathname is different
        if (targetPathname !== currentPathname) {
            window.location.href = targetPathname
        }
    }

    return (
        <main className='flex justify-center items-center w-full h-screen -mt-24'>
            <div className='flex flex-col justify-center items-center p-10 w-fit rounded-3xl duration-300 group border-2 border-white dark:border-dark-400 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% shadow-md hover:shadow-xl'>
                <div className='p-5 flex gap-2 items-center justify-center'>
                    <BsShieldLock className='text-5xl' />
                    <div>
                        <p className='font-conthrax'>Secret ID</p>
                        <p className='font-extralight text-xs'>
                            21 Digit Personal ID
                        </p>
                    </div>
                </div>
                <div className='flex gap-1 px-3 items-center w-full focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-white drop-shadow-md border-white/30 border rounded-lg'>
                    <RiKeyLine className='text-2xl ml-1' />
                    <input
                        type='text'
                        placeholder='Enter your Secret ID'
                        value={Accounts}
                        onChange={(e) => setAccounts(e.target.value)}
                        className='focus:outline-none h-full focus:border w-full md:w-96 lg:w-96 -fuchsia-500 bg-transparent p-3 rounded-lg border-none'
                    />
                </div>
                <button
                    onClick={handleClick}
                    className='relative w-fit h-fit my-7'
                >
                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur py-4 px-6 transition hover:opacity-100 hover:blur-md '></div>
                    <div
                        className={`relative duration-500 md:text-md lg:text-xl border-white rounded-lg flex items-center justify-center py-2 px-4 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-600 w-fit hover:bg-dark-700 dark:hover:bg-gray-300 active:bg-black dark:active:bg-gray-400 ${roboto.className}`}
                    >
                        See My Accounts
                    </div>
                </button>
                <p className='w-full text-center text-red-500 text-xs capitalize'>
                    Jangan Menyebarkan Secret ID mu!,
                    <br />
                    Jika Menyebarkan Secret ID sama dengan menyebarkan
                    <br />
                    semua akses pada akun netflix yang telah kamu beli
                </p>
            </div>
        </main>
    )
}

export default MyComponent
