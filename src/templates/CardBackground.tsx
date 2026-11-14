import React from 'react';
import { CardState } from '../types/card';

interface Props {
  card: CardState;
  gradientOverlay?: string; // custom gradient if template has special needs
}

export const CardBackground: React.FC<Props> = ({ card, gradientOverlay }) => {
  const filterString = [
    `brightness(${card.imageBrightness}%)`,
    `contrast(${card.imageContrast}%)`,
    card.imageGrayscale ? 'grayscale(100%)' : '',
    card.imageBlur > 0 ? `blur(${card.imageBlur}px)` : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Background Image with Pan & Zoom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          backgroundColor: '#0f172a'
        }}
      >
        <img
          src={card.imageUrl}
          alt="Card Background"
          crossOrigin="anonymous"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${card.imageScale / 100}) translate(${card.imagePositionX}%, ${card.imagePositionY}%)`,
            transformOrigin: 'center center',
            filter: filterString,
            transition: 'filter 0.2s ease'
          }}
        />
      </div>

      {/* Vignette Overlay */}
      {card.vignette && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.65) 100%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Dark / Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            gradientOverlay ||
            `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, ${card.overlayOpacity / 200}) 50%, rgba(0, 0, 0, ${card.overlayOpacity / 100}) 100%)`,
          pointerEvents: 'none'
        }}
      />
    </>
  );
};
