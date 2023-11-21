"use client"

import { Roboto } from "next/font/google"
import React, { useState } from "react"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const ProductsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? Products.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === Products.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <AnimatePresence mode='wait'>
            <div className='w-full justify-center items-center flex flex-col'>
                {/* <Image
                alt='ALAMSYAH.ID'
                className='min-h-fit bg-gray-300 w-full bg-center bg-cover duration-500 transition-transform'
                width={300}
                height={300}
                src={Products[currentIndex].picture}
            /> */}
                {/* <div className='flex flex-col px-5 rounded-3xl w-fit duration-700 shadow-lg bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 dark:shadow-black shadow-black/30 items-center '>
                    <h1
                        className={`text-4xl py-5 duration-700 w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                    >
                        {Products[currentIndex].package}
                    </h1>
                    <div className='flex flex-col items-start py-8 w-full'>
                        <span className='flex justify-start h-full gap-1'>
                            <p className='flex items-start text-md font-bold'>
                                IDR
                            </p>
                            <h2
                                className={`flex items-center text-6xl ${roboto.className}`}
                            >
                                {Products[currentIndex].price}
                            </h2>
                            <p className='flex text-xl items-end font-bold'>
                                K
                            </p>
                            <p className='flex text-xl items-end font-bold'>
                                /Month
                            </p>
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-start '>
                        {Products[currentIndex].features.map((feature, i) => (
                            <span
                                key={i}
                                className='flex gap-2 py-2 items-center capitalize'
                            >
                                <FaCheckCircle className='text-fuchsia-500 dark:text-sky-500' />
                                <p>{feature}</p>
                            </span>
                        ))}
                    </div>
                    <Link
                        href={Products[currentIndex].url}
                        className='relative group w-fit h-fit duration-700 group my-10'
                    >
                        <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                        <div
                            className={`relative md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-8 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                        >
                            Order Now
                        </div>
                    </Link>
                </div> */}

                <div
                    key={Products[currentIndex]._id}
                    className='flex flex-col group hover:shadow-black/50 shadow-xl dark:shadow-black shadow-black/30 rounded-3xl duration-700 w-[400px] md:w-[500px] lg:w-fit backdrop-blur-sm bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 items-center '
                >
                    <div className='flex flex-col items-center justify-between h-full w-full px-5'>
                        <div className='flex flex-col items-center p-5 w-full '>
                            <h1
                                className={`text-4xl py-5 duration-700 w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                            >
                                {Products[currentIndex].package}
                            </h1>
                            <div className='flex flex-col items-start py-8 w-full '>
                                <span className='flex justify-start h-full gap-1'>
                                    <p className='flex items-start text-md font-bold'>
                                        IDR
                                    </p>
                                    <h2
                                        className={`flex items-center text-6xl ${roboto.className}`}
                                    >
                                        {Products[currentIndex].price}
                                    </h2>
                                    <p className='flex text-xl items-end font-bold'>
                                        K
                                    </p>
                                    <p className='flex text-xl items-end font-bold'>
                                        /Month
                                    </p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-start '>
                                {Products[currentIndex].features.map(
                                    (feature, i) => (
                                        <div
                                            key={i}
                                            className='flex gap-2 py-2 justify-start items-start w-full capitalize '
                                        >
                                            <FaCheckCircle className='text-fuchsia-500 dark:text-sky-500 ' />
                                            <p className='w-full'>{feature}</p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                        <Link
                            href={Products[currentIndex].url}
                            className='relative group w-fit h-fit duration-700 group mb-10'
                        >
                            <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                            <div
                                className={`relative group-hover:scale-110 duration-500 md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-8 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                            >
                                Order Now
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center mt-5'>
                    {Products.map((product, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='px-3 duration-700 py-1 rounded-md m-3 cursor-pointer border-2 border-white dark:border-dark-600 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% '
                        >
                            {/* <h4
                                className={`flex items-center px-3 py-1 ${roboto.className}`}
                            >
                                {}
                            </h4> */}
                            <Image
                                alt='Product'
                                src={product.picture}
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default ProductsCarousel
