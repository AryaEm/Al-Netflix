import Image from "next/image";
import zeta1 from "@/assets/zeta1.png";
import zeta3 from "@/assets/zeta3.png";
import zeta4 from "@/assets/zeta4.png";
import zeta5 from "@/assets/zeta5.png";
import zeta6 from "@/assets/zeta6.png";
import zeta7 from "@/assets/zeta7.png";
import laplus1 from "@/assets/laplus1.png";
import laplus2 from "@/assets/laplus2.png";
import laplus3 from "@/assets/laplus3.png";
import laplus4 from "@/assets/laplus4.png";
import laplus5 from "@/assets/laplus5.png";

export default function Content() {
    return (
        <>
            <div className="h-fit w-full bg-black flex flex-col items-end pb-10">
                <div className="w-[95%] text-zinc-100">
                    <h2 className="text-2xl font-medium">Zeta</h2>

                    <div className="my-4 overflow-x-scroll scrollbar">
                        <div className="flex gap-4 flex-nowrap">
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta1} alt="Zeta " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta3} alt="Zeta " className="object-cover rounded-md object-top w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta4} alt="Zeta " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta5} alt="Zeta " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta6} alt="Zeta " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={zeta7} alt="Zeta " className="object-cover rounded-md w-full h-full" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-[95%] text-zinc-100">
                    <h2 className="text-2xl font-medium">Laplus</h2>

                    <div className="my-4 overflow-x-scroll scrollbar">
                        <div className="flex gap-4 flex-nowrap">
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={laplus1} alt="Laplus " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={laplus2} alt="Laplus " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={laplus3} alt="Laplus " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={laplus4} alt="Laplus " className="object-cover rounded-md w-full h-full" />
                            </div>
                            <div className="h-48 w-80 rounded-md flex-shrink-0">
                                <Image src={laplus5} alt="Laplus " className="object-cover rounded-md w-full h-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}