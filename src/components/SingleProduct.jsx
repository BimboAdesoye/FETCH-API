import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="container text-center">
        <h2>{id}</h2>
      </div>
    </div>
  );
};

export default SingleProduct;
