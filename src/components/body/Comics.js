import React, { useState, useEffect } from "react";
import MarvelService from "../../MarvelService";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
 import { Helmet } from "react-helmet";

export default function Comics({ onHandleGetComic }) {
  const [value, setComics] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(9);

  const marvelService = new MarvelService();

  useEffect(() => {
    if (loading) {
      marvelService.getComics(offset).then((comics) => {
        setComics([...value, ...comics.data.results]);
      });
      setOffset((prevOffset) => prevOffset + 9);
      setLoaded(true);
      setLoading(false);
    }
  }, [loading]);

  const onRequest = () => {
    setLoading(true);
  };

  const content =
    loaded === false ? (
      <Spinner />
    ) : (
      <div className="container-fluid mt-2">
        <div className="row row-cols-4 row-cols-md-4 g-3">
          {value.map((comics) => (
            <Link to={`/comics/${comics.id}`} key={comics.id}>
              <div
                className="card bg-dark card border-warning h-100"
                onClick={() => onHandleGetComic(comics)}>
                <img
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  className="card-img-top"
                  style={{
                    borderRadius: ".2em",
                    weight: "auto",
                    height: "auto",
                  }}
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    <strong className="text-warning">{comics.title}</strong>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-2">
          <button
            className="btn btn-dark"
            type="button"
            onClick={onRequest}
            disabled={loading}>
            Loading more
          </button>
        </div>
      </div>
    );

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel comics page" />
        <title>"Marvel page with comics</title>
      </Helmet>
      {content}
    </>
  );
}
