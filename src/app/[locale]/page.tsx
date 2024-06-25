import AboutUs from "../blocks/AboutUs";
import AboutUsSecondPart from "../blocks/AboutUsSecondPart";
import Convenience from "../blocks/Convenience";
import FormSection from "../blocks/FormSection";
import HaveQuestions from "../blocks/HaveQuestions";
import Hero from "../blocks/Hero";
import JoinUs from "../blocks/JoinUs";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AboutUsSecondPart />
      <Convenience />
      <JoinUs />
      <FormSection />
      <HaveQuestions />
      <Footer />
    </div>
  );
}
