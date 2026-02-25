export default function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-12 h-16 bg-dark/85 backdrop-blur-2xl border-b border-dark-border">
      <div className="flex items-center gap-2.5 font-display font-extrabold text-[28px] text-text-primary no-underline">
        <div className="w-[9px] h-[9px] rounded-full bg-green animate-pulse-dot" />
        ReLoop
      </div>
      <div className="flex bg-dark-card border border-dark-border rounded-full p-1 gap-0.5">
        <button
          className={`px-5 py-[7px] rounded-full border-none cursor-pointer font-medium text-[13px] transition-all duration-200 ${
            activeTab === 'giver' ? 'bg-green text-white' : 'bg-transparent text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => onTabChange('giver')}
        >
          Give Waste
        </button>
        <button
          className={`px-5 py-[7px] rounded-full border-none cursor-pointer font-medium text-[13px] transition-all duration-200 ${
            activeTab === 'buyer' ? 'bg-amber text-white' : 'bg-transparent text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => onTabChange('buyer')}
        >
          Buy Waste
        </button>
      </div>
      <button className="px-5 py-2 rounded-full bg-transparent border border-dark-border text-text-secondary text-[13px] cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:text-text-primary">
        Sign In
      </button>
    </nav>
  );
}
