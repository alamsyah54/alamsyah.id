"use client"

import { BsExclamationCircle } from "react-icons/bs"
import { motion } from "framer-motion"
import { Roboto } from "next/font/google"
import { RulesContent } from "@/constant"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const Rules = () => {
    return (
        <section
            id='rules'
            className='flex flex-col items-center p-5 lg:px-28 h-fit mb-20 w-full'
        >
            <BsExclamationCircle className='text-5xl mb-2 animate-pulse' />
            <span className='flex w-full justify-center items-center text-center text-2xl pb-10'>
                <h3 className={`${roboto.className} capitalize`}>
                    Harap patuhi peraturan agar pengalaman Anda tetap optimal
                </h3>
            </span>
            <div className='flex justify-evenly w-full flex-col md:flex-row lg:flex-row items-start md:gap-40 lg:gap-52 capitalize'>
                {RulesContent.map((rule, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, x: 0 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-start justify-center text-start py-5 h-full w-full'
                    >
                        <h2 className={`${roboto.className} text-xl`}>
                            {rule.title}
                        </h2>
                        <p className='capitalize'>{rule.description}</p>
                    </motion.div>
                ))}
            </div>
            <motion.h3
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className={`${roboto.className} capitalize mt-3 text-yellow-600`}
            >
                Melanggar peraturan menyebabkan GARANSI HANGUS!, Dilarang
                Membeli lagi, NO REFUND!
            </motion.h3>
        </section>
    )
}

export default Rules
