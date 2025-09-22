// app/services/_data.ts
import { Home, Ruler, VolumeX, Waves, PanelsTopLeft, PanelsRight, Sparkles } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  teaser: string;
  summary: string;
  bullets: string[];
  hero: string; // path in /public
  pricing?: {
    title: string;
    priceNGN: number;
    unit?: string;        // e.g., "per room", "per m²", "per door"
    features: string[];
    popular?: boolean;
  }[];
  cta?: {
    primaryHref: string;
    primaryText: string;
    secondaryHref?: string;
    secondaryText?: string;
  };
};

export const SERVICES: Service[] = [
  {
    slug: "exterior-and-interior-design",
    title: "Exterior & Interior Design",
    icon: Home,
    teaser: "Concept-to-completion styling for façades and interiors.",
    summary:
      "We craft timeless spaces using ACP/WPC textures, lighting, and proportion. From residential to commercial, we align function with a premium aesthetic that reflects your brand.",
    bullets: [
      "Mood boards, material palettes & lighting plans",
      "Façade concepts using ACP/WPC finishes",
      "Space planning & 3D previews",
      "On-site supervision & finishing schedules",
    ],
    hero: "/services/exterior-interior.jpg",
    pricing: [
      {
        title: "Concept Pack",
        priceNGN: 250000,
        unit: "per area",
        features: ["2 concepts", "Material palette", "Basic mood board"],
      },
      {
        title: "Design+",
        priceNGN: 450000,
        unit: "per area",
        features: ["3 concepts", "Lighting layout", "Detailed finish schedule"],
        popular: true,
      },
      {
        title: "Executive",
        priceNGN: 850000,
        unit: "per area",
        features: ["5 concepts", "Site supervision", "3D previews"],
      },
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Request a Design Quote", secondaryHref: "/portfolio", secondaryText: "See Portfolio" },
  },
  {
    slug: "architectural-designs-and-3d-renders",
    title: "Architectural Designs & 3D Renders",
    icon: Ruler,
    teaser: "Permit-ready drawings & photo-realistic visuals.",
    summary:
      "Bring your vision to life with accurate drawings and cinematic 3D renders that communicate design intent clearly to stakeholders.",
    bullets: [
      "2D drawings (plans, elevations & sections)",
      "High-quality 3D stills & walkthroughs",
      "Cladding details for ACP/WPC",
      "BOQ & material schedules",
    ],
    hero: "/services/architectural-3d.jpg",
    pricing: [
      { title: "2D Drawings", priceNGN: 380000, unit: "per project", features: ["Plans & elevations", "Sections", "PDF set"] },
      { title: "3D Still Renders", priceNGN: 120000, unit: "per view", features: ["Photo-real lighting", "2 revisions"], popular: true },
      { title: "3D Walkthrough", priceNGN: 750000, unit: "per minute", features: ["Storyboard", "Edited video"] },
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Start a 3D Render" },
  },
  {
    slug: "soundproofing",
    title: "Soundproofing",
    icon: VolumeX,
    teaser: "Block noise at the source with engineered assemblies.",
    summary:
      "We deliver proven isolation systems to keep external or room-to-room noise under control—for studios, offices, hospitality and home theatres.",
    bullets: [
      "Walls, ceilings & floating floors",
      "STC-rated doors & perimeter seals",
      "Structure-borne vibration control",
      "On-site testing & validation",
    ],
    hero: "/services/soundproofing.jpg",
    pricing: [
      { title: "Room Pack", priceNGN: 680000, unit: "per room", features: ["Wall isolation", "Door seals", "Basic test"] },
      { title: "Studio Pack", priceNGN: 1450000, unit: "per room", features: ["Walls/ceiling/floor", "STC door", "Advanced test"], popular: true },
    ],
    cta: { primaryHref: "/contact", primaryText: "Book a Site Assessment" },
  },
  {
    slug: "acoustic-evaluation-design-and-installation",
    title: "Acoustic Evaluation, Design & Installation",
    icon: Waves,
    teaser: "Tune your room for clarity, warmth and intelligibility.",
    summary:
      "From diagnosis to treatment, we improve reverberation, flutter echo and modal build-up using diffusers, absorbers and reflectors tailored to your space.",
    bullets: [
      "Room response measurement (RT60, STI, modes)",
      "Treatment schemes: absorbers, diffusers, reflectors",
      "Custom PET felt & timber acoustic solutions",
      "Clean, safe, on-schedule installation",
    ],
    hero: "/services/acoustics.jpg",
    pricing: [
      { title: "Assessment", priceNGN: 150000, unit: "per space", features: ["On-site tests", "Report + scheme"] },
      { title: "Treatment Pack", priceNGN: 380000, unit: "per room", features: ["Panels + install", "Tuning"], popular: true },
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Get Acoustic Proposal" },
  },
  {
    slug: "sales-of-acp-and-wpc-panels",
    title: "Sales of ACP & WPC Panels",
    icon: PanelsTopLeft,
    teaser: "Premium brands, fast delivery, expert guidance.",
    summary:
      "Choose from curated ACP/WPC collections with durable finishes and warranties. We help you match color, texture and profile to your design goals.",
    bullets: [
      "Wide color range & wood grains",
      "Datasheets & certifications",
      "Volume pricing & logistics",
      "After-sales support",
    ],
    hero: "/services/sales.jpg",
    pricing: [
      { title: "ACP Panels", priceNGN: 28500, unit: "per m²", features: ["Exterior grade", "Warranty"] },
      { title: "WPC Panels", priceNGN: 24000, unit: "per m²", features: ["Low maintenance", "UV-stable"], popular: true },
    ],
    cta: { primaryHref: "/products", primaryText: "Browse Products" },
  },
  {
    slug: "installation-of-acp-and-wpc-panels",
    title: "Installation of ACP & WPC Panels",
    icon: PanelsRight,
    teaser: "Precision installation for long-lasting performance.",
    summary:
      "Our trained crews deliver clean edges, correct tolerances and watertight performance—exactly as the manufacturer specifies.",
    bullets: [
      "Sub-structure & fixings per spec",
      "Expansion gaps & waterproofing",
      "Safety compliance & QA",
      "Post-install inspection",
    ],
    hero: "/services/installation.jpg",
    pricing: [
      { title: "WPC Install", priceNGN: 12000, unit: "per m²", features: ["Subframe", "Fixings", "Finishing"] },
      { title: "ACP Install", priceNGN: 18000, unit: "per m²", features: ["Framing", "Sealing", "Finishing"], popular: true },
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Schedule Installation" },
  },
  {
    slug: "cnc-designs-and-perforation",
    title: "CNC Designs & Perforation",
    icon: Sparkles,
    teaser: "Custom patterns for screens, ceilings & brand features.",
    summary:
      "From parametric façades to logo walls, our CNC service fabricates intricate ACP/WPC patterns that are installation-ready.",
    bullets: [
      "Vector cleanup & nesting for yield",
      "Edge finishing & backing options",
      "Perforation schedules for airflow/lighting",
      "Rapid prototyping & sample approval",
    ],
    hero: "/services/cnc.jpg",
    pricing: [
      { title: "Standard Pattern", priceNGN: 45000, unit: "per panel", features: ["Catalog pattern", "Clean edges"] },
      { title: "Custom Pattern", priceNGN: 95000, unit: "per panel", features: ["Client vector", "Sample & proof"], popular: true },
    ],
    cta: { primaryHref: "/get-a-quote", primaryText: "Request CNC Sample" },
  },
];
