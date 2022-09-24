import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarvelService from "./MarvelService";
import Main from "./components/body/Main";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/RandomChar";
import Spinner from "./components/spinner/Spinner";
import Comics from "./components/body/Comics";
import Page404 from "./components/body/page404/Page404";
import ComicsInfo from "./components/info-block/ComicsInfo";
import InputChar from "./components/info-block/InputChar";


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [infoChar, setInfoChar] = useState(null);
  const [activeChar, setActiveChar] = useState(null);
  const [offset, setOffset] = useState(9);
  const [loading, setLoading] = useState(true);
  const [comic, setComic] = useState(null);
  const [char, setGetInputChar] = useState(null);

  const marvelService = new MarvelService();
  
  useEffect(() => {
    if (loading) {
      marvelService
        .getAllCharacters(offset)
        .then((chars) => setCharacters([...characters, ...chars.data.results]));
      setOffset((prevOffset) => prevOffset + 9);
      setIsLoaded(true);
      setLoading(false);
    }
  }, [loading]);

  const onHandleGetInfo = (char) => {
    setInfoChar(char);
    setActiveChar(char.id);
  };

  const onHandleGetComic = (comic) => {
    setComic(comic);
  };

  const onHandleGetInputChar = (char) => {   
    setGetInputChar(char);
  };


  const onRequest = () => {
    setLoading(true);
  };

  const loaded =
    isLoaded === false ? (
      <Spinner />
    ) : (
      <Main
        characters={characters}
        onHandleGetInfo={onHandleGetInfo}
        activeChar={activeChar}
        infoChar={infoChar}
        onRequest={onRequest}
        loading={loading}
        onHandleGetInputChar={onHandleGetInputChar}
        char={char}
      />
    );

  const fragMent = (
    <>
      <div className="m-2">
        <Header />
      </div>
      <div className="m-2">{loaded}</div>
    </>
  );

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={fragMent} />
            <Route
              path="/comics"
              element={<Comics onHandleGetComic={onHandleGetComic} />}
            />
            <Route
              path="/comics/:comicId"
              element={<ComicsInfo comic={comic} />}
            />
            <Route
              path="/characters/:nameId"
              element={<InputChar char={char} />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
