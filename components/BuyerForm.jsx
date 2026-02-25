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
    <div className="panel">
      <div>
        <div className="panel-title">Post a Material Demand</div>
        <div className="panel-subtitle">Tell us what you need and we'll surface the right supply.</div>
      </div>

      <div className="field-group">
        <div className="field-label">Material Types Needed</div>
        <WasteChips
          types={WASTE_TYPES}
          selected={selectedTypes}
          onChange={onTypeToggle}
          accent="amber"
        />
      </div>

      <div className="field-group">
        <label className="field-label">Company Name</label>
        <input
          className="field-input"
          placeholder="e.g. GreenCore Recycling Ltd."
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
        />
      </div>

      <div className="two-col">
        <div className="field-group">
          <label className="field-label">Min. Quantity</label>
          <input
            className="field-input"
            placeholder="e.g. 50 kg"
            value={formData.min}
            onChange={(e) => handleInputChange('min', e.target.value)}
          />
        </div>
        <div className="field-group">
          <label className="field-label">Max. Quantity</label>
          <input
            className="field-input"
            placeholder="e.g. 500 kg"
            value={formData.max}
            onChange={(e) => handleInputChange('max', e.target.value)}
          />
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">Preferred Location / Region</label>
        <input
          className="field-input"
          placeholder="e.g. Greater London, Midlands"
          value={formData.region}
          onChange={(e) => handleInputChange('region', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label className="field-label">Price Range (per kg)</label>
        <select
          className="field-input"
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

      <div className="field-group">
        <label className="field-label">Contact Email</label>
        <input
          className="field-input"
          type="email"
          placeholder="procurement@company.com"
          value={formData.contact}
          onChange={(e) => handleInputChange('contact', e.target.value)}
        />
      </div>

      <button
        className="btn-primary btn-amber"
        style={{ width: '100%', padding: '14px', background: 'var(--amber)' }}
        onClick={onSubmit}
      >
        Post Demand →
      </button>
    </div>
  );
}
