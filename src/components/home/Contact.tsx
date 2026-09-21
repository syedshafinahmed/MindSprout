"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Headphones,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

interface ContactProps {
  showHeader?: boolean;
  className?: string;
  id?: string;
}

const contactChannels = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@mindsprout.com",
    sub: "Average reply time: < 2 hours",
    href: "mailto:hello@mindsprout.com",
    badge: "Direct Inbox",
  },
  {
    icon: Phone,
    label: "Call Support",
    value: "+880 1700-000000",
    sub: "Sat – Thu, 9:00 AM – 6:00 PM",
    href: "tel:+8801700000000",
    badge: "Toll-Free",
  },
  {
    icon: MapPin,
    label: "Experience Studio",
    value: "Gulshan-1, Dhaka, Bangladesh",
    sub: "Interactive Kids' Discovery Lab",
    href: "https://maps.google.com",
    badge: "Open for Visits",
  },
];

export default function Contact({
  showHeader = true,
  className = "",
  id = "contact-section",
}: ContactProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      {/* Background subtle accents */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Optional Header */}
        {showHeader && (
          <div className="text-left max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral tracking-tight mb-4">
              Let&apos;s start a{" "}
              <span className="text-primary relative inline-block">
                conversation
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
              Have questions about our learning kits, custom school curricula, or
              need help with an existing order? Our team of educators and parent
              support specialists are here to assist.
            </p>
          </div>
        )}

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {contactChannels.map(({ icon: Icon, label, value, sub, href, badge }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative bg-white border border-slate-200 hover:border-primary/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-primary transition-colors" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-primary bg-primary/5 border border-primary/15 px-2.5 py-0.5 rounded-full">
                  {badge}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {label}
                </p>
                <p className="text-base font-bold text-neutral group-hover:text-primary transition-colors truncate">
                  {value}
                </p>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{sub}</span>
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Content: Form + Quick Support Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral">
                  Send us a direct message
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the form below and we will respond within 2 hours
                  during business days.
                </p>
              </div>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-neutral font-bold text-xl mb-1">
                    Thank you, {form.name.split(" ")[0]}!
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your message has reached our support desk. We&apos;ve sent a
                    confirmation receipt to{" "}
                    <span className="font-semibold text-neutral">{form.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                    setStatus("idle");
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-sm btn btn-primary btn-outline hover:-translate-y-0.5 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Shafin Ahmed"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. shafin@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                      Phone Number <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 1700-000000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                      Topic / Department
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/60 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Choose inquiry type...</option>
                      <option value="orders">Orders, Shipping & Delivery</option>
                      <option value="products">Product Advice & Age Guidance</option>
                      <option value="schools">Schools & Bulk Institutional Orders</option>
                      <option value="returns">Returns & Replacement Warranty</option>
                      <option value="other">General Feedback / Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wide"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need help with (order number, child's age group, or school details)..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Your privacy is protected. No spam ever.</span>
                  </p>

                  <button
                    type="submit"
                    disabled={
                      isLoading || !form.name || !form.email || !form.message
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-primary btn text-white text-sm font-medium shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Sidebar: Quick Help & Guarantees */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Response Box */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral text-sm">
                    Guaranteed Response SLA
                  </h4>
                  <p className="text-xs text-primary font-semibold">
                    Usually replies in &lt; 2 hours
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our support team and pedagogical advisers are available Sunday
                through Friday, 9:00 AM to 7:00 PM GMT.
              </p>
            </div>

            {/* Direct Instant Channels */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-neutral text-sm flex items-center gap-2">
                <Headphones className="w-4 h-4 text-primary" />
                <span>Prefer instant assistance?</span>
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our learning specialists for recommendations,
                urgent delivery queries, or gift advice.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-emerald-500/40 bg-slate-50/50 hover:bg-emerald-50/30 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium text-slate-700 group-hover:text-emerald-700">
                      WhatsApp Live Chat
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    Online Now
                  </span>
                </a>

                <a
                  href="tel:+8801700000000"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-primary/40 bg-slate-50/50 hover:bg-primary/5 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span className="font-medium text-slate-700 group-hover:text-primary">
                      Direct Hotlines
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    +880 1700-000000
                  </span>
                </a>
              </div>
            </div>

            {/* Parent Promise Badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-neutral">
                  100% Happiness Promise
                </h5>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Missing a piece or not completely satisfied? We provide replacement
                  parts free of charge within 7 days of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
