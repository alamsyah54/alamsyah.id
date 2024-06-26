/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { fetchData, censorEmail, censorPassword } from "@/app/api/googleSheets"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const page = async () => {
    unstable_noStore()
    const { Private, Shared, allData, Stock } = await fetchData()
    const StockPrivate = Stock[0][0]
    const StockShared = Stock[0][1]
    return (
        <div className='w-full justify-center items-center flex flex-col p-12 lg:p-24 scroll-smooth'>
            <div className='flex gap-7 flex-col md:flex-row lg:flex-row justify-between border-b-[1px] border-black/20 dark:border-white/20 pb-8 mb-8 w-full'>
                <div className='flex flex-col text-lg select-none '>
                    <div className='font-conthrax flex lg:flex-row flex-col mb-2 gap-0 md:gap-2'>
                        Akun Terjual
                        <p className='font-extralight font-sans capitalize'>
                            (Real Time Data)
                        </p>
                    </div>
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
                <div className='flex flex-col text-lg select-none '>
                    <div className='font-conthrax flex lg:flex-row flex-col mb-2 gap-0 md:gap-2'>
                        Stock Akun
                        <p className='font-extralight font-sans capitalize'>
                            (Real Time Data)
                        </p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        Private{" "}
                        <p
                            className={`text-purple-500 font-black ${roboto.className}`}
                        >
                            {"  "}
                            //
                        </p>
                        {StockPrivate === "0" ? (
                            "Kosong/Habis"
                        ) : (
                            <>
                                <p className='font-conthrax text-lg select-text'>
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
                <div className='flex flex-col gap-3 items-start justify-start text-start md:items-end lg:items-end'>
                    <Link
                        href='/accounts/secret'
                        className='relative group w-fit h-fit'
                    >
                        <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur py-4 px-6 transition group-hover:opacity-100 group-hover:blur-md '></div>
                        <div
                            className={`relative duration-500 text-sm md:text-md lg:text-xl border-white rounded-lg flex items-center justify-center py-2 px-4 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-600 w-fit hover:bg-dark-700 dark:hover:bg-gray-300 active:bg-black dark:active:bg-gray-400 ${roboto.className}`}
                        >
                            Your Order
                        </div>
                    </Link>
                    <p className='font-light text-xs text-start md:text-end lg:text-end'>
                        Lihat List Akun mu Dengan Secret ID
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-full'>
                {allData.map((row: any, i: number) => (
                    <div
                        key={i}
                        className={`rounded-3xl p-5 lg:p-10 shadow-md hover:shadow-xl duration-300 h-fit group border-2 border-white dark:border-dark-400 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% ${
                            row[0] === "SHARED" &&
                            " shadow-fuchsia-500 hover:shadow-fuchsia-500/50 "
                        } ${
                            row[0] === "PRIVATE" &&
                            " shadow-purple-500 hover:shadow-purple-500/50 "
                        }
                        `}
                    >
                        <div className='font-conthrax w-full flex justify-end items-start'>
                            <p className='text-lg lg:text-2xl text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                                {row[0]}
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-extralight select-none mb-1'>
                                Email
                            </p>

                            <p
                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                    row[0] === "SHARED" &&
                                    " border-fuchsia-500/60"
                                } ${
                                    row[0] === "PRIVATE" &&
                                    " border-purple-500/60"
                                }`}
                            >
                                {censorEmail(row[2])}
                            </p>
                            <p className='font-extralight select-none mb-1'>
                                Password
                            </p>
                            <p
                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                    row[0] === "SHARED" &&
                                    " border-fuchsia-500/60"
                                } ${
                                    row[0] === "PRIVATE" &&
                                    " border-purple-500/60"
                                }`}
                            >
                                {censorPassword(row[3], 6)}
                            </p>
                            {row[0] === "SHARED" && (
                                <>
                                    <div className='flex gap-5'>
                                        <div className='flex-col'>
                                            <p className='font-extralight select-none mb-1'>
                                                Profile Name
                                            </p>
                                            <p
                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-purple-500/60"
                                                }`}
                                            >
                                                {row[6]}
                                            </p>
                                        </div>
                                        <div className='flex-col'>
                                            <p className='font-extralight select-none mb-1'>
                                                PIN
                                            </p>
                                            <p
                                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg mb-3 select-none ${
                                                    row[0] === "SHARED" &&
                                                    " border-fuchsia-500/60"
                                                } ${
                                                    row[0] === "PRIVATE" &&
                                                    " border-purple-500/60"
                                                }`}
                                            >
                                                {censorPassword(row[7], 2)}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            <p className='font-extralight select-none mb-1'>
                                Expired Date
                            </p>
                            <p
                                className={`w-fit flex gap-1 py-2 px-3 items-center focus:ring-1 focus:ring-fuchsia-500 dark:bg-dark-600 bg-gray-100 drop-shadow-md border rounded-lg ${
                                    row[0] === "SHARED" &&
                                    " border-fuchsia-500/60"
                                } ${
                                    row[0] === "PRIVATE" &&
                                    " border-purple-500/60"
                                }`}
                            >
                                {row[0] === "SHARED" && row[8] + " 2024"}
                                {row[0] === "PRIVATE" && row[6] + " 2024"}
                            </p>
                        </div>
                        <div className='font-conthrax w-full flex justify-center items-center'>
                            <p className='text-s bg-gradient-to-bl dark:text-white/5 text-black/5 bg-clip-text cursor-default select-none'>
                                ALAMSYAH.ID
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
