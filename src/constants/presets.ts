import { CardState, TemplateId } from '../types/card';
import { getFormattedBanglaDate } from '../services/bengaliDate';

export const SAMPLE_IMAGES = [
  {
    name: 'সংবাদ সম্মেলন / Press',
    url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'রাজনীতি / মিটিং',
    url: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'খেলাধুলা / ক্রিকেট-ফুটবল',
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'প্রযুক্তি ও গ্যাজেট',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'পোর্ট্রেট ও ব্যক্তিত্ব',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'প্রকৃতি ও বাংলাদেশ',
    url: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80'
  }
];

export const DEFAULT_CARD_STATE: CardState = {
  templateId: 'breaking-news',
  aspectRatio: '1:1',
  fontFamily: 'Hind Siliguri',
  themeColor: '#e11d48', // Crimson red
  accentColor: '#fbbf24', // Amber/Gold
  overlayOpacity: 75,
  vignette: true,

  badgeText: 'ব্রেকিং নিউজ',
  badgeBg: '#e11d48',
  badgeColor: '#ffffff',
  headline: 'ডিজিটাল প্ল্যাটফর্মে যুক্ত হলো আধুনিক ফটোকার্ড স্টুডিও',
  subheadline: 'সোশ্যাল মিডিয়া ও সংবাদমাধ্যমের জন্য এক ক্লিকেই তৈরি করুন প্রফেশনাল ফটোকার্ড',
  sourceText: 'নিজস্ব প্রতিবেদক, ঢাকা',
  dateText: getFormattedBanglaDate(),
  isDateBangla: true,

  speakerName: 'ড. মুহাম্মদ ইউনূস',
  speakerTitle: 'প্রধান উপদেষ্টা, অন্তর্বর্তীকালীন সরকার',
  speakerAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',

  factVerdict: 'সত্য / TRUE',
  claimText: 'সোশ্যাল মিডিয়ায় ছড়িয়ে পড়া তথ্যের সত্যতা যাচাই করা হয়েছে',

  imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
  imageScale: 100,
  imagePositionX: 0,
  imagePositionY: 0,
  imageBrightness: 100,
  imageContrast: 105,
  imageGrayscale: false,
  imageBlur: 0,

  logoUrl: '',
  logoSize: 42,
  logoPosition: 'top-right',
  domainText: 'photocard.sakif.pro.bd',
  socialHandle: '@photocard',
  showWatermark: true
};

export interface TemplateDefinition {
  id: TemplateId;
  name: string;
  nameBn: string;
  description: string;
  category: 'News' | 'Social' | 'Modern' | 'Editorial';
  thumbnailColor: string;
  badge: string;
}

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: 'breaking-news',
    name: 'Breaking News Pro',
    nameBn: 'ব্রেকিং নিউজ',
    description: 'টিভি চ্যানেল ও শীর্ষ সংবাদমাধ্যমের মতো বোল্ড রেড স্ট্রিপ ও হেডলাইন লেআউট।',
    category: 'News',
    thumbnailColor: '#e11d48',
    badge: 'ব্রেকিং'
  },
  {
    id: 'glass-news',
    name: 'Modern Glass',
    nameBn: 'মডার্ন গ্লাস নিউজ',
    description: 'ট্রান্সলুসেন্ট ফ্রস্টেড গ্লাস বার, উজ্জ্বল গ্র্যাডিয়েন্ট রিম ও মডার্ন টাইপোগ্রাফি।',
    category: 'Modern',
    thumbnailColor: '#6366f1',
    badge: 'ট্রেন্ডিং'
  },
  {
    id: 'editorial-quote',
    name: 'Editorial Quote',
    nameBn: 'উক্তি ও মতামত',
    description: 'বিশিষ্ট ব্যক্তিত্বের ছবি, উক্তি চিহ্ন এবং পদবী সহ দৃষ্টিনন্দন কোটেশন কার্ড।',
    category: 'Editorial',
    thumbnailColor: '#0ea5e9',
    badge: 'মতামত'
  },
  {
    id: 'fact-check',
    name: 'Fact Check Stamp',
    nameBn: 'ফ্যাক্ট চেক',
    description: 'গুজব প্রতিরোধ ও সত্যতা যাচাইয়ের জন্য সত্য/মিথ্যা স্ট্যাম্প ও ক্লেইম ভিউ।',
    category: 'Editorial',
    thumbnailColor: '#10b981',
    badge: 'যাচাই'
  },
  {
    id: 'national-daily',
    name: 'National Daily',
    nameBn: 'জাতীয় পত্রিকা',
    description: 'চিরাচরিত জাতীয় সংবাদপত্রের মার্জিত মাস্টহেড, ডেটলাইন ও লিড স্টোরি স্টাইল।',
    category: 'News',
    thumbnailColor: '#d97706',
    badge: 'পত্রিকা'
  },
  {
    id: 'sports-highlight',
    name: 'Sports Center',
    nameBn: 'স্পোর্টস হাইলাইট',
    description: 'খেলাধুলার স্কোরবোর্ড, ম্যাচ বিশ্লেষণ ও গতিশীল ডায়নামিক ডিজাইন।',
    category: 'News',
    thumbnailColor: '#2563eb',
    badge: 'খেলাধুলা'
  },
  {
    id: 'cyber-tech',
    name: 'Cyber Tech Byte',
    nameBn: 'টেক ও গ্যাজেট',
    description: 'ডার্ক মোড, সাইবার নিয়ন অ্যাকসেন্ট ও গ্যাজেট সংবাদের ক্লিন মিনিমাল লুক।',
    category: 'Modern',
    thumbnailColor: '#8b5cf6',
    badge: 'টেকনোলজি'
  },
  {
    id: 'minimalist',
    name: 'Aesthetic Minimal',
    nameBn: 'মিনিমালিস্ট আর্ট',
    description: 'ইনস্টাগ্রাম ও লাইফস্টাইল ক্রিয়েটরদের জন্য শৈল্পিক ছবি ও এলিগেন্ট ক্যাপশন।',
    category: 'Social',
    thumbnailColor: '#14b8a6',
    badge: 'মিনিমাল'
  }
];
