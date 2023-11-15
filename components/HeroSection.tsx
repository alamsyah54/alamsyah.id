"use client"

import { useEffect, useState } from "react"
import Spline from "@splinetool/react-spline"
import { Variants, AnimatePresence } from "framer-motion"
import Image from "next/image"
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

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1, // Adjust the stagger duration as needed
            },
        },
    }

    const comeFromLeft: Variants = {
        hidden: { opacity: 0, y: 0, x: -100 },
        visible: { opacity: 1, y: 0 },
    }
    return (
        <AnimatePresence mode='wait'>
            <section
                id='home'
                className='max-h-screen flex flex-col justify-center items-center w-full'
            >
                <div className='relative w-full h-[550px] max-md:-mt-28 -mt-20'>
                    {isLoaded ? (
                        <Spline
                            scene='https://prod.spline.design/HpJGf1t7hbGw6xJL/scene.splinecode'
                            className='w-fit'
                        />
                    ) : (
                        <div className='flex flex-col justify-center items-center text-center duration-700 w-full h-full'>
                            <div className='relative items-center justify-center bg-dark-700 rounded-full -z-20 p-2 shadow-lg'>
                                <Image
                                    src='/icons/Circle.webp'
                                    alt='circle'
                                    width={200}
                                    height={200}
                                    className='absolute animate-spin-slow -z-10'
                                />
                                <Image
                                    src='/icons/AInCircle.webp'
                                    alt='circle'
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <p className='font-conthrax drop-shadow-lg p-3'>Loading...</p>
                        </div>
                    )}
                </div>
            </section>
        </AnimatePresence>
    )
}

export default HeroSection
