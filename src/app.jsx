import Navbar from "./components/navbar"
import Hero from "./components/hero"
import ProductViewer from "./components/ProductViewer"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Feature from "./components/Feature"
import Highlights from "./components/Highlights"
import Footer from "./components/footer"




import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Feature />
            <Highlights />
            <Footer />
        </main>
    )
}

export default app