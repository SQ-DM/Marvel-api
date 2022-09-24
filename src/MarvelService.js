export default class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  // _apiKey = enter your key here after registration on the service marvel.com
  _baseOffSet = 210;

  getResource = async (url) => {
    let response = await fetch(url);
    return await response.json();
  };

  getAllCharacters = (offset = this._baseOffSet) => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`
    );
  };

  getCharacter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
  };

  getComics = (offset) => {
    return this.getResource(
      `${this._apiBase}comics?limit=9&offset=${offset}&${this._apiKey}`
    );
  };

  getCharacterByName = (name) => {
    return this.getResource(
      `${this._apiBase}characters?name=${name}&${this._apiKey}`
    );
  };
}
