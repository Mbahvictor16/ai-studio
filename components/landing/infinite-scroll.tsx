import Marquee from "react-fast-marquee"

import klingAI from "../../public/svg/kling-1.6.svg"
import elevenLabs from "../../public/svg/elevenlabs.svg"
import imagen3 from "../../public/svg/imagen-3.svg"
import leonardoAI from "../../public/svg/leonardo-logo-white-fix.svg"
import Image from "next/image";

export function InfiniteScroll() {
    return (
        <div className="w-full mt-40">
            <Marquee direction="right" className="mb-4" autoFill>
                <Image src={klingAI} width={300} height={150} alt="kling-1.6"  className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={elevenLabs} width={300} height={150} alt="Eleven Labs" className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={imagen3} width={300} height={150} alt="Imagen 3" className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={leonardoAI} width={300} height={150} alt="Imagen 3" className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
            </Marquee>

            <Marquee autoFill>
                <Image src={leonardoAI} width={300} height={150} alt="Imagen 3" className="mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={imagen3} width={300} height={150} alt="Imagen 3" className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={elevenLabs} width={300} height={150} alt="Eleven Labs" className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
                <Image src={klingAI} width={300} height={150} alt="kling-1.6"  className="mr-10 md:mr-20 lg:mr-40 h-20 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 object-contain"/>
            </Marquee>
        </div>
    )
}