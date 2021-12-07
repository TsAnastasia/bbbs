export interface IRightsRes {
  count: number;
  // next: string | null;
  // previous: string | null;
  page: number;
  results: IRightsCard[];
}

export interface IRightsCard {
  id: number;
  title: string;
  tags: IRightsTag[];
}

export interface IRightsTag {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export interface IRightsArticle {
  id: number;
  tags: IRightsTag[];
  nextArticle: { id: number; title: string } | null;
  title: string;
  description: string;
  body: string;
}
