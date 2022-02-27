// import logo from "assets/images/Logo.png";
import logo from "../../../assets/images/Logo.png";
export const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input type="text" className="w-full p-3 border-gray-200" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
