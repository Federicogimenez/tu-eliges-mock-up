import AlliedModal from "../components/AlliedModal"
import { AlliedModalProvider } from "../context/AlliedModalProvider"
import AboutUs from "../layout/AboutUs"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import SectionApp from "../layout/SectionApp"
import SectionBrands from "../layout/SectionBrands"
import SectionCategories from "../layout/SectionCategories"
import SectionDiscounts from "../layout/SectionDiscounts"
import SectionPrice from "../layout/SectionPrice"
import SectionVideo from "../layout/SectionVideo"

import usePageViewTracking from "../hooks/usePageViewTracking"


export default function Home() {
    
    usePageViewTracking()

    return (
            <div className="home">
                <AlliedModalProvider>
                    <AlliedModal />
                </AlliedModalProvider>
                <Header />
                <SectionVideo />
                <SectionDiscounts />
                <SectionCategories />
                <SectionBrands />
                <SectionPrice />
                <SectionApp />
                <AboutUs />
                <Footer />
            </div>
    )
}
