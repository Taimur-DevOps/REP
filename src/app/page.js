
import Banner from "./components/Banner";
import Filters from "./components/Filters";
import AboutUsSection from "./components/AboutUsSection";
import DhaPhases from "./components/DhaPhases";
import Services from "./components/Services";
import Categories from "./components/Categories";
import KeepInTouch from "./components/KeepInTouch";
import FeaturedCarousel from "./components/FeaturedCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <Filters />
      <FeaturedCarousel />
      <Categories />
      <Services />
      <DhaPhases />
      <AboutUsSection />
      <KeepInTouch />
    </>
  );
}
