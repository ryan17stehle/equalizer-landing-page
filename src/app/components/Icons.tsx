import Image from "next/image"

export default function Icons() {
  return (
    <footer className="flex gap-4">
        <Image 
            src="/icon-facebook.svg" 
            alt="facebook icon"
            width={32}
            height={32}
        />
        <Image 
            src="/icon-instagram.svg" 
            alt="instagram icon"
            width={32}
            height={32}
        />
        <Image 
            src="/icon-twitter.svg" 
            alt="twitter icon"
            width={32}
            height={32}
        />
    </footer>
  )
}
