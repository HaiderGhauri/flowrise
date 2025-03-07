import Image from "next/image";
import { Container } from "./Container";

export function Testimonials() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-6 lg:py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-10 text-center">
          What our users say
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 text-slate-600">
          {users.map((user) => (
            <div className="bg-white border border-gray-200 shadow-lg py-10 px-8 md:py-16 md:px-14 rounded-xl"
            key={user.id}>
              <p className="text-xl md:text-2xl mb-8">{`"${user.message}"`}</p>

              <div className="flex  gap-4">
                <Image
                  className="rounded-full"
                  src={user.avatar}
                  width={50}
                  height={50}
                  alt="User Image"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const users = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum labore maiores, dicta aliquam error ut mollitia doloribus sequi quia dolores! Tempore fugit hic earum laudantium!",
    avatar: "https://i.pravatar.cc/300?u=iu",
    name: "Jhon M.",
    role: "UX Designer",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum labore maiores, dicta aliquam error ut mollitia doloribus sequi quia dolores! Tempore fugit hic earum laudantium!",
    avatar: "https://bit.ly/dan-abramov",
    name: "Mark J.",
    role: "UX Designer",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum labore maiores, dicta aliquam error ut mollitia doloribus sequi quia dolores! Tempore fugit hic earum laudantium!",
    avatar: "https://i.pravatar.cc/300?u=po",
    name: "Melissa R.",
    role: "App Developer",
  },
];
