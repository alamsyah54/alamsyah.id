import React from "react"
import { fetchData } from "@/app/api/googleSheets"
import { BsShieldLock } from "react-icons/bs"

const page = async (
    { params }: { params: { secretId: string } },
    { Data, totalPrivateAccounts, totalSharedAccounts, totalccounts }: any,
) => {
    // const { Data } = await fetchData()
    const secretID = params.secretId

    return (
        <div className='w-full justify-center items-start flex px-5'>
            <div className='flex flex-col gap-10 w-fit'>
                <div className='flex gap-2 items-center justify-start pt-5'>
                    <BsShieldLock className='text-6xl' />
                    <div>
                        <p className='font-conthrax text-xl'>Secret ID</p>
                        <p className='font-extralight text-sm'>{secretID}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10'>
                    {Data.map(
                        (row: any, i: number) =>
                            row[1] === secretID && (
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
                                        <p className='text-lg text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                                            {row[0]}
                                        </p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-extralight select-none mb-1'>
                                            Email
                                        </p>
                                        <p
                                            className={`w-fit flex items-center mb-4 gap-2 rounded-lg px-3 py-1 shadow-none bg-black/5 dark:bg-white/5 select-all border-[1px] ${
                                                row[0] === "SHARED" &&
                                                " border-fuchsia-500/60"
                                            } ${
                                                row[0] === "PRIVATE" &&
                                                " border-purple-500/60"
                                            }`}
                                        >
                                            {row[2]}
                                        </p>

                                        <p className='font-extralight select-none mb-1'>
                                            Password
                                        </p>
                                        <p
                                            className={`w-fit flex items-center mb-4 gap-2 rounded-lg px-3 py-1 shadow-none bg-black/5 dark:bg-white/5 select-all border-[1px] ${
                                                row[0] === "SHARED" &&
                                                " border-fuchsia-500/60"
                                            } ${
                                                row[0] === "PRIVATE" &&
                                                " border-purple-500/60"
                                            }`}
                                        >
                                            {row[3]}
                                        </p>
                                        {row[0] === "SHARED" && (
                                            <>
                                                <div className='flex gap-5'>
                                                    <div className='flex-col'>
                                                        <p className='font-extralight select-none mb-1'>
                                                            Profile Name
                                                        </p>
                                                        <p
                                                            className={`w-fit flex items-center mb-4 gap-2 rounded-lg px-3 py-1 shadow-none bg-black/5 dark:bg-white/5 select-all border-[1px] ${
                                                                row[0] ===
                                                                    "SHARED" &&
                                                                " border-fuchsia-500/60"
                                                            } ${
                                                                row[0] ===
                                                                    "PRIVATE" &&
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
                                                            className={`w-fit flex items-center mb-4 gap-2 rounded-lg px-3 py-1 shadow-none bg-black/5 dark:bg-white/5 select-all border-[1px] ${
                                                                row[0] ===
                                                                    "SHARED" &&
                                                                " border-fuchsia-500/60"
                                                            } ${
                                                                row[0] ===
                                                                    "PRIVATE" &&
                                                                " border-purple-500/60"
                                                            }`}
                                                        >
                                                            {row[7]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <p className='font-extralight select-none mb-1'>
                                            Expired Date
                                        </p>
                                        <p
                                            className={`w-fit flex items-center mb-4 gap-2 rounded-lg px-3 py-1 shadow-none bg-black/5 dark:bg-white/5 select-none border-[1px] ${
                                                row[0] === "SHARED" &&
                                                " border-fuchsia-500/60"
                                            } ${
                                                row[0] === "PRIVATE" &&
                                                " border-purple-500/60"
                                            }`}
                                        >
                                            {row[0] === "SHARED" &&
                                                row[8] + " 2024"}
                                            {row[0] === "PRIVATE" &&
                                                row[6] + " 2024"}
                                        </p>
                                    </div>
                                    <div className='font-conthrax w-full flex justify-center items-center'>
                                        <p className='text-s bg-gradient-to-bl dark:text-white/10 text-black/10 bg-clip-text cursor-default select-none'>
                                            ALAMSYAH.ID
                                        </p>
                                    </div>
                                </div>
                            ),
                    )}
                </div>
            </div>
        </div>
    )
}

export default page
