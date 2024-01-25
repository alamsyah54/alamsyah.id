"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import { Roboto } from "next/font/google"
import { PiHandPointingLight } from "react-icons/pi"
import { formatPrice } from "@/lib/utils"

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
                className='flex justify-center items-center flex-col w-[97vw] md:w-[100vw] max-w-screen md:bg-cover md:bg-image md:bg-no-repeat md:bg-netflixMedium lg:bg-cover lg:bg-image lg:bg-no-repeat lg:bg-netflixLarge'
            >
                <div className='w-full h-full flex justify-center items-center flex-col py-10 md:bg-white/90 md:dark:bg-black/90'>
                    <div className='flex w-full flex-col justify-center items-center '>
                        <div className='flex w-full flex-col items-center py-5'>
                            <motion.div
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className='flex justify-center items-center w-full select-none'
                            >
                                <h2
                                    className={`${roboto.className} text-red-600 text-5xl md:text-6xl lg:text-6xl z-10 duration-700`}
                                >
                                    NETFLIX
                                </h2>
                                <h2
                                    className={`${roboto.className} text-[85px] lg:text-8xl md:text-8xl absolute opacity-20 duration-700`}
                                >
                                    PREMIUM
                                </h2>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 80, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className='font-light text-gray-600 dark:text-gray-400 md:text-lg py-2 lg:text-2xl lg:py-5 select-none'
                            >
                                Ketersediaan Akun Terbatas
                            </motion.p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10 lg:gap-20 overflow-x-auto overflow-y-hidden justify-start lg:justify-center max-w-screen p-5 pb-12 w-full'>
                        {Products.map((product) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 50, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className='flex flex-col group hover:shadow-black/50 shadow-xl dark:shadow-black shadow-black/10 rounded-3xl duration-700 w-[400px] md:w-[500px] lg:w-fit backdrop-blur-sm bg-gray-100 dark:bg-dark-600 border-2 border-gray-50 dark:border-dark-500 items-center'
                            >
                                <div className='flex flex-col items-center justify-between h-full w-full'>
                                    <div className='flex flex-col items-center p-7 w-80 max-w-5xl '>
                                        <h2
                                            className={`text-4xl pb-3 duration-700 w-full text-left border-b-[1px] dark:border-white/30 border-black/30 text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                                        >
                                            {product.package}
                                        </h2>
                                        <div className='flex justify-between py-5 w-full '>
                                            <h2 className='flex items-start w-full'>
                                                Mulai Dari
                                            </h2>
                                            <span className='flex justify-end w-full gap-1'>
                                                <p className='flex items-start text-sm font-bold'>
                                                    IDR
                                                </p>
                                                <h2
                                                    className={`flex items-center text-3xl ${roboto.className}`}
                                                >
                                                    {
                                                        //@ts-ignore
                                                        formatPrice(
                                                            product.durations[0]
                                                                .price,
                                                        )
                                                    }
                                                </h2>
                                            </span>
                                        </div>
                                        <div className='flex flex-col gap-3 justify-center items-start '>
                                            {product.features.map(
                                                (feature, i) => (
                                                    <div
                                                        key={i}
                                                        className='flex gap-1.5 justify-start items-start w-full capitalize '
                                                    >
                                                        <FaCheckCircle
                                                            className={` 
                                                    ${
                                                        product.package ===
                                                            "SHARED" &&
                                                        " text-fuchsia-500"
                                                    }
                                                    ${
                                                        product.package ===
                                                            "PRIVATE" &&
                                                        " text-purple-500"
                                                    }
                                                    ${
                                                        product.package ===
                                                            "RESELLER" &&
                                                        " text-cyan-500"
                                                    }`}
                                                        />
                                                        <p className='w-full text-sm'>
                                                            {feature}
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <Link
                                        href='/products'
                                        className='relative group w-fit h-fit duration-700 mb-10'
                                    >
                                        <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                                        <div
                                            className={`relative duration-500 md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-8 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-600 w-fit hover:bg-dark-700 dark:hover:bg-gray-300 active:bg-black dark:active:bg-gray-400 ${roboto.className}`}
                                        >
                                            Buy Now
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <PiHandPointingLight className='text-3xl lg:text-4xl mt-5 opacity-60 animate-rightleft lg:hidden' />
                </div>
            </section>
        </AnimatePresence>
    )
}

export default AdsSection
