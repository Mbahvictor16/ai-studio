import Link from "next/link";
import Image from "next/image"

import fullLogo from '../public/Butterfly_full_logo-nobg.png'

export function FullLogo() {
    return (
        <div>
            <Link href={'/'}>
              <Image src={fullLogo} height={64} width={128} alt="Butterfly Logo"/>
            </Link>
        </div>
    )
}