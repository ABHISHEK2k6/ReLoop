export default function HowItWorks({ mode, steps }) {
  const isGiver = mode === 'giver';

  return (
    <section className="px-4 md:px-12 py-12 md:py-15 border-t border-dark-border">
      <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--accent)] mb-3">How It Works</div>
      <div className="font-display font-bold text-[22px] md:text-[28px] text-text-primary mb-8 md:mb-10">
        {isGiver ? 'Four steps to responsible disposal' : 'Four steps to a reliable supply chain'}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {steps.map((step) => (
          <div 
            className="bg-dark-card border border-dark-border rounded-2xl p-5 md:p-6 flex flex-col gap-3 transition-colors duration-200 hover:border-[var(--accent)]"
            key={step.num}
          >
            <div className="font-display font-extrabold text-[28px] md:text-[32px] text-[var(--accent)] opacity-40">{step.num}</div>
            <div className="font-display font-bold text-[15px] text-text-primary">{step.title}</div>
            <div className="text-[13px] text-text-secondary leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
