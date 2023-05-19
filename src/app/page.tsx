import Icons from "./components/Icons"
import Header from "./components/Header"
import Main from './components/Main'

export default function Home() {
    return (
      <main className="px-6 py-12">
        <Header />
        <Main />
        <Icons />
      </main>
    )
}
