import Zeta from "@/assets/download (1).png"
import Image from "next/image"
import Nlogo from "@/assets/Netflix-Logo-PNG-Transparent-Image.png"
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { IoHeart } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <main className="w-full h-dvh xl:h-[110dvh] flex xl:items-center items-end justify-center">
                <Image src={Zeta} alt="Zeta" className="w-full h-[110dvh] object-cover object-center absolute -z-[2]" />
                <div className="hidden xl:flex custom-gradient absolute -z-[1] h-[110dvh] w-full"></div>
                <div className="xl:hidden flex phone-gradient absolute -z-[1] h-dvh w-full"></div>
                <div className="gradint-5 absolute -z-[1] h-[110dvh] w-full"></div>

                <div className="xl:h-[55%] h-[65%] w-[90%] flex flex-col xl:items-start xl:mb-0 mb-12 items-center">
                    <h2 className="flex text-zinc-300 text-2xl gummy items-center ">
                        <Image src={Nlogo} alt="Logo" className="h-14 w-14 object-cover" />
                        Series
                    </h2>

                    <p className="xl:text-[11rem] text-9xl text-white gummy xl:leading-[9rem] font-thin">AL.</p>
                    <p className="text-zinc-300 mt-6 font-semibold text-xl">#1 in Netflix</p>
                    <p className="text-zinc-300 xl:w-2/5 w-full xl:text-start text-center mt-2">Cosplayer yang menjiwai karakter favoritnya dengan kostum keren dan totalitas. Menggabungkan seni, hobi, dan imajinasi untuk menghidupkan dunia fandom dengan gaya unik nya.</p>

                    <div className="w-96 h-20 flex items-center gap-5 xl:justify-start justify-center">
                        <div className="bg-white w-36 h-10 rounded-md flex items-center text-lg font-semibold cursor-pointer justify-center">
                            <FaPlay className="text-xl mr-2" /> Play
                        </div>
                        <div className="bg-white w-36 h-10 rounded-md bg-opacity-20 backdrop-blur flex text-base items-center text-white cursor-pointer justify-center">
                            <FiInfo className="text-xl mr-2" /> More Info
                        </div>
                    </div>

                    <div className="w-fit h-fit text-white gap-8 pt-4 xl:hidden flex">
                        <Link href={'https://www.instagram.com/gawrrra/'} target="_blank" className="flex items-center justify-center gap-2 p-4 border-2 rounded-full border-white">
                            <AiFillInstagram className="text-xl" />
                        </Link>
                        <Link href={'https://trakteer.id/gawrrra/'} target="_blank" className="flex items-center justify-center gap-2 p-4 border-2 rounded-full border-white">
                            <IoHeart className="text-xl" />
                        </Link>
                        <Link href={'https://www.tiktok.com/@gawrrra?_t=8nxeloWxFk0&_r=1'} target="_blank" className="flex items-center justify-center gap-2 p-4 border-2 rounded-full border-white">
                            <SiTiktok className="text-xl" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}