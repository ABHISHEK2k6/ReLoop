import { platformStats } from '@/lib/constants';

export default function Hero({ mode }) {
  const isGiver = mode === 'giver';
  const accent = isGiver ? 'green' : 'amber';

  return (
    <section className="hero">
      <div className="hero-left">
        <div className={`portal-badge badge-${accent}`}>
          {isGiver ? '♻️ Giver Portal' : '🏭 Buyer Portal'}
        </div>
        <h1 className="hero-title">
          {isGiver ? (
            <>
              Turn Your Waste<br />Into <span>Impact</span>
            </>
          ) : (
            <>
              Source Raw<br />Materials <span style={{ color: 'var(--amber)' }}>Reliably</span>
            </>
          )}
        </h1>
        <p className="hero-desc">
          {isGiver
            ? 'List your recyclable or electronic waste. Vetted recycling companies collect it — at no cost to you.'
            : 'Post your material demands and connect with a consistent pipeline of verified waste suppliers across the country.'
          }
        </p>
        <div className="hero-ctas">
          {isGiver ? (
            <>
              <button className="btn-primary btn-green">Post a Listing →</button>
              <button className="btn-ghost">See How It Works</button>
            </>
          ) : (
            <>
              <button className="btn-primary btn-amber" style={{ background: 'var(--amber)' }}>
                Post a Demand →
              </button>
              <button className="btn-ghost">Browse Supply</button>
            </>
          )}
        </div>
      </div>
      <div className="hero-right">
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-value" style={{ color: isGiver ? 'var(--green)' : 'var(--amber)' }}>
              {platformStats.totalListings}
            </div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" style={{ color: isGiver ? 'var(--green)' : 'var(--amber)' }}>
              {platformStats.materialsDiverted}
            </div>
            <div className="stat-label">Materials Diverted</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" style={{ color: isGiver ? 'var(--green)' : 'var(--amber)' }}>
              {platformStats.verifiedBuyers}
            </div>
            <div className="stat-label">Verified Buyers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
