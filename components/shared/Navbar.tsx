"use client"

import React, { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { contactsButton } from "@/constant"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiArrowUpCircle } from "react-icons/fi"

const Navbar = () => {
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

    const path = usePathname()

    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme")
            return storedTheme !== null ? storedTheme : "dark"
        }
        return "dark" // Default theme for server-side rendering
    })
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [scrollToTopVisible, setScrollToTopVisible] = useState(false)
    const [visible, setVisible] = useState(true)
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset
        const isScrollingDown = prevScrollPos < currentScrollPos
        if (currentScrollPos <= 0) {
            // If at the top of the page, make the navbar always visible
            setVisible(true)
            setScrollToTopVisible(false)
        } else {
            setVisible(isScrollingDown)
            setScrollToTopVisible(currentScrollPos > 350)
        }
        setPrevScrollPos(currentScrollPos)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full lg:px-64 md:px-24 sm:px-16 pt-5 px-10 transition-transform duration-500 z-50 transform  ${
                    visible ? "translate-y-0" : "-translate-y-full"
                } z-10`}
            >
                <div className='backdrop-blur-sm dark:bg-dark-600/50 bg-gray-100/50 rounded-[20px] py-2 flex px-6 justify-between duration-1000 items-center shadow-lg shadow-black/25 dark:shadow-black/70'>
                    <Link href='/' className='max-md:p-2'>
                        <span className='font-conthrax lg:text-xl lg:p-3 select-none'>
                            ALAMSYAH.ID
                        </span>
                    </Link>
                    <div className='flex items-center justify-between gap-5 lg:gap-10'>
                        <div className='max-md:hidden flex lg:text-md'>
                            <div className='flex lg:gap-7 gap-5 items-start'>
                                {navButtons.map((nav, i) => (
                                    <Link
                                        href={nav.url}
                                        key={i}
                                        className={`${
                                            path === nav.url
                                                ? "font-black transition-transform duration-700"
                                                : ""
                                        } dark:text-gray-400 flex-col-reverse py-2 md:text-sm font-medium group`}
                                    >
                                        {nav.title}
                                        <div
                                            className={`${
                                                nav.LineColor
                                            } rounded-full w-full h-1 flex ${
                                                path === nav.url
                                                    ? "opacity-100"
                                                    : "opacity-0 group-hover:opacity-100"
                                            }`}
                                        />
                                    </Link>
                                ))}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className='dark:text-gray-400 flex items-center gap-1 py-2 md:text-sm font-medium group cursor-pointer'>
                                            Contact
                                            <MdOutlineKeyboardArrowDown className='text-xl' />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className='grid grid-cols-3 gap-1 overflow-hidden !p-0 shadow-lg rounded-xl bg-gray-100 bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#0d0d0d]/80 dark:from-[#181818] dark:from-15% dark:via-[#1f1f1f] via-30% dark:to-[#2c2c2c] to-90% '>
                                        {contactsButton.map((cont): any => (
                                            <Link
                                                href={cont.url}
                                                className='flex gap-2 dark:hover:bg-white/20 hover:bg-black/20 w-full p-3 justify-center items-center text-dark-800 dark:text-gray-300'
                                                key={cont.url}
                                                target='_blank'
                                            >
                                                {cont.icon}
                                            </Link>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-5'>
                            <button
                                onClick={handleThemeSwitch}
                                className='relative items-center justify-center p-2 transition-transform duration-500 max-md:dark:bg-white/10 md:bg-black/5 hover:dark:bg-white/10 hover:bg-black/5 rounded-full'
                            >
                                <BsSunFill className='absolute text-lg opacity-0 dark:opacity-100 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
                                <BsFillMoonStarsFill className='text-lg dark:opacity-0 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
                            </button>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </nav>
            {scrollToTopVisible && (
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className='fixed z-50 bottom-10 right-10 flex flex-col justify-center items-center transition-all duration-700'
                >
                    <div className='rounded-full bg-gray-100/30 dark:bg-dark-800/30 animate-scrolltop'>
                        <FiArrowUpCircle className='z-50 text-4xl text-black dark:text-white' />
                    </div>

                    <p className='text-xs'>Scroll Top</p>
                </button>
            )}
        </>
    )
}

export default Navbar
