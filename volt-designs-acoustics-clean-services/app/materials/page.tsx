import Link from "next/link";
import { MATERIALS } from "./_data";

export const metadata = {
  title: "Materials — Volt Designs & Acoustics",
  description: "Explore ACP, WPC, and Acoustic material palettes with colors and finishes.",
};

export default function MaterialsIndex() {
  return (
    <section className="section container">
      <h1>Materials</h1>
      <p className="text-white/70 mt-2 max-w-2xl">
        Explore our ACP, WPC, and Acoustic palettes — each with multiple color and finish options.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {MATERIALS.map((mat) => {
          const maxSwatches = 6; // show up to 6 swatches
          const extra = Math.max(0, mat.variations.length - maxSwatches);
          return (
            <Link key={mat.slug} href={`/materials/${mat.slug}`} className="card hover:border-white/20 transition">
              <h3 className="font-semibold">{mat.name}</h3>
              <p className="text-white/60 text-sm mt-2">{mat.description}</p>

              {/* Swatches */}
              <div className="mt-4 flex flex-wrap gap-2">
                {mat.variations.slice(0, maxSwatches).map((v) => (
                  <span
                    key={v.color}
                    className="inline-flex items-center justify-center rounded-full w-6 h-6 border border-white/20"
                    title={v.color}
                    style={{ backgroundColor: v.hex }}
                  />
                ))}
                {extra > 0 && (
                  <span className="inline-flex items-center justify-center rounded-full w-6 h-6 text-[10px] bg-white/10 border border-white/20">
                    +{extra}
                  </span>
                )}
              </div>
              <div className="text-[color:var(--gold,#D4AF37)] text-sm mt-3">View palette →</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
