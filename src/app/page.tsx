import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import ContactPage from "./contact/ContactPage";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <ContactPage />
    </div>
  );
}
