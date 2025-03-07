import { Card } from "./components/Card";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { HeroSection } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Testimonials/>
    <Features />
    <Gallery />
    <Card />
    </>

  );
}
