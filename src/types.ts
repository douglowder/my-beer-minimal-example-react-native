export type TBrewery = {
  city: string;
  country: string;
  createdAt: string;
  description: string;
  id: string;
  lat: number;
  lng: number;
  logo: string;
  name: string;
  photo: string;
  state: string;
  updatedAt: string;
  url: string;
};

export type TBeerstyle = {
  abvAvg: number;
  abvMax: number;
  abvMin: number;
  biabCategoryId: string;
  biabCategoryName: string;
  categoryId: string;
  categoryName: string;
  createdAt: string;
  description: string;
  ebcAvg: number;
  ebcMax: number;
  ebcMin: number;
  id: string;
  name: string;
  originId: string;
  originName: string;
  tasteBitter: number;
  tasteFruity: number;
  tasteIntensity: number;
  tasteSour: number;
  tasteSweet: number;
  updatedAt: string;
};

export type TBeer = {
  abv: number;
  breweryId: TBrewery['id'];
  id: string;
  name: string;
  beerstyleId: TBeerstyle['id'];
};
