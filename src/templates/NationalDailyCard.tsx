import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';

interface Props {
  card: CardState;
}

export const NationalDailyCard: React.FC<Props> = ({ card }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: `"${card.fontFamily}", serif`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground card={card} />

      {/* Top Newspaper Masthead Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: card.accentColor
            }}
          >
            {card.badgeText || 'বিশেষ প্রতিবেদন'}
          </div>

          <CardWatermark card={card} />
        </div>

        {/* Newspaper Thin Red / Theme Line */}
        <div style={{ height: '2px', backgroundColor: card.themeColor, width: '100%' }} />
      </div>

      {/* Bottom Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 15, 0.95) 40%, #0a0a0f 100%)',
          margin: '-24px',
          padding: '28px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {/* Dateline & Byline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '12px',
            color: '#cbd5e1',
            fontFamily: `"${card.fontFamily}", sans-serif`
          }}
        >
          {card.sourceText && <span style={{ fontWeight: 700, color: '#f8fafc' }}>{card.sourceText}</span>}
          {card.sourceText && card.dateText && <span>•</span>}
          {card.dateText && <span>{card.dateText}</span>}
        </div>

        {/* Headline */}
        <h1
          style={{
            margin: 0,
            fontSize: '27px',
            fontWeight: 800,
            lineHeight: 1.35,
            color: '#ffffff',
            wordBreak: 'break-word',
            letterSpacing: '-0.01em'
          }}
        >
          {card.headline}
        </h1>

        {/* Lead Summary */}
        {card.subheadline && (
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: 1.55,
              color: '#e2e8f0',
              fontWeight: 400
            }}
          >
            {card.subheadline}
          </p>
        )}

        <CardWatermark card={{ ...card, logoUrl: '' }} />
      </div>
    </div>
  );
};
