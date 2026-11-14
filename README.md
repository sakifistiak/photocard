# PhotoCard Studio

Modern, client-side social media and news photo card generator built with React, TypeScript, and Vite. Designed specifically for digital newsrooms, content creators, and social media managers to create high-resolution graphics directly in the browser.

## Features

- Multiple card templates: Breaking News, Modern Glass, Editorial Quote, Fact Check, National Daily, Sports Highlight, Cyber Tech, and Minimalist.
- Multi-aspect ratio support: 1:1 (Square), 4:5 (Portrait Feed), 16:9 (Landscape), and 9:16 (Story/Reels).
- Native Bengali typography support with Google Fonts (Hind Siliguri, Anek Bangla, Tiro Bangla, Noto Sans Bengali).
- Real-time image adjustments: zoom, pan X/Y, brightness, contrast, grayscale, and blur.
- Custom branding: logo upload, placement controls, and custom watermark bars.
- One-click Bengali date auto-formatting.
- High-resolution client-side export: 1x (1080p), 2x (2160p Quad HD), and 3x (Ultra HD) in PNG and JPEG formats.
- Direct copy to clipboard support.
- Fully responsive design with mobile drawer controls.
- Offline-ready with local storage state preservation.
- Dark and light theme modes.

## Tech Stack

- React 19
- TypeScript
- Vite
- html-to-image
- Lucide React

## Development Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/sakifistiak/photocard.git
cd photocard
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

The project is preconfigured for automatic deployment to GitHub Pages via GitHub Actions upon pushing to the `main` branch.

## License

MIT License. Free for personal and commercial use.
