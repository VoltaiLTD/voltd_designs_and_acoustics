import Image from "next/image";
import Link from "next/link";
const HERO_STILL = "/hero-still-1.png";
export default function Home(){
  return (<section className="relative overflow-hidden">
    <video className="absolute inset-0 -z-10 w-full h-full object-cover" src="/hero.mp4" autoPlay loop muted playsInline poster={HERO_STILL} />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    <div className="container min-h-[78vh] flex items-center">
      <div>
        <h1>Innovative Panel & Acoustic Solutions. Impeccably Executed.</h1>
        <p className="mt-4 text-white/80 max-w-xl">ACP, WPC, CNC, and professional acoustics — design, supply, installation, and noise control.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/get-a-quote" className="btn btn-gold">Request a Quote</Link>
          <Link href="/ai-design-visualizer" className="btn btn-outline">Upload Your Space</Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">{["ACP Panels","WPC Panels","CNC Designs","Interior Solutions","Exterior Solutions"].map((t)=>(<span key={t} className="px-3 py-1 rounded-full border border-white/20 bg-black/30">{t}</span>))}</div>
      </div>
    </div>
  </section>);
}