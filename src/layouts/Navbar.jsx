import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top bg-primary">
      <nav className="container d-flex justify-content-between align-items-center py-2">
        <h2 className="fst-italic">ABIMBOLA</h2>
        <ul className="d-flex justify-content-between list-unstyled">
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/">
              Home
            </Link>
          </li>
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/About">
              About
            </Link>
          </li>
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/Products">
              Products
            </Link>
          </li>
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/Goods">
              Goods
            </Link>
          </li>
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/Crypto">
              Crypto
            </Link>
          </li>
          <li className="mx-5">
            <Link className="text-decoration-none text-white" to="/Countries">
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
