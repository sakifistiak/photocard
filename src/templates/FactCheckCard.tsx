import React from 'react';
import { CardState } from '../types/card';
import { CardBackground } from './CardBackground';
import { CardWatermark } from './CardWatermark';
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle } from 'lucide-react';

interface Props {
  card: CardState;
}

export const FactCheckCard: React.FC<Props> = ({ card }) => {
  const getVerdictDetails = () => {
    switch (card.factVerdict) {
      case 'সত্য / TRUE':
        return {
          bg: '#10b981',
          border: '#059669',
          icon: <CheckCircle2 size={20} />,
          text: 'সত্য / VERIFIED TRUE'
        };
      case 'মিথ্যা / FALSE':
        return {
          bg: '#ef4444',
          border: '#dc2626',
          icon: <XCircle size={20} />,
          text: 'ভুয়া ও অসত্য / FALSE'
        };
      case 'বিভ্রান্তিকর / MISLEADING':
        return {
          bg: '#f59e0b',
          border: '#d97706',
          icon: <AlertTriangle size={20} />,
          text: 'বিভ্রান্তিকর / MISLEADING'
        };
      case 'গুজব / RUMOR':
        return {
          bg: '#dc2626',
          border: '#b91c1c',
          icon: <HelpCircle size={20} />,
          text: 'গুজব / UNFOUNDED RUMOR'
        };
      default:
        return {
          bg: '#ef4444',
          border: '#dc2626',
          icon: <XCircle size={20} />,
          text: 'মিথ্যা / FALSE'
        };
    }
  };

  const verdict = getVerdictDetails();

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

      {/* Top Header Row with FACT CHECK Header */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: '#0f172a',
            border: '2px solid #38bdf8',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: '#38bdf8'
          }}
        >
          <span>FACT CHECK / তথ্য যাচাই</span>
        </div>

        <CardWatermark card={card} />
      </div>

      {/* Center Dynamic Stamp Badge */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '24px',
          zIndex: 15,
          transform: 'rotate(-10deg)',
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: verdict.bg,
            border: `3px dashed #ffffff`,
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '18px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}
        >
          {verdict.icon}
          <span>{verdict.text}</span>
        </div>
      </div>

      {/* Bottom Main Claim & Verdict */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(15, 23, 42, 0.88)',
          borderRadius: '12px',
          borderLeft: `6px solid ${verdict.bg}`,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.45)'
        }}
      >
        {card.claimText && (
          <div
            style={{
              fontSize: '12px',
              color: '#94a3b8',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            দাবি / CLAIM: {card.claimText}
          </div>
        )}

        <h1
          style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 800,
            lineHeight: 1.35,
            wordBreak: 'break-word',
            color: '#ffffff'
          }}
        >
          {card.headline}
        </h1>

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
