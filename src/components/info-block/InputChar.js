import React from "react";
import PropTypes from "prop-types";

InputChar.propTypes = {
  char: PropTypes.array,
};

export default function InputChar({ char }) {
  const content = char ? (
    <div className="container-fluid">
      <div className="card mt-1 card card text-white bg-dark card border-info">
        <img
          src={`${char[0].thumbnail.path}.${char[0].thumbnail.extension}`}
          className="card-img-top p-1"
          alt="..."
          style={{ borderRadius: ".4em" }}
        />
        <div className="card-body">
          <div className="wrapper">
            {" "}
            <h5 className="card-title text-info">{char[0].name}</h5>
            <a
              className="btn btn-light btn-sm m-1"
              href={char[0].urls[0].url}
              role="button">
              Home
            </a>
            <a
              className="btn btn-light btn-sm"
              href={char[0].urls[1].url}
              role="button">
              Wiki
            </a>
          </div>

          <p className="card-text">
            {char[0].description === "" ? (
              <strong className="text text-warning">
                <small>DESCRIPTION NOT FOUND</small>
              </strong>
            ) : (
              char[0].description
            )}
          </p>
        </div>
        <div className="card-body">
          <h5 className="text-info">Comics</h5>
          <ul className="list-group list-group-fluid">
            {char[0].comics.items.length > 0 ? null : (
              <strong className="text text-warning">
                <small>COMICS NOT FOUND</small>
              </strong>
            )}
            {char[0].comics.items.map((el, index) => {
              if (index > 9) return;
              return (
                <li className="list-group-item" key={index}>
                  <small>{el.name}</small>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
  return content;
}
