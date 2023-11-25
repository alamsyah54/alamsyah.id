"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import { Roboto } from "next/font/google"
import { PiHandPointingLight } from "react-icons/pi"

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
                className='flex justify-center items-center flex-col w-[97vw] max-w-screen'
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

                <PiHandPointingLight className='text-3xl lg:text-4xl mt-5 opacity-60 animate-rightleft  lg:hidden' />
                <div className='flex flex-row gap-10 lg:gap-20 overflow-x-auto overflow-y-hidden justify-start lg:justify-center max-w-screen p-5 pb-12 w-full'>
                    {Products.map((product) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className='flex flex-col group hover:shadow-black/50 shadow-xl dark:shadow-black shadow-black/30 rounded-3xl duration-700 w-[400px] md:w-[500px] lg:w-fit backdrop-blur-sm bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 items-center '
                        >
                            <div className='flex flex-col items-center justify-between h-full w-full'>
                                <div className='flex flex-col items-center p-7 w-80 max-w-5xl '>
                                    <h1
                                        className={`text-4xl pb-3 duration-700 w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                                    >
                                        {product.package}
                                    </h1>
                                    <div className='flex flex-col items-start py-5 w-full '>
                                        <span className='flex justify-start h-full gap-1'>
                                            <p className='flex items-start text-xs font-bold'>
                                                IDR
                                            </p>
                                            <h2
                                                className={`flex items-center text-4xl ${roboto.className}`}
                                            >
                                                {product.price}
                                            </h2>
                                            <p className='flex text-sm items-end font-bold'>
                                                K
                                            </p>
                                            <p className='flex text-sm items-end font-bold'>
                                                /Month
                                            </p>
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-start '>
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className='flex gap-1.5 justify-start items-start w-full capitalize '
                                            >
                                                <FaCheckCircle className='text-fuchsia-500 dark:text-sky-500 ' />
                                                <p className='w-full text-sm'>
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    href={product.url}
                                    target='_blank'
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
                        </motion.div>
                    ))}
                </div>
                <PiHandPointingLight className='text-3xl lg:text-4xl mt-5 opacity-60 animate-rightleft lg:hidden' />
            </section>
        </AnimatePresence>
    )
}

export default AdsSection
