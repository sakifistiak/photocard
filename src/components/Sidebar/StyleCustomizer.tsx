import React from 'react';
import { CardState, AspectRatio, FontFamily } from '../../types/card';
import { Palette, Crop, Type, Eye } from 'lucide-react';

interface Props {
  card: CardState;
  onUpdate: (fields: Partial<CardState>) => void;
}

const ASPECT_RATIOS: { id: AspectRatio; name: string; desc: string; iconRatio: string }[] = [
  { id: '1:1', name: '1:1 Square', desc: 'ফেসবুক ও ইনস্টাগ্রাম ফিড', iconRatio: '1 / 1' },
  { id: '4:5', name: '4:5 Portrait', desc: 'ইনস্টাগ্রাম হাই এনগেজমেন্ট', iconRatio: '4 / 5' },
  { id: '16:9', name: '16:9 Landscape', desc: 'টুইটার ও ফেসবুক ভিডিও থাম্ব', iconRatio: '16 / 9' },
  { id: '9:16', name: '9:16 Story', desc: 'স্টোরিজ ও রিলস / টিকটক', iconRatio: '9 / 16' }
];

const FONTS: { id: FontFamily; label: string }[] = [
  { id: 'Hind Siliguri', label: 'হিন্দ শিলিগুড়ি (Hind Siliguri)' },
  { id: 'Anek Bangla', label: 'অনেক বাংলা (Anek Bangla)' },
  { id: 'Tiro Bangla', label: 'তিরো বাংলা (Tiro Bangla - Serif)' },
  { id: 'Noto Sans Bengali', label: 'নোটো সান্স বাংলা (Noto Sans)' },
  { id: 'Inter', label: 'Inter (Modern Sans)' },
  { id: 'Outfit', label: 'Outfit (Geometric Clean)' },
  { id: 'Playfair Display', label: 'Playfair Display (Editorial Serif)' }
];

const COLOR_PALETTES = [
  { name: 'Crimson', theme: '#e11d48', accent: '#fbbf24' },
  { name: 'Royal Blue', theme: '#2563eb', accent: '#60a5fa' },
  { name: 'Emerald', theme: '#059669', accent: '#34d399' },
  { name: 'Amber Gold', theme: '#d97706', accent: '#fde047' },
  { name: 'Indigo Purple', theme: '#6366f1', accent: '#c084fc' },
  { name: 'Dark Slate', theme: '#334155', accent: '#94a3b8' },
  { name: 'Midnight Cyber', theme: '#8b5cf6', accent: '#06b6d4' }
];

export const StyleCustomizer: React.FC<Props> = ({ card, onUpdate }) => {
  return (
    <div className="control-section">
      <div className="section-header">
        <Palette size={18} className="section-icon" />
        <div>
          <h3 className="section-title">ডিজাইন ও স্টাইল (Design & Style)</h3>
          <p className="section-desc">সাইজ রেশিও, কালার থিম ও বাংলা ফন্ট সিলেক্ট করুন</p>
        </div>
      </div>

      {/* Aspect Ratio Picker */}
      <div className="form-group">
        <label className="form-label">
          <Crop size={14} />
          <span>অ্যাসপেক্ট রেশিও (Aspect Ratio)</span>
        </label>
        <div className="ratio-grid">
          {ASPECT_RATIOS.map((item) => {
            const isSelected = card.aspectRatio === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onUpdate({ aspectRatio: item.id })}
                className={`ratio-btn ${isSelected ? 'active' : ''}`}
              >
                <div
                  className="ratio-box-preview"
                  style={{ aspectRatio: item.iconRatio }}
                />
                <span className="ratio-name">{item.name}</span>
                <span className="ratio-sub">{item.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Font Family Selector */}
      <div className="form-group">
        <label className="form-label">
          <Type size={14} />
          <span>টাইপোগ্রাফি ও ফন্ট (Font Family)</span>
        </label>
        <select
          value={card.fontFamily}
          onChange={(e) => onUpdate({ fontFamily: e.target.value as FontFamily })}
          className="form-select"
        >
          {FONTS.map((font) => (
            <option key={font.id} value={font.id}>
              {font.label}
            </option>
          ))}
        </select>
      </div>

      {/* Color Themes & Palettes */}
      <div className="form-group">
        <label className="form-label">কালার প্যালেট (Theme Presets)</label>
        <div className="palette-row">
          {COLOR_PALETTES.map((pal, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() =>
                onUpdate({
                  themeColor: pal.theme,
                  accentColor: pal.accent,
                  badgeBg: pal.theme
                })
              }
              className="palette-swatch"
              title={pal.name}
            >
              <span style={{ backgroundColor: pal.theme }} />
              <span style={{ backgroundColor: pal.accent }} />
            </button>
          ))}
        </div>

        {/* Custom Color Pickers */}
        <div className="form-row" style={{ marginTop: '12px' }}>
          <div className="color-picker-item">
            <span className="color-label">থিম কালার</span>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={card.themeColor}
                onChange={(e) => onUpdate({ themeColor: e.target.value, badgeBg: e.target.value })}
              />
              <span>{card.themeColor}</span>
            </div>
          </div>

          <div className="color-picker-item">
            <span className="color-label">অ্যাকসেন্ট কালার</span>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={card.accentColor}
                onChange={(e) => onUpdate({ accentColor: e.target.value })}
              />
              <span>{card.accentColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay & Vignette */}
      <div className="adjustments-box" style={{ marginTop: '16px' }}>
        <div className="adjustments-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Eye size={14} />
            <span>ডার্ক ওভারলে ও ভিগনেট (Overlays)</span>
          </div>
        </div>

        <div className="slider-group">
          <div className="slider-label">
            <span>ওভারলে ডার্কনেস (Overlay Darkening)</span>
            <span>{card.overlayOpacity}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={95}
            value={card.overlayOpacity}
            onChange={(e) => onUpdate({ overlayOpacity: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        <div className="checkbox-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={card.vignette}
              onChange={(e) => onUpdate({ vignette: e.target.checked })}
            />
            <span>সিনেমাটিক ভিগনেট শ্যাডো (Vignette Shadow)</span>
          </label>
        </div>
      </div>
    </div>
  );
};
