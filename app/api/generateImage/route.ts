import { NextResponse } from "next/server";
import openai from "../../../lib/openia";

export async function POST(request: Request) {
  const res = await request.json();
  const prompt = res.prompt;

  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  })
  const image_url = response.data.data[0].url;

  console.log(image_url)

  return NextResponse.json(image_url);
}
