import { BsTwitterX } from "react-icons/bs"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"

export const contactsButton = [
    {
        url: "https://api.whatsapp.com/send?phone=6285172010009&text=Halo%20bang%20saya%20mau%20Order%20Netflixnya",
        title: "085172010009",
        icon: (
            <FaWhatsapp className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
    {
        url: "https://www.facebook.com/alamsyah0054",
        title: "ASEP JUALAN KEMBALI",
        icon: (
            <FaFacebookF className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
    {
        url: "https://www.facebook.com/messages/t/100029480103950",
        title: "ASEP JUALAN KEMBALI",
        icon: (
            <RiMessengerLine className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
    {
        url: "https://chat.whatsapp.com/Fo93LGwQxZjHvOf38msWTD",
        title: "Whatsapp Group",
        icon: (
            <AiOutlineUsergroupAdd className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
    {
        url: "https://www.instagram.com/_alamsyah.id/",
        title: "@_alamsyah.id",
        icon: (
            <FaInstagram className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
    {
        url: "https://twitter.com/alamsyah0322",
        title: "@alamsyah0322",
        icon: (
            <BsTwitterX className='text-dark-700 dark:text-gray-200 text-lg duration-700 m-1' />
        ),
    },
]
