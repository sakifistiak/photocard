const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

const banglaMonths = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর'
];

const banglaDays = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার'
];

export function toBanglaNumber(num: number | string): string {
  return String(num).replace(/[0-9]/g, (digit) => banglaNumbers[parseInt(digit, 10)] ?? digit);
}

export function getFormattedBanglaDate(date: Date = new Date()): string {
  const day = toBanglaNumber(date.getDate());
  const month = banglaMonths[date.getMonth()];
  const year = toBanglaNumber(date.getFullYear());
  const dayName = banglaDays[date.getDay()];

  return `${day} ${month} ${year} | ${dayName}`;
}

export function getFormattedEnglishDate(date: Date = new Date()): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };
  return date.toLocaleDateString('en-US', options);
}
