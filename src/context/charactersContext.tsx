import { ReactNode, createContext, useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import {
  ICharacter,
  ICharacterContext,
  ICharactersResponse,
  IPage,
  TChangePage,
} from "../interfaces/character.interface";

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersContext = createContext<ICharacterContext>({
  characters: [],
  totalResults: 0,
  pages: 0,
  currentPage: 1,
  page: { prev: null, next: null },
  getCharactersByPage: () => {},
});

export const CharactersProvider = (props: CharactersProviderProps) => {
  const { children } = props;

  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<IPage>({ prev: null, next: null });

  const updateProps = (data: ICharactersResponse) => {
    setCharacters(data.results);
    setTotalResults(data.info.count);
    setPages(data.info.pages);
    setPage({ prev: data.info.prev, next: data.info.next });
  };

  const getCharactersByPage = (
    page: string | number,
    typeChangePage?: TChangePage
  ) => {
    switch (typeChangePage) {
      case "next":
        setCurrentPage(currentPage + 1);
        break;
      case "prev":
        setCurrentPage(currentPage - 1);
        break;
      case "select":
        setCurrentPage(Number(page as number));
        page = `https://rickandmortyapi.com/api/character/?page=${page}`;
        break;
    }

    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading(null);
      },
    }).then((r) => console.log(r));

    // SetTimeout it's only for show the loading
    setTimeout(() => {
      Axios.get<ICharactersResponse>(page as string).then(
        ({ data, status }) => {
          if (status === 200) updateProps(data);
          Swal.close();
        }
      );
    }, 500);
  };

  useEffect(() => {
    getCharactersByPage("https://rickandmortyapi.com/api/character/");
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        pages,
        currentPage,
        page,
        getCharactersByPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
