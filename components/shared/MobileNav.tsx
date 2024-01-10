import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { contactsButton } from "@/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiOutlineMenu } from "react-icons/ai"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const NavContent = () => {
    const navButtons = [
        {
            title: "Home",
            url: "/",
            LineColor: "bg-fuchsia-500",
        },
        {
            title: "Products",
            url: "/products",
            LineColor: "bg-purple-500",
        },
        {
            title: "Accounts",
            url: "/accounts",
            LineColor: "bg-sky-500",
        },
    ]

    const pathname = usePathname()
    return (
        <nav className='flex h-screen w-full flex-col pt-10 pb-20 justify-between'>
            <div>
                {navButtons.map((nav) => {
                    const isActivate =
                        (pathname.includes(nav.url) && nav.url.length > 1) ||
                        pathname === nav.url
                    return (
                        <SheetClose asChild key={nav.url} className='flex'>
                            <div className='flex items-start '>
                                <Link
                                    href={nav.url}
                                    className='flex gap-2 text-lg w-full p-4 my-4'
                                >
                                    <div
                                        className={`rounded-full w-1 h-full text-transparent ${
                                            pathname === nav.url
                                                ? nav.LineColor
                                                : ""
                                        }`}
                                    >
                                        .
                                    </div>
                                    <p
                                        className={`${
                                            isActivate
                                                ? "font-conthrax"
                                                : roboto.className
                                        }`}
                                    >
                                        {nav.title}
                                    </p>
                                </Link>
                            </div>
                        </SheetClose>
                    )
                })}
            </div>

            <div className='grid grid-rows-2 grid-flow-col gap-3 pb-16  justify-evenly py-4'>
                {contactsButton.map((cont) => (
                    <Link
                        href={cont.url}
                        target='_blank'
                        className='flex gap-2 w-full py-3'
                        key={cont.url}
                    >
                        {cont.icon}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

const MobileNav = () => {
    return (
        // @ts-ignore
        <Sheet className='transition-transform duration-500 '>
            <SheetTrigger className='hidden max-md:flex dark:bg-white/10 bg-black/5 rounded-full p-2'>
                <AiOutlineMenu className='duration-500 text-dark-800 dark:text-gray-300' />
            </SheetTrigger>
            <SheetContent
                side='left'
                className='border-none text-red-500 backdrop-blur-lg dark:bg-dark-800/50 shadow-lg shadow-black/50'
            >
                <Link
                    href='/'
                    className='flex items-center gap-1 border-b-[1px] border-dark-500/50 dark:border-gray-500/50 py-2'
                >
                    <p className='font-conthrax text-lg text-dark-800 dark:text-gray-300'>
                        ALAMSYAH.ID
                    </p>
                </Link>
                <div className='text-dark-800 dark:text-gray-300'>
                    <NavContent />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
