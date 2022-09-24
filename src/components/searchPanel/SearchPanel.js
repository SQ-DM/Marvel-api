import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import MarvelService from "../../MarvelService";

export default function SearchForm({ onHandleGetInputChar, char }) {
  const [getName, setGetName] = useState("");

  const marvelService = new MarvelService();

  useEffect(() => {
    if (getName) {
      marvelService
        .getCharacterByName(getName)
        .then((person) => onHandleGetInputChar(person.data.results));
    }
  }, [getName]);

  const content = !char ? null : char.length > 0 ? (
    <div>
      <Link to={`/characters/${char[0].id}`} className="button">
        <div className="inner">To Page</div>
      </Link>
    </div>
  ) : (
    <div>Nothing found by this name! Try again.</div>
  );

  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (!/^[A-Z]+[a-z]+/i.test(values.name)) {
            errors.name = "Invalid name";
          }
          return errors;
        }}
        onSubmit={({ name }) => {
          setGetName(name);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,

          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="card text-white bg-dark card border-info mt-1 p-1">
            <span className="text-small">Or search character:</span>
            <input
              className="mb-1"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="text-white">{touched.name && errors.name}</div>
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        )}
      </Formik>
      {content}
    </div>
  );
}
