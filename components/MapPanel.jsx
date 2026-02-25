export default function MapPanel({ mode }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden h-[260px] relative">
      <div 
        className="absolute inset-0 bg-dark"
        style={{
          backgroundImage: 'linear-gradient(rgba(33,38,45,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(33,38,45,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, var(--accent-glow) 0%, transparent 70%)'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl animate-bounce-pin">
        📍
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium bg-dark-card border border-dark-border text-text-secondary whitespace-nowrap">
        <span className="text-[var(--accent)] font-bold">24</span> active listings near you
      </div>
    </div>
  );
}
