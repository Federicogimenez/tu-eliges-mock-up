import SwiperCategories from "../components/SwiperCategories";
import { useLanguageContext } from "../hooks/UseLanguageContext";

export default function SectionCategories() {
    const data = useLanguageContext();
  return (
    <div className="section-categories" id='categories'>
        <h4 className="section-categories__title">{ data["cat_title"] }</h4>
        <p className="section-categories__subtitle">{ data["cat_subtitle"] }</p>
        <SwiperCategories />
    </div>
  )
}
