import React, { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";
import { TChangePage } from "../interfaces/character.interface";

const Pagination = () => {
  const {
    totalResults,
    pages,
    currentPage,
    page: { next, prev },
    getCharactersByPage,
  } = useContext(CharactersContext);

  return (
    <div className="my-5 row">
      <div className="col-3 col-3 d-flex align-items-center ">
        <b className="mx-1">Total results:</b> {totalResults}
      </div>
      <div className="col-3 col-3 d-flex align-items-center">
        <b className="mx-1">Page:</b> {currentPage} of {pages}
      </div>
      <div className="col-3 d-flex align-items-center">
        <b className="mx-1">Go to page:</b>
        <select
          data-type="select"
          onChange={(e) =>
            getCharactersByPage(
              e.target.value,
              e?.currentTarget.dataset.type as TChangePage
            )
          }
          className="form-select w-auto mx-1"
          value={currentPage}
        >
          {Array.from(Array(pages).keys()).map((page) => (
            <option key={page + 1} value={page + 1}>
              {page + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="col-3 text-end">
        {prev && (
          <button
            data-type="prev"
            className="btn btn-success"
            onClick={(e) =>
              getCharactersByPage(
                prev,
                e?.currentTarget.dataset.type as TChangePage
              )
            }
          >
            Prev
          </button>
        )}
        {next && (
          <button
            data-type="next"
            className="btn btn-success mx-2"
            onClick={(e) =>
              getCharactersByPage(
                next,
                e?.currentTarget.dataset.type as TChangePage
              )
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
