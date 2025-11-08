import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Globe, Sparkles } from 'lucide-react';

const Section = ({ icon: Icon, title, children, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.6]);

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-purple-500/20 p-3 ring-1 ring-purple-300/30">
            <Icon className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">{title}</h3>
            <p className="mt-3 text-white/80 leading-relaxed">{children}</p>
          </div>
        </div>
      </motion.div>
      <div className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b ${index % 2 ? 'from-black/0 via-purple-500/5 to-black/0' : 'from-black/0 via-blue-500/5 to-black/0'}`} />
    </section>
  );
};

const ScrollStory = () => {
  return (
    <div id="how" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),rgba(0,0,0,0))]" />
      <Section index={0} icon={Sparkles} title="Design that Feels Like Magic">
        We craft immersive, accessible experiences inspired by the future—so your mission shines in the present.
      </Section>
      <Section index={1} icon={Heart} title="Built for Impact">
        Every layout, color, and motion serves a purpose: to help your community understand, trust, and take action.
      </Section>
      <Section index={2} icon={Globe} title="Fast, Inclusive, Global">
        Your site loads fast, works on any device, and speaks to everyone—because your message deserves no barriers.
      </Section>
    </div>
  );
};

export default ScrollStory;
