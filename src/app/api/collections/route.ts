import { NextResponse } from "next/server";

const collections = [
  {
    "id": "3",
    "name": "Step into The Flame",
    "image": "/images/step-into-the-flame.jpeg",
    "accentColor": "#ae93bf"
  },
  {
    "id": "2",
    "name": "City Pop Dream",
    "image": "/images/city-pop-dream.jpeg",
    "accentColor": "#72c07f"
  },
  {
    "id": "1",
    "name": "Gol D Style",
    "image": "/images/gol-d-style.jpeg",
    "accentColor": "#c1a966"
  }
]

export async function GET() {
    return NextResponse.json(collections)
}