import Image from "next/image"
import appImg from '../../../public/illustration-app.png'
import bgShapes from '../../../public/bg-pattern-1.svg'
import bgShapes2 from '../../../public/bg-pattern-2.svg'

export default function Main() {
    return (
        <section>
            <Image
                src={appImg}
                alt="a phone with the equalizer application open"
            />
            <Image
                src={bgShapes}
                alt="background phonto of various shapes"
                className=" rotate-180 "
            />
            <Image
                src={bgShapes2}
                alt="background phonto of various shapes"
                className=""
            />
        </section>
    )
}
