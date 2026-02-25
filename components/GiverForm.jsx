import WasteChips from './WasteChips';
import { WASTE_TYPES } from '@/lib/constants';

export default function GiverForm({ 
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
    <div className="bg-dark-card border border-dark-border rounded-2xl p-7 flex flex-col gap-5">
      <div>
        <div className="font-display font-bold text-lg text-text-primary">Post a Waste Listing</div>
        <div className="text-[13px] text-text-secondary mt-3">Tell us what you have and where it is.</div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="text-xs font-medium text-text-secondary tracking-wide">Waste Types</div>
        <WasteChips
          types={WASTE_TYPES}
          selected={selectedTypes}
          onChange={onTypeToggle}
          accent="green"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Your Name / Company</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          placeholder="e.g. John Smith or Acme Ltd."
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Estimated Weight</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          placeholder="e.g. 5 kg, 2 tonnes"
          value={formData.qty}
          onChange={(e) => handleInputChange('qty', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Pickup Location</label>
        <input
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted"
          placeholder="Address or city"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="text-xs font-medium text-text-secondary tracking-wide">Upload Photos</div>
        <div className="border-2 border-dashed border-dark-border rounded-[10px] p-7 text-center cursor-pointer transition-all duration-200 bg-dark hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]">
          <div className="text-[28px] mb-2">📷</div>
          <div className="text-[13px] text-text-secondary">Drag & drop photos here</div>
          <div className="text-[11px] text-text-muted mt-1">PNG, JPG up to 10MB each</div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-text-secondary tracking-wide">Additional Notes</label>
        <textarea
          className="bg-dark border border-dark-border rounded-[10px] px-3.5 py-[11px] text-text-primary text-sm outline-none transition-colors duration-200 w-full focus:border-[var(--accent)] placeholder:text-text-muted resize-y min-h-[80px]"
          placeholder="Condition, access details, availability..."
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
        />
      </div>

      <button
        className="w-full px-7 py-3.5 rounded-full border-none cursor-pointer font-medium text-sm transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,204,113,0.3)]"
        onClick={onSubmit}
      >
        Post Listing →
      </button>
    </div>
  );
}
