import Image from "next/image"
import { Roboto } from "next/font/google"
import CountdownTimer from "./CountdownTimer"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const PromoSection = () => {
    const targetDate = "2023-11-19T00:00:00"
    return (
        <section id='promo' className='flex flex-col lg:p-24 px-10 py-24 h-fit'>
            <div className='flex justify-center flex-col md:flex-row lg:flex-row items-start '>
                <div className='flex items-center  w-full h-64 max-h-full justify-center '>
                    <div className='flex justify-center items-center w-full'>
                        <h1
                            className={`${roboto.className} text-9xl lg:text-[150px] absolute opacity-10`}
                        >
                            PROMO
                        </h1>
                        <Image
                            src='/images/PremiumDark.png'
                            width={300}
                            height={300}
                            alt='PROMO'
                            className='hidden dark:block lg:w-96'
                        />
                        <Image
                            src='/images/PremiumLight.png'
                            width={300}
                            height={300}
                            alt='PROMO'
                            className='lg:w-96 dark:hidden'
                        />
                    </div>
                </div>
                <div className='flex items-end w-full h-full justify-center '>
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
        </section>
    )
}

export default PromoSection
