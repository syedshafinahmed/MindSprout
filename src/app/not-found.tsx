import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed top-1/4 right-20 w-80 h-80 rounded-full bg-primary opacity-10" />
      <div className="pointer-events-none fixed bottom-1/4 left-1/3 w-52 h-52 rounded-full bg-primary opacity-10" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-5">
          Oops
        </p>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-bold text-neutral leading-none mb-4">
          4<span className="text-primary">0</span>4
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
          Page not found
        </h2>

        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It might have
          been moved, renamed, or it never existed.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1 bg-primary btn hover:bg-primary text-white text-sm font-medium transition-colors"
          >
            Go home
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm btn btn-primary btn-outline transition-colors"
          >
            Explore products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
