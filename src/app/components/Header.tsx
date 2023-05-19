import Image from "next/image"
import logo from '../../../public/logo.svg'
import bgMobile from "../../../public/bg-main-mobile.png"

export default function Header() {
    return (
        <section>
            <Image 
                src={bgMobile}
                alt="blurred background colors"
                className="absolute border-2 border-red-orange -top-40 -right-40"
            />
            <Image 
                src={logo}
                alt="equalizer logo"
                className=" mb-16"
            />
            <h1 className="text-lg font-bold tracking-tight text-black mb-5">
                We make your music sound extraordinary.
            </h1>
            <p className=" text-base text-black mb-16">
                A system audio equalizer specifically designed for Android and iOS. 
                Freely tune the way your music sounds with a professional grade 
                parametric EQ & volume mixer. Control bass, mids, treble, gain 
                control, reverb, and more!
            </p>
        </section>
    )
}
