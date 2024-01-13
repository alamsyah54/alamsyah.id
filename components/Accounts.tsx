/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import { Roboto } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const Accounts = async () => {
    unstable_noStore()
    const { Private, Shared, allData } = await fetchData()

    console.log(allData)
    console.log("_________________________________")
    console.log(" ")
    console.log("Private ///", Private.length)
    console.log("Shared ///", Shared.length)
    console.log("Total Netflix ///", allData.length)
    console.log("_________________________________")
    return (
        <div className='w-full flex flex-col items-center justify-center mb-32 pb-16 border-b dark:border-white/25 border-black/25'>
            <div className='flex flex-col items-center py-5'>
                <h2
                    className={`w-full flex justify-center text-2xl font-extrabold uppercase text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 bg-clip-text ${roboto.className}`}
                >
                    Netflix Aktif & Terjual
                </h2>
                <p className='w-full flex justify-center font-extralight capitalize'>
                    (Realtime Data)
                </p>
            </div>

            <div className='flex w-full text-lg select-none '>
                <div className='flex w-full flex-col md:gap-10 md:flex-row lg:flex-row justify-center items-center py-5'>
                    <div className='font-light flex gap-1 py-1'>
                        Private{" "}
                        <p
                            className={`text-purple-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        <p className='font-conthrax text-lg select-text'>
                            {Private.length}
                        </p>
                        Akun
                    </div>
                    <div className='font-light flex gap-1 py-1'>
                        Shared{" "}
                        <p
                            className={`text-fuchsia-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        <p className='font-conthrax text-lg select-text'>
                            {Shared.length}
                        </p>
                        Profile
                    </div>
                    <div className='font-light flex gap-1 py-1'>
                        Total
                        <p
                            className={`text-sky-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        <p className='font-conthrax text-lg select-text'>
                            {allData.length}
                        </p>
                        Aktif Customer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
