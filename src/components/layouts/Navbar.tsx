"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import AuthModal from "../modal/AuthModal";

const Navbar = () => {
  const path = usePathname();
  const [authOpen, setAuthOpen] = useState(false);
  const nav = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <div className="w-full px-1 md:px-0 bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={
                        isActive(item.href) ? "text-primary font-medium" : ""
                      }
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-neutral px-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className={
                      isActive(item.href) ? "text-primary font-medium" : ""
                    }
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <Link href="/cart" className="btn btn-primary btn-square shadow-[0_8px_20px_-6px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:shadow-[0_10px_24px_-6px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:-translate-y-0.5 transition-all">
              <RiShoppingCart2Line size={20} />
            </Link>
            <button
              onClick={() => setAuthOpen(true)}
              className="btn btn-primary btn-outline hover:-translate-y-0.5 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

export default Navbar;
