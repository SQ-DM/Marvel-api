import React from "react";
import PropTypes from "prop-types";
import thor from "../img/thor.jpeg";

InfoBlock.propTypes = {
  infoChar: PropTypes.object,
};

export default function InfoBlock({ infoChar }) {
  const content = infoChar ? (
    <div className="card m-auto card card text-white bg-dark card border-info">
      <img
        src={`${infoChar.thumbnail.path}.${infoChar.thumbnail.extension}`}
        className="card-img-top p-1"
        alt="..."
        style={{ borderRadius: ".4em" }}
      />
      <div className="card-body">
        <div className="wrapper">
          {" "}
          <h5 className="card-title text-info">{infoChar.name}</h5>
          <a
            className="btn btn-light btn-sm m-1"
            href={infoChar.urls[0].url}
            role="button">
            Home
          </a>
          <a
            className="btn btn-light btn-sm"
            href={infoChar.urls[1].url}
            role="button">
            Wiki
          </a>
        </div>

        <p className="card-text">
          {infoChar.description === "" ? (
            <strong className="text text-warning">
              <small>DESCRIPTION NOT FOUND</small>
            </strong>
          ) : (
            infoChar.description
          )}
        </p>
      </div>
      <div className="card-body">
        <h5 className="text-info">Comics</h5>
        <ul className="list-group list-group-fluid">
          {infoChar.comics.items.length > 0 ? null : (
            <strong className="text text-warning">
              <small>COMICS NOT FOUND</small>
            </strong>
          )}
          {infoChar.comics.items.map((el, index) => {
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
  ) : (
    null
  );

  return content;
}

