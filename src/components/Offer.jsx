import React from 'react';
import { CheckCircle2, BadgeCheck, ShieldCheck } from 'lucide-react';

const perks = [
  'Custom design tailored to your mission',
  'Fast, accessible, mobile‑first build',
  '1:1 onboarding and content guidance',
  'Free hosting for 12 months',
];

const Offer = () => {
  return (
    <section id="offer" className="relative bg-gradient-to-b from-[#06030c] via-[#0b0615] to-[#0a0114] text-white py-28">
      {/* holographic border card */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-purple-300 font-semibold">
            <BadgeCheck className="w-5 h-5" />
            Web4Good by OrbitWeb
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">What you get</h2>
          <p className="mt-4 text-white/80 max-w-prose">
            We partner with small non‑profits to design and launch a high‑impact website—completely free. You focus on the mission, we handle the pixels and performance.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-lg">
            <div className="inline-flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="w-5 h-5" />
              Eligibility
            </div>
            <p className="mt-2 text-white/80 text-sm">
              Available to registered non‑profits with teams of under 15 people. Priority for organizations focused on community health, education, environment, and arts.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-white/5 p-3">1 Project per org</div>
              <div className="rounded-lg bg-white/5 p-3">Timeline 2–4 weeks</div>
              <div className="rounded-lg bg-white/5 p-3">Multilingual ready</div>
              <div className="rounded-lg bg-white/5 p-3">SEO & analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
