"use client"

import { BsExclamationCircle } from "react-icons/bs"
import { motion } from "framer-motion"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const Rules = () => {
    return (
        <section
            id='rules'
            className='flex flex-col items-center p-5 lg:px-24 h-fit mb-20 w-full'
        >
            <BsExclamationCircle className='text-5xl mb-2 animate-pulse' />
            <span className='flex w-full justify-center items-center text-center text-2xl pb-10'>
                <h3 className={`${roboto.className} capitalize`}>
                    Harap patuhi peraturan agar pengalaman Anda tetap optimal
                </h3>
            </span>
            <div className='flex justify-between w-full flex-col md:flex-row lg:flex-row items-center md:gap-40 lg:gap-52 capitalize'>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center justify-center text-start py-5'
                >
                    <h2 className={`${roboto.className} capitalize`}>Shared</h2>
                    <p>
                        Hanya untuk 1 Perangkat | Dilarang mengganti password &
                        Email | Dilarang menambahkan Profil baru | Gunakan 1
                        profil saja | Dilarang menggunakan VPN/login diluar
                        Indonesia
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center justify-center text-start py-5'
                >
                    <h2 className={`${roboto.className} capitalize`}>
                        Private
                    </h2>
                    <p>
                        Dilarang mengganti Email | Dilarang merubah/merusak
                        payment info atau subscription | Selalu lapor dan kirim
                        password baru kepada admin untuk pendataan | Dilarang
                        menggunakan VPN/login diluar Indonesia
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center justify-center text-start py-5'
                >
                    <h2 className={`${roboto.className} capitalize`}>
                        Reseller
                    </h2>
                    <p>
                        Dilarang Menjual 1 Profile Lebih dari 1 Device |
                        Dilarang Menipu seperti menjual paket 1 tahun lalu kabur
                        | wajib bertanggung jawab pada customer
                    </p>
                </motion.div>
            </div>
            <h3
                className={`${roboto.className} capitalize mt-3 text-yellow-500`}
            >
                jika melanggar peraturan otomatis garansi hangus, di blocking
                dilarang membeli lagi disini, dan tidak ada refund sepeserpun
            </h3>
        </section>
    )
}

export default Rules
