import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { Quote } from 'lucide-react';

interface Props {
  card: CardState;
}

export const EditorialQuoteCard: React.FC<Props> = ({ card }) => {
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

      {/* Top Header */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            backgroundColor: card.themeColor,
            color: '#ffffff',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em'
          }}
        >
          {card.badgeText || 'মতামত ও উক্তি'}
        </div>

        <CardWatermark card={card} />
      </div>

      {/* Center Quote Mark Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '20px',
          opacity: 0.12,
          color: card.accentColor,
          pointerEvents: 'none',
          transform: 'scale(2.5)'
        }}
      >
        <Quote size={80} />
      </div>

      {/* Bottom Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
      >
        {/* Quote Headline */}
        <div style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '44px',
              lineHeight: 0.8,
              color: card.accentColor,
              fontWeight: 900,
              display: 'inline-block',
              marginRight: '6px',
              verticalAlign: 'bottom'
            }}
          >
            “
          </span>
          <p
            style={{
              display: 'inline',
              margin: 0,
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: 1.45,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              wordBreak: 'break-word'
            }}
          >
            {card.headline}
          </p>
          <span
            style={{
              fontSize: '44px',
              lineHeight: 0.8,
              color: card.accentColor,
              fontWeight: 900,
              display: 'inline-block',
              marginLeft: '6px',
              verticalAlign: 'bottom'
            }}
          >
            ”
          </span>
        </div>

        {/* Speaker Profile Box */}
        {(card.speakerName || card.speakerTitle) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '12px',
              borderTop: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {card.speakerAvatarUrl && (
              <img
                src={card.speakerAvatarUrl}
                alt={card.speakerName}
                crossOrigin="anonymous"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `2px solid ${card.accentColor}`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  flexShrink: 0
                }}
              />
            )}
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: '17px',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.01em'
                }}
              >
                {card.speakerName}
              </h3>
              {card.speakerTitle && (
                <p
                  style={{
                    margin: 0,
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 400,
                    marginTop: '2px'
                  }}
                >
                  {card.speakerTitle}
                </p>
              )}
            </div>
          </div>
        )}

        <CardWatermark card={{ ...card, logoUrl: '' }} />
      </div>
    </div>
  );
};
