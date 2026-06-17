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
  ChevronRight,
} from "lucide-react";

// Types 

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

// Contact Info Cards

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@mindsprout.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@herokidz.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+880 1700-000000",
    sub: "Sat – Thu, 9 AM – 6 PM",
    href: "tel:+8801700000000",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Dhaka, Bangladesh",
    sub: "By appointment only",
    href: "https://maps.google.com",
  },
];

// FAQ items 

const faqs = [
  {
    q: "How long does delivery take?",
    a: "We deliver within 3–5 business days inside Dhaka and 5–7 days outside.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Yes — unopened products can be returned within 7 days of delivery.",
  },
  {
    q: "Do you offer bulk or school orders?",
    a: "Absolutely. Reach out via the form and mention your quantity — we'll work out a deal.",
  },
];

// Page 

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    // Replace with your actual submit logic
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="flex justify-center items-center mt-10">
        <div className="bg-white">
          <div className="max-w-7xl text-center mx-auto px-4 py-8 md:py-10">
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-4">
              Get in touch
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
              We'd love to <span className="text-primary">hear from you</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl">
              Have a question about an order, need help choosing a kit, or just
              want to say hi? Drop us a message and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 hover:border-primary hover:-translate-0.5 transition-all hover:shadow-md duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">
                  {value}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 shrink-0" />
                  {sub}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-slate-900">Send a message</h2>
            </div>

            {isSuccess ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Message sent!</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Thanks, {form.name.split(" ")[0]}. We'll be in touch soon.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", subject: "", message: "" });
                    setStatus("idle");
                  }}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form fields */
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Your name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahim Uddin"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Email address <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahim@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition appearance-none"
                  >
                    <option value="">Select a topic…</option>
                    <option value="order">Order & Delivery</option>
                    <option value="product">Product Question</option>
                    <option value="return">Return or Exchange</option>
                    <option value="bulk">Bulk / School Order</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !form.name || !form.email || !form.message}
                  className="btn btn-primary hover:bg-secondary transition-colors self-start gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar: FAQ */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">
                Frequently asked
              </h2>
              <div className="flex flex-col divide-y divide-slate-100">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-2 text-left"
                    >
                      <span className="text-sm font-medium text-slate-800">
                        {faq.q}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          openFaq === i ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div className="bg-primary/5 border border-slate-200 hover:border-primary hover:-translate-0.5 transition-all rounded-2xl p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Quick response guaranteed
                </p>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Our team is online Sat–Thu 9 AM–6 PM. Messages sent outside
                  hours are answered the next working morning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
