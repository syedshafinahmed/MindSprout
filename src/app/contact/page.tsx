import { Metadata } from "next";
import ContactPage from "./ContactPage";
import { SITE_URL } from "../layout";

// metadata
export const metadata: Metadata = {
  title:       "Contact Us",
  description:
    "Get in touch with the MindSprout team — we're happy to help with orders, " +
    "product questions, or school bulk purchases.",
  alternates:  { canonical: "/contact" },
  openGraph: {
    title:       "Contact Us | MindSprout",
    description: "Reach the MindSprout team for orders, returns, or school kits.",
    url:         `${SITE_URL}/contact`,
  },
};

const page = () => {
  return (
    <ContactPage />
  );
};

export default page;
