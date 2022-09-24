import React, { useState, useEffect } from "react";
import MarvelService from "../../MarvelService";
import Spinner from "../spinner/Spinner";
import Wrapper from "./Wrapper";

export default function Header() {
  const [randomChar, setRandomChar] = useState(null);
  const [isLoaded, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = new MarvelService();

  useEffect(() => {
    toggleRandomChar();
  }, []);

  const toggleRandomChar = () => {
    data.getCharacter().then((char) => {
      if (char.code === 404) {
        setError(
          `Error ${char.code}, status:${char.status}. ${""}Please reload app.`
        );
        setIsLoading(false);
      } else {
        setRandomChar(char.data.results);
        setIsLoading(false);
      }
    });
  };

  if (error) {
    return (
      <div className="">
        <Wrapper error={error} />
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="text-primary">
        <Spinner />
      </div>
    );
  } else {
    const content = randomChar.map((char) => (
      <div
        className="container-fluid rounded bg-dark border border-info p-1"
        key={char.id}>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="img-fluid rounded"
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt="..."
            />
          </div>
          <div className="col-sm-9 text-white ">
            <div className="row ">
              <div className="col-8 col-sm-6 text-center ">
                <h5 className="title text-primary ">
                  <strong>{char.name}</strong>
                </h5>
                <p className="text-truncate">
                  <small>
                    {char.description === "" ? (
                      <strong className="text text-warning">
                        DESCRIPTION NOT FOUND
                      </strong>
                    ) : (
                      char.description
                    )}
                  </small>
                </p>
                <div className="buttons">
                  <a
                    className="btn btn-light btn-sm m-1"
                    href={char.urls[0].url}
                    role="button">
                    Home
                  </a>
                  <a
                    className="btn btn-light btn-sm"
                    href={char.urls[1].url}
                    role="button">
                    Wiki
                  </a>
                </div>
              </div>
              <div className="col-4 col-sm-6 text-center">
                <h5 className="subtitle mb-2 text-primary">
                  <strong>Random character for today!</strong>
                </h5>
                <p className="text">Do you want to get to know him better?</p>
                <p className="text">
                  <small>Or choose another one</small>
                </p>
                <a
                  className="btn btn-light btn-sm"
                  href="#"
                  role="button"
                  onClick={() => toggleRandomChar()}>
                  Try it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return content;
  }
}
