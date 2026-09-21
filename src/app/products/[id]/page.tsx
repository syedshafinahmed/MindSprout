import type { Metadata } from "next";
import ProductDetailPage from "./ProductDetailPage";
import { SITE_URL } from "@/app/layout";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import type { Product } from "@/app/types/product";

type Props = { params: Promise<{ id: string }> };

function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const title = decodedId.replace(/-/g, " ");

  try {
    const col = await dbConnect(collections.PRODUCTS);
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

    const product = (await col.findOne(query)) as unknown as Product | null;

    if (!product) return { title: "Product not found" };

    const discount = product.discount ?? 0;
    const price =
      discount > 0
        ? Math.round(product.price * (1 - discount / 100))
        : product.price;

    return {
      title: product.title,
      description: `${product.title} — ৳${price.toLocaleString()}. ${
        discount > 0 ? `Save ${discount}%. ` : ""
      }A hands-on learning kit for curious kids, from MindSprout.`,
      alternates: {
        canonical: `/products/${id}`,
      },
      openGraph: {
        title: `${product.title} | MindSprout`,
        description: `Shop ${product.title} — ৳${price.toLocaleString()}`,
        url: `${SITE_URL}/products/${id}`,
        images: [
          { url: product.image, width: 800, height: 800, alt: product.title },
        ],
        type: "website",
      },
    };
  } catch (err) {
    console.error("Error fetching product metadata from MongoDB:", err);
    return { title: "Product | MindSprout" };
  }
}

export default function Page() {
  return <ProductDetailPage />;
}
