import React from "react";
import InfoBlock from "../info-block/InfoBlock";
import SearchForm from "../searchPanel/SearchPanel";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";


Main.propTypes = {
  characters: PropTypes.array,
  onHandleGetInfo: PropTypes.func,
  infoChar: PropTypes.object,
  activeChar: PropTypes.number,
  onRequest: PropTypes.func,
  loading: PropTypes.bool,
};

export default function Main({
  characters,
  onHandleGetInfo,
  infoChar,
  activeChar,
  onRequest,
  loading,
  onHandleGetInputChar,
  char,
}) {
  const noActive = "card card text-info bg-dark card border-info h-100";
  const active = "card card text-info bg-dark card border-danger h-100";

  const content = characters.map((char) => (
    <div className="col" key={char.id}>
      <div
        className={activeChar === char.id ? active : noActive}
        onClick={() => onHandleGetInfo(char)}>
        <img
          src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          className="card-img-top"
          style={{ borderRadius: ".2em", weight: "auto", height: "auto" }}
        />
        <div className="card-body">
          <p className="card-text text-center">
            <strong>{char.name}</strong>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row">
      <div className="col-8">
        <div className="row row-cols-3 row-cols-md-3 g-4">{content}</div>
        <div className="text-center mt-2">
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => onRequest()}
            disabled={loading}>
            {loading ? (
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"></span>
            ) : null}
            Loading more
          </button>
        </div>
      </div>

      <div className="col-4">
        <Helmet>
          <meta name="description" content="Marvel information portal" />
          <title>"Marvel information portal</title>
        </Helmet>
        <ErrorBoundary>
          <InfoBlock infoChar={infoChar} />
          <SearchForm onHandleGetInputChar={onHandleGetInputChar} char={char} />
        </ErrorBoundary>
      </div>
    </div>
  );
}
