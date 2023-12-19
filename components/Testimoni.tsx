import { Testi } from "@/constant"
import { Roboto } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const Testimoni = () => {
    return (
        <section id='#testimonial'>
            <h2
                className={`${roboto.className} flex w-full justify-center text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 bg-clip-text text-5xl md:text-5xl md:py-3 lg:text-6xl opacity-100 duration-700`}
            >
                &ldquo;TESTIMONIAL&rdquo;
            </h2>
            <p className='flex w-full justify-center'>Transfer and Feedback</p>
            <div className='columns-3 md:columns-4 lg:columns-6 my-10 gap-5 p-5 lg:gap-10 lg:p-10 w-full'>
                {Testi.map((testi, i) => (
                    <Image
                        key={i}
                        src={testi.picture}
                        alt='Testimonial Pictures'
                        width={500}
                        height={500}
                        className='rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 p-1 shadow-xl shadow-black/40 mb-5 lg:mb-10'
                    />
                ))}
            </div>
            <div className='flex w-full justify-center items-center'>
                <Link
                    href='https://whatsapp.com/channel/0029VaHhgea72WTsjGiBV12K'
                    target='_blank'
                    className='relative group w-fit h-fit duration-700 group mb-10'
                >
                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                    <div
                        className={`relative group-hover:scale-110 duration-500 text-lg border-white rounded-lg flex items-center justify-center py-2 px-6 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                    >
                        See More Testimonial
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Testimoni
