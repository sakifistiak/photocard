import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { Cpu, Terminal } from 'lucide-react';

interface Props {
  card: CardState;
}

export const CyberTechCard: React.FC<Props> = ({ card }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: `"${card.fontFamily}", monospace, sans-serif`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        boxSizing: 'border-box'
      }}
    >
      <CardBackground
        card={card}
        gradientOverlay="linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.92) 75%, #020617 100%)"
      />

      {/* Cyber Grid Lines Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none'
        }}
      />

      {/* Top Header Row with Neon Pill */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            backgroundColor: 'rgba(2, 6, 23, 0.85)',
            border: `1px solid ${card.accentColor || '#a855f7'}`,
            boxShadow: `0 0 12px ${card.accentColor || '#a855f7'}40`,
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            color: card.accentColor || '#a855f7',
            letterSpacing: '0.08em'
          }}
        >
          <Cpu size={13} />
          <span>{card.badgeText || 'TECH BYTE // 01'}</span>
        </div>

        <CardWatermark card={card} />
      </div>

      {/* Bottom Main Content Terminal Style */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '8px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.6)'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            color: '#94a3b8',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={12} style={{ color: card.accentColor }} />
            <span>SYS_LOG: {card.sourceText || 'AI & TECH'}</span>
          </div>
          {card.dateText && <span>{card.dateText}</span>}
        </div>

        {/* Headline */}
        <h1
          style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 800,
            lineHeight: 1.35,
            color: '#f8fafc',
            wordBreak: 'break-word',
            letterSpacing: '-0.01em'
          }}
        >
          {card.headline}
        </h1>

        {/* Subtitle */}
        {card.subheadline && (
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              lineHeight: 1.5,
              color: '#cbd5e1'
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
