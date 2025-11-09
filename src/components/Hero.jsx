import React from 'react';
import { Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(244,114,182,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              New season, new deals
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Buy premium digital files and physical goods in one place
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              Discover hand‑curated products and instant downloads. Safe checkout, instant delivery for files, and fast shipping for goods.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Shop Now
              </a>
              <a href="#about" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop"
                alt="Colorful gadgets and workspace"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
