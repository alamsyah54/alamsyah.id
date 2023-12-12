import DetailSection from "@/components/DetailSection"
import HeroSection from "@/components/HeroSection"
import AdsSection from "@/components/AdsSection"
import PromoSection from "@/components/PromoSection"
import Rules from "@/components/Rules"
import Testimoni from "@/components/Testimoni"

export default function Home() {
    return (
        <main className='flex flex-col h-fit items-center justify-center'>
            <HeroSection />
            {/* <PromoSection /> */}
            <AdsSection />
            <DetailSection />
            <Rules />
            <Testimoni />
        </main>
    )
}
