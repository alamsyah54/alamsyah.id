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
            <div className='flex w-screen h-[75vh] justify-center items-center '>
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
