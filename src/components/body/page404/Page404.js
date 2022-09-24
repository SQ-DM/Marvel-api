import { Link } from "react-router-dom";


const Page404 = () => {
  return (
    <div className="text-center mt-5">
      <p className="text-warning">This page not found!</p>
      <Link className="nav-link active" to="/">
        Home
      </Link>
    </div>
  );
};

export default Page404;
