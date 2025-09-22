export type Product = {slug:string;name:string;category:"ACP"|"WPC"|"CNC"|"Acoustic";image:string;priceNGN:number;unit:"m²"|"panel"|"carton"|"door";description:string;};
export const PRODUCTS: Product[] = [
  {slug:"acp-brushed-silver",name:"ACP Brushed Silver",category:"ACP",image:"/product-house-1.png",priceNGN:28500,unit:"m²",description:"Durable aluminum composite panel in brushed silver, ideal for facades."},
  {slug:"wpc-teak-plank",name:"WPC Teak Plank",category:"WPC",image:"/product-house-2.png",priceNGN:24000,unit:"m²",description:"Warm teak finish, low-maintenance, great for interiors and exteriors."},
  {slug:"cnc-perforated-wave",name:"CNC Perforated Wave",category:"CNC",image:"/hero-still-4.png",priceNGN:48000,unit:"panel",description:"Custom CNC pattern for feature walls and vents."},
  {slug:"acoustic-panels",name:"Acoustic Panels",category:"Acoustic",image:"/hero-still-2.png",priceNGN:32000,unit:"m²",description:"High NRC PET felt panel for reverberation control."},
  {slug:"soundproofed-door-stc35",name:"Soundproofed Door (STC-35)",category:"Acoustic",image:"/hero-still-3.png",priceNGN:295000,unit:"door",description:"STC-rated door set with perimeter and drop seals."}
];