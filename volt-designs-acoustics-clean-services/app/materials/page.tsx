// app/materials/page.tsx
import Link from "next/link";
import Image from "next/image";
import { MATERIALS } from "@/lib/materials";

export const metadata = {
  title: "Materials",
  description: "Browse acoustic and façade materials.",
};

export default function MaterialsPage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold">Materials</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {MATERIALS.map((mat) => (
          <Link
            key={mat.slug}
            href={`/materials/${mat.slug}`}
            className="rounded-2xl shadow p-4 hover:shadow-md transition"
          >
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              {mat.image ? (
                <Image
                  src={mat.image}
                  alt={mat.name}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              ) : null}
            </div>
            <h2 className="mt-3 text-lg font-medium">{mat.name}</h2>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {mat.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
