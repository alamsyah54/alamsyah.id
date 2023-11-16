import Image from "next/image"
import { PiCaretDoubleDown } from "react-icons/pi"

const PromoSection = () => {
    return (
        <section id='promo' className='flex flex-col lg:p-24 p-10 h-screen '>
            <div className='w-full flex justify-center '>
                <PiCaretDoubleDown className='animate-bounce duration-700 text-3xl opacity-60 -mt-12 z-10 md:-mt-48 lg:-mt-56 ' />
            </div>
            <div className='flex justify-center items-start'>
                <div className='flex items-start w-full h-full justify-start '>
                    <Image
                        src='/images/PROMO.png'
                        width={750}
                        height={500}
                        alt='PROMO'
                        className=''
                    />
                </div>
                <div className='flex items-center w-full h-full justify-center '>
                    asdads
                </div>
            </div>
        </section>
    )
}

export default PromoSection
