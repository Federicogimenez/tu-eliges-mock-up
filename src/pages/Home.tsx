import Header from "../layout/Header";
import SectionDiscounts from "../layout/SectionDiscounts";
import SectionVideo from "../layout/SectionVideo";
import AboutUs from "../layout/AboutUs";
import SectionBrands from "../layout/SectionBrands";
import SectionPrice from "../layout/SectionPrice";
import SectionApp from "../layout/SectionApp";
import Footer from "../layout/Footer";
import {  LanguageProvider } from "../context/Language";
import SectionCategories from "../layout/SectionCategories";
import { AlliedModalProvider } from "../context/AlliedModalProvider";
import AlliedModal from "../components/AlliedModal";


export default function Home() {
    return (
            <div className="home">
                <LanguageProvider>
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
                </LanguageProvider>
            </div>
    )
}
