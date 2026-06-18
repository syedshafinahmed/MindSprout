import type { Metadata } from "next";
import products from "@/data/products.json";
import ProductDetailPage from "./ProductDetailPage";
import { SITE_URL } from "@/app/layout";

type Props = { params: Promise<{ id: string }> };  

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const title = decodeURIComponent(id).replace(/-/g, " ");
  const product = products.find((p) => p.title.toLowerCase() === title.toLowerCase());

  if (!product) return { title: "Product not found" };

  const discount = product.discount ?? 0;
  const price = discount > 0
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
      images: [{ url: product.image, width: 800, height: 800, alt: product.title }],
      type: "website",
    },
  };
}

export default function Page() {
  return <ProductDetailPage />;
}
