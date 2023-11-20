"use client"
import React from "react"
import ProductsCarousel from "./shared/ProductsCarousel"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const AdsSection = () => {
    return (
        <AnimatePresence mode='wait'>
            <section
                id='ads'
                className='flex justify-center items-center flex-col lg:p-24 p-5 h-fit w-screen'
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='w-full flex justify-center text-2xl font-extrabold text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 bg-clip-text'
                >
                    NETFLIX PREMIUM ACCOUNT
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='w-full flex justify-center text-md mb-16 font-extralight'
                >
                    Ketersediaan Terbatas
                </motion.p>
                {/* <ProductsCarousel /> */}
                <div className='flex flex-row gap-10 lg:gap-20 overflow-x-auto overflow-y-hidden justify-start lg:justify-center max-w-screen p-5 pb-10 w-full rounded-2xl'>
                    {Products.map((product) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='flex flex-col px-8 rounded-3xl duration-700 w-[400px] md:w-[500px] lg:w-fit shadow-lg backdrop-blur-sm bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 dark:shadow-black shadow-black/30 items-center '
                        >
                            <div className='flex flex-col items-center justify-between h-full mx-3'>
                                <div className='flex flex-col items-center w-fit pt-5 mx-5'>
                                    <h1
                                        className={`text-4xl py-5 duration-700 w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                                    >
                                        {product.package}
                                    </h1>
                                    <div className='flex flex-col items-start py-8 w-full'>
                                        <span className='flex justify-start h-full gap-1'>
                                            <p className='flex items-start text-md font-bold'>
                                                IDR
                                            </p>
                                            <h2
                                                className={`flex items-center text-6xl ${roboto.className}`}
                                            >
                                                {product.price}
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
                                        {product.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className='flex gap-2 py-2 items-center capitalize'
                                            >
                                                <FaCheckCircle className='text-fuchsia-500 dark:text-sky-500' />
                                                <p>{feature}</p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    href={product.url}
                                    className='relative group w-fit h-fit duration-700 group my-10'
                                >
                                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                                    <div
                                        className={`relative md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-8 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                                    >
                                        Order Now
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </AnimatePresence>
    )
}

export default AdsSection
