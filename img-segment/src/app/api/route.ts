import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest, res:NextResponse) {
  const formData = await req.formData();
  const theImage = formData.get("theImage");

  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/detr-resnet-50-panoptic",
    {
      headers: { Authorization: `Bearer ${process.env.HF_APIKEY}` },
      method: "POST",
      body: theImage,
    }
  );

  const result = await response.json();

  return NextResponse.json({ body: result });
}