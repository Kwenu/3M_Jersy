export type JerseyCategory = 'FOOTBALL' | 'CRICKET' | 'BASKETBALL' | 'ESPORTS' | 'CUSTOM';

export interface Jersey {
  id: string;
  /** Catalog reference quoted on quotes and WhatsApp enquiries, e.g. 3MJ-001. */
  itemCode: string;
  name: string;
  description: string;
  category: JerseyCategory;
  image: string;
}

export interface Tshirt {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
  /** Tailwind span classes controlling the tile size in the gallery grid. */
  span: string;
}