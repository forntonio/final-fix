import type { Card } from '@/domain/cards.type';
import { allClasses, classNameToURI } from '@/domain/frosthaven-class';
import type { MetadataRoute } from 'next';

const prodUrl = 'https://frosthaven-cards.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const fhClassIcons = allClasses.map(({ path }) => `${prodUrl}${path}`);
  const selectClassUrl = {
    url: prodUrl,
    images: fhClassIcons,
  };

  const fhClassCardsUrls = (cards: Card[]) => cards
    .map(({ path }) => `${prodUrl}${path}`);
  const selectCardsUrls = allClasses.map(({ name, cards }) => ({
    url: `${prodUrl}/${classNameToURI(name)}/select`,
    images: fhClassCardsUrls(cards),
  }));
  const playCardsUrls = allClasses.map(({ name, cards }) => ({
    url: `${prodUrl}/${classNameToURI(name)}/play`,
    images: fhClassCardsUrls(cards),
  }));
  return [
    selectClassUrl,
    ...selectCardsUrls,
    ...playCardsUrls,
  ];
}
