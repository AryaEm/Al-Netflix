'use client'

import { useState } from "react";
import Image from "next/image";
import Netflix from "@/assets/Netflix-logo.png";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

export default function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav className="fixed z-[999] bg-gradient-to-b from-black to-transparent xl:h-20 h-24 w-full">
            {/* Burger Menu */}
            <div
                onClick={toggleNav}
                className="xl:hidden fixed z-[999] h-14 w-14 right-5 top-5 flex items-center justify-center gap-2 flex-col cursor-pointer"
            >
                <div className="h-1 w-[60%] bg-white rounded-sm"></div>
                <div className="h-1 w-[60%] bg-white rounded-sm"></div>
                <div className="h-1 w-[60%] bg-white rounded-sm"></div>
            </div>

            {/* Logo */}
            <div className="flex absolute items-center w-fit h-full xl:ml-20 ml-7">
                <Image
                    src={Netflix}
                    alt="Netflix logo"
                    width={128}
                    height={64}
                    className="object-cover"
                />
            </div>

            {/* Navbar Desktop */}
            <div className="hidden xl:flex absolute z-[800] xl:h-full text-zinc-100 ml-64 gap-8 items-center">
                <Link href="/" className="text-white font-semibold">Home</Link>
                <Link href="/">TV Shows</Link>
                <Link href="/">Movies</Link>
                <Link href="/">News & Popular</Link>
                <Link href="/">My List</Link>
            </div>

            {/* Navbar Mobile */}
            <div
                className={`xl:hidden fixed z-[800] text-zinc-100 flex flex-col gap-8 items-end bg-zinc-900 h-screen right-0 w-[60%] pt-28 pr-8 transform transition-transform duration-500 ${
                    isNavVisible ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <Link href="/" className="text-white font-semibold">Home</Link>
                <Link href="/">TV Shows</Link>
                <Link href="/">Movies</Link>
                <Link href="/">News & Popular</Link>
                <Link href="/">My List</Link>
            </div>
        </nav>
    );
}
