import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { Calendar, User } from 'lucide-react';

interface Props {
  card: CardState;
}

export const BreakingNewsCard: React.FC<Props> = ({ card }) => {
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
        padding: '28px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground card={card} />

      {/* Top Header Row */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Category / Breaking Badge */}
        {card.badgeText && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              backgroundColor: card.badgeBg || card.themeColor,
              color: card.badgeColor || '#ffffff',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                animation: 'pulse 1.5s infinite'
              }}
            />
            <span>{card.badgeText}</span>
          </div>
        )}

        <CardWatermark card={card} />
      </div>

      {/* Bottom Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        {/* Meta Bar: Date & Source */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 500
          }}
        >
          {card.dateText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={13} style={{ color: card.accentColor }} />
              <span>{card.dateText}</span>
            </div>
          )}
          {card.sourceText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <User size={13} style={{ color: card.accentColor }} />
              <span>{card.sourceText}</span>
            </div>
          )}
        </div>

        {/* Main Headline with Accent Bar */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'stretch' }}>
          <div
            style={{
              width: '6px',
              backgroundColor: card.themeColor,
              borderRadius: '3px',
              flexShrink: 0
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: '28px',
              fontWeight: 800,
              lineHeight: 1.35,
              textShadow: '0 2px 12px rgba(0,0,0,0.7)',
              letterSpacing: '-0.01em',
              wordBreak: 'break-word'
            }}
          >
            {card.headline}
          </h1>
        </div>

        {/* Subheadline */}
        {card.subheadline && (
          <p
            style={{
              margin: 0,
              fontSize: '15px',
              lineHeight: 1.55,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 400,
              paddingLeft: '20px',
              textShadow: '0 1px 8px rgba(0,0,0,0.6)'
            }}
          >
            {card.subheadline}
          </p>
        )}

        {/* Branding Footer */}
        <CardWatermark card={{ ...card, logoUrl: '' }} />
      </div>
    </div>
  );
};
