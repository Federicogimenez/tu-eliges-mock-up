import { Link } from "react-router-dom";
import SwiperCategories from "../components/SwiperCategories";
import Header from "../layout/Header";
import SectionDiscounts from "../layout/SectionDiscounts";
import SectionVideo from "../layout/SectionVideo";
import AboutUs from "../layout/AboutUs";
import SectionBrands from "../layout/SectionBrands";
import SectionPrice from "../layout/SectionPrice";
import SectionApp from "../layout/SectionApp";
import Footer from "../layout/Footer";

export default function Home() {
    return (
            <div className="home">
                <Header />
                <SectionDiscounts />
                <SectionVideo />
                <SwiperCategories />
                <SectionBrands />
                <SectionPrice />
                <SectionApp />
                <AboutUs />
                <Footer />
                <br />
                <Link to="/thanks-you">Thanks You so much!</Link>
            </div>
    )
}
