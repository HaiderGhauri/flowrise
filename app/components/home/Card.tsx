import Link from "next/link";
import { Container } from "./Container";

export function Card() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-6 lg:py-16">
      <Container>
        <div className="max-w-4xl m-auto grid place-items-center gap-4 bg-gradient-to-tr from-cyan-50 via-white to-green-50 shadow-lg rounded-lg p-10">
          <h2 className="text-slate-700 text-3xl font-bold">
            Unleash your inner productivity
          </h2>
          <p className="text-slate-600 mb-4">
            Sync your tasks and wellness to your unique rhythm.
          </p>
          <Link
            href={"/"}
            className="bg-cyan-700 hover:bg-cyan-800 transition-colors ease-in-out text-white tracking-wide rounded-full px-12 py-3 font-bold"
          >
            Try for free
          </Link>
        </div>
      </Container>
    </section>
  );
}
