"use client"

import { Roboto } from "next/font/google"
import React, { useState, useEffect } from "react"
import { format, differenceInSeconds } from "date-fns"
import Link from "next/link"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

interface CountdownTimerProps {
    targetDate: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = differenceInSeconds(
                new Date(targetDate),
                new Date(),
            )

            if (difference > 0) {
                const days = Math.floor(difference / (24 * 60 * 60))
                const hours = Math.floor(
                    (difference % (24 * 60 * 60)) / (60 * 60),
                )
                const minutes = Math.floor((difference % (60 * 60)) / 60)
                const seconds = difference % 60
                return { days, hours, minutes, seconds }
            } else {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 }
            }
        }

        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className='flex justify-center items-center flex-col'>
            <h2
                className={`${roboto.className} dark:text-red-500 text-[55px] py-1`}
            >
                ENDED IN
            </h2>
            <div className='flex justify-evenly items-center gap-2'>
                <div className='flex flex-col items-center'>
                    <div
                        className={`p-3 text-4xl bg-gray-100 dark:bg-dark-600 shadow-lg rounded-lg text-center font-black dark:text-sky-500 ${roboto.className}`}
                    >
                        {timeLeft.days}
                    </div>
                    <span className='dark:text-fuchsia-500 text-sm py-2'>
                        Days
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <div
                        className={`p-3 text-4xl bg-gray-100 dark:bg-dark-600 shadow-lg rounded-lg text-center font-black dark:text-sky-500 ${roboto.className}`}
                    >
                        {timeLeft.hours}
                    </div>
                    <span className='dark:text-fuchsia-500 text-sm py-2'>
                        Hours
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <div
                        className={`p-3 text-4xl bg-gray-100 dark:bg-dark-600 shadow-lg rounded-lg text-center font-black dark:text-sky-500 ${roboto.className}`}
                    >
                        {timeLeft.minutes}
                    </div>
                    <span className='dark:text-fuchsia-500 text-sm py-2'>
                        Minutes
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <div
                        className={`p-3 text-4xl bg-gray-100 dark:bg-dark-600 shadow-lg rounded-lg text-center font-black dark:text-sky-500 ${roboto.className}`}
                    >
                        {timeLeft.seconds}
                    </div>
                    <span className='dark:text-fuchsia-500 text-sm py-2'>
                        Seconds
                    </span>
                </div>
            </div>
            <Link
                href='/products'
                className='relative group w-fit h-fit duration-500 group mt-8'
            >
                <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur transition opacity-75 group-hover:opacity-100 group-hover:blur-lg animate-pulse duration-1000'></div>
                <div className='relative md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-4 font-black bg-gray-100 bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#171c23]/80 dark:from-[#171c23] dark:from-15% dark:via-[#171c23] via-30% dark:to-[#0c0d0f] to-90%  shadow-light-100 dark:shadow-dark-100'>
                    Order Now!
                </div>
            </Link>
        </div>
    )
}

export default CountdownTimer
