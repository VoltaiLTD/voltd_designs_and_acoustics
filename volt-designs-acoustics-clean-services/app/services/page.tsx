import Link from "next/link";
import { SERVICES } from "./_data";

export const metadata = {
  title: "Services — Volt Designs & Acoustics",
  description: "Exterior/interior design, architectural drawings & 3D renders, soundproofing, acoustic design & installation, ACP/WPC sales & installation, CNC designs."
};

export default function ServicesPage(){
  return (
    <section className="section container">
      <h1>Services</h1>
      <p className="text-white/70 mt-2 max-w-2xl">From concept to installation, we deliver premium façades, interiors and acoustic environments.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {SERVICES.map(s=> (
          <Link key={s.slug} href={`/services/${s.slug}`} className="card hover:shadow-soft transition group">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl border border-white/10 bg-black/30 group-hover:bg-black/50">
                <s.icon className="w-6 h-6 text-[color:var(--gold,#D4AF37)]" />
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-white/70 mt-1 text-sm">{s.teaser}</p>
              </div>
            </div>
            <div className="mt-4 text-[color:var(--gold,#D4AF37)] text-sm">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
