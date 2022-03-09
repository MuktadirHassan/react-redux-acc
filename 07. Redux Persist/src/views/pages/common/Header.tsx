// import logo from "assets/images/Logo.png";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
export const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="my-3">
          <img src={logo} alt="" className="w-48" />
        </div>
        <div className="flex items-center">
          <div>
            <Link to="/" className="mr-3 text-gray-800">
              Home
            </Link>
            <Link to="/cart" className="mr-3 text-gray-800">
              Cart
            </Link>
            <Link to="/login" className="mr-3 text-gray-800">
              Login
            </Link>
          </div>
          <input
            type="text"
            className="mr-3 form-control"
            placeholder="Search..."
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};
