import Image from "next/image"
import appImg from '../../../public/illustration-app.png'
import bgShapes2 from '../../../public/bg-pattern-2.svg'
import apple from '../../../public/icon-apple.svg'
import android from '../../../public/icon-android.svg'

export default function Main() {
    return (
        <main className="relative grid place-items-center bg-black rounded-[12px] md:max-lg:w-11/12 md:mx-auto lg:w-4/6">
            <Image
                src={appImg}
                alt="a phone with the equalizer application open"
                width={210}
                height={430}
                className="absolute -top-20 md:left-28"
            />
            <Image
                src={bgShapes2}
                alt="background phonto of various shapes"
                className=""
            />
            <section 
            className=" bg-red-orange w-full absolute top-[420px] 
            grid px-6 py-12 gap-6 rounded-[12px] md:w-[400px] md:top-[160px] md:right-28"
            >
                <h2 className="text-offwhite text-lg font-bold">Premium EQ</h2>
                <p className="text-offwhite text-base">Get expert-level control with a robust equalizer, 
                    volume mixer, and spatial audio. Take your listening
                    experience to a whole new level and access all our
                    incredible features!
                </p>
                <p className="text-offwhite text-base">
                    <span className="text-xl font-bold">$4</span>
                    / month
                </p>
                <button className="flex justify-center items-center gap-2 bg-black py-4 rounded-[12px]">
                    <Image
                        src={apple}
                        alt="iOS icon"
                    />
                    <p className="text-offwhite text-med">iOS Download</p>
                </button>
                <button className="flex justify-center items-center gap-2 bg-offwhite py-4 rounded-[12px]">
                    <Image
                        src={android}
                        alt="android icon"
                    />
                    <p className="text-black text-med">Android Download</p>
                </button>
            </section>
        </main>
    )
}
