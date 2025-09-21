import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../_data";
import PricingTable from "@/components/PricingTable";
import ContactMiniForm from "@/components/ContactMiniForm";

export async function generateStaticParams(){ return SERVICES.map(s=>({slug:s.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const svc = SERVICES.find(s=>s.slug===params.slug);
  return { title: svc ? `${svc.title} — Volt Designs & Acoustics` : "Service", description: svc?.teaser ?? "Service details" };
}

export default function ServiceDetail({ params }:{ params:{slug:string}}){
  const svc = SERVICES.find(s=>s.slug===params.slug); if(!svc) return notFound();
  const Icon = svc.icon;
  return (<>
    <section className="relative h-[36vh] min-h-[300px]">
      <Image src={svc.hero} alt={svc.title} fill priority className="object-cover"/>
      <div className="absolute inset-0 bg-black/50"/>
      <div className="absolute inset-0 container flex items-end pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl border border-white/10 bg-black/40"><Icon className="w-7 h-7 text-[color:var(--gold,#D4AF37)]"/></div>
          <h1>{svc.title}</h1>
        </div>
      </div>
    </section>

    <section className="section container grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="card"><p className="text-white/80">{svc.summary}</p></div>
        <div className="card mt-4"><h3 className="font-semibold">What’s Included</h3><ul className="mt-3 list-disc pl-5 space-y-1 text-white/80">{svc.bullets.map(b=> <li key={b}>{b}</li>)}</ul></div>
        {svc.pricing && (<div className="mt-4"><h3 className="font-semibold mb-3">Pricing</h3><PricingTable plans={svc.pricing}/></div>)}
      </div>
      <aside className="space-y-3">
        <div className="card">
          <h3 className="font-semibold">Get Started</h3>
          <p className="text-white/70 text-sm mt-1">Tell us about your space and goals. We’ll suggest materials, budgets and timelines.</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={svc.cta?.primaryHref ?? "/get-a-quote"} className="btn btn-gold w-full">{svc.cta?.primaryText ?? "Request a Quote"}</Link>
            {svc.cta?.secondaryHref && <Link href={svc.cta.secondaryHref} className="btn btn-outline w-full">{svc.cta.secondaryText}</Link>}
          </div>
        </div>
        <ContactMiniForm service={svc.title}/>
      </aside>
    </section>
  </>);
}
