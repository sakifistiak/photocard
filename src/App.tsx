import React, { useState, useEffect, useRef } from 'react';
import { CardState } from './types/card';
import { DEFAULT_CARD_STATE } from './constants/presets';
import { Header } from './components/Header';
import { CanvasPreview } from './components/CanvasPreview';
import { TemplateSelector } from './components/Sidebar/TemplateSelector';
import { ContentEditor } from './components/Sidebar/ContentEditor';
import { ImageController } from './components/Sidebar/ImageController';
import { BrandingController } from './components/Sidebar/BrandingController';
import { StyleCustomizer } from './components/Sidebar/StyleCustomizer';
import { ExportModal } from './components/Sidebar/ExportModal';
import { MobileNav, MobileTab } from './components/MobileNav';
import { LayoutTemplate, Type, Image, Shield, Palette, X } from 'lucide-react';

const STORAGE_KEY = 'photocard_studio_state_v1';
const THEME_KEY = 'photocard_studio_theme';

export const App: React.FC = () => {
  const [card, setCard] = useState<CardState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CARD_STATE, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to default
    }
    return DEFAULT_CARD_STATE;
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const [activeSidebarTab, setActiveSidebarTab] = useState<'templates' | 'content' | 'image' | 'branding' | 'style'>('templates');
  const [mobileTab, setMobileTab] = useState<MobileTab>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(card));
    } catch {
      // localStorage may fail if image is large data URL
    }
  }, [card]);

  // Sync theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleUpdate = (fields: Partial<CardState>) => {
    setCard((prev) => ({ ...prev, ...fields }));
  };

  const handleReset = () => {
    if (window.confirm('সব সেটিংস ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?')) {
      setCard(DEFAULT_CARD_STATE);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      {/* Top Header */}
      <Header
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onReset={handleReset}
        onOpenExport={() => setIsExportOpen(true)}
      />

      <div className="main-layout">
        {/* Desktop Sidebar */}
        <aside className="studio-sidebar hide-mobile">
          <div className="sidebar-tabs">
            <button
              onClick={() => setActiveSidebarTab('templates')}
              className={`sidebar-tab-btn ${activeSidebarTab === 'templates' ? 'active' : ''}`}
            >
              <LayoutTemplate size={16} />
              <span>টেমপ্লেট</span>
            </button>
            <button
              onClick={() => setActiveSidebarTab('content')}
              className={`sidebar-tab-btn ${activeSidebarTab === 'content' ? 'active' : ''}`}
            >
              <Type size={16} />
              <span>সংবাদ</span>
            </button>
            <button
              onClick={() => setActiveSidebarTab('image')}
              className={`sidebar-tab-btn ${activeSidebarTab === 'image' ? 'active' : ''}`}
            >
              <Image size={16} />
              <span>ছবি</span>
            </button>
            <button
              onClick={() => setActiveSidebarTab('branding')}
              className={`sidebar-tab-btn ${activeSidebarTab === 'branding' ? 'active' : ''}`}
            >
              <Shield size={16} />
              <span>ব্র্যান্ডিং</span>
            </button>
            <button
              onClick={() => setActiveSidebarTab('style')}
              className={`sidebar-tab-btn ${activeSidebarTab === 'style' ? 'active' : ''}`}
            >
              <Palette size={16} />
              <span>ডিজাইন</span>
            </button>
          </div>

          <div className="sidebar-content-pane">
            {activeSidebarTab === 'templates' && (
              <TemplateSelector card={card} onUpdate={handleUpdate} />
            )}
            {activeSidebarTab === 'content' && (
              <ContentEditor card={card} onUpdate={handleUpdate} />
            )}
            {activeSidebarTab === 'image' && (
              <ImageController card={card} onUpdate={handleUpdate} />
            )}
            {activeSidebarTab === 'branding' && (
              <BrandingController card={card} onUpdate={handleUpdate} />
            )}
            {activeSidebarTab === 'style' && (
              <StyleCustomizer card={card} onUpdate={handleUpdate} />
            )}
          </div>
        </aside>

        {/* Center Canvas Area */}
        <main className="studio-stage">
          <CanvasPreview
            card={card}
            cardRef={cardRef}
            zoomLevel={zoomLevel}
            onZoomChange={setZoomLevel}
          />
        </main>
      </div>

      {/* Mobile Drawer */}
      {mobileTab && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileTab(null)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="drawer-title">
                {mobileTab === 'templates' && 'টেমপ্লেট নির্বাচন'}
                {mobileTab === 'content' && 'সংবাদ ও টেক্সট'}
                {mobileTab === 'image' && 'ছবি ও মিডিয়া'}
                {mobileTab === 'branding' && 'ব্র্যান্ডিং ও লোগো'}
                {mobileTab === 'style' && 'ডিজাইন ও স্টাইল'}
              </span>
              <button onClick={() => setMobileTab(null)} className="drawer-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="drawer-body">
              {mobileTab === 'templates' && (
                <TemplateSelector card={card} onUpdate={handleUpdate} />
              )}
              {mobileTab === 'content' && (
                <ContentEditor card={card} onUpdate={handleUpdate} />
              )}
              {mobileTab === 'image' && (
                <ImageController card={card} onUpdate={handleUpdate} />
              )}
              {mobileTab === 'branding' && (
                <BrandingController card={card} onUpdate={handleUpdate} />
              )}
              {mobileTab === 'style' && (
                <StyleCustomizer card={card} onUpdate={handleUpdate} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <MobileNav
        activeTab={mobileTab}
        onTabChange={setMobileTab}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        cardRef={cardRef}
        headline={card.headline}
      />
    </div>
  );
};
