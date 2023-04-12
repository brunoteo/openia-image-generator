import { NextResponse } from "next/server";

const fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGODB_DATA_API_KEY!
    }
};

const fetchBody = {
  dataSource: process.env.MONGODB_DATA_SOURCE,
  database: "openia_generator",
  collection: "images"
};

const baseUrl = process.env.MONGODB_DATA_API_URL + '/action';

export async function POST(request: Request) {
    const url = baseUrl+'/insertOne';

    const image = await request.json();
   
    const response = await fetch(url, {
        ...fetchOptions,
        body: JSON.stringify( {
            ...fetchBody,
            document: image
        })
    });

    const readDataJson = response.json();

    return NextResponse.json(readDataJson)
  }

  export async function GET(request: Request) {
    const url = baseUrl+'/find';
   
    const response = await fetch(url, {
        cache: "no-store",
        ...fetchOptions,
        body: JSON.stringify( {
            ...fetchBody,
            sort: { insertDate: -1 }
        })
    });

    const readDataJson = await response.json();

    console.log(readDataJson)

    return NextResponse.json(readDataJson)
  }  