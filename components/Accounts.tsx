/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const Accounts = async () => {
    unstable_noStore()
    const { Private, Shared, allData, Stock } = await fetchData()
    const StockPrivate = Stock[0][0]
    const StockShared = Stock[0][1]
    console.log("_________________________________")
    console.log(" ")
    console.log("Private ///", Private.length)
    console.log("Shared ///", Shared.length)
    console.log("Total Netflix ///", allData.length)
    console.log("Stock Private///", StockPrivate)
    console.log("Stock Shared///", StockShared)
    console.log("_________________________________")

    return (
        <div className='w-full flex justify-center pb-16 border-b dark:border-white/25 border-black/25 px-5'>
            <div className='flex flex-col lg:flex-row dark:divide-gray-100/50 divide-dark-800/50 lg:divide-x-2 rounded-3xl gap-8 p-5 lg:p-8 shadow-md hover:scale-105 hover:shadow-lg duration-300 h-fit group border-2 border-white dark:border-dark-400 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%'>
                <div className='flex flex-col'>
                    <h2
                        className={`text-xl font-extrabold uppercase text-sky-500 ${roboto.className} select-none`}
                    >
                        Netflix Tersedia
                    </h2>
                    <div className='flex flex-col md:flex-row w-full md:gap-4 lg:gap-10 justify-start select-none'>
                        <div className='flex gap-1 py-1'>
                            Private{" "}
                            <p
                                className={`text-purple-500 font-black ${roboto.className} select-none`}
                            >
                                {"  "}
                                //
                            </p>
                            {StockPrivate === "0" ? (
                                "Kosong/Habis"
                            ) : (
                                <>
                                    <p className='font-conthrax text-lg  select-none'>
                                        {StockPrivate}
                                    </p>
                                    Akun
                                </>
                            )}
                        </div>
                        <div className='flex gap-1 py-1'>
                            Shared{" "}
                            <p
                                className={`text-fuchsia-500 font-black ${roboto.className}`}
                            >
                                {"  "}
                                //
                            </p>
                            {StockShared === "0" ? (
                                "Kosong/Habis"
                            ) : (
                                <>
                                    <p className='font-conthrax text-lg select-text'>
                                        {StockShared}
                                    </p>
                                    Profile
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:pl-8'>
                    <h2
                        className={`text-xl font-extrabold uppercase text-fuchsia-500 ${roboto.className} select-none`}
                    >
                        Netflix Aktif & Terjual
                    </h2>
                    <div className='flex flex-col md:flex-row w-full md:gap-4 lg:gap-10 justify-start select-none'>
                        <div className='flex gap-1 py-1'>
                            Private{" "}
                            <p
                                className={`text-purple-500 font-black ${roboto.className} select-none`}
                            >
                                {"  "}
                                //
                            </p>
                            <p className='font-conthrax text-lg  select-none'>
                                {Private.length}
                            </p>
                            Akun
                        </div>
                        <div className='flex gap-1 py-1'>
                            Shared{" "}
                            <p
                                className={`text-fuchsia-500 font-black ${roboto.className}`}
                            >
                                {"  "}
                                //
                            </p>
                            <p className='font-conthrax text-lg  select-none'>
                                {Shared.length}
                            </p>
                            Profile
                        </div>
                        <div className='flex gap-1 py-1'>
                            Total
                            <p
                                className={`text-sky-500 font-black ${roboto.className}`}
                            >
                                {"  "}
                                //
                            </p>
                            <p className='font-conthrax text-lg  select-none'>
                                {allData.length}
                            </p>
                            Aktif Customer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
