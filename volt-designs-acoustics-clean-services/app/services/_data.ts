import { Home, Ruler, VolumeX, Waves, PanelsTopLeft, PanelRight, Sparkles } from "lucide-react";


export type Service = {
  slug: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  teaser: string;
  summary: string;
  bullets: string[];
  hero: string;
  pricing?: { title: string; priceNGN: number; unit?: string; features: string[]; popular?: boolean }[];
  cta?: { primaryHref: string; primaryText: string; secondaryHref?: string; secondaryText?: string };
};

export const SERVICES: Service[] = [
  {
    slug: "exterior-and-interior-design",
    title: "Exterior & Interior Design",
    icon: Home,
    teaser: "Concept-to-completion styling for façades and interiors.",
    summary: "We craft timeless spaces using ACP/WPC textures, lighting, and proportion. From residential to commercial, we align function with a premium aesthetic that reflects your brand.",
    bullets: ["Mood boards & palettes","Façade concepts (ACP/WPC)","Space planning & 3D previews","Site supervision"],
    hero: "/products/house-mix-wpc-acp-1.png",
    pricing: [
      { title: "Concept Pack", priceNGN: 250000, unit: "per area", features: ["2 concepts","Material palette","Mood board"] },
      { title: "Design+", priceNGN: 450000, unit: "per area", features: ["3 concepts","Lighting layout","Finish schedule"], popular: true },
      { title: "Executive", priceNGN: 850000, unit: "per area", features: ["5 concepts","Site supervision","3D previews"] }
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Request a Design Quote", secondaryHref: "/portfolio", secondaryText: "See Portfolio" },
  },
  {
    slug: "architectural-designs-and-3d-renders",
    title: "Architectural Designs & 3D Renders",
    icon: Ruler,
    teaser: "Permit-ready drawings & photo-realistic visuals.",
    summary: "Accurate drawings and cinematic 3D renders that communicate design intent clearly.",
    bullets: ["2D drawings","3D stills & walkthroughs","Cladding details","BOQ & schedules"],
    hero: "/products/house-perforated-acp-1.png",
    pricing: [
      { title: "2D Drawings", priceNGN: 380000, unit: "per project", features: ["Plans & elevations","Sections","PDF set"] },
      { title: "3D Still Renders", priceNGN: 120000, unit: "per view", features: ["Photo-real lighting","2 revisions"], popular: true },
      { title: "3D Walkthrough", priceNGN: 750000, unit: "per minute", features: ["Storyboard","Edited video"] }
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Start a 3D Render" },
  },
  {
    slug: "soundproofing",
    title: "Soundproofing",
    icon: VolumeX,
    teaser: "Block noise at the source with engineered assemblies.",
    summary: "Isolation systems to keep external or room‑to‑room noise under control.",
    bullets: ["Walls/ceilings/floors","STC doors & seals","Vibration control","On-site testing"],
    hero: "/products/soundproof-door.png",
    pricing: [
      { title: "Room Pack", priceNGN: 680000, unit: "per room", features: ["Wall isolation","Door seals","Basic test"] },
      { title: "Studio Pack", priceNGN: 1450000, unit: "per room", features: ["Walls/ceiling/floor","STC door","Advanced test"], popular: true }
    ],
    cta: { primaryHref: "/contact", primaryText: "Book a Site Assessment" },
  },
  {
    slug: "acoustic-evaluation-design-and-installation",
    title: "Acoustic Evaluation, Design & Installation",
    icon: Waves,
    teaser: "Tune your room for clarity, warmth and intelligibility.",
    summary: "Diagnosis to treatment using diffusers, absorbers and reflectors tailored to your space.",
    bullets: ["RT60, STI, modes","Treatment schemes","Custom PET felt/timber","On‑schedule install"],
    hero: "/products/studio-with-diffusers.png",
    pricing: [
      { title: "Assessment", priceNGN: 150000, unit: "per space", features: ["On-site tests","Report + scheme"] },
      { title: "Treatment Pack", priceNGN: 380000, unit: "per room", features: ["Panels + install","Tuning"], popular: true }
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Get Acoustic Proposal" },
  },
  {
    slug: "sales-of-acp-and-wpc-panels",
    title: "Sales of ACP & WPC Panels",
    icon: PanelsTopLeft,
    teaser: "Premium brands, fast delivery, expert guidance.",
    summary: "Curated ACP/WPC collections with durable finishes and warranties.",
    bullets: ["Wide colors & grains","Datasheets/certs","Volume pricing","After‑sales support"],
    hero: "/products/perforated-acp-close.png",
    pricing: [
      { title: "ACP Panels", priceNGN: 48500, unit: "per m²", features: ["Exterior grade","Warranty"] },
      { title: "WPC Panels", priceNGN: 24000, unit: "per m²", features: ["Low maintenance","UV‑stable"], popular: true }
    ],
    cta: { primaryHref: "/products", primaryText: "Browse Products" },
  },
  {
    slug: "installation-of-acp-and-wpc-panels",
    title: "Installation of ACP & WPC Panels",
    icon: PanelRight,
    teaser: "Precision installation for long-lasting performance.",
    summary: "Clean edges, correct tolerances, watertight details — per manufacturer spec.",
    bullets: ["Sub‑structure & fixings","Expansion & waterproofing","Safety & QA","Post‑install inspection"],
    hero: "/products/house-perforated-acp-2.png",
    pricing: [
      { title: "WPC Install", priceNGN: 12000, unit: "per m²", features: ["Subframe","Fixings","Finishing"] },
      { title: "ACP Install", priceNGN: 18000, unit: "per m²", features: ["Framing","Sealing","Finishing"], popular: true }
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Schedule Installation" },
  },
  {
    slug: "cnc-designs-and-perforation",
    title: "CNC Designs & Perforation",
    icon: Sparkles,
    teaser: "Custom patterns for screens, ceilings & brand features.",
    summary: "CNC service fabricates intricate ACP/WPC patterns that are installation‑ready.",
    bullets: ["Vector cleanup & nesting","Edge finishing/backing","Perforation schedules","Samples & approval"],
    hero: "/products/house-mix-wpc-acp-cnc.png",
    pricing: [
      { title: "Standard Pattern", priceNGN: 45000, unit: "per panel", features: ["Catalog pattern","Clean edges"] },
      { title: "Custom Pattern", priceNGN: 95000, unit: "per panel", features: ["Client vector","Sample & proof"], popular: true }
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Request CNC Sample" },
  },
];
