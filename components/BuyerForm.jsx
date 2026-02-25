import WasteChips from './WasteChips';
import { WASTE_TYPES, PRICE_RANGES } from '@/lib/constants';

export default function BuyerForm({ 
  selectedTypes, 
  onTypeToggle, 
  formData, 
  onFormChange, 
  onSubmit 
}) {
  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-5 md:p-7 flex flex-col gap-4 md:gap-5">
      <div>
        <div className="font-display font-bold text-base md:text-lg text-text-primary">Post a Material Demand</div>
        <div className="text-[13px] text-text-secondary mt-2 md:-mt-3">Tell us what you need and we&apos;ll surface the right supply.</div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="text-xs font-medium text-text-secondary tracking-wide">Material Types Needed</div>
        <WasteChips
          types={WASTE_TYPES}
          selected={selectedTypes}
          onChange={onTypeToggle}
          accent="amber"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Company Name</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          placeholder="e.g. GreenCore Recycling Ltd."
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-text-secondary tracking-wide">Min. Quantity</label>
          <input
            className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
            placeholder="e.g. 50 kg"
            value={formData.min}
            onChange={(e) => handleInputChange('min', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-text-secondary tracking-wide">Max. Quantity</label>
          <input
            className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
            placeholder="e.g. 500 kg"
            value={formData.max}
            onChange={(e) => handleInputChange('max', e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Preferred Location / Region</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          placeholder="e.g. Greater London, Midlands"
          value={formData.region}
          onChange={(e) => handleInputChange('region', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Price Range (per kg)</label>
        <select
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] appearance-none cursor-pointer"
          value={formData.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
        >
          <option value="">Select a range...</option>
          {PRICE_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Contact Email</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          type="email"
          placeholder="procurement@company.com"
          value={formData.contact}
          onChange={(e) => handleInputChange('contact', e.target.value)}
        />
      </div>

      <button
        className="w-full px-5 md:px-7 py-3 md:py-3.5 rounded-full border-none cursor-pointer font-medium text-sm transition-all duration-200 whitespace-nowrap bg-amber text-white hover:bg-[#d4880e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(243,156,18,0.3)]"
        onClick={onSubmit}
      >
        Post Demand →
      </button>
    </div>
  );
}
