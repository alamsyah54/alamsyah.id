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
            <div className='w-full justify-center items-center flex flex-col sm:px-20 md:px-36 lg:px-96'>
                <Image
                    src={Products[currentIndex].picture}
                    alt={Products[currentIndex].package}
                    width={500}
                    height={500}
                />
                <div
                    key={Products[currentIndex]._id}
                    className='flex flex-col w-full items-center'
                >
                    <div className='flex flex-col items-center justify-between h-full w-full px-5 '>
                        <div className='flex justify-between items-start pt-5 lg:pt-24 w-full border-t-[1px] dark:border-white/30 border-black/30'>
                            <h1
                                className={`text-5xl py-3 duration-700 w-full text-left text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                            >
                                {Products[currentIndex].package}
                            </h1>
                            <div className='flex flex-col items-end'>
                                <div className='flex flex-col items-end py-3 w-fit '>
                                    <span className='flex justify-start h-full gap-1'>
                                        <p className='flex items-start text-md font-bold'>
                                            IDR
                                        </p>
                                        <h2
                                            className={`flex items-center text-4xl ${roboto.className}`}
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
                                <Link
                                    href={Products[currentIndex].url}
                                    target='_blank'
                                    className='relative group w-fit h-fit duration-700 group mb-10'
                                >
                                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                                    <div
                                        className={`relative group-hover:scale-110 duration-500 text-lg border-white rounded-lg flex items-center justify-center py-2 px-6 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                                    >
                                        Order Now
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-center w-full'>
                            {Products.map((product, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='px-3 duration-700 py-1 rounded-md m-1 cursor-pointer border-2 border-white dark:border-dark-600 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% '
                                >
                                    <Image
                                        alt='Product'
                                        src={product.picture}
                                        width={100}
                                        height={100}
                                    />
                                    <p className='font-conthrax'>
                                        {product.package}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className='py-5 text-xl'>
                            {Products[currentIndex].description}
                        </p>
                        <div className='flex flex-col justify-start w-full items-start pt-5'>
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
                    <p className='text-xl py-10 px-5 text-center text-red-500 font-extrabold capitalize'>
                        Harap Dibaca! <br /> {Products[currentIndex].rules}
                    </p>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default ProductsCarousel
