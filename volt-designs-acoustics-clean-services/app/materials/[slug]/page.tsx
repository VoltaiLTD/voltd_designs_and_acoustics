import { notFound } from "next/navigation";
import { MATERIALS } from "../_data";

export default function MaterialPage({ params }: { params: { slug: string } }) {
  const mat = MATERIALS.find((m) => m.slug === params.slug);
  if (!mat) return notFound();

  return (
    <section className="section container">
      <h1>{mat.name}</h1>
      <p className="text-white/70 mt-2 max-w-2xl">{mat.description}</p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-6">
        {mat.images.map((src, idx) => (
          <div
            key={idx}
            className="w-full h-40 rounded-md overflow-hidden bg-black/20"
          >
            <img
              src={src}
              alt={`${mat.name} ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
