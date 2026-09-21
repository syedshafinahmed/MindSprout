"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Package,
  Truck,
  ShieldCheck,
  GraduationCap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type FAQCategory = "all" | "products" | "delivery" | "safety" | "schools";

interface FAQItem {
  id: string;
  category: "products" | "delivery" | "safety" | "schools";
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: "age-group",
    category: "products",
    q: "What age groups are MindSprout learning kits designed for?",
    a: "Our activity kits are thoughtfully designed for children aged 4 to 12 years. Each kit is clearly marked with developmental milestones, from early sensory and Bengali alphabet foundations to advanced STEM and circuitry projects.",
  },
  {
    id: "delivery-time",
    category: "delivery",
    q: "How fast is shipping and delivery across Bangladesh?",
    a: "Orders inside Dhaka metropolitan area are delivered within 24–48 hours. For all other divisions and districts across Bangladesh, standard home delivery takes 3–5 business days via our premium courier partners.",
  },
  {
    id: "safety-materials",
    category: "safety",
    q: "Are the kit materials non-toxic and child-safe?",
    a: "Yes, 100%. Every piece, pigment, and component undergoes strict safety inspections. All materials are non-toxic, eco-friendly, lead-free, and comply with international child product safety standards.",
  },
  {
    id: "returns-policy",
    category: "safety",
    q: "What is your return or replacement policy?",
    a: "We offer a 7-day hassle-free replacement guarantee. If any component is damaged during transit or missing from the box, simply reach out to us and we'll courier the replacement parts to your doorstep free of charge.",
  },
  {
    id: "bulk-school-orders",
    category: "schools",
    q: "Do you offer school discounts and bulk institutional kits?",
    a: "Yes! We partner with pre-schools, primary schools, and after-school STEM clubs across the country. We provide tiered bulk discounts (up to 30%), tailored teacher instruction guides, and free evaluation sample boxes for educators.",
  },
  {
    id: "gift-packaging",
    category: "products",
    q: "Can I send a MindSprout kit as a birthday or holiday gift?",
    a: "Absolutely! During checkout, you can add custom handwritten greeting cards and gift packaging. We will ensure the parcel is beautifully wrapped and delivered directly to the recipient's address.",
  },
  {
    id: "payment-methods",
    category: "delivery",
    q: "What payment methods do you accept?",
    a: "We support Cash on Delivery (COD) nationwide, along with instant bKash, Nagad, Rocket, credit/debit cards (Visa, MasterCard, Amex), and internet banking through our secure SSL gateway.",
  },
  {
    id: "bengali-support",
    category: "products",
    q: "Do the kits include instructions in Bengali?",
    a: "Yes! All activity guidebooks and storybooks include clear, illustrated bilingual instructions in both Bengali and English, making it fun and easy for both parents and kids to follow along.",
  },
];

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "products", label: "Kits & Guidance", icon: Package },
  { id: "delivery", label: "Shipping & Orders", icon: Truck },
  { id: "safety", label: "Safety & Returns", icon: ShieldCheck },
  { id: "schools", label: "Schools & Bulk", icon: GraduationCap },
];

interface FAQProps {
  showHeader?: boolean;
  className?: string;
  id?: string;
}

export default function FAQ({
  showHeader = true,
  className = "",
  id = "faq-section",
}: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [openFaq, setOpenFaq] = useState<string | null>("age-group");

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => (prev === faqId ? null : faqId));
  };

  return (
    <section id={id} className={`relative py-16 md:py-24 bg-slate-50/50 ${className}`}>
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        {showHeader && (
          <div className="text-left max-w-3xl mb-10">
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
              Common Inquiries
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral tracking-tight mb-4">
              Frequently Asked{" "}
              <span className="text-primary relative inline-block">
                Questions
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-primary/30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Find quick answers to everything you need to know about MindSprout
              learning kits, delivery schedules, safety standards, and school kits.
            </p>
          </div>
        )}

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
          {categories.map(({ id: catId, label, icon: Icon }) => {
            const isActive = activeCategory === catId;
            return (
              <button
                key={catId}
                type="button"
                onClick={() => setActiveCategory(catId as FAQCategory)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30 scale-105"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ Grid */}
        <div className="w-full max-w-7xl space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border transition-all duration-200 rounded-xl overflow-hidden ${
                  isOpen
                    ? "border-primary/50 shadow-sm ring-1 ring-primary/10"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors ${
                      isOpen ? "text-primary" : "text-neutral"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper / Still Have Questions Card */}
        <div className="w-full max-w-7xl mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-neutral">
                Still have unanswered questions?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Can&apos;t find what you are looking for? Our friendly team is ready to help.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 bg-primary btn text-white text-sm font-medium shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:-translate-y-0.5 transition-all"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
