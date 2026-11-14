import React from 'react';
import { CardState, AspectRatio } from '../types/card';
import { CardRenderer } from '../templates';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface Props {
  card: CardState;
  cardRef: React.RefObject<HTMLDivElement | null>;
  zoomLevel: number;
  onZoomChange: (level: number) => void;
}

export const CanvasPreview: React.FC<Props> = ({
  card,
  cardRef,
  zoomLevel,
  onZoomChange
}) => {
  // Dimensions for standard canvas coordinate base
  const getDimensions = (ratio: AspectRatio) => {
    switch (ratio) {
      case '1:1':
        return { width: 600, height: 600 };
      case '4:5':
        return { width: 560, height: 700 };
      case '16:9':
        return { width: 640, height: 360 };
      case '9:16':
        return { width: 450, height: 800 };
      default:
        return { width: 600, height: 600 };
    }
  };

  const dim = getDimensions(card.aspectRatio);

  return (
    <div className="canvas-wrapper">
      {/* Canvas Top Bar with Controls */}
      <div className="canvas-toolbar">
        <div className="canvas-info">
          <span className="ratio-tag">{card.aspectRatio}</span>
          <span className="dim-tag">
            {dim.width} × {dim.height} px
          </span>
        </div>

        <div className="zoom-controls">
          <button
            onClick={() => onZoomChange(Math.max(50, zoomLevel - 10))}
            className="zoom-btn"
            title="Zoom Out"
          >
            <ZoomOut size={14} />
          </button>
          <span className="zoom-value">{zoomLevel}%</span>
          <button
            onClick={() => onZoomChange(Math.min(150, zoomLevel + 10))}
            className="zoom-btn"
            title="Zoom In"
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={() => onZoomChange(100)}
            className="zoom-btn"
            title="Reset Zoom"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* Viewport Container */}
      <div className="canvas-viewport">
        <div
          className="canvas-zoom-container"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease'
          }}
        >
          {/* Actual Card Export Element */}
          <div
            ref={cardRef}
            id="photocard-export-node"
            className="card-render-node"
            style={{
              width: `${dim.width}px`,
              height: `${dim.height}px`,
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)'
            }}
          >
            <CardRenderer card={card} />
          </div>
        </div>
      </div>
    </div>
  );
};
