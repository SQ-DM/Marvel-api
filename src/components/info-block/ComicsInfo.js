import { useParams } from "react-router-dom";

export default function ComicsInfo({ comic }) {
  const { comicId } = useParams();

  const { title, description, pageCount, prices } = comic;

  const readingValues = (value) => {
    return value === "" ? "No data" : value;
  };

  const content =
    comic.id === parseFloat(comicId) ? (
      <div
        className="card text-white bg-dark card border-warning"
        style={{ maxWidth: "540px", marginTop: "50px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-warning">
                {readingValues(title)}
              </h5>
              <p className="card-text">
                Description: {readingValues(description)}
              </p>
              <p className="card-text">Pages: {readingValues(pageCount)}</p>
              <p className="card-text">
                Price: {readingValues(prices[0].price)}$
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return content;
}
