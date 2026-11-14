import React from 'react';
import { CardState, BadgeType, FactVerdict } from '../../types/card';
import { getFormattedBanglaDate, getFormattedEnglishDate } from '../../services/bengaliDate';
import { Type, Sparkles, User, ShieldCheck } from 'lucide-react';

interface Props {
  card: CardState;
  onUpdate: (fields: Partial<CardState>) => void;
}

const BADGE_PRESETS: BadgeType[] = [
  'ব্রেকিং নিউজ',
  'বিশেষ সংবাদ',
  'এক্সক্লুসিভ',
  'আন্তর্জাতিক',
  'খেলাধুলা',
  'তথ্যপ্রযুক্তি',
  'বিনোদন',
  'মতামত',
  'সাক্ষাৎকার',
  'FACT CHECK'
];

export const ContentEditor: React.FC<Props> = ({ card, onUpdate }) => {
  const isQuote = card.templateId === 'editorial-quote';
  const isFactCheck = card.templateId === 'fact-check';

  return (
    <div className="control-section">
      <div className="section-header">
        <Type size={18} className="section-icon" />
        <div>
          <h3 className="section-title">সংবাদ ও টেক্সট (Content & Text)</h3>
          <p className="section-desc">হেডলাইন, সাব-হেডলাইন ও বিবরণ পরিবর্তন করুন</p>
        </div>
      </div>

      {/* Category / Badge Presets */}
      <div className="form-group">
        <label className="form-label">
          <span>ক্যাটেগরি ব্যাজ (Category Badge)</span>
        </label>
        <div className="badge-chips">
          {BADGE_PRESETS.map((badge) => (
            <button
              key={badge}
              type="button"
              onClick={() => onUpdate({ badgeText: badge })}
              className={`chip-btn ${card.badgeText === badge ? 'active' : ''}`}
            >
              {badge}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={card.badgeText}
          onChange={(e) => onUpdate({ badgeText: e.target.value })}
          placeholder="কাস্টম ব্যাজ লিখুন..."
          className="form-input"
          style={{ marginTop: '8px' }}
        />
      </div>

      {/* Headline */}
      <div className="form-group">
        <label className="form-label">
          <span>মূল হেডলাইন (Main Headline)</span>
          <span className="char-count">{card.headline.length} অক্ষর</span>
        </label>
        <textarea
          rows={3}
          value={card.headline}
          onChange={(e) => onUpdate({ headline: e.target.value })}
          placeholder="এখানে প্রধান খবর বা শিরোনাম লিখুন..."
          className="form-textarea"
        />
      </div>

      {/* Subheadline / Summary */}
      <div className="form-group">
        <label className="form-label">
          <span>সাব-হেডলাইন বা সারসংক্ষেপ (Subheadline)</span>
        </label>
        <textarea
          rows={2}
          value={card.subheadline}
          onChange={(e) => onUpdate({ subheadline: e.target.value })}
          placeholder="সংবাদের সংক্ষিপ্ত বিবরণ..."
          className="form-textarea"
        />
      </div>

      {/* Date & Source Row */}
      <div className="form-row">
        <div className="form-group flex-1">
          <label className="form-label">
            <span>তারিখ (Date)</span>
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  dateText: card.isDateBangla ? getFormattedBanglaDate() : getFormattedEnglishDate()
                })
              }
              className="link-btn"
            >
              <Sparkles size={11} /> আজ
            </button>
          </label>
          <input
            type="text"
            value={card.dateText}
            onChange={(e) => onUpdate({ dateText: e.target.value })}
            placeholder="১৪ নভেম্বর ২০২৬ | শনিবার"
            className="form-input"
          />
        </div>

        <div className="form-group flex-1">
          <label className="form-label">
            <span>প্রতিবেদক / স্থান (Source/Location)</span>
          </label>
          <input
            type="text"
            value={card.sourceText}
            onChange={(e) => onUpdate({ sourceText: e.target.value })}
            placeholder="নিজস্ব প্রতিবেদক, ঢাকা"
            className="form-input"
          />
        </div>
      </div>

      {/* Quote Specific Fields */}
      {isQuote && (
        <div className="special-fields-box">
          <div className="special-header">
            <User size={15} />
            <span>বক্তা ও উক্তি বিবরণ (Speaker Info)</span>
          </div>

          <div className="form-group">
            <label className="form-label">বক্তার নাম (Speaker Name)</label>
            <input
              type="text"
              value={card.speakerName}
              onChange={(e) => onUpdate({ speakerName: e.target.value })}
              placeholder="বক্তার নাম..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">বক্তার পদবী (Designation / Title)</label>
            <input
              type="text"
              value={card.speakerTitle}
              onChange={(e) => onUpdate({ speakerTitle: e.target.value })}
              placeholder="পদবী বা পরিচয়..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">বক্তার ছবি URL (Speaker Avatar URL)</label>
            <input
              type="text"
              value={card.speakerAvatarUrl}
              onChange={(e) => onUpdate({ speakerAvatarUrl: e.target.value })}
              placeholder="https://..."
              className="form-input"
            />
          </div>
        </div>
      )}

      {/* Fact Check Specific Fields */}
      {isFactCheck && (
        <div className="special-fields-box">
          <div className="special-header">
            <ShieldCheck size={15} />
            <span>ফ্যাক্ট চেক বিবরণ (Fact Check Details)</span>
          </div>

          <div className="form-group">
            <label className="form-label">যাচাইয়ের রায় (Verdict)</label>
            <select
              value={card.factVerdict}
              onChange={(e) => onUpdate({ factVerdict: e.target.value as FactVerdict })}
              className="form-select"
            >
              <option value="সত্য / TRUE">সত্য / TRUE (Verified)</option>
              <option value="মিথ্যা / FALSE">মিথ্যা / FALSE (Fake/Inaccurate)</option>
              <option value="বিভ্রান্তিকর / MISLEADING">বিভ্রান্তিকর / MISLEADING</option>
              <option value="গুজব / RUMOR">গুজব / UNFOUNDED RUMOR</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">ভাইরাল দাবি (The Claim)</label>
            <input
              type="text"
              value={card.claimText}
              onChange={(e) => onUpdate({ claimText: e.target.value })}
              placeholder="সামাজিক মাধ্যমে ছড়িয়ে পড়া দাবি..."
              className="form-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};
