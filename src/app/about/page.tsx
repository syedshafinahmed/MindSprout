import {
  ArrowRight,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "../layout";

// metadata
export const metadata: Metadata = {
  title: "About MindSprout",
  description:
    "Learn about MindSprout — our mission to make learning fun, hands-on, and " +
    "accessible for every child in Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MindSprout",
    description: "Our mission: making learning fun for every curious kid.",
    url: `${SITE_URL}/contact`,
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity first",
    desc: "Every kit is designed to ask 'what if?' before it answers anything. We build for wondering.",
  },
  {
    icon: Heart,
    title: "Made with care",
    desc: "From material selection to packaging, every detail is chosen with children's safety and joy in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by parents",
    desc: "Rigorously tested, non-toxic, and age-appropriate. Parents trust us because we never cut corners.",
  },
  {
    icon: Sparkles,
    title: "Learning through play",
    desc: "Research-backed activities that build real skills — creativity, problem solving, and confidence.",
  },
];

const team = [
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1775483435/IMG_20260308_005554.jpg_sade1o.jpg",
    name: "Shafin Ahmed",
    role: "Co-founder & CEO",
  },
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1774283978/samples/smile.jpg",
    name: "Ahmed Dhruv",
    role: "Head of Product",
  },
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1774283971/samples/people/smiling-man.jpg",
    name: "Keyser Soze",
    role: "Lead Designer",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed top-1/4 right-10 w-80 h-80 rounded-full bg-primary opacity-10" />
      <div className="pointer-events-none fixed bottom-1/4 left-1/3 w-52 h-52 rounded-full bg-primary opacity-10" />

      {/* Mission */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-4">
              Mission
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-neutral mb-5 leading-snug">
              We don&apos;t just sell kits.{" "}
              <span className="text-primary">We sell moments.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              The moment a child builds their first circuit, paints their first
              canvas, or reads their first Bengali word — that&apos;s what we
              work for. HeroKidz kits are crafted to create those moments, again
              and again.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We partner with child development experts, educators, and parents
              across Bangladesh to design experiences that are genuinely
              meaningful — not just entertaining.
            </p>
          </div>

          {/* Card */}
          <div className="w-full rounded-md border border-slate-200 bg-white p-8 flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-primary rounded-t-2xl" />
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary">
              Why parents choose us
            </p>
            {[
              "Age-appropriate and research-backed",
              "100% non-toxic materials",
              "Bilingual content (English + বাংলা)",
              "Ships within 2 days across Bangladesh",
              "Loved by 12,000+ families",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="relative bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-4">
            Values
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-neutral mb-12 max-w-xl leading-snug">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-md border border-slate-200 hover:border-primary hover:-translate-0.5 transition-all bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-neutral text-sm">{title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-4">
          Team
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-neutral mb-12 leading-snug">
          The people behind Mind<span className="text-primary">Sprout</span>
        </h2>
        <div className="flex flex-wrap gap-6">
          {team.map(({ image, name, role }) => (
            <div
              key={name}
              className="flex items-center gap-4 p-5 rounded-md border border-slate-200 hover:border-primary hover:-translate-0.5 transition-all bg-white min-w-56"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={image}
                  alt={name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-neutral text-sm">{name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
              Get started
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral">
              Ready to find the perfect kit?
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Browse 50+ activity kits crafted for curious minds.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 bg-primary btn hover:bg-primary text-white text-sm font-medium transition-colors shrink-0"
          >
            Explore products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
