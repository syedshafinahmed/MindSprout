import Link from "next/link";
import Logo from "./Logo";
import { ImLinkedin2 } from "react-icons/im";
import { SiDiscord } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Dashed Top Right Fade Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in oklab, var(--color-primary) 40%, transparent) 0.5px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklab, var(--color-primary) 40%, transparent) 0.5px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            maskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 100% 100% at 100% 0%, #000 60%, transparent 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Content */}
        <div className="relative z-10 pt-16 pb-8">
          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12">
            {/* Brand col */}
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Empowering the next generation of heroes through fun, curiosity,
                and meaningful learning experiences.
              </p>
            </div>

            {/* Links */}
            {[
              {
                heading: "Services",
                links: ["Branding", "Design", "Marketing", "Advertisement"],
              },
              {
                heading: "Company",
                links: ["About us", "Contact", "Jobs", "Press kit"],
              },
              {
                heading: "Legal",
                links: ["Terms of use", "Privacy policy", "Cookie policy"],
              },
            ].map(({ heading, links }) => (
              <nav key={heading} className="space-y-4">
                <h6 className="text-primary font-semibold text-sm uppercase tracking-widest">
                  {heading}
                </h6>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a className="text-sm text-slate-500 hover:text-primary transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom bar — mirrors banner stats strip */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:items-center justify-between">
            <span className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} HeroKidz. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/syedshafinahmed"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <TbBrandGithubFilled size={16} className="text-primary" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/syed-shafin-ahmed/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ImLinkedin2 size={16} className="text-primary" />
              </Link>
              <Link
                href="https://discord.com/users/1440245018341277756"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <SiDiscord size={16} className="text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
