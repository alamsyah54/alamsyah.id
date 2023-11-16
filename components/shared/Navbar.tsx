"use client"

import { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md"
import { contactsButton } from "@/constant"
import { RiArrowRightUpLine } from "react-icons/ri"

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
            title: "Testimoni",
            url: "/testimoni",
            LineColor: "bg-sky-500",
        },
    ]

    const path = usePathname()
    const [nav, setNav] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    const handleNav = () => {
        setNav((prev) => !prev)
    }
    const handleDropdown = () => {
        setDropdown((prev) => !prev)
    }

    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme")
            return storedTheme !== null ? storedTheme : "light"
        }
        return "light" // Default theme for server-side rendering
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
    const [visible, setVisible] = useState(true)
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset
        const isScrollingDown = prevScrollPos < currentScrollPos
        if (currentScrollPos <= 0) {
            // If at the top of the page, make the navbar always visible
            setVisible(true)
        } else {
            setVisible(isScrollingDown)
        }
        setPrevScrollPos(currentScrollPos)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    // lg:bg-red-500 md:bg-yellow-500 sm:bg-green-500
    return (
        <nav
            className={`fixed top-0 left-0 w-full lg:px-64 md:px-24 sm:px-16 pt-5 px-10 transition-transform duration-500 z-50 transform  ${
                visible ? "translate-y-0" : "-translate-y-full"
            } z-10`}
        >
            <div className='dark:bg-dark-600 bg-gray-100 rounded-2xl py-2 flex px-6 justify-between duration-1000 items-center shadow-lg shadow-black/25 dark:shadow-black/70'>
                <Link href='/' className='max-md:p-2'>
                    <h1 className='font-conthrax lg:text-xl lg:p-3 '>
                        ALAMSYAH.ID
                    </h1>
                </Link>
                <div className='flex items-center justify-between gap-5 lg:gap-10'>
                    <div className='max-md:hidden flex lg:text-md'>
                        <div className='flex lg:gap-10 gap-5'>
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
                                        } rounded-full w-full h-1 ${
                                            path === nav.url
                                                ? "flex"
                                                : "hidden group-hover:flex"
                                        }`}
                                    />
                                </Link>
                            ))}
                            <div
                                onClick={handleDropdown}
                                className={`flex items-center pb-3 duration-700 transition group dark:text-gray-400  py-2 md:text-sm font-medium cursor-pointer ${
                                    dropdown ? "font-black" : ""
                                }`}
                            >
                                Contact{" "}
                                {dropdown ? (
                                    <MdOutlineKeyboardArrowUp className='text-dark-700 dark:text-gray-200 text-lg duration-700' />
                                ) : (
                                    <MdOutlineKeyboardArrowDown className='text-dark-700 dark:text-gray-200 text-lg duration-700' />
                                )}
                                <div
                                    className={`top-5 mt-16  p-3  ${
                                        dropdown
                                            ? "md:absolute lg:absolute"
                                            : "md:hidden lg:hidden"
                                    } `}
                                >
                                    <div className='flex flex-col-reverse gap-1 py-3 bg-gray-100 shadow-lg rounded-xl bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#0d0d0d]/80 dark:from-[#181818] dark:from-15% dark:via-[#1f1f1f] via-30% dark:to-[#2c2c2c] to-90% '>
                                        {contactsButton.map((cont): any => (
                                            <Link
                                                href={cont.url}
                                                className='flex gap-2 hover:bg-white/20 w-full py-1 px-3'
                                                key={cont.title}
                                                target='_blank'
                                            >
                                                {cont.icon}
                                                {cont.title}
                                                <RiArrowRightUpLine className='text-sm opacity-50' />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
    )
}

export default Navbar
