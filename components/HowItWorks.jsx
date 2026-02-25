export default function HowItWorks({ mode, steps }) {
  const isGiver = mode === 'giver';

  return (
    <section className="hiw-section">
      <div className="section-label">How It Works</div>
      <div className="section-title">
        {isGiver ? 'Four steps to responsible disposal' : 'Four steps to a reliable supply chain'}
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
