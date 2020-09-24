export interface GetBeersQuery {
  page?: number;
  per_page?: number;
  beer_name?: string;
  IsSortEnabled?: boolean;
  SortColumn?: string;
  IsDesc?: boolean;
}


export interface BeerModel {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: string;
}

export interface GetBeersResult {
  beers: BeerModel[];
}
