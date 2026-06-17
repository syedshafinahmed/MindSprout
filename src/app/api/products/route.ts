import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (id !== null) {
    const product = products[Number(id)];
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  }
  return NextResponse.json(products);
}
