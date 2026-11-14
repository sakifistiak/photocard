import React from 'react';
import { CardState } from '../types/card';
import { Globe, AtSign } from 'lucide-react';

interface Props {
  card: CardState;
}

export const CardWatermark: React.FC<Props> = ({ card }) => {
  if (!card.showWatermark && !card.logoUrl) return null;

  const getLogoStyle = () => {
    const base: React.CSSProperties = {
      position: 'absolute',
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    };

    switch (card.logoPosition) {
      case 'top-left':
        return { ...base, top: '24px', left: '24px' };
      case 'top-right':
        return { ...base, top: '24px', right: '24px' };
      case 'bottom-left':
        return { ...base, bottom: '24px', left: '24px' };
      case 'bottom-right':
        return { ...base, bottom: '24px', right: '24px' };
      default:
        return { ...base, top: '24px', right: '24px' };
    }
  };

  return (
    <>
      {/* Uploaded Logo */}
      {card.logoUrl && (
        <div style={getLogoStyle()}>
          <img
            src={card.logoUrl}
            alt="Logo"
            style={{
              height: `${card.logoSize}px`,
              width: 'auto',
              maxHeight: `${card.logoSize}px`,
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
            }}
          />
        </div>
      )}

      {/* Domain & Social Footer Watermark */}
      {card.showWatermark && (card.domainText || card.socialHandle) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '0.04em',
            paddingTop: '8px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {card.domainText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Globe size={13} style={{ opacity: 0.8 }} />
              <span>{card.domainText}</span>
            </div>
          )}

          {card.socialHandle && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AtSign size={13} style={{ opacity: 0.8 }} />
              <span>{card.socialHandle}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
