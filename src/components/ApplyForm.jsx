import React, { useState } from 'react';
import { Send } from 'lucide-react';

const initial = { orgName: '', contact: '', email: '', mission: '' };

const ApplyForm = () => {
  const [data, setData] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submit. Backend can be added later.
    setSubmitted(true);
  };

  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">Apply to Web4Good</h2>
        <p className="mt-3 text-center text-white/80">Tell us a bit about your organization. We review and respond within 3 business days.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-5">
          <div>
            <label className="block text-sm text-white/70">Organization Name</label>
            <input name="orgName" value={data.orgName} onChange={onChange} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/70">Contact Person</label>
              <input name="contact" value={data.contact} onChange={onChange} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" name="email" value={data.email} onChange={onChange} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70">Your Mission</label>
            <textarea name="mission" value={data.mission} onChange={onChange} rows={5} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 font-semibold transition-colors">
            Submit Application <Send className="w-4 h-4" />
          </button>
          {submitted && (
            <p className="text-green-400">Thanks! Your application has been received. We'll reach out shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
