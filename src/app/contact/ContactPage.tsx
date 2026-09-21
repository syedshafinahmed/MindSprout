"use client";

import { useState } from "react";
import Contact from "@/components/home/Contact";
import {
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  BookOpen,
  ShieldCheck,
  Send,
  ExternalLink,
  Navigation,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [tourBooked, setTourBooked] = useState(false);
  const [tourForm, setTourForm] = useState({
    parentName: "",
    phone: "",
    childAge: "6-8",
    preferredDay: "Saturday",
  });

  const [sampleRequested, setSampleRequested] = useState(false);
  const [schoolForm, setSchoolForm] = useState({
    schoolName: "",
    contactPerson: "",
    officialEmail: "",
    studentCount: "100-300",
  });

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourForm.parentName || !tourForm.phone) return;
    setTourBooked(true);
  };

  const handleSchoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolForm.schoolName || !schoolForm.officialEmail) return;
    setSampleRequested(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background Glow Accents */}
      <div className="pointer-events-none fixed top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="pointer-events-none fixed bottom-20 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-left">
        <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
          We&apos;re Here For You
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral tracking-tight mb-4 text-left">
          Connect with{" "}
          <span className="text-primary relative inline-block">
            MindSprout
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
          Whether you&apos;re a parent looking for the perfect learning kit, an
          educator planning classroom activities, or just curious about what we
          do — our friendly team is ready to help.
        </p>
      </div>

      {/* Main Contact Form & Direct Channels Section */}
      <Contact showHeader={false} className="py-8 md:py-12" />

      {/* ========================================================================= */}
      {/* ADDITIONAL SECTION 1: Experience Studio & Discovery Lab */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-12 text-left">
            <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-3">
              Discovery Lab & Studio
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral tracking-tight mb-3">
              Visit Our{" "}
              <span className="text-primary relative inline-block">
                Discovery Lab & Studio
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
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Step into our flagship learning studio in Dhaka. Kids can test our
              interactive kits hands-on while parents chat with our early childhood
              development specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Unified Location, Schedule & Highlights Card */}
            <div className="lg:col-span-7 bg-white border border-slate-200 hover:border-primary/50 rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between h-full space-y-6">
              {/* Top: Location details & Amenities */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-neutral">
                        MindSprout Innovation Studio & PlayLab
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        Open Now
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2">
                      Plot 14, Road 11, Block D, Gulshan-1, Dhaka 1212, Bangladesh
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Free Kid-Friendly Parking
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Hands-on Testing Tables
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Educator On-Site
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Studio Operating Hours */}
              <div>
                <h4 className="text-xs font-bold text-neutral uppercase tracking-wider flex items-center gap-2 mb-2.5 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Studio Hours & Activity Sessions</span>
                </h4>

                <div className="divide-y divide-slate-100 text-xs sm:text-sm bg-slate-50/80 rounded-xl p-3.5 border border-slate-100">
                  <div className="py-2 flex items-center justify-between">
                    <span className="font-medium text-slate-700">
                      Saturday – Wednesday
                    </span>
                    <span className="text-slate-500 font-medium">9:30 AM – 6:30 PM (Walk-ins & Advice)</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="font-medium text-slate-700">
                      Thursday (STEM Special)
                    </span>
                    <span className="text-primary font-semibold">10:00 AM – 7:00 PM (Guided Child Activities)</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="font-medium text-slate-700">
                      Friday
                    </span>
                    <span className="text-slate-400 italic">2:30 PM – 8:00 PM (Weekend Family Play)</span>
                  </div>
                </div>
              </div>

              {/* Highlights feature strip to balance height */}
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">
                    Walk-ins are always welcome — test any kit for free with our educators!
                  </span>
                </div>
              </div>

              {/* Bottom: Directions strip */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions via Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <span className="text-xs text-slate-400">
                  10 mins from Gulshan Circle-1
                </span>
              </div>
            </div>

            {/* Right: Quick Studio Tour Booking Card */}
            <div className="lg:col-span-5 bg-white border border-primary/20 hover:border-primary/50 rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <p className="text-[11px] font-semibold text-primary italic uppercase mb-1.5">
                  Complimentary Experience
                </p>
                <h3 className="text-lg font-bold text-neutral mb-1.5">
                  Book a Free Studio Tour
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Bring your child for a 30-minute discovery session with our learning mentors.
                </p>

                {tourBooked ? (
                  <div className="py-8 text-center space-y-3 bg-emerald-50/60 rounded-xl p-4 border border-emerald-200">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-neutral text-sm">
                      Discovery Tour Requested!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Thanks, {tourForm.parentName}. Our studio manager will call{" "}
                      <span className="font-semibold text-neutral">{tourForm.phone}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setTourBooked(false)}
                      className="text-xs text-primary font-semibold underline pt-1 cursor-pointer"
                    >
                      Book another slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleTourSubmit} className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={tourForm.parentName}
                        onChange={(e) =>
                          setTourForm({ ...tourForm, parentName: e.target.value })
                        }
                        placeholder="e.g. Farhana Yasmin"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={tourForm.phone}
                          onChange={(e) =>
                            setTourForm({ ...tourForm, phone: e.target.value })
                          }
                          placeholder="+880 17..."
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Child&apos;s Age Group
                        </label>
                        <select
                          value={tourForm.childAge}
                          onChange={(e) =>
                            setTourForm({ ...tourForm, childAge: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white"
                        >
                          <option value="4-5">4–5 Years (Early Play)</option>
                          <option value="6-8">6–8 Years (STEM Explorer)</option>
                          <option value="9-12">9–12 Years (Young Innovator)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Preferred Visiting Day
                      </label>
                      <select
                        value={tourForm.preferredDay}
                        onChange={(e) =>
                          setTourForm({ ...tourForm, preferredDay: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white"
                      >
                        <option value="Saturday">Saturday (Family Open Day)</option>
                        <option value="Sunday">Sunday (Morning Play)</option>
                        <option value="Monday">Monday (Afternoon Lab)</option>
                        <option value="Thursday">Thursday (STEM Special)</option>
                        <option value="Friday">Friday (Evening Session)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-1 bg-primary btn text-white text-sm font-medium shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:-translate-y-0.5 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      Reserve Free Discovery Slot
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>Over 350+ children visited our studio this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ADDITIONAL SECTION 2: Schools, STEM Clubs & Bulk Institutional Partnerships */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-neutral text-white rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Background Decorative glow */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

          {/* Header */}
          <div className="max-w-3xl mb-12 relative z-10 text-left">
            <p className="text-xs font-semibold tracking-tight italic uppercase text-accent mb-3">
              Schools & Institutional
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Empowering Classrooms &{" "}
              <span className="text-accent relative inline-block">
                Learning Centers
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-accent/30"
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
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We partner with schools, kindergartens, robotics clubs, and NGOs
              to make hands-on educational kits accessible across Bangladesh. Get
              exclusive bulk volume pricing and custom curriculum matching.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 relative z-10">
            {[
              {
                icon: Award,
                title: "Up to 30% Institutional Discount",
                desc: "Substantial savings for orders above 25 kits, with flexible invoicing and payment terms.",
              },
              {
                icon: BookOpen,
                title: "Curriculum Integration",
                desc: "Tailored kit pairings aligned with NCTB, Cambridge, and IB primary curricula.",
              },
              {
                icon: Users,
                title: "Teacher Training & Guides",
                desc: "Comprehensive lesson plans, rubrics, and activity sheets for classroom facilitators.",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Non-Toxic Tested",
                desc: "All kits are rigorously certified non-toxic with zero sharp edges for young learners.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive School Sample Kit Request */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-accent italic">
                  For School Administrators & Teachers
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Request a Free School Evaluation Box
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Want to evaluate MindSprout kits before ordering for your grade?
                  Tell us about your institution and we&apos;ll ship a free sample
                  curriculum box with teacher notes.
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Free courier to your school</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>No commitment required</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                {sampleRequested ? (
                  <div className="bg-white/15 border border-accent/30 rounded-xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 text-accent flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Evaluation Request Received!
                    </h4>
                    <p className="text-xs text-slate-200">
                      We will verify your institutional address for{" "}
                      <span className="font-semibold text-accent">
                        {schoolForm.schoolName}
                      </span>{" "}
                      and dispatch your sample kit within 48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSampleRequested(false)}
                      className="text-xs text-accent underline pt-1 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSchoolSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={schoolForm.schoolName}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            schoolName: e.target.value,
                          })
                        }
                        placeholder="School / Organization Name *"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                      />
                      <input
                        type="text"
                        required
                        value={schoolForm.contactPerson}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            contactPerson: e.target.value,
                          })
                        }
                        placeholder="Coordinator Name / Designation *"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        value={schoolForm.officialEmail}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            officialEmail: e.target.value,
                          })
                        }
                        placeholder="Official School Email *"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                      />
                      <select
                        value={schoolForm.studentCount}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            studentCount: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:border-accent transition-all [&>option]:text-slate-800"
                      >
                        <option value="50-100">50 – 100 Students</option>
                        <option value="100-300">100 – 300 Students</option>
                        <option value="300-1000">300 – 1,000 Students</option>
                        <option value="1000+">1,000+ Students (District Scale)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-1 bg-accent btn text-neutral border-0 text-sm font-semibold shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-accent)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-accent)_70%,transparent)] hover:-translate-y-0.5 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Request Free Evaluation Sample Kit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-neutral">40+ Schools</span>
            <span className="text-xs text-slate-500 mt-0.5">
              Active classroom partners in Dhaka & Chittagong
            </span>
          </div>
          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-slate-200 py-4 sm:py-0">
            <span className="text-xl font-bold text-neutral">&lt; 2 Hours</span>
            <span className="text-xs text-slate-500 mt-0.5">
              Average response time during business hours
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-neutral">100% Non-Toxic</span>
            <span className="text-xs text-slate-500 mt-0.5">
              Safety certified for kids aged 4–12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
