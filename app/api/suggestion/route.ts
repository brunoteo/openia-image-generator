import { NextResponse } from "next/server";
import openia from "../../../lib/openia";

export async function GET(request: Request) {
  const response = await openia.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.",
      max_tokens: 100,
      temperature: 0.8,

  })

  const responseText = response.data.choices[0].text;

  return NextResponse.json(responseText?.trim());
  // return new Response(JSON.stringify(responseText?.trim()), {
  //   status: 200,
  // });
}
