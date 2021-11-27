interface IRightsRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: {};
}

export interface IRightsResult {
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
