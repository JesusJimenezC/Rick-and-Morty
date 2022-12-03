export type TChangePage = "next" | "prev" | "select" | undefined;

export interface IPage {
  prev: string | null;
  next: string | null;
}

interface IInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  image: string;
  created: Date;
}

export interface ICharactersResponse {
  results: Array<ICharacter>;
  info: IInfo;
}

export interface ICharacterContext {
  characters: Array<ICharacter>;
  totalResults: number;
  pages: number;
  currentPage: number;
  page: IPage;
  getCharactersByPage: (
    page: string | number,
    typeChangePage?: TChangePage
  ) => void;
}
