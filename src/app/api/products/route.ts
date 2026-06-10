// import { NextResponse } from "next/server";
// import { dbConnect, collections } from "@/lib/dbConnect";

// export async function GET() {
//   try {
//     const productsCollection = dbConnect(collections.PRODUCTS);
//     const products = await productsCollection.find({}).toArray();
    
//     // Map _id to string for clean JSON serialization
//     const sanitizedProducts = products.map((product) => ({
//       ...product,
//       _id: product._id.toString(),
//     }));

//     return NextResponse.json(sanitizedProducts);
//   } catch (error) {
//     console.error("Failed to fetch products from database:", error);
//     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

// export async function GET(req: NextRequest) {
//   const title = req.nextUrl.searchParams.get("title");
//   if (title) {
//     const product = products.find(
//       (p) => p.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
//     );
//     if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
//     return NextResponse.json(product);
//   }
//   return NextResponse.json(products);
// }


export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (id !== null) {
    const product = products[Number(id)];
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  }
  return NextResponse.json(products);
}