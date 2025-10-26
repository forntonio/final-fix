import type { Card } from './cards.type';

type CreateCardsInput<X extends Card> = Omit<X, 'status' | 'path'> & {
  imageAvailable?: boolean;
  imageFileName?: string;
};

interface CreateCardsOptions {
  imagePrefix?: string;
  imageExtension?: string;
  imageAvailable?: boolean;
}

function nameToImagePath(name: string): string {
  return name.toLowerCase().replace(/ /g, '-');
}

export function createCards<X extends Card>(
  cards: CreateCardsInput<X>[],
  basePath: string,
  { imagePrefix = 'fh-', imageExtension = 'webp', imageAvailable: defaultImageAvailable }: CreateCardsOptions = {},
): X[] {
  return cards.map(({ imageAvailable, imageFileName, ...card }) => {
    const fileName = imageFileName ?? `${imagePrefix}${nameToImagePath(card.name)}.${imageExtension}`;
    return {
      status: 'inHand',
      path: `${basePath}/${fileName}`,
      imageAvailable: imageAvailable ?? defaultImageAvailable ?? true,
      ...card,
    } as X;
  });
}