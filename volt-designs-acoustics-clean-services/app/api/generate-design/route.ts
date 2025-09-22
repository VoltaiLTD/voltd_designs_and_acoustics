// app/api/generate-design/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs"; // ensure Node runtime (we use fs)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // set in .env.local or Vercel
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;
    const description = (formData.get("description") as string | null)?.trim();
    const product = (formData.get("product") as string | null)?.toLowerCase(); // "acp" | "wpc" | "acoustic"

    if (!image || !description) {
      return NextResponse.json({ error: "Missing inputs: image and description are required." }, { status: 400 });
    }

    // Build a strong base prompt per product
    let basePrompt = "";
    switch (product) {
      case "acp":
        basePrompt =
          "Apply modern Aluminum Composite Panels (ACP) to the selected surfaces with metallic finishes and crisp geometric edges. Maintain true perspective, realistic shadows and lighting. Integrate as a real installation, not a paint overlay.";
        break;
      case "wpc":
        basePrompt =
          "Apply Wood-Plastic Composite (WPC) slatted panels in a realistic wood tone to the selected surfaces. Align slats properly, keep perspective and lighting consistent. It must look like an actual installed WPC system.";
        break;
      case "acoustic":
        basePrompt =
          "Add acoustic treatment (diffusers, absorbers or perforated boards) on the selected surfaces. Use clean layout, realistic textures, and preserve the room’s lighting and perspective for a photoreal result.";
        break;
      default:
        // Fallback if the UI didn’t send product
        basePrompt =
          "Apply premium wall panel finishes (ACP/WPC/Acoustic) to the selected surfaces with realistic materials, lighting, and perspective. It must look like an actual installed system.";
        break;
    }

    // Persist uploaded image to /tmp for the OpenAI edit call
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeName = `${crypto.randomBytes(6).toString("hex")}-${image.name.replace(/\s+/g, "_")}`;
    const tempPath = path.join("/tmp", safeName);
    fs.writeFileSync(tempPath, buffer);

    // Call OpenAI Images Edit (gpt-image-1 supports edits)
    const response = await openai.images.edit({
      model: "gpt-image-1",
      prompt: `${basePrompt}\nUser description: ${description}`,
      image: fs.createReadStream(tempPath) as any,
      size: "1024x1024",
    });

    // Optional: cleanup temp file
    try { fs.unlinkSync(tempPath); } catch {}

    const url = response.data?.[0]?.url;
    if (!url) {
      return NextResponse.json({ error: "Image generation failed." }, { status: 500 });
    }
    return NextResponse.json({ url });
  } catch (err: any) {
    console.error("generate-design error:", err);
    return NextResponse.json(
      { error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
