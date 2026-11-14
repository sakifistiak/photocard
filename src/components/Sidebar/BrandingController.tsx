import React, { useRef } from 'react';
import { CardState } from '../../types/card';
import { Shield, Upload, Trash2, Globe, AtSign } from 'lucide-react';

interface Props {
  card: CardState;
  onUpdate: (fields: Partial<CardState>) => void;
}

export const BrandingController: React.FC<Props> = ({ card, onUpdate }) => {
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        onUpdate({ logoUrl: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="control-section">
      <div className="section-header">
        <Shield size={18} className="section-icon" />
        <div>
          <h3 className="section-title">ব্র্যান্ডিং ও লোগো (Branding & Logo)</h3>
          <p className="section-desc">পেজ বা মিডিয়া লোগো এবং সোশ্যাল ওয়াটারমার্ক যুক্ত করুন</p>
        </div>
      </div>

      {/* Logo Upload Box */}
      <div className="form-group">
        <label className="form-label">মিডিয়া / পেজ লোগো (Logo)</label>
        <input
          type="file"
          ref={logoInputRef}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleLogoUpload}
        />

        {card.logoUrl ? (
          <div className="logo-preview-box">
            <img src={card.logoUrl} alt="Logo" className="logo-thumb" />
            <div className="logo-actions">
              <button
                type="button"
                onClick={() => logoInputRef.current?.click()}
                className="btn-outline-sm"
              >
                পরিবর্তন
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ logoUrl: '' })}
                className="btn-danger-sm"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => logoInputRef.current?.click()}
            className="upload-dropzone compact"
          >
            <Upload size={18} />
            <span>লোগো আপলোড করুন (PNG recommended)</span>
          </button>
        )}
      </div>

      {/* Logo Controls */}
      {card.logoUrl && (
        <div className="adjustments-box">
          <div className="slider-group">
            <div className="slider-label">
              <span>লোগোর আকার (Logo Size)</span>
              <span>{card.logoSize}px</span>
            </div>
            <input
              type="range"
              min={24}
              max={90}
              value={card.logoSize}
              onChange={(e) => onUpdate({ logoSize: Number(e.target.value) })}
              className="form-range"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">লোগোর অবস্থান (Position)</label>
            <div className="position-grid">
              {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => onUpdate({ logoPosition: pos })}
                  className={`pos-btn ${card.logoPosition === pos ? 'active' : ''}`}
                >
                  {pos === 'top-left' && '↖ উপরে বামে'}
                  {pos === 'top-right' && '↗ উপরে ডানে'}
                  {pos === 'bottom-left' && '↙ নিচে বামে'}
                  {pos === 'bottom-right' && '↘ নিচে ডানে'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Website & Social Watermark */}
      <div className="form-group" style={{ marginTop: '16px' }}>
        <div className="checkbox-row" style={{ marginBottom: '10px' }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={card.showWatermark}
              onChange={(e) => onUpdate({ showWatermark: e.target.checked })}
            />
            <span>ফুটার ওয়াটারমার্ক প্রদর্শন করুন (Show Watermark Bar)</span>
          </label>
        </div>

        {card.showWatermark && (
          <div className="form-row">
            <div className="form-group flex-1">
              <label className="form-label">
                <Globe size={13} />
                <span>ডোমেইন / ওয়েবসাইট</span>
              </label>
              <input
                type="text"
                value={card.domainText}
                onChange={(e) => onUpdate({ domainText: e.target.value })}
                placeholder="newsportal.com"
                className="form-input"
              />
            </div>

            <div className="form-group flex-1">
              <label className="form-label">
                <AtSign size={13} />
                <span>সোশ্যাল হ্যান্ডেল</span>
              </label>
              <input
                type="text"
                value={card.socialHandle}
                onChange={(e) => onUpdate({ socialHandle: e.target.value })}
                placeholder="@mypage"
                className="form-input"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
