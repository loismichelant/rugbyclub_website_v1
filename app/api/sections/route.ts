import { NextResponse } from "next/server";

const MOCK_API_URL = "https://6a1b5e1bbc2f944754931f93.mockapi.io/v1/sections";

export async function GET() {
  try {
    const res = await fetch(MOCK_API_URL, {
      cache: "no-store", 
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Impossible de récupérer les données du serveur MockAPI" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Erreur Backend:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur de l'API" },
      { status: 500 }
    );
  }
}