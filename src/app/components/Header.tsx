import Image from "next/image"
import logo from '../../../public/logo.svg'
import bgShapes from '../../../public/bg-pattern-1.svg'


export default function Header() {
    return (
        <header className="mx-6 mt-12 relative lg:px-72">
            <Image 
                src={logo}
                alt="equalizer logo"
                className="mb-16"
            />
            <Image 
                src={bgShapes}
                alt="background image of various shapes"
                className="hidden absolute -top-20 -right-10 md:block"
            />
            <h1 className="text-lg font-bold tracking-tight text-black mb-5 md:w-3/6">
                We make your music sound extraordinary.
            </h1>
            <p className=" text-base text-black mb-60 md:w-3/6">
                A system audio equalizer specifically designed for Android and iOS. 
                Freely tune the way your music sounds with a professional grade 
                parametric EQ & volume mixer. Control bass, mids, treble, gain 
                control, reverb, and more!
            </p>
        </header>
    )
}
