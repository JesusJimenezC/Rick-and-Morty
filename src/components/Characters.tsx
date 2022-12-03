import React, { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";
import Pagination from "./Pagination";
import Status from "./Status/Status";

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div className="row">
      <Pagination />
      {characters.map(
        ({ id, name, image, species, gender, status, type, created }) => (
          <div key={id} className="col-4 mb-4">
            <div className="card text-bg-dark">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <b>Status: </b>
                  <Status status={status} />
                </p>
                <p className="card-text">
                  <b>Species: </b>
                  {species}
                </p>
                <p className="card-text">
                  <b>Gender: </b>
                  {gender}
                </p>
                <p className="card-text">
                  <b>Type: </b>
                  {type !== "" ? type : "Unknown"}
                </p>
                <p className="card-text">
                  <b>Created: </b>
                  {new Date(created).toDateString()}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Characters;
