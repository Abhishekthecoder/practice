import React from "react";
import restaurant from "../assets/restaurant.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import menuicon from "../assets/menuicon.png"
import x from "../assets/x.png"

const Header = () => {

  const [mobileOpenDrawer,setMobileOpenDrawer] = useState(false)

  const toggleNavbar=()=>{
    setMobileOpenDrawer(!mobileOpenDrawer)
  }

  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            {/* <div className="dropdown dropdown-bottom md:max-w-2xl">
              
               <img className="btn m-1 " src={menuicon} alt="" />
              
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div> */}

            <img
              src={restaurant}
              alt="restaurantpic"
              className="h-10 p-0 m-1 rounded"
            />
            <a className="p-0 text-xl">restaurant </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileOpenDrawer ? <x/>:<menuicon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
