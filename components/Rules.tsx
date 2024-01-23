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
        <section id='rules' className=' px-10 lg:px-40 h-fit mb-20 w-full'>
            <div className='py-10 px-5 flex flex-col items-center rounded-2xl bg-red-500/20 border border-red-500 text-red-500'>
                <span className='flex flex-col lg:flex-row w-full justify-center gap-3 items-center text-center text-2xl pb-10'>
                    <BsExclamationCircle className='text-5xl mb-2 animate-pulse' />
                    <h3 className={`${roboto.className} capitalize`}>
                        Harap patuhi peraturan agar pengalaman Anda tetap
                        optimal
                    </h3>
                </span>
                <div className='flex justify-evenly w-full flex-col md:flex-row lg:flex-row items-start md:gap-12 lg:px-10 capitalize'>
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
                    className={`${roboto.className} capitalize mt-3`}
                >
                    Melanggar peraturan menyebabkan GARANSI HANGUS!, Dilarang
                    Membeli lagi, NO REFUND!
                </motion.h3>
            </div>
        </section>
    )
}

export default Rules
