export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "nottingham",
  name: "Nottingham",
  countyOrRegion: "Nottinghamshire",
  latitude: 52.9540,
  longitude: -1.1502,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "mansfield",
    name: "Mansfield",
    countyOrRegion: "Nottinghamshire",
    latitude: 53.1448,
    longitude: -1.1966,
  },
  {
    slug: "derby",
    name: "Derby",
    countyOrRegion: "Derbyshire",
    latitude: 52.9225,
    longitude: -1.4779,
  },
  {
    slug: "newark-on-trent",
    name: "Newark-on-Trent",
    countyOrRegion: "Nottinghamshire",
    latitude: 53.0750,
    longitude: -0.8120,
  },
  {
    slug: "loughborough",
    name: "Loughborough",
    countyOrRegion: "Leicestershire",
    latitude: 52.7701,
    longitude: -1.2040,
  },
  {
    slug: "arnold",
    name: "Arnold",
    countyOrRegion: "Nottinghamshire",
    latitude: 52.9988,
    longitude: -1.1288,
  },
  {
    slug: "ilkeston",
    name: "Ilkeston",
    countyOrRegion: "Derbyshire",
    latitude: 52.9710,
    longitude: -1.3099,
  },
  {
    slug: "long-eaton",
    name: "Long Eaton",
    countyOrRegion: "Derbyshire",
    latitude: 52.8994,
    longitude: -1.2682,
  },
  {
    slug: "hucknall",
    name: "Hucknall",
    countyOrRegion: "Nottinghamshire",
    latitude: 53.0395,
    longitude: -1.1993,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
