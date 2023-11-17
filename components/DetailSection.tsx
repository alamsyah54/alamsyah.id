import { supportDevices } from "@/constant"
import { Roboto } from "next/font/google"
import Image from "next/image"
import React from "react"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const DetailSection = () => {
    return (
        <section
            id='details'
            className='flex flex-col lg:p-24 px-10 py-24 h-fit'
        >
            <div className='flex justify-center flex-col lg:flex-row-reverse items-start'>
                <div className='flex w-full flex-col justify-end items-end'>
                    <div className='flex w-full flex-col items-center'>
                        <div className='flex justify-center items-center w-full'>
                            <p
                                className={`${roboto.className} text-sky-500 text-5xl md:text-6xl lg:text-7xl opacity-100`}
                            >
                                All Devices
                            </p>
                            <h1
                                className={`${roboto.className} text-[85px] lg:text-[150px] absolute opacity-10 -z-20`}
                            >
                                SUPPORT
                            </h1>
                        </div>
                        <h2 className='font-light text-gray-600 dark:text-gray-400 md:text-lg lg:text-2xl lg:py-5'>
                            Kenyamanan menonton di berbagai perangkat
                        </h2>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-16 md:m-16 lg:m-0'>
                    {supportDevices.map((device, i): any => (
                        <div
                            className='flex items-start justify-center text-center'
                            key={i}
                        >
                            <div className=' flex flex-col justify-between items-center'>
                                <div className='drop-shadow-sm-md shadow-black'>
                                    {device.device}
                                </div>
                                <p className='text-md pt-3'>{device.title}</p>
                                <p className='text-sm font-extralight py-2 text-gray-400'>
                                    {device.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <span className='py-14 max-sm:py-20 text-right lg:px-28 md:px-20 w-full justify-center flex items-end flex-col'>
                <p
                    className={`${roboto.className} indent-4 text-2xl border-b-[1px] border-black/25 dark:border-white/25 w-fit mb-3`}
                >
                    Jaminan Kami
                </p>
                <p className='opacity-80'>
                    <span className='font-extrabold text-lg'>
                        Aman dan Tanpa Masalah
                    </span>
                    <br className='' />
                    Kami menjamin kualitas layanan tanpa kompromi. Nikmati
                    <br className='hidden md:block lg:block' />
                    pengalaman tanpa khawatir dengan akun berlangganan asli dari
                    <br className='hidden md:block lg:block' />
                    kami. Tidak akan ada masalah tahan atau hambatan pembayaran.
                    <br className='hidden md:block lg:block' />
                    <br className='hidden md:block lg:block' />
                    <span className='font-extrabold text-lg'>
                        Garansi Full Selama Durasi Pembelian
                    </span>
                    <br className='' />
                    Kami memberikan garansi sepanjang durasi pembelian Anda.
                    <br className='hidden md:block lg:block' />
                    Contohnya, jika Anda membeli untuk 1 bulan, kami menjamin
                    <br className='hidden md:block lg:block' />
                    layanan penuh selama 1 bulan penuh. Garansi ini memberikan
                    <br className='hidden md:block lg:block' />
                    kepastian dan perlindungan ekstra bagi setiap pelanggan.
                </p>
            </span>
        </section>
    )
}

export default DetailSection
