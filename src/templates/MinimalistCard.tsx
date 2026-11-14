import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';

interface Props {
  card: CardState;
}

export const MinimalistCard: React.FC<Props> = ({ card }) => {
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
        padding: '32px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground card={card} />

      {/* Elegant Minimal Frame Inset Border */}
      <div
        style={{
          position: 'absolute',
          inset: '16px',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          pointerEvents: 'none',
          borderRadius: '4px'
        }}
      />

      {/* Top Bar */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {card.badgeText && (
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.85)'
            }}
          >
            {card.badgeText}
          </span>
        )}

        <CardWatermark card={card} />
      </div>

      {/* Center/Bottom Aesthetic Text Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxWidth: '90%'
        }}
      >
        {/* Date or Category Tag */}
        {card.dateText && (
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: card.accentColor,
              fontWeight: 500
            }}
          >
            {card.dateText}
          </span>
        )}

        {/* Headline */}
        <h1
          style={{
            margin: 0,
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.4,
            wordBreak: 'break-word',
            letterSpacing: '0.01em',
            textShadow: '0 2px 14px rgba(0,0,0,0.8)'
          }}
        >
          {card.headline}
        </h1>

        {/* Subheadline / Caption */}
        {card.subheadline && (
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              textShadow: '0 1px 8px rgba(0,0,0,0.6)'
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
