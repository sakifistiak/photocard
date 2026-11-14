import React from 'react';
import { Download, RotateCcw, Moon, Sun, Layers } from 'lucide-react';

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
  onReset: () => void;
  onOpenExport: () => void;
}

export const Header: React.FC<Props> = ({
  isDark,
  onToggleTheme,
  onReset,
  onOpenExport
}) => {
  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-logo">
          <Layers size={22} className="brand-icon" />
        </div>
        <div className="brand-text">
          <div className="brand-title">
            <span>PhotoCard</span>
            <span className="brand-badge">STUDIO</span>
          </div>
          <span className="brand-subtitle">সোশ্যাল মিডিয়া ও নিউজ ফটোকার্ড জেনারেটর</span>
        </div>
      </div>

      <div className="header-actions">
        <button
          onClick={onReset}
          className="header-btn"
          title="রিসেট করুন / Reset to Default"
        >
          <RotateCcw size={16} />
          <span className="hide-mobile">রিসেট</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="header-btn"
          title="থিম পরিবর্তন / Toggle Theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <a
          href="https://github.com/sakifistiak/photocard"
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn"
          title="GitHub Repository"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="hide-mobile">GitHub</span>
        </a>

        <button
          onClick={onOpenExport}
          className="header-btn-primary"
          title="ডাউনলোড করুন / Export High Quality Card"
        >
          <Download size={16} />
          <span>ডাউনলোড (HD)</span>
        </button>
      </div>
    </header>
  );
};
