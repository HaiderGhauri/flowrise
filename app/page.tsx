import { Card } from "./components/home/Card";
import { Features } from "./components/home/Features";
import { Gallery } from "./components/home/Gallery";
import { HeroSection } from "./components/home/Hero";
import { Testimonials } from "./components/home/Testimonials";

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
