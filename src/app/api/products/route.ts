import { NextRequest, NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export async function GET(req: NextRequest) {
  try {
    const col = await dbConnect(collections.PRODUCTS);
    const id = req.nextUrl.searchParams.get("id");

    if (id !== null) {
      const decodedId = decodeURIComponent(id);
      const title = decodedId.replace(/-/g, " ");

      // Match by ObjectId if 24 hex chars, or by case-insensitive title
      let query = {};
      if (ObjectId.isValid(decodedId) && decodedId.length === 24) {
        query = {
          $or: [
            { _id: new ObjectId(decodedId) },
            { title: { $regex: new RegExp(`^${escapeRegex(title)}$`, "i") } },
          ],
        };
      } else {
        query = {
          title: { $regex: new RegExp(`^${escapeRegex(title)}$`, "i") },
        };
      }

      const product = await col.findOne(query);
      if (!product) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      return NextResponse.json(product);
    }

    const products = await col.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products from MongoDB:", error);
    return NextResponse.json(
      { error: "Failed to fetch products from MongoDB" },
      { status: 500 }
    );
  }
}
