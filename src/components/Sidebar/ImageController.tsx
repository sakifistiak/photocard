import React, { useRef } from 'react';
import { CardState } from '../../types/card';
import { SAMPLE_IMAGES } from '../../constants/presets';
import { Image, Upload, Sliders, RotateCcw } from 'lucide-react';

interface Props {
  card: CardState;
  onUpdate: (fields: Partial<CardState>) => void;
}

export const ImageController: React.FC<Props> = ({ card, onUpdate }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        onUpdate({ imageUrl: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAdjustments = () => {
    onUpdate({
      imageScale: 100,
      imagePositionX: 0,
      imagePositionY: 0,
      imageBrightness: 100,
      imageContrast: 105,
      imageGrayscale: false,
      imageBlur: 0
    });
  };

  return (
    <div className="control-section">
      <div className="section-header">
        <Image size={18} className="section-icon" />
        <div>
          <h3 className="section-title">ছবি ও মিডিয়া (Image & Media)</h3>
          <p className="section-desc">ছবি আপলোড করুন, জুম ও পজিশন অ্যাডজাস্ট করুন</p>
        </div>
      </div>

      {/* Upload Button & URL */}
      <div className="form-group">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="upload-dropzone"
        >
          <Upload size={20} />
          <div className="upload-text">
            <strong>নিজের ছবি আপলোড করুন</strong>
            <span>গ্যালারি বা কম্পিউটার থেকে নির্বাচন করুন</span>
          </div>
        </button>

        <div className="or-divider">
          <span>অথবা ইমেজ লিংক দিন</span>
        </div>

        <input
          type="text"
          value={card.imageUrl}
          onChange={(e) => onUpdate({ imageUrl: e.target.value })}
          placeholder="https://images.unsplash.com/..."
          className="form-input"
        />
      </div>

      {/* Quick Sample Photos */}
      <div className="form-group">
        <label className="form-label">নমুনা ছবি (Sample Photos)</label>
        <div className="sample-photos-grid">
          {SAMPLE_IMAGES.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onUpdate({ imageUrl: sample.url })}
              className={`sample-thumb-btn ${card.imageUrl === sample.url ? 'active' : ''}`}
              title={sample.name}
            >
              <img src={sample.url} alt={sample.name} crossOrigin="anonymous" />
              <span>{sample.name.split('/')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sliders: Zoom & Position */}
      <div className="adjustments-box">
        <div className="adjustments-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sliders size={14} />
            <span>ইমেজ অ্যাডজাস্টমেন্ট (Position & Scale)</span>
          </div>
          <button
            type="button"
            onClick={handleResetAdjustments}
            className="link-btn"
            title="Reset to normal"
          >
            <RotateCcw size={12} /> রিসেট
          </button>
        </div>

        {/* Zoom */}
        <div className="slider-group">
          <div className="slider-label">
            <span>জুম স্কেল (Zoom)</span>
            <span>{card.imageScale}%</span>
          </div>
          <input
            type="range"
            min={50}
            max={200}
            value={card.imageScale}
            onChange={(e) => onUpdate({ imageScale: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        {/* Pan X */}
        <div className="slider-group">
          <div className="slider-label">
            <span>ডানে / বামে সরান (Pan X)</span>
            <span>{card.imagePositionX}%</span>
          </div>
          <input
            type="range"
            min={-100}
            max={100}
            value={card.imagePositionX}
            onChange={(e) => onUpdate({ imagePositionX: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        {/* Pan Y */}
        <div className="slider-group">
          <div className="slider-label">
            <span>উপরে / নিচে সরান (Pan Y)</span>
            <span>{card.imagePositionY}%</span>
          </div>
          <input
            type="range"
            min={-100}
            max={100}
            value={card.imagePositionY}
            onChange={(e) => onUpdate({ imagePositionY: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        {/* Brightness */}
        <div className="slider-group">
          <div className="slider-label">
            <span>উজ্জ্বলতা (Brightness)</span>
            <span>{card.imageBrightness}%</span>
          </div>
          <input
            type="range"
            min={40}
            max={160}
            value={card.imageBrightness}
            onChange={(e) => onUpdate({ imageBrightness: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        {/* Contrast */}
        <div className="slider-group">
          <div className="slider-label">
            <span>কন্ট্রাস্ট (Contrast)</span>
            <span>{card.imageContrast}%</span>
          </div>
          <input
            type="range"
            min={50}
            max={160}
            value={card.imageContrast}
            onChange={(e) => onUpdate({ imageContrast: Number(e.target.value) })}
            className="form-range"
          />
        </div>

        {/* Grayscale toggle */}
        <div className="checkbox-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={card.imageGrayscale}
              onChange={(e) => onUpdate({ imageGrayscale: e.target.checked })}
            />
            <span>সাদা-কালো মোড (Black & White / Grayscale)</span>
          </label>
        </div>
      </div>
    </div>
  );
};
