import { Roboto } from "next/font/google"
import CountdownTimer from "./CountdownTimer"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const PromoSection = () => {
    const targetDate = "2023-11-30T00:00:00"
    return (
        <section id='promo' className='flex flex-col py-10 h-fit'>
            <div className='flex justify-center flex-col md:flex-row lg:flex-row items-start '>
                <div className='flex items-center flex-col w-full h-64 max-h-full justify-center '>
                    <div className='flex justify-center items-center w-full duration-700'>
                        <h1
                            className={`${roboto.className} text-[85px] lg:text-[150px] absolute opacity-10 duration-700`}
                        >
                            PROMO
                        </h1>
                        <h2
                            className={`${roboto.className} text-fuchsia-500 text-5xl md:text-5xl md:py-3 lg:text-6xl opacity-100 duration-700 z-10`}
                        >
                            &ldquo;For Reseller&rdquo;
                        </h2>
                    </div>
                    <h2 className='font-black text-lg md:text-xl lg:text-2xl lg:pt-5'>
                        Netflix Private Hanya 99k/Akun
                    </h2>
                    <p className='font-light text-gray-600 dark:text-gray-400 md:text-lg '>
                        Minimum Pembelian 2 Akun Per Transaksi
                    </p>
                </div>
                <div className='flex items-end w-full h-full justify-center '>
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
        </section>
    )
}

export default PromoSection
