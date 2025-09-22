export type Material = {
  slug: string;
  name: string;
  description: string;
  variations: { color: string; hex: string; image?: string }[];
};

export const MATERIALS: Material[] = [
  {
    slug: "acp-panels",
    name: "ACP Panels",
    description:
      "Aluminum Composite Panels available in metallic, matte, and custom CNC perforated finishes.",
    variations: [
      { color: "Silver Metallic", hex: "#C0C0C0" },
      { color: "Charcoal Black", hex: "#222222" },
      { color: "Champagne Gold", hex: "#D4AF37" },
      { color: "Custom Perforated", hex: "#888888" },
    ],
  },
  {
    slug: "wpc-panels",
    name: "WPC Panels",
    description:
      "Wood-Plastic Composite planks and panels that bring natural warmth with zero termite issues.",
    variations: [
      { color: "Teak", hex: "#8B4513" },
      { color: "Walnut Brown", hex: "#5C4033" },
      { color: "Natural Oak", hex: "#D2B48C" },
      { color: "Ebony Dark", hex: "#2C2C2C" },
    ],
  },
  {
    slug: "acoustic-materials",
    name: "Acoustic Materials",
    description:
      "Diffusers, absorbers, and reflectors to optimize sound clarity in studios, offices, and halls.",
    variations: [
      { color: "Quadratic Diffuser (White)", hex: "#F5F5F5" },
      { color: "Wooden Slat Absorber", hex: "#C19A6B" },
      { color: "Fabric Panel (Gray)", hex: "#808080" },
      { color: "Reflector Finish", hex: "#A0522D" },
    ],
  },
];
