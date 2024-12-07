import Link from "next/link"
import { IoHeart } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
    return (
        <>
            <div className="xl:h-14 h-fit bg-black xl:flex hidden xl:flex-row flex-col items-center justify-center xl:gap-12 gap-3 text-center text-zinc-300 font-semibold xl:pb-0 pb-7">
                <Link href={'https://www.instagram.com/gawrrra/'} target="_blank" className="flex items-center justify-center gap-2">
                    <AiFillInstagram className="text-xl" />
                    @gawrrra
                </Link>
                <Link href={'https://trakteer.id/gawrrra/'} target="_blank" className="flex items-center justify-center gap-2">
                    <IoHeart className="text-xl" />
                    Trakteer😋
                </Link>
                <Link href={'https://www.tiktok.com/@gawrrra?_t=8nxeloWxFk0&_r=1'} target="_blank" className="flex items-center justify-center gap-2">
                    <SiTiktok className="text-xl"/>
                    @gawrrra
                </Link>
            </div>
        </>
    )
}