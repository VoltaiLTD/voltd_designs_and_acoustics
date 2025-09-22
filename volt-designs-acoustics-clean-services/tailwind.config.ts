import type { Config } from "tailwindcss";
const config: Config = {content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
theme: { extend: {colors:{ metallic:"#C0C0C0", charcoal:"#222222", wood:"#3C2A21", gold:"#D4AF37"},
fontFamily:{ heading:["Poppins","ui-sans-serif","system-ui"], body:["Montserrat","ui-sans-serif","system-ui"]},
boxShadow:{ soft:"0 10px 30px rgba(0,0,0,0.08)"} }},plugins: [],};export default config;