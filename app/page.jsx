'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GiverForm from '@/components/GiverForm';
import BuyerForm from '@/components/BuyerForm';
import MapPanel from '@/components/MapPanel';
import FeedPanel from '@/components/FeedPanel';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { giverListings, buyerListings, giverSteps, buyerSteps } from '@/lib/constants';

export default function ReWasteApp() {
  const [activeTab, setActiveTab] = useState('giver');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [buyerTypes, setBuyerTypes] = useState([]);
  const [formData, setFormData] = useState({ 
    name: '', 
    qty: '', 
    location: '', 
    notes: '' 
  });
  const [buyerData, setBuyerData] = useState({ 
    company: '', 
    min: '', 
    max: '', 
    contact: '', 
    region: '', 
    price: '' 
  });

  const isGiver = activeTab === 'giver';

  // Update CSS accent variable when tab changes
  useEffect(() => {
    const root = document.documentElement;
    if (isGiver) {
      root.style.setProperty('--accent', 'var(--green)');
      root.style.setProperty('--accent-light', 'var(--green-light)');
      root.style.setProperty('--accent-glow', 'var(--green-glow)');
      root.style.setProperty('--accent-dark', 'var(--green-dark)');
    } else {
      root.style.setProperty('--accent', 'var(--amber)');
      root.style.setProperty('--accent-light', 'var(--amber-light)');
      root.style.setProperty('--accent-glow', 'var(--amber-glow)');
      root.style.setProperty('--accent-dark', '#d4880e');
    }
  }, [activeTab, isGiver]);

  const toggleType = (type) => {
    if (isGiver) {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    } else {
      setBuyerTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    }
  };

  const handleGiverSubmit = () => {
    console.log('Giver Form Submitted:', {
      selectedTypes,
      ...formData,
    });
    // In production, this would make an API call
    alert('Listing posted successfully! (Mock submission)');
  };

  const handleBuyerSubmit = () => {
    console.log('Buyer Form Submitted:', {
      buyerTypes,
      ...buyerData,
    });
    // In production, this would make an API call
    alert('Demand posted successfully! (Mock submission)');
  };

  const steps = isGiver ? giverSteps : buyerSteps;
  const feed = isGiver ? buyerListings : giverListings;
  const feedTitle = isGiver ? 'Active Buyers Near You' : 'Recent Supply Listings';

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <Hero mode={activeTab} />

      {/* PORTAL SECTION */}
      <section className="px-4 md:px-12 pb-12 md:pb-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* LEFT: FORM */}
          {isGiver ? (
            <GiverForm
              selectedTypes={selectedTypes}
              onTypeToggle={toggleType}
              formData={formData}
              onFormChange={setFormData}
              onSubmit={handleGiverSubmit}
            />
          ) : (
            <BuyerForm
              selectedTypes={buyerTypes}
              onTypeToggle={toggleType}
              formData={buyerData}
              onFormChange={setBuyerData}
              onSubmit={handleBuyerSubmit}
            />
          )}

          {/* RIGHT: MAP + FEED */}
          <div className="flex flex-col gap-4 md:gap-5">
            <MapPanel mode={activeTab} />
            <FeedPanel items={feed} accent={activeTab} title={feedTitle} />
          </div>
        </div>
      </section>

      <HowItWorks mode={activeTab} steps={steps} />

      <Footer />
    </>
  );
}
