import {
  ArrowRight,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  CheckCircle2,
  GraduationCap,
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
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity First",
    desc: "Every kit asks 'what if?' before answering. We build for questioning and wondering.",
  },
  {
    icon: Heart,
    title: "Made With Care",
    desc: "From non-toxic materials to soft packaging, every detail is engineered for child safety.",
  },
  {
    icon: ShieldCheck,
    title: "Parent Trusted",
    desc: "Rigorously tested, age-graded, and educator approved. We never cut corners on quality.",
  },
  {
    icon: Sparkles,
    title: "Play-Based Learning",
    desc: "Hands-on projects that build real skills — problem solving, fine motor, and creativity.",
  },
];

const team = [
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1775483435/IMG_20260308_005554.jpg_sade1o.jpg",
    name: "Shafin Ahmed",
    role: "Co-founder & CEO",
    focus: "Early Childhood Innovation",
  },
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1774283978/samples/smile.jpg",
    name: "Ahmed Dhruv",
    role: "Head of Product",
    focus: "STEM Curriculum & Design",
  },
  {
    image:
      "https://res.cloudinary.com/dxipjzeda/image/upload/v1774283971/samples/people/smiling-man.jpg",
    name: "Keyser Soze",
    role: "Lead Designer",
    focus: "Child Experience & Visuals",
  },
];

const reasons = [
  "Age-appropriate & research-backed milestones",
  "100% non-toxic, eco-friendly certified parts",
  "Bilingual instructions (English & বাংলা)",
  "Fast 24-48h dispatch across Bangladesh",
];

const stats = [
  { value: "12,000+", label: "Happy Curious Kids" },
  { value: "50+", label: "STEM & Activity Kits" },
  { value: "40+", label: "Partner Schools in BD" },
  { value: "4.9 ★", label: "Average Parent Rating" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Glow Accents */}
      <div className="pointer-events-none fixed top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="pointer-events-none fixed bottom-20 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6 text-left">
        <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
          Our Story & Mission
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral tracking-tight mb-4 text-left">
          Crafting moments of{" "}
          <span className="text-primary relative inline-block">
            Curiosity & Joy
            <svg
              className="absolute -bottom-2 left-0 w-full text-primary/30"
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
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl text-left leading-relaxed">
          MindSprout was founded with a single belief: every child is a natural
          creator. We build hands-on learning experiences that ignite imagination
          and build lifelong skills.
        </p>
      </div>

      {/* Mission & Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold tracking-tight italic uppercase text-primary">
                Why We Exist
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral leading-snug">
                We don&apos;t just sell toys.{" "}
                <span className="text-primary relative inline-block">
                  We create discoveries.
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
              <p className="text-slate-600 text-sm leading-relaxed">
                The moment a child connects their first LED circuit, paints their
                first canvas, or builds their first robot — that spark of wonder
                is what we dedicate our work to every day.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Collaborating with child psychologists, educators, and makers
                across Bangladesh, every MindSprout kit blends screen-free fun with
                foundational STEM principles.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>Educator Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Award-Winning STEM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Parent Loved</span>
                </div>
              </div>
            </div>

            {/* Right Quick Checklist Box */}
            <div className="lg:col-span-5 bg-slate-50/80 border border-slate-200 rounded-2xl p-6 space-y-3.5">
              <p className="text-xs font-semibold tracking-tight italic uppercase text-primary">
                The MindSprout Standard
              </p>
              <div className="space-y-3">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-left mb-8">
          <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-2">
            Our Principles
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral">
            What We{" "}
            <span className="text-primary relative inline-block">
              Stand For
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-slate-200/90 hover:border-primary/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-neutral text-base mb-2">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-left mb-8">
          <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-2">
            Leadership & Creators
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral">
            The Minds Behind{" "}
            <span className="text-primary relative inline-block">
              MindSprout
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {team.map(({ image, name, role, focus }) => (
            <div
              key={name}
              className="bg-white border border-slate-200/90 hover:border-primary/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 ring-2 ring-primary/20">
                <Image
                  src={image}
                  alt={name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-neutral text-sm truncate">
                  {name}
                </h3>
                <p className="text-xs font-semibold text-primary">{role}</p>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/70 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center ${
                index !== 0 ? "sm:border-l sm:border-slate-200" : ""
              }`}
            >
              <span className="text-xl sm:text-2xl font-bold text-neutral">
                {value}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Compact CTA */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="bg-gradient-to-r from-primary/15 via-primary/5 to-white border border-primary/20 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-1">
              Start Exploring
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral">
              Ready to find the perfect learning kit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore 50+ hands-on activity kits designed for kids aged 4 to 12.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 bg-primary btn text-white text-sm font-medium shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:-translate-y-0.5 transition-all shrink-0"
          >
            Explore products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
