import React from 'react';
import { LayoutTemplate, Type, Image, Shield, Palette, Download } from 'lucide-react';

export type MobileTab = 'templates' | 'content' | 'image' | 'branding' | 'style' | null;

interface Props {
  activeTab: MobileTab;
  onTabChange: (tab: MobileTab) => void;
  onOpenExport: () => void;
}

export const MobileNav: React.FC<Props> = ({
  activeTab,
  onTabChange,
  onOpenExport
}) => {
  const tabs: { id: MobileTab; label: string; icon: React.ReactNode }[] = [
    { id: 'templates', label: 'টেমপ্লেট', icon: <LayoutTemplate size={18} /> },
    { id: 'content', label: 'সংবাদ', icon: <Type size={18} /> },
    { id: 'image', label: 'ছবি', icon: <Image size={18} /> },
    { id: 'branding', label: 'ব্র্যান্ডিং', icon: <Shield size={18} /> },
    { id: 'style', label: 'ডিজাইন', icon: <Palette size={18} /> }
  ];

  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-nav-items">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(isActive ? null : tab.id)}
              className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}

        <button onClick={onOpenExport} className="mobile-nav-btn primary">
          <Download size={18} />
          <span>ডাউনলোড</span>
        </button>
      </div>
    </nav>
  );
};
