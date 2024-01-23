"use client"
import { supportDevices } from "@/constant"
import { Roboto } from "next/font/google"
import { BsInfoCircle } from "react-icons/bs"
import { BsShieldLock } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"

import React from "react"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const DetailSection = () => {
    return (
        <AnimatePresence mode='wait'>
            <section
                id='details'
                className='flex flex-col lg:p-20 pt-7 h-fit px-5'
            >
                <div className='flex justify-center flex-col lg:flex-row-reverse items-center'>
                    <div className='flex w-full flex-col justify-center items-center'>
                        <div className='flex w-full flex-col items-center'>
                            <motion.div
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className='flex justify-center items-center w-full select-none'
                            >
                                <h2
                                    className={`${roboto.className} text-sky-500 text-4xl md:text-5xl lg:text-5xl opacity-100 duration-700 select-none`}
                                >
                                    SUPPORT ALL
                                </h2>
                                <h2
                                    className={`${roboto.className} text-8xl lg:text-8xl md:text-8xl absolute opacity-10 -z-20 duration-700 select-none`}
                                >
                                    DEVICES
                                </h2>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 80, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className='font-light text-gray-600 dark:text-gray-400 md:text-lg py-3 lg:text-2xl lg:py-5 select-none'
                            >
                                Kenyamanan menonton di berbagai perangkat
                            </motion.h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-16 md:m-16 lg:m-0'>
                        {supportDevices.map((device, i): any => (
                            <div
                                className='flex items-start justify-center text-center'
                                key={i}
                            >
                                <div className=' flex flex-col justify-between items-center'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 100, x: 0 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5 * i + 1 }}
                                        className='drop-shadow-sm-md shadow-black'
                                    >
                                        {device.device}
                                    </motion.div>
                                    <motion.p
                                        initial={{ opacity: 0, y: 100, x: 0 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1 * i + 1 }}
                                        className='text-md pt-3'
                                    >
                                        {device.title}
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 100, x: 0 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1.5 * i + 1 }}
                                        className='text-sm font-extralight py-2 text-gray-400'
                                    >
                                        {device.description}
                                    </motion.p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-14 lg:pt-24 max-sm:py-20 px-5 w-full h-full justify-center flex items-center flex-col md:flex-col lg:flex-row-reverse'>
                    <div className='flex flex-col justify-center items-end  w-full text-right mb-12'>
                        <motion.p
                            initial={{ opacity: 0, y: 100, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className={`${roboto.className} indent-4 flex gap-2 items-center text-2xl w-fit mb-3`}
                        >
                            Jaminan Kami <BsShieldLock />
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='opacity-80 capitalize'
                        >
                            <span className='font-extrabold text-lg'>
                                Aman dan Tanpa Masalah
                            </span>
                            <br className='' />
                            Kami menjamin kualitas layanan tanpa kompromi.
                            Nikmati
                            <br className='hidden md:block lg:block' />
                            pengalaman tanpa khawatir dengan akun berlangganan
                            asli dari
                            <br className='hidden md:block lg:block' />
                            kami. Tidak akan ada masalah tahan atau hambatan
                            pembayaran.
                            <br />
                            <br />
                            <span className='font-extrabold text-lg'>
                                Garansi Full Selama Durasi Pembelian
                            </span>
                            <br className='' />
                            Kami memberikan garansi sepanjang durasi pembelian
                            Anda.
                            <br className='hidden md:block lg:block' />
                            Contohnya, jika Anda membeli untuk 1 bulan, kami
                            menjamin
                            <br className='hidden md:block lg:block' />
                            layanan penuh selama 1 bulan penuh. Garansi ini
                            memberikan
                            <br className='hidden md:block lg:block' />
                            kepastian dan perlindungan ekstra bagi setiap
                            pelanggan.
                        </motion.div>
                    </div>
                    <div className='flex flex-col justify-center items-start  w-full text-left'>
                        <motion.p
                            initial={{ opacity: 0, y: 100, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className={`${roboto.className} indent-4 flex gap-1 items-center text-2xl w-fit mb-3`}
                        >
                            <BsInfoCircle />
                            Informasi
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='opacity-80 capitalize'
                        >
                            <span className='font-extrabold text-lg text-black dark:text-white'>
                                Netflix Shared (1 Profil 1 Device)
                            </span>
                            <br />
                            <ul className='gap-2 grid'>
                                <li>
                                    Bisa Request Nama Profile dan PIN diawal
                                    Pembelian.
                                </li>
                                <li>Hanya untuk 1 Perangkat.</li>
                                <li>
                                    Dilarang merubah/merusak payment info atau
                                    subscription.
                                </li>
                                <li>
                                    Dilarang mengganti Profile, PIN, EMail,
                                    Ataupun Password.
                                </li>
                                <li>Dilarang menambahkan Profil baru.</li>
                                <li>
                                    Gunakan 1 profil saja jangan menganggu
                                    profile lain.
                                </li>
                                <li>
                                    Jangan menggunakan VPN/login diluar
                                    Indonesia.
                                </li>
                            </ul>
                            <br />
                            <span className='font-extrabold text-lg text-black dark:text-white'>
                                Netflix Private (Full Akses, Bisa Membuat 5
                                Profile)
                            </span>
                            <br />
                            <ul className='gap-2 grid'>
                                <li>
                                    Bisa mengganti password, Tetapi harus lapor
                                    pada admin.
                                </li>
                                <li>Dilarang mengganti Email.</li>
                                <li>
                                    Dilarang merubah/merusak payment info atau
                                    subscription.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatePresence>
    )
}

export default DetailSection
