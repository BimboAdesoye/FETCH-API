import { useEffect, useState } from "react";
import "../styles/Products.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let apiUrl = "https://fakestoreapi.com/products";

  let fetcher = async () => {
    try {
      setLoading(true);
      let fetchedData = await fetch(apiUrl);
      let response = await fetchedData.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  console.log("outside useEffect hook");

  return (
    <div>
      <h2 className="text-center my-3">Products component</h2>
      {loading && <ClipLoader color={"red"} size={50} />}
      <div className="d-flex flex-wrap container">
        {data.map((datum) => {
          const { id, image, title, category } = datum;
          return (
            <div className="p-4 w-25 text-center" key={id}>
              <Link
                className="text-decoration-none"
                to={`/SingleProduct/${id}`}
              >
                <h2>{title.slice(0, 8)}</h2>
                <p>{category}</p>
                <img className="w-25" src={image} alt={title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
