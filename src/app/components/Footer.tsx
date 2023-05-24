import Image from "next/image"
import logo from '../../../public/logo.svg'
import Icons from "./Icons"

export default function Footer() {
    return (
        <footer className="mt-[600px] px-6 md:mt-[400px] lg:px-72">
            <Image 
                src={logo}
                alt="equalizer logo"
                className="mb-6"
            />
            <div className="flex justify-between">
                <p className="text-black text-base mb-6 w-1/2">
                    All rights reserved © Equalizer 2021
                    Have any problems? Contact us via social media 
                    or email us at <br /><span className="font-bold">equalizer@example.com</span>
                </p>
                <Icons />
            </div>
        </footer>
    )
}
