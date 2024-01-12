import React, { Suspense } from "react"
import DetailSection from "@/components/DetailSection"
import HeroSection from "@/components/HeroSection"
import AdsSection from "@/components/AdsSection"
import PromoSection from "@/components/PromoSection"
import Rules from "@/components/Rules"
import Testimoni from "@/components/Testimoni"
import Loading from "@/components/shared/Loading"

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <main className='flex flex-col h-fit items-center justify-center'>
                {/* <Loading /> */}
                <HeroSection />
                {/* <PromoSection /> */}
                <AdsSection />
                <DetailSection />
                <Rules />
                <Testimoni />
            </main>
        </Suspense>
    )
}
