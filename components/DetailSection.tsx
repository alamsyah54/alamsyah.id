import { supportDevices } from "@/constant"
import { Roboto } from "next/font/google"
import { BsInfoCircle } from "react-icons/bs"
import { BsShieldLock } from "react-icons/bs"

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
            className='flex flex-col lg:p-24 px-10 pt-24 h-fit'
        >
            <div className='flex justify-center flex-col lg:flex-row-reverse items-start'>
                <div className='flex w-full flex-col justify-end items-end'>
                    <div className='flex w-full flex-col items-center'>
                        <div className='flex justify-center items-center w-full'>
                            <h2
                                className={`${roboto.className} text-sky-500 text-5xl md:text-6xl lg:text-6xl opacity-100 duration-700`}
                            >
                                All Devices
                            </h2>
                            <h1
                                className={`${roboto.className} text-[85px] lg:text-8xl md:text-8xl absolute opacity-10 -z-20 duration-700`}
                            >
                                SUPPORT
                            </h1>
                        </div>
                        <h2 className='font-light text-gray-600 dark:text-gray-400 md:text-lg py-3 lg:text-2xl lg:py-5'>
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

            <div className='py-14 lg:pt-24 max-sm:py-20 px-5 w-full h-full justify-center flex items-center flex-col md:flex-col lg:flex-row-reverse'>
                <div className='flex flex-col justify-center items-end  w-full text-right mb-12'>
                    <p
                        className={`${roboto.className} indent-4 flex gap-2 items-starts text-2xl w-fit mb-3`}
                    >
                        Jaminan Kami <BsShieldLock />
                    </p>
                    <p className='opacity-80'>
                        <span className='font-extrabold text-lg'>
                            Aman dan Tanpa Masalah
                        </span>
                        <br className='' />
                        Kami menjamin kualitas layanan tanpa kompromi. Nikmati
                        <br className='hidden md:block lg:block' />
                        pengalaman tanpa khawatir dengan akun berlangganan asli
                        dari
                        <br className='hidden md:block lg:block' />
                        kami. Tidak akan ada masalah tahan atau hambatan
                        pembayaran.
                        <br />
                        <br />
                        <span className='font-extrabold text-lg'>
                            Garansi Full Selama Durasi Pembelian
                        </span>
                        <br className='' />
                        Kami memberikan garansi sepanjang durasi pembelian Anda.
                        <br className='hidden md:block lg:block' />
                        Contohnya, jika Anda membeli untuk 1 bulan, kami
                        menjamin
                        <br className='hidden md:block lg:block' />
                        layanan penuh selama 1 bulan penuh. Garansi ini
                        memberikan
                        <br className='hidden md:block lg:block' />
                        kepastian dan perlindungan ekstra bagi setiap pelanggan.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-start  w-full text-left'>
                    <p
                        className={`${roboto.className} indent-4 flex gap-2 items-starts text-2xl w-fit mb-3`}
                    >
                        <BsInfoCircle />
                        Informasi
                    </p>
                    <div className='opacity-80'>
                        <span className='font-extrabold text-lg'>
                            Netflix Shared (1 Profil 1 Device)
                        </span>
                        <br />
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
                                Dilarang mengganti Profile, PIN, EMail, Ataupun
                                Password.
                            </li>
                            <li>Dilarang menambahkan Profil baru.</li>
                            <li>
                                Gunakan 1 profil saja jangan menganggu profile
                                lain.
                            </li>
                            <li>
                                Jangan menggunakan VPN/login diluar Indonesia.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <span className='font-extrabold text-lg'>
                            Netflix Private (Full Akses, Bisa Membuat 5 Profile)
                        </span>
                        <br />
                        <br />
                        <ul className='gap-2 grid'>
                            <li>
                                Bisa mengganti password, Tetapi harus lapor pada
                                admin.
                            </li>
                            <li>Dilarang mengganti Email.</li>
                            <li>
                                Dilarang merubah/merusak payment info atau
                                subscription.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection
