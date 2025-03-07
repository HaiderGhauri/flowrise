import Image from "next/image";
import { Container } from "./Container";

export function Gallery() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-6 lg:py-16">

      <Container>

        <div className="text-slate-600 grid gap-20 md:gap-26">

          <div className="grid place-items-center md:grid-cols-2 gap-8">

            <Image
              className="rounded-2xl"
              src="https://images.prismic.io/flowrise-prismic/97b37f0c-388e-4f8a-afd6-62884ca000fb_image+20.png?auto=format%2Ccompress&fit=max&w=640"
              width={560}
              height={600}
              alt="data Image"
              loading="lazy"
            />
            <div className="">
              <p className="text-4xl md:text-5xl font-bold text-slate-700 mb-4 tracking-tight">
                Harmonize your schedule
              </p>
              <p className="max-w-md text-lg">
                Align tasks with your natural energy rhythms. Embrace tailored
                productivity.
              </p>
            </div>

          </div>

          <div className="grid place-items-center md:grid-cols-2 gap-8 grid-flow-dense">

            <div className="md:order-none order-2">
              <p className="text-4xl md:text-5xl font-bold text-slate-700 mb-4 tracking-tight">
              Mindful task tracking
              </p>
              <p className="max-w-md text-lg">
              Blend productivity with mindfulness. Understand your patterns, enhance focus.
              </p>
            </div>

            <Image
              className="rounded-2xl"
              src="https://images.prismic.io/flowrise-prismic/70a50fe1-1bc6-4dad-b271-c78b3260f3a4_image+16.png?auto=compress%2Cformat&fit=max&w=640"
              width={560}
              height={600}
              alt="data Image"
              loading="lazy"
            />

          </div>

          <div className="grid place-items-center md:grid-cols-2 gap-8">

            <Image
              className="rounded-2xl"
              src="https://images.prismic.io/flowrise-prismic/f1d3a3ad-29df-405f-a26d-5f1e578888ae_image+17.png?auto=compress%2Cformat&fit=max&w=640"
              width={560}
              height={600}
              alt="data Image"
              loading="lazy"
            />
            <div>
              <p className="text-4xl md:text-5xl font-bold text-slate-700 mb-4 tracking-tight">
              Productivity and self care
              </p>
              <p className="max-w-md text-lg">
              Beyond task completion. Embrace self-care routines, foster a healthier lifestyle.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
