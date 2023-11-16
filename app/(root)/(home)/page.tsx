import HeroSection from "@/components/HeroSection"
import PromoSection from "@/components/PromoSection"

export default function Home() {
    return (
        <main className='flex flex-col duration-700'>
            <HeroSection />
            <div className='lg:bg-red-500 md:bg-orange-500 sm:bg-yellow-500 bg-green-500 w-full h-2' />
            <PromoSection />
        </main>
    )
}
