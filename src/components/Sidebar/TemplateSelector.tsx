import React from 'react';
import { CardState, TemplateId } from '../../types/card';
import { TEMPLATES } from '../../constants/presets';
import { LayoutTemplate, Check } from 'lucide-react';

interface Props {
  card: CardState;
  onUpdate: (fields: Partial<CardState>) => void;
}

export const TemplateSelector: React.FC<Props> = ({ card, onUpdate }) => {
  return (
    <div className="control-section">
      <div className="section-header">
        <LayoutTemplate size={18} className="section-icon" />
        <div>
          <h3 className="section-title">টেমপ্লেট নির্বাচন (Select Template)</h3>
          <p className="section-desc">আপনার সংবাদের জন্য সেরা ফরম্যাটটি বেছে নিন</p>
        </div>
      </div>

      <div className="template-grid">
        {TEMPLATES.map((tmpl) => {
          const isSelected = card.templateId === tmpl.id;
          return (
            <div
              key={tmpl.id}
              onClick={() => onUpdate({ templateId: tmpl.id as TemplateId })}
              className={`template-card ${isSelected ? 'selected' : ''}`}
            >
              <div
                className="template-card-preview"
                style={{
                  background: `linear-gradient(135deg, ${tmpl.thumbnailColor} 0%, #0f172a 100%)`
                }}
              >
                <span className="template-card-badge">{tmpl.badge}</span>
                {isSelected && (
                  <div className="selected-check">
                    <Check size={14} />
                  </div>
                )}
              </div>
              <div className="template-card-info">
                <span className="template-card-title">{tmpl.nameBn}</span>
                <span className="template-card-sub">{tmpl.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
