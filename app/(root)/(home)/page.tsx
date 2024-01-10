"use client"
import React, { useState, useEffect } from "react"
import DetailSection from "@/components/DetailSection"
import HeroSection from "@/components/HeroSection"
import AdsSection from "@/components/AdsSection"
import PromoSection from "@/components/PromoSection"
import Rules from "@/components/Rules"
import Testimoni from "@/components/Testimoni"
import Image from "next/image"

export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false)
        }, 1111) // Set the duration in milliseconds (2 seconds in this example)

        return () => clearTimeout(delay)
    }, [])

    const Loading = () => {
        return (
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-10'>
                <Image
                    width={100}
                    height={100}
                    src='/images/AFooterDark.png'
                    alt='Loading...'
                    className='hidden dark:block duration-700'
                />
                <Image
                    width={100}
                    height={100}
                    src='/images/AFooterLight.png'
                    alt='Loading...'
                    className='dark:hidden duration-700'
                />
                <p className='text-lg text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                    Loading...
                </p>
            </div>
        )
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className='flex flex-col h-fit items-center justify-center'>
                    <HeroSection />
                    {/* <PromoSection /> */}
                    <AdsSection />
                    <DetailSection />
                    <Rules />
                    <Testimoni />
                </main>
            )}
        </>
    )
}
