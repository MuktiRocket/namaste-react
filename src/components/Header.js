import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold">
            Online Staus: {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login font-bold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
