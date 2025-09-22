import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* BG video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/hero-1080.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-still-1.png"
        preload="metadata"
      >
        <source src="/hero-1080.webm" type="video/webm" />
        <source src="/hero-1080.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay above the video */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content on top */}
      <div className="relative z-20 container min-h-[78vh] flex items-center">
        <div>
          <h1>Innovative Panel & Acoustic Solutions. Impeccably Executed.</h1>
          <p className="mt-4 text-white/80 max-w-xl">
            ACP, WPC, CNC, and professional acoustics — design, supply, installation, and noise control.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/get-a-quote" className="btn btn-gold">Request a Quote</Link>
            <Link href="/ai-design-visualizer" className="btn btn-outline">Upload Your Space</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
