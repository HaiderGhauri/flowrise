import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-6 lg:py-16">
        <Container className="grid items-center justify-items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-4 md:mb-8">
            Productivity that flows <br /> with your life.
            </h1>

            <p className="text-2xl max-w-md mb-4 md:mb-8 leading-10 text-slate-700">
            Unleash your potential by harmonizing your daily tasks and habits with your unique energy rhythms.
            </p>

            <Link href={"/"} className="bg-cyan-700 hover:bg-cyan-800 transition-colors ease-in-out text-white tracking-wide rounded-full px-12 py-3 font-bold mb-8 md:mb-10">Try for free</Link>

            <Image className="max-w-4xl w-full drop-shadow-lg rounded-xl"
            alt="Hero Image"
            height={800}
            width={1100}
            src={"/Hero Image.avif"}
            />
        </Container>
    </section>
  )
}