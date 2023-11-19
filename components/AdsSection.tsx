"use client"
import React from "react"
import ProductsCarousel from "./shared/ProductsCarousel"
import { AnimatePresence, motion } from "framer-motion"

const AdsSection = () => {
    return (
        <AnimatePresence mode='wait'>
            <section
                id='ads'
                className='flex justify-center items-center flex-col lg:p-24 p-5 h-fit'
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='w-full flex justify-center text-2xl mb-16 font-extrabold text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 bg-clip-text'
                >
                    NETFLIX PREMIUM ACCOUNT
                </motion.h1>
                <ProductsCarousel />
            </section>
        </AnimatePresence>
    )
}

export default AdsSection
