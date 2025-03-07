import React from "react";
import { Container } from "../components/Container";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-6 lg:py-16">
      <Container className="grid place-items-center md:grid-cols-2">
        <div className="grid">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-4 md:mb-8">
            About the Flowrise team
          </h1>

          <p className="text-2xl max-w-md mb-4 md:mb-8 leading-10 text-slate-700">
            We’ve been seeking our own inner focus for over 8 years. We’re a
            passionate team trying to make the world a better place.
          </p>
          <Link
            href={"/"}
            className="bg-cyan-700 hover:bg-cyan-800 transition-colors ease-in-out text-white tracking-wide rounded-full px-12 py-3 font-bold mb-8 md:mb-10 w-fit"
          >
            Join us!
          </Link>
        </div>

        <Image
          className="max-w-4xl w-full drop-shadow-lg"
          alt="Hero Image"
          height={500}
          width={650}
          src={
            "https://images.prismic.io/flowrise-prismic/9bae64f0-a765-4d87-b201-8110082df860_image+18.png?auto=compress%2Cformat&fit=max&w=1080"
          }
        />
      </Container>
    </section>
  );
}

export default About;
