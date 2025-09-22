import { notFound } from "next/navigation";
import { MATERIALS } from "../_data";

export default function MaterialDetail({ params }: { params: { slug: string } }) {
  const mat = MATERIALS.find((m) => m.slug === params.slug);
  if (!mat) return notFound();

  return (
    <section className="section container">
      <h1>{mat.name}</h1>
      <p className="text-white/70 mt-2 max-w-2xl">{mat.description}</p>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {mat.variations.map((v) => (
          <div
            key={v.color}
            className="card flex flex-col items-center justify-center text-center p-4"
          >
            <div
              className="w-20 h-20 rounded-full border border-white/20 mb-3"
              style={{ backgroundColor: v.hex }}
            />
            <h4 className="font-semibold text-sm">{v.color}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
