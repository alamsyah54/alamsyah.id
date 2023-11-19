import DetailSection from "@/components/DetailSection"
import HeroSection from "@/components/HeroSection"
import AdsSection from "@/components/AdsSection"
import PromoSection from "@/components/PromoSection"

export default function Home() {
    return (
        <main className='flex flex-col h-fit'>
            <HeroSection />
            <DetailSection />
            <AdsSection />
            <PromoSection />
            {/* <div className='lg:bg-red-500 md:bg-orange-500 sm:bg-yellow-500 bg-green-500 w-full h-2' /> */}
        </main>
    )
}
