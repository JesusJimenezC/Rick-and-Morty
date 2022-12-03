import Characters from "./components/Characters";
import { CharactersProvider } from "./context/charactersContext";

const App = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-dark d-flex justify-content-center">
        <h1 className="text-light text-center text-uppercase">
          Rick and Morty App
        </h1>
      </div>
      <div className="container">
        <CharactersProvider>
          <Characters />
        </CharactersProvider>
      </div>
    </>
  );
};

export default App;
