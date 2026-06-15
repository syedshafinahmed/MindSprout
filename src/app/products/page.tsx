import type { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "All Products",
  description: "Empowering the next generation of heroes through fun, curiosity, and meaningful learning experiences.",
};

export default function Page() {
  return <ProductsPage />;
}
