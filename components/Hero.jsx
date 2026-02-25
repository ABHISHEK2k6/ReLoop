'use client';
import { useState, useEffect } from 'react';
import { platformStats } from '@/lib/constants';

function AnimatedCounter({ value, duration = 2000, trigger }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Parse the value to extract number and suffix
    const match = value.match(/^([\d,]+)\s*(.*)$/);
    if (!match) return;
    
    const numStr = match[1].replace(/,/g, '');
    const suffix = match[2];
    const target = parseInt(numStr);
    
    // Reset to 0 when trigger changes
    setCount(0);
    
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration, trigger]);
  
  // Format the count with commas and suffix
  const match = value.match(/^([\d,]+)\s*(.*)$/);
  const suffix = match ? match[2] : '';
  const formattedCount = count.toLocaleString();
  
  return <>{formattedCount}{suffix ? ` ${suffix}` : ''}</>;
}

export default function Hero({ mode }) {
  const isGiver = mode === 'giver';
  const accent = isGiver ? 'green' : 'amber';
  const stats = isGiver ? platformStats.giver : platformStats.buyer;

  return (
    <section 
      className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 py-20 pb-16 max-md:px-5 max-md:py-12 max-md:gap-8"
      style={{
        background: 'radial-gradient(ellipse 60% 60% at 15% 50%, rgba(46,204,113,0.06) 0%, transparent 70%)'
      }}
    >
      <div className="flex flex-col justify-center gap-6">
        <div 
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase w-fit border ${
            isGiver 
              ? 'bg-green-glow text-green border-green/25'
              : 'bg-amber-glow text-amber border-amber/25'
          }`}
        >
          {isGiver ? '♻️ Giver Portal' : '🏭 Buyer Portal'}
        </div>
        <h1 className="font-display font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.1] tracking-tight text-text-primary">
          {isGiver ? (
            <>
              Turn Your Waste<br />Into <span className="text-[var(--accent)]">Impact</span>
            </>
          ) : (
            <>
              Source Raw<br />Materials <span className="text-amber">Reliably</span>
            </>
          )}
        </h1>
        <p className="text-text-secondary text-base font-light max-w-[460px] leading-[1.7]">
          {isGiver
            ? 'List your recyclable or electronic waste. Vetted recycling companies collect it — at no cost to you.'
            : 'Post your material demands and connect with a consistent pipeline of verified waste suppliers across the country.'
          }
        </p>
        <div className="flex gap-3 flex-wrap">
          {isGiver ? (
            <>
              <button className="px-7 py-3.5 rounded-full border-none cursor-pointer font-medium text-sm transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,204,113,0.3)]">
                Post a Listing →
              </button>
              <button className="px-7 py-3.5 rounded-full bg-transparent border border-dark-border text-text-secondary font-medium text-sm cursor-pointer transition-all duration-200 hover:border-text-secondary hover:text-text-primary">
                See How It Works
              </button>
            </>
          ) : (
            <>
              <button className="px-7 py-3.5 rounded-full border-none cursor-pointer font-medium text-sm transition-all duration-200 whitespace-nowrap bg-amber text-white hover:bg-[#d4880e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(243,156,18,0.3)]">
                Post a Demand →
              </button>
              <button className="px-7 py-3.5 rounded-full bg-transparent border border-dark-border text-text-secondary font-medium text-sm cursor-pointer transition-all duration-200 hover:border-text-secondary hover:text-text-primary">
                Browse Supply
              </button>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-dark-border rounded-2xl overflow-hidden border border-dark-border self-start">
        <div className="bg-dark-card px-6 pt-5 pb-5 flex flex-col gap-1">
          <div className={`font-display font-bold text-[28px] leading-none ${isGiver ? 'text-green' : 'text-amber'}`}>
            <AnimatedCounter value={stats.totalListings} trigger={mode} />
          </div>
          <div className="text-xs text-text-secondary mt-1">Active Listings</div>
        </div>
        <div className="bg-dark-card px-6 pt-5 pb-3 flex flex-col gap-1">
          <div className={`font-display font-bold text-[28px] leading-none ${isGiver ? 'text-green' : 'text-amber'}`}>
            <AnimatedCounter value={stats.materialsDiverted} trigger={mode} />
          </div>
          <div className="text-xs text-text-secondary mt-1">Materials Diverted</div>
        </div>
        <div className="bg-dark-card px-6 pt-5 pb-3 flex flex-col gap-1">
          <div className={`font-display font-bold text-[28px] leading-none ${isGiver ? 'text-green' : 'text-amber'}`}>
            <AnimatedCounter value={isGiver ? stats.verifiedBuyers : stats.verifiedSuppliers} trigger={mode} />
          </div>
          <div className="text-xs text-text-secondary mt-1">{isGiver ? 'Verified Buyers' : 'Verified Suppliers'}</div>
        </div>
      </div>
    </section>
  );
}
