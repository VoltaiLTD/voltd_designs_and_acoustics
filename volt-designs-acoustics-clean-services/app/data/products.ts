export type Product={slug:string;name:string;category:'ACP'|'WPC'|'CNC'|'Acoustic';image:string;priceNGN:number;unit:'m²'|'panel'|'carton'|'door';description:string;};
export const PRODUCTS:Product[]=[
{slug:'acp-perforated-facade',name:'Perforated ACP Facade',category:'ACP',image:'/products/house-perforated-acp-1.png',priceNGN:48500,unit:'m²',description:'Aluminum composite panels with custom perforation for façades and screens.'},
{slug:'wpc-teak-plank',name:'WPC Teak Plank',category:'WPC',image:'/products/house-mix-wpc-acp-1.png',priceNGN:24000,unit:'m²',description:'Warm teak finish, low maintenance, UV-stable.'},
{slug:'cnc-feature-panel',name:'CNC Feature Panel',category:'CNC',image:'/products/house-mix-wpc-acp-cnc.png',priceNGN:65000,unit:'panel',description:'CNC-cut ACP/WPC parametric patterns for walls and ceilings.'},
{slug:'acoustic-diffuser',name:'Acoustic Diffuser (Quadratic)',category:'Acoustic',image:'/products/acoustic-diffuser-close.png',priceNGN:42000,unit:'panel',description:'Improves clarity with high-frequency diffusion.'},
{slug:'soundproof-door-stc35',name:'Soundproofed Door (STC‑35)',category:'Acoustic',image:'/products/soundproof-door.png',priceNGN:295000,unit:'door',description:'STC-rated door with perimeter & drop seals.'}
];