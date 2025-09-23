// You can define the type here or import it from another file
type MaterialVariation = {
  color: string;
  hex: string;
};

type Material = {
  slug: string;
  name: string;
  description: string;
  variations: MaterialVariation[];
};

// Apply the type to your data array
export const MATERIALS: Material[] = [
  {
    slug: "acp",
    name: "Aluminum Composite Panel (ACP)",
    description: "Lightweight, durable, and versatile cladding material.",
    variations: [
      { color: "Pure White", hex: "#FFFFFF" },
      { color: "Charcoal Black", hex: "#36454F" },
      // ... more variations
    ],
  },
  // ... other material objects
];