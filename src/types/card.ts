export type AspectRatio = '1:1' | '4:5' | '16:9' | '9:16';

export type TemplateId =
  | 'breaking-news'
  | 'glass-news'
  | 'editorial-quote'
  | 'fact-check'
  | 'national-daily'
  | 'sports-highlight'
  | 'cyber-tech'
  | 'minimalist';

export type FontFamily =
  | 'Hind Siliguri'
  | 'Anek Bangla'
  | 'Tiro Bangla'
  | 'Noto Sans Bengali'
  | 'Inter'
  | 'Plus Jakarta Sans'
  | 'Outfit'
  | 'Playfair Display';

export type BadgeType =
  | 'ব্রেকিং নিউজ'
  | 'বিশেষ সংবাদ'
  | 'এক্সক্লুসিভ'
  | 'আন্তর্জাতিক'
  | 'খেলাধুলা'
  | 'তথ্যপ্রযুক্তি'
  | 'বিনোদন'
  | 'মতামত'
  | 'সাক্ষাৎকার'
  | 'FACT CHECK'
  | 'কাস্টম';

export type FactVerdict = 'সত্য / TRUE' | 'মিথ্যা / FALSE' | 'বিভ্রান্তিকর / MISLEADING' | 'গুজব / RUMOR';

export interface CardState {
  // Template & Layout
  templateId: TemplateId;
  aspectRatio: AspectRatio;
  fontFamily: FontFamily;
  themeColor: string;
  accentColor: string;
  overlayOpacity: number; // 0 to 100
  vignette: boolean;

  // Content
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  headline: string;
  subheadline: string;
  sourceText: string;
  dateText: string;
  isDateBangla: boolean;

  // Quote Specific
  speakerName: string;
  speakerTitle: string;
  speakerAvatarUrl: string;

  // Fact Check Specific
  factVerdict: FactVerdict;
  claimText: string;

  // Media
  imageUrl: string;
  imageScale: number; // 50 to 200 (%)
  imagePositionX: number; // -100 to 100 (%)
  imagePositionY: number; // -100 to 100 (%)
  imageBrightness: number; // 50 to 150 (%)
  imageContrast: number; // 50 to 150 (%)
  imageGrayscale: boolean;
  imageBlur: number; // 0 to 10 (px)

  // Branding & Watermark
  logoUrl: string;
  logoSize: number; // 24 to 96 (px)
  logoPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  domainText: string;
  socialHandle: string;
  showWatermark: boolean;
}
