// app/materials/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MATERIALS, getMaterial } from "@/lib/materials";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return MATERIALS.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const mat = getMaterial(params.slug);
  return {
    title: mat ? mat.name : "Material",
    description: mat?.description ?? "",
  };
}

export default function MaterialDetailPage({ params }: Props) {
  const mat = getMaterial(params.slug);
  if (!mat) notFound();

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          {mat.image ? (
            <Image
              src={mat.image}
              alt={mat.name}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority={false}
            />
          ) : null}
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{mat.name}</h1>
          <p className="mt-2 text-gray-700">{mat.description}</p>

          <h2 className="mt-6 mb-2 text-xl font-medium">Specifications</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full text-sm">
              <tbody>
                {Object.entries(mat.specs).map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-3 font-medium w-1/3">{k}</td>
                    <td className="py-2 px-3">{String(v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex gap-3">
            {mat.catalogueUrl ? (
              <Link
                href={mat.catalogueUrl}
                className="inline-flex items-center rounded-xl px-4 py-2 shadow hover:shadow-md border font-medium"
                prefetch={false}
                target="_blank"
              >
                Download e-Catalogue PDF
              </Link>
            ) : (
              <button
                className="inline-flex items-center rounded-xl px-4 py-2 border opacity-60 cursor-not-allowed"
                title="No catalogue available"
              >
                Catalogue not available
              </button>
            )}

            <Link
              href="/materials"
              className="inline-flex items-center rounded-xl px-4 py-2 border"
            >
              Back to Materials
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
