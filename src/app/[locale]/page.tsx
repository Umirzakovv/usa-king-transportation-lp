import AboutUs from "../components/Main/AboutUs";
import AboutUsSecondPart from "../components/Main/AboutUsSecondPart";
import Hero from "../components/Main/Hero";
import SwiperBlock from "../components/Main/Swiper";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AboutUsSecondPart />
      <SwiperBlock />
    </div>
  );
}
