"use client"

import { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"

const Navbar = () => {
    const navButtons = [
        {
            name: "Home",
            url: "/",
            LineColor: "bg-fuchsia-500",
        },
        {
            name: "Products",
            url: "/products",
            LineColor: "bg-purple-500",
        },
        {
            name: "Contact",
            url: "/contact",
            LineColor: "bg-sky-500",
        },
    ]

    const path = usePathname()
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav((prev) => !prev)
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
            className={`fixed top-0 left-0 w-full lg:px-64 md:px-24 sm:px-16 pt-5 px-10 border-t-8 lg:border-red-500 md:border-orange-500 sm:border-yellow-500 border-green-500 transition-transform duration-500 transform  ${
                visible ? "translate-y-0" : "-translate-y-full"
            } z-10`}
        >
            <div className='dark:bg-dark-600 bg-gray-100 rounded-2xl  flex px-5 justify-between duration-1000 items-center shadow-md shadow-black/30 dark:shadow-black/70'>
                <Link href='/' className='max-md:p-2'>
                    <h1 className='font-conthrax lg:text-xl py-3'>
                        ALAMSYAH.ID
                    </h1>
                </Link>
                <div className='flex items-center justify-between gap-10'>
                    <div className='max-md:hidden flex lg:text-md'>
                        <div className='flex gap-12'>
                            {navButtons.map((nav, i) => (
                                <Link
                                    href={nav.url}
                                    key={i}
                                    className={`${
                                        path === nav.url ? "font-conthrax" : ""
                                    } dark:text-gray-400 flex-col-reverse py-2 group`}
                                >
                                    {nav.name}
                                    <div
                                        className={`${
                                            nav.LineColor
                                        } rounded-full w-full h-1   ${
                                            path === nav.url
                                                ? "flex"
                                                : "hidden group-hover:flex"
                                        }`}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 md:gap-5 lg:gap-5'>
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
