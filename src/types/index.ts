export interface CharacterResponse {
  properties: {
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    created: string;
    edited: string;
    name: string;
    homeworld: string;
    url: string;
  }
  uid: string;
}

export interface FilmResponse {
  properties: {
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    producer: string;
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;
    url: string;
  }
  uid: string
}

export interface AllCharactersResponse {
  results: [
    { name: string, uid: string }
  ];
  total_pages: number;
}

export interface AllFilmsResponse {
  result: [
    {
      uid: string, 
      properties: {
        title: string,
        director: string,
      }
    }
  ];
  total_pages: number;
}

export interface Character {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
};

export interface Film {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}