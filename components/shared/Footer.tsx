import { contactsButton } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <footer className='flex justify-center items-center px-24 py-5 border-t-[1px] border-black/30 dark:border-white/30 bg-gray-100 dark:bg-dark-600 drop-shadow-md'>
            <div className='flex w-full justify-center md:justify-between lg:justify-between items-center flex-col md:flex-row lg:flex-row gap-2'>
                <Link href='/' className='flex items-center  justify-start '>
                    <Image
                        width={60}
                        height={60}
                        src='/images/AFooterDark.png'
                        alt='Footer Picture'
                        className='hidden dark:block duration-700'
                    />
                    <Image
                        width={60}
                        height={60}
                        src='/images/AFooterLight.png'
                        alt='Footer Picture'
                        className='dark:hidden duration-700'
                    />
                    <span className='px-2'>
                        <p className='text-xs font-conthrax'>
                            &copy; 2023 ALAMSYAH.ID
                        </p>
                        <p className='text-xs font-extralight'>
                            USE YOUR YOUTH FOR THE FUTURE
                        </p>
                    </span>
                </Link>
                <div className='flex gap-2 justify-start'>
                    {contactsButton.map((cont) => (
                        <Link
                            href={cont.url}
                            className='p-3 opacity-70 md:hover:bg-black/5 lg:hover:bg-black/5 dark:md:hover:bg-white/10 dark:lg:hover:bg-white/10 rounded-md'
                            key={cont.url}
                        >
                            {cont.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
