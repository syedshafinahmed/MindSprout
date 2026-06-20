"use client";
import Image from "next/image";
import { useState } from "react";
import { RiCloseLine, RiAppleFill, RiGoogleFill } from "react-icons/ri";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

const AuthModal = ({ open, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-neutral/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      />

      {/* Modal shell */}
      <div className="relative w-full max-w-220 bg-base-200 rounded-md shadow-2xl overflow-hidden grid md:grid-cols-[2fr_3fr] animate-[modalRise_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2 top-2 z-20 grid h-7 w-7 place-items-center rounded-md bg-base-100/90 text-base-content shadow-sm transition-transform hover:scale-105 hover:bg-base-100"
        >
          <RiCloseLine size={20} />
        </button>

        {/* Left brand panel */}
        <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-neutral p-9 text-neutral-content">
          {/* Gradient mesh blobs */}
          <div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-primary opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] h-64 w-64 rounded-full bg-success opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 right-6 h-24 w-24 rounded-full bg-accent opacity-20 blur-2xl" />

          <div className="relative flex justify-center items-center z-10">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-8 h-8 md:w-20 md:h-20"
            />
          </div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight">
              Learning adventures,
              <br />
              picked by parents.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-content/75">
              Join thousands of Bangladeshi families building brighter futures,
              one story, toy, and lesson at a time.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "var(--color-primary)",
                "var(--color-accent)",
                "var(--color-success)",
              ].map((c) => (
                <span
                  key={c}
                  className="h-7 w-7 rounded-full border-2 border-neutral"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-xs text-neutral-content/70">
              12,400+ families already onboard
            </span>
          </div>
        </div>

        {/* Right form panel */}
        <div className="relative flex flex-col overflow-y-auto px-7 py-8 sm:px-10 sm:py-9">
          {/* Tab switcher */}
          <div className="relative mb-8 grid grid-cols-2 rounded-md bg-base-300 p-1">
            <div
              className="absolute inset-y-1 w-[calc(50%-4px)] rounded-md bg-neutral shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform:
                  activeTab === "login"
                    ? "translateX(4px)"
                    : "translateX(calc(100% + 4px))",
              }}
            />
            <button
              onClick={() => setActiveTab("login")}
              className={`relative z-10 rounded-md py-2.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "login"
                  ? "text-neutral-content"
                  : "text-base-content/60 hover:text-base-content"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`relative z-10 rounded-md py-2.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "register"
                  ? "text-neutral-content"
                  : "text-base-content/60 hover:text-base-content"
              }`}
            >
              Create account
            </button>
          </div>

          {activeTab === "login" ? (
            <div className="flex flex-1 flex-col">
              <h3 className="text-2xl font-semibold tracking-tight text-base-content">
                Welcome back
              </h3>
              <p className="mt-1.5 text-sm text-base-content/55">
                Log in to pick up where your little one left off.
              </p>

              <form className="mt-7 flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="login-email"
                    className="text-xs font-medium text-base-content/70"
                  >
                    Email address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-md border border-base-content/10 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/35 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-neutral/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="login-password"
                      className="text-xs font-medium text-base-content/70"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs font-medium text-neutral hover:underline"
                    >
                      Forgot?
                    </button>
                  </div>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="h-12 rounded-md border border-base-content/10 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/35 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-neutral/15"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 h-12 rounded-md bg-primary text-sm font-semibold text-white shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_55%,transparent)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] active:translate-y-0"
                >
                  Log in
                </button>

                <div className="my-2 flex items-center gap-3">
                  <span className="h-px flex-1 bg-base-content/10" />
                  <span className="text-[11px] uppercase tracking-wide text-base-content/40">
                    or continue with
                  </span>
                  <span className="h-px flex-1 bg-base-content/10" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex h-11 items-center justify-center gap-2 rounded-md border border-base-content/10 bg-base-100 text-sm font-medium text-base-content transition-colors hover:bg-base-300"
                  >
                    <RiGoogleFill size={17} />
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex h-11 items-center justify-center gap-2 rounded-md border border-base-content/10 bg-base-100 text-sm font-medium text-base-content transition-colors hover:bg-base-300"
                  >
                    <RiAppleFill size={17} />
                    Apple
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-base-content/55">
                New to{" "}
                <span className="text-neutral">
                  Mind<span className="text-primary">Sprout</span>
                </span>
                ?{" "}
                <button
                  onClick={() => setActiveTab("register")}
                  className="font-semibold text-neutral hover:underline"
                >
                  Create an account
                </button>
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col">
              <h3 className="text-2xl font-semibold tracking-tight text-base-content">
                Create your account
              </h3>
              <p className="mt-1.5 text-sm text-base-content/55">
                Set up your family profile in under a minute.
              </p>

              <form className="mt-7 flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="reg-name"
                    className="text-xs font-medium text-base-content/70"
                  >
                    Full name
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    placeholder="Fatima Rahman"
                    className="h-12 rounded-md border border-base-content/10 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/35 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-neutral/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="reg-email"
                    className="text-xs font-medium text-base-content/70"
                  >
                    Email address
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-md border border-base-content/10 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/35 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-neutral/15"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="reg-password"
                    className="text-xs font-medium text-base-content/70"
                  >
                    Password
                  </label>
                  <input
                    id="reg-password"
                    type="password"
                    placeholder="At least 8 characters"
                    className="h-12 rounded-md border border-base-content/10 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/35 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-neutral/15"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 h-12 rounded-md bg-primary text-sm font-semibold text-white shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_55%,transparent)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] active:translate-y-0"
                >
                  Create account
                </button>

                <p className="text-center text-[11px] leading-relaxed text-base-content/45">
                  By continuing you agree to MindSprout&apos;s Terms of Service
                  and Privacy Policy.
                </p>
              </form>

              <p className="mt-4 text-center text-sm text-base-content/55">
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("login")}
                  className="font-semibold text-neutral hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalRise {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
