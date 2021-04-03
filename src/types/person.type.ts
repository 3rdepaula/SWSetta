export interface PersonStarWarsProps {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: any[]
  starships: string[]
  url: string
  vehicles: string[]
}
