import { NextResponse } from "next/server";
// FIX: Use a namespace import for compatibility with modern ECMcript modules.
// This resolves the 'Import assignment cannot be used...' error (ts1202).
import * as PDFDocument from "pdfkit";

// pdfkit is a Node.js library, so we must use the Node runtime.
export const runtime = "nodejs";

/**
 * Converts a PDFDocument stream into a Buffer by collecting all its chunks.
 * @param doc The PDFDocument instance to convert.
 * @returns A promise that resolves with the complete PDF Buffer.
 */
function streamToBuffer(doc: PDFKit.PDFDocument): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    // pdfkit streams data in chunks of Buffers
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("error", (err) => reject(err));
    doc.on("end", () => {
      // FIX: The type definitions for Buffer.concat are strict and expect Uint8Array[].
      // We cast `chunks` to satisfy the type checker. This works because the Buffer
      // class is a subclass of Uint8Array, so it's compatible at runtime.
      resolve(Buffer.concat(chunks as unknown as readonly Uint8Array[]));
    });
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Create a new PDF document in memory
    const doc = new PDFDocument({
      size: "A4",
      margin: 40,
      info: {
        Title: "Quotation",
        Author: "Volt Designs & Acoustics",
      },
    });

    // 2. Begin collecting the PDF stream into a buffer in the background.
    const bufferPromise = streamToBuffer(doc);

    // 3. Add content to the PDF document
    doc
      .fontSize(18)
      .font("Helvetica-Bold")
      .text("Volt Designs & Acoustics", { align: "center" });
    doc.moveDown();
    doc
      .fontSize(14)
      .font("Helvetica")
      .text("Quotation / Proforma Invoice", { align: "center" });
    doc
      .fontSize(10)
      .text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" });
    doc.moveDown(2);

    // Example of using data from the request
    doc.text(`Customer: ${data.customerName || "N/A"}`);
    doc.text(`Project: ${data.projectName || "N/A"}`);
    // ... add more details, tables of items, totals, etc.

    // 4. Finalize the PDF. This triggers the 'end' event for the stream.
    doc.end();

    // 5. Wait for the buffer to finish collecting.
    const pdfBuffer = await bufferPromise;

    // 6. Create the Blob for the response.
    // The Node.js Buffer must be converted to a standard Uint8Array for the Web API `Blob` constructor.
    const blob = new Blob([new Uint8Array(pdfBuffer)], {
      type: "application/pdf",
    });

    // 7. Return the generated PDF as a response
    return new NextResponse(blob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="quote.pdf"',
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err: any) {
    console.error("Failed to generate PDF:", err);
    return NextResponse.json(
      { error: err?.message || "An unknown error occurred." },
      { status: 500 }
    );
  }
}

