import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import CtaOne from "@/components/home/cta";
import Hero from "@/components/home/hero";
import ImageGallery from "@/components/home/image-gallery";
import Services from "@/components/home/services";
import Team from "@/components/home/team";
import CtaTwo from "@/components/home/cta-two";
import MissionVision from "@/components/home/mission-vision";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <CtaOne />
      <Team />
      <ImageGallery />
      <CtaTwo />
      <Contact />
    </div>
  );
}
