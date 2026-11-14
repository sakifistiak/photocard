import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { Trophy } from 'lucide-react';

interface Props {
  card: CardState;
}

export const SportsHighlightCard: React.FC<Props> = ({ card }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: `"${card.fontFamily}", sans-serif`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '26px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground card={card} />

      {/* Top Bar with Angled Badge */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 18px',
            background: `linear-gradient(135deg, ${card.themeColor} 0%, #1e40af 100%)`,
            color: '#ffffff',
            transform: 'skewX(-10deg)',
            borderRadius: '4px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
          }}
        >
          <div style={{ transform: 'skewX(10deg)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Trophy size={15} style={{ color: card.accentColor }} />
            <span style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '0.06em' }}>
              {card.badgeText || 'খেলাধুলা / SPORTS'}
            </span>
          </div>
        </div>

        <CardWatermark card={card} />
      </div>

      {/* Bottom Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {/* Match / Date Banner */}
        {(card.dateText || card.sourceText) && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '4px 12px',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              borderLeft: `4px solid ${card.accentColor}`,
              borderRadius: '2px',
              width: 'fit-content',
              fontSize: '11px',
              fontWeight: 600,
              color: '#f8fafc'
            }}
          >
            <span>{card.sourceText || 'ম্যাচ রিপোর্ট'}</span>
            {card.dateText && <span>• {card.dateText}</span>}
          </div>
        )}

        {/* Dynamic Bold Sports Headline */}
        <h1
          style={{
            margin: 0,
            fontSize: '30px',
            fontWeight: 900,
            lineHeight: 1.25,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 16px rgba(0,0,0,0.85)',
            wordBreak: 'break-word',
            background: 'linear-gradient(180deg, #ffffff 40%, #e2e8f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {card.headline}
        </h1>

        {/* Subtitle */}
        {card.subheadline && (
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
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
