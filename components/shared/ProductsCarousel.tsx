"use client"

import { Roboto } from "next/font/google"
import React, { useState } from "react"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

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
            <div className='relative w-fit'>
                {/* <Image
                alt='ALAMSYAH.ID'
                className='min-h-fit bg-gray-300 w-full bg-center bg-cover duration-500 transition-transform'
                width={300}
                height={300}
                src={Products[currentIndex].picture}
            /> */}
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='flex flex-col px-8 rounded-2xl shadow-lg bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 dark:shadow-black shadow-black/30 items-center '
                >
                    <h1
                        className={`text-4xl py-5  w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
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
                </motion.div>
                <div className='flex justify-center mt-5'>
                    {Products.map((product, slideIndex) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4 * slideIndex + 1 }}
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='px-3 py-1 rounded-full m-3 cursor-pointer border-2 border-white dark:border-dark-600 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% '
                        >
                            <h4
                                className={`flex items-center px-3 py-1 ${roboto.className}`}
                            >
                                {product.package}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default ProductsCarousel
