"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const handleSplineLoad = () => {
            setIsLoaded(true)
        }

        // Simulating an asynchronous operation (e.g., loading data) with setTimeout
        const simulateLoading = () => {
            setTimeout(() => {
                handleSplineLoad()
            }, 4000) // Adjust the delay as needed
        }

        // Trigger the simulated loading when the component mounts
        simulateLoading()

        // Clean up any resources or subscriptions when the component unmounts
        return () => {
            // Cleanup logic if needed
        }
    }, [])
    return (
        <AnimatePresence mode='wait'>
            <section
                id='home'
                className='flex max-lg:justify-between max-md:flex-col-reverse items-center w-full max-h-screen '
            >
                <div className='flex max-lg:basis-2/5 w-full h-screen duration-700 items-center max-sm:pb-24 sm:pb-24 -mt-40 md:-mt-32 lg:-mt-10 sm:-mt-40 lg:px-28 md:pl-14 first-letter:first-line:marker:lg:m-0 px-5 max-sm:bg-gradient-to-t from-gray-50 dark:from-dark-700 z-10 '>
                    <div className='lg:pl-14'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='font-black text-2xl md:text-3xl lg:text-6xl'
                        >
                            Unlock Premium Digital Experiences
                            <br /> with{" "}
                            <span className='font-conthrax duration-700 my-4 dark:text-transparent dark:bg-gradient-to-tl dark:from-cyan-300 dark:to-fuchsia-400 bg-clip-text'>
                                ALAMSYAH.ID
                            </span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 80, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='font-light md:text-lg lg:text-2xl lg:py-2'
                        >
                            Your Trusted Choice for Premium Netflix Accounts and
                            High Quality Solutions
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='flex pt-8'
                        >
                            <Link
                                href='/products'
                                className='relative group w-fit h-fit duration-700 group'
                            >
                                <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur transition opacity-75 group-hover:opacity-100 group-hover:blur-lg animate-pulse duration-700'></div>
                                <div className='relative md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-4 font-black bg-gray-100 bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#171c23]/80 dark:from-[#171c23] dark:from-15% dark:via-[#171c23] via-30% dark:to-[#0c0d0f] to-90%  shadow-light-100 dark:shadow-dark-100'>
                                    Buy Now
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <div className='flex max-lg:basis-3/5 w-full'>
                    <div className='relative w-full h-[700px] max-md:-mt-12 -mt-7'>
                        {isLoaded ? (
                            <Spline
                                scene='https://prod.spline.design/HpJGf1t7hbGw6xJL/scene.splinecode'
                                className='w-fit'
                            />
                        ) : (
                            <div className='flex flex-col justify-center items-center text-center duration-700 w-full h-full'>
                                <div className='relative items-center justify-center bg-dark-700 rounded-full -z-20 p-2 shadow-lg'>
                                    <Image
                                        src='/icons/globe.webp'
                                        alt='circle'
                                        width={200}
                                        height={200}
                                        className='absolute animate-spin-slow -z-10'
                                    />
                                    <Image
                                        src='/icons/AInCircle.webp'
                                        alt='Aircle'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p className='font-conthrax drop-shadow-lg p-3 animate-bounce duration-1000 transition-transform'>
                                    Loading...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </AnimatePresence>
    )
}

export default HeroSection
