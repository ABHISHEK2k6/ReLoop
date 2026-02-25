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
    <div className="panel">
      <div>
        <div className="panel-title">Post a Waste Listing</div>
        <div className="panel-subtitle">Tell us what you have and where it is.</div>
      </div>

      <div className="field-group">
        <div className="field-label">Waste Types</div>
        <WasteChips
          types={WASTE_TYPES}
          selected={selectedTypes}
          onChange={onTypeToggle}
          accent="green"
        />
      </div>

      <div className="field-group">
        <label className="field-label">Your Name / Company</label>
        <input
          className="field-input"
          placeholder="e.g. John Smith or Acme Ltd."
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label className="field-label">Estimated Weight</label>
        <input
          className="field-input"
          placeholder="e.g. 5 kg, 2 tonnes"
          value={formData.qty}
          onChange={(e) => handleInputChange('qty', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label className="field-label">Pickup Location</label>
        <input
          className="field-input"
          placeholder="Address or city"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>

      <div className="field-group">
        <div className="field-label">Upload Photos</div>
        <div className="upload-zone">
          <div className="upload-icon">📷</div>
          <div className="upload-label">Drag & drop photos here</div>
          <div className="upload-sub">PNG, JPG up to 10MB each</div>
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">Additional Notes</label>
        <textarea
          className="field-input"
          placeholder="Condition, access details, availability..."
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
        />
      </div>

      <button
        className="btn-primary btn-green"
        style={{ width: '100%', padding: '14px' }}
        onClick={onSubmit}
      >
        Post Listing →
      </button>
    </div>
  );
}
