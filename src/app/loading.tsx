const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed top-1/4 right-20 w-80 h-80 rounded-full bg-primary opacity-10" />
      <div className="pointer-events-none fixed bottom-1/4 left-1/3 w-52 h-52 rounded-full bg-primary opacity-10" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-tight italic uppercase text-primary mb-5">
          Please wait
        </p>

        {/* Spinner */}
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        </div>

        {/* Text */}
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
          Loading…
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Hang tight while we fetch things for your little explorer.
        </p>

        {/* Shimmer bar */}
        <div className="mt-8 w-full flex flex-col gap-2">
          <div className="h-2 bg-slate-200 rounded-full animate-pulse w-3/4 mx-auto" />
          <div className="h-2 bg-slate-200 rounded-full animate-pulse w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
