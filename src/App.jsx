import React from 'react';
import Hero3D from './components/Hero3D';
import ScrollStory from './components/ScrollStory';
import Offer from './components/Offer';
import ApplyForm from './components/ApplyForm';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero3D />
      <ScrollStory />
      <Offer />
      <ApplyForm />
      <footer className="border-t border-white/10 py-10 text-center text-white/60 bg-black">
        <p>© {new Date().getFullYear()} OrbitWeb — Web4Good Campaign. Built for community impact.</p>
      </footer>
    </div>
  );
};

export default App;
