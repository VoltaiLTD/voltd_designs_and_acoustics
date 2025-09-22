import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
export async function GET(){return NextResponse.json({ ok:true, message:"Paystack webhook endpoint is live" });}
export async function POST(req: NextRequest){try{const secret=process.env.PAYSTACK_SECRET_KEY; if(!secret) return NextResponse.json({error:"Server not configured"},{status:500});
  const rawBody=await req.text(); const signature=req.headers.get("x-paystack-signature")||req.headers.get("X-Paystack-Signature");
  if(!signature) return NextResponse.json({error:"Missing signature"},{status:401});
  const hash=crypto.createHmac("sha512",secret).update(rawBody).digest("hex"); if(hash!==signature) return NextResponse.json({error:"Invalid signature"},{status:401});
  const payload=JSON.parse(rawBody||"{}");
  if(payload.event==="charge.success"){const reference=payload?.data?.reference; const amount=payload?.data?.amount; const email=payload?.data?.customer?.email;
    let verified:any=null; try{const resp=await fetch(`https://api.paystack.co/transaction/verify/${reference}`,{headers:{Authorization:`Bearer ${secret}`}}); verified=await resp.json();}catch(e){console.error("Verify call failed",e);}
    const supabaseUrl=process.env.SUPABASE_URL as string | undefined; const supabaseKey=process.env.SUPABASE_SERVICE_ROLE as string | undefined;
    if(supabaseUrl && supabaseKey){const supabase=createClient(supabaseUrl, supabaseKey); const {error}=await supabase.from("orders").insert({reference,status:verified?.data?.status||payload?.data?.status||"unknown",amount,email,raw_payload:payload,verified_payload:verified??null}); if(error) console.error("Supabase insert error:",error);}}
  return NextResponse.json({ok:true});}catch(err){console.error("Webhook error:",err); return NextResponse.json({error:"Webhook error"},{status:500});}}