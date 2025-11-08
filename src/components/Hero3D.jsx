import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, MousePointer2 } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
          <Rocket className="w-4 h-4 text-purple-300" />
          <span className="text-sm font-medium tracking-wide">OrbitWeb presents • Web4Good Campaign</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Launch your mission into the cosmic web
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Free, immersive websites for small non‑profits—crafted with performance, accessibility, and heart.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#offer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 font-semibold transition-colors"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold transition-colors"
          >
            How it Works
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center text-white/70 gap-2">
          <MousePointer2 className="w-4 h-4" />
          <span className="text-sm">Interact with the scene • Scroll to explore the story</span>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
