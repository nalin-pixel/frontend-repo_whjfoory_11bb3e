import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, Globe, Sparkles, Rocket } from 'lucide-react';

const Section = ({ icon: Icon, title, children, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0.85]);
  const glow = index % 2 === 0 ? 'from-purple-500/20 via-transparent to-transparent' : 'from-cyan-500/20 via-transparent to-transparent';

  return (
    <section ref={ref} className="relative py-36 md:py-48">
      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto px-6">
        <div className="flex items-start gap-5">
          <div className="shrink-0 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <Icon className="w-6 h-6 text-white/80" />
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h3>
            <p className="mt-4 text-white/80 leading-relaxed text-base md:text-lg">{children}</p>
          </div>
        </div>
      </motion.div>
      {/* subtle vertical glow sweep */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${glow}`} />
    </section>
  );
};

const ScrollStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: typeof window !== 'undefined' ? undefined : containerRef });

  // Global background storytelling layers
  const hue = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.6, 0.9]);
  const fog1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.35, 0.15, 0.3]);
  const fog2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.25, 0.4]);
  const xParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });

  return (
    <div id="how" ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Cosmic background layers */}
      <motion.div
        aria-hidden
        style={{ filter: hue.to((h) => `hue-rotate(${h}deg)`) }}
        className="pointer-events-none absolute inset-0"
      >
        {/* stars grid */}
        <motion.div
          style={{ opacity: starsOpacity, x: xParallax }}
          className="absolute inset-0"
        >
          <div className="w-full h-full" style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 0, transparent 2px),\
               radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.5) 0, transparent 2px),\
               radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.4) 0, transparent 2px),\
               radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.35) 0, transparent 2px)'
          }} />
        </motion.div>
        {/* nebula fog layers */}
        <motion.div style={{ opacity: fog1 }} className="absolute -inset-20 bg-[radial-gradient(closest-side,rgba(168,85,247,0.35),transparent_70%)]" />
        <motion.div style={{ opacity: fog2 }} className="absolute inset-0 translate-y-28 bg-[radial-gradient(closest-side,rgba(34,197,94,0.25),transparent_70%)]" />
      </motion.div>

      {/* progress bar */}
      <div className="sticky top-0 z-20">
        <div className="h-1 w-full bg-white/5">
          <motion.div style={{ scaleX: progressX, transformOrigin: '0% 50%' }} className="h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400" />
        </div>
      </div>

      {/* Sticky headline for narrative context */}
      <div className="h-[20vh] md:h-[25vh]" />
      <div className="sticky top-12 md:top-16 z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/10 px-3 py-1.5">
            <Rocket className="w-4 h-4 text-white/80" />
            <span className="text-xs md:text-sm text-white/80">Scroll the journey</span>
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A cosmic path from idea to impact
          </h2>
        </div>
      </div>

      {/* Story beats */}
      <Section index={0} icon={Sparkles} title="Discovery & Vision">
        We listen first. Your story, your community, your goals. Then we sketch a vision that feels like your future—authentic and awe‑inspiring.
      </Section>
      <Section index={1} icon={Heart} title="Design for Trust">
        We design interfaces that invite action: clear structure, inclusive typography, and motion that directs attention—not distracts it.
      </Section>
      <Section index={2} icon={Globe} title="Build for Everyone">
        From low‑bandwidth regions to the latest devices, your site is resilient, fast, and accessible. Because impact should never have a loading screen.
      </Section>
      <Section index={3} icon={Sparkles} title="Launch & Empower">
        We deploy, teach your team, and stay available. You get analytics, SEO, and the tools to grow—without losing the magic.
      </Section>
      <div className="h-24" />
    </div>
  );
};

export default ScrollStory;
