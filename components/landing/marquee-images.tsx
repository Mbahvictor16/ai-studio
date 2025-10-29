import Marquee from "react-fast-marquee"
import Image from "next/image"

import aiRandom1 from "../../public/img/ai-image-a4uyya3jeu1l7ln4e3wxjvpq.jpg"
import aiRandom2 from "../../public/img/ai-image-d5v6avfse4vitvh2jlfl9no6.jpg"
import aiRandom3 from "../../public/img/ai-image-fjorlfe5f20l7c28sngp8tky.jpg"
import aiRandom4 from "../../public/img/ai-image-fn8719k9g4x5vn71ai9p2vm7.jpg"
import aiRandom5 from "../../public/img/ai-image-iafgvrv5ty9m0iixwh4ejenn.jpg"
import aiRandom6 from "../../public/img/ai-image-ie12k3vidjgt8gk2xbbqospd.jpg"
import aiRandom7 from "../../public/img/ai-image-kvn9r1sr0ujn9ebwwj3ubfon.jpg"
import aiRandom8 from "../../public/img/ai-image-lvo7kqhm31963iit77sqj9ud.jpg"
import aiRandom9 from "../../public/img/ai-image-mn3pbuuic2bjue4mice02kaz.jpg"
import aiRandom10 from "../../public/img/ai-image-nf09vvowe5gxwwn9ao6b0hph.jpg"
import aiRandom11 from "../../public/img/ai-image-piylvrfp6djyb6lsib6hq9g5.jpg"
import aiRandom12 from "../../public/img/ai-image-r8xzcpf37djz9p2zfavyo88r.jpg"
import aiRandom13 from "../../public/img/ai-image-rkxqwjn92peqxgm9eqenqygp.jpg"
import aiRandom14 from "../../public/img/ai-image-s99ao7l6ou49gpujszpoq8hc.jpg"
import aiRandom15 from "../../public/img/ai-image-tewl2dn5yi4xkimem6fpuouh.jpg"
import aiRandom16 from "../../public/img/ai-image-ugx0vhogq7w1gbxk6bcc8sxj.jpg"
import aiRandom17 from "../../public/img/ai-image-vtbe5wpg2l5d7579hrc56br9.jpg"
import aiRandom18 from "../../public/img/ai-image-x7lnpmepk6d9jsyp9b6jazpn.jpg"
import aiRandom19 from "../../public/img/ai-image-xsjuhofyto0wmqg8ausayb37.jpg"

export function MarqueeImages() {
    return (
        <div className="mt-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight gradient-text text-center">Photo Gallery</h1>
            <Marquee autoFill>
                <Image src={aiRandom1} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom2} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom3} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom4} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom5} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom6} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom7} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom8} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom9} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom10} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
            </Marquee>
            <Marquee direction="right" className="mt-4" autoFill>
                <Image src={aiRandom11} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom12} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom13} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom14} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom15} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom16} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom17} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom18} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
                <Image src={aiRandom19} height={200} width={200} alt="" className="rounded-lg mr-4 object-cover lg:w-[300px] lg:h-[300px]"/>
            </Marquee>
        </div>
    )
}