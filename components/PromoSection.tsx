"use client"
import { motion } from "framer-motion"
import { Roboto } from "next/font/google"
import CountdownTimer from "./CountdownTimer"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const PromoSection = () => {
    const targetDate = "2024-01-31T00:00:00"
    return (
        <section id='promo' className='flex flex-col py-10 h-fit w-full'>
            <div className='flex justify-between w-full flex-col md:flex-row lg:flex-row items-start'>
                <motion.div
                    initial={{ opacity: 0, y: 100, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='flex items-center flex-col w-full h-64 max-h-full justify-center animate-pulse'
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100, x: 0 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='flex justify-center items-center w-full select-none'
                    >
                        <h2
                            className={`${roboto.className} text-fuchsia-500 text-5xl md:text-6xl z-10 duration-700`}
                        >
                            &ldquo;FOR RESELLER&rdquo;
                        </h2>
                        <h2
                            className={`${roboto.className} text-[85px] md:text-9xl absolute opacity-20 duration-700`}
                        >
                            PROMO
                        </h2>
                    </motion.div>
                    <h2 className='font-black text-lg md:text-xl lg:text-2xl lg:pt-5'>
                        Paket Reseller Hanya 333k
                    </h2>
                    <p className='font-light text-gray-600 dark:text-gray-400 md:text-lg '>
                        Berlaku Untuk Pembelian Dari Web
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                    className='flex items-end w-full h-full justify-center '
                >
                    <CountdownTimer targetDate={targetDate} />
                </motion.div>
            </div>
        </section>
    )
}

export default PromoSection
