import React from 'react';
import { CardState } from '../types/card';
import { BreakingNewsCard } from './BreakingNewsCard';
import { GlassNewsCard } from './GlassNewsCard';
import { EditorialQuoteCard } from './EditorialQuoteCard';
import { FactCheckCard } from './FactCheckCard';
import { NationalDailyCard } from './NationalDailyCard';
import { SportsHighlightCard } from './SportsHighlightCard';
import { CyberTechCard } from './CyberTechCard';
import { MinimalistCard } from './MinimalistCard';

interface Props {
  card: CardState;
}

export const CardRenderer: React.FC<Props> = ({ card }) => {
  switch (card.templateId) {
    case 'breaking-news':
      return <BreakingNewsCard card={card} />;
    case 'glass-news':
      return <GlassNewsCard card={card} />;
    case 'editorial-quote':
      return <EditorialQuoteCard card={card} />;
    case 'fact-check':
      return <FactCheckCard card={card} />;
    case 'national-daily':
      return <NationalDailyCard card={card} />;
    case 'sports-highlight':
      return <SportsHighlightCard card={card} />;
    case 'cyber-tech':
      return <CyberTechCard card={card} />;
    case 'minimalist':
      return <MinimalistCard card={card} />;
    default:
      return <BreakingNewsCard card={card} />;
  }
};
