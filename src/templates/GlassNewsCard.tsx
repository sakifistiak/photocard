import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

interface Props {
  card: CardState;
}

export const GlassNewsCard: React.FC<Props> = ({ card }) => {
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
        padding: '24px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground card={card} />

      {/* Top Bar with Badge & Watermark */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {card.badgeText && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '20px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            <Sparkles size={13} style={{ color: card.accentColor }} />
            <span>{card.badgeText}</span>
          </div>
        )}

        <CardWatermark card={card} />
      </div>

      {/* Glass Floating Content Box */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(15, 23, 42, 0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '16px',
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.45)'
        }}
      >
        {/* Meta Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.75)',
            fontWeight: 500
          }}
        >
          {card.dateText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={12} style={{ color: card.accentColor }} />
              <span>{card.dateText}</span>
            </div>
          )}
          {card.sourceText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={12} style={{ color: card.accentColor }} />
              <span>{card.sourceText}</span>
            </div>
          )}
        </div>

        {/* Headline */}
        <h1
          style={{
            margin: 0,
            fontSize: '25px',
            fontWeight: 800,
            lineHeight: 1.35,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            wordBreak: 'break-word'
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
              color: 'rgba(255, 255, 255, 0.85)',
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
