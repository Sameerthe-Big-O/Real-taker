import Menuitems from "../components/MenuItems";
import { MenuData } from "../data";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/Group.png";
import { useState } from "react";
import MenuIcon from "../assets/svgs/MenuIcon.svg";
import "../css/Cards.css";
const Admin = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <div
        className={`bg-[#363740] 
        z-50  min-w-[230px] p-4 border-b-2 
      max-md:fixed sideBar  max-md:top-0  max-md:bottom-0 
      ${
        visible
          ? "max-md:top-0  max-md:left-0"
          : "max-md:top-0  max-md:-left-60"
      }
       `}
      >
        <div className="mt-8">
          <img src={logo} alt="" />
        </div>
        <div>
          <Menuitems MenuItems={MenuData} />
        </div>
      </div>
      <div
        className="fixed top-4 right-5 w-[20px] cursor-pointer
      max-md:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out
       
      "
        onClick={() => setVisible((value) => !value)}
      >
        <img src={MenuIcon} alt="" />
      </div>
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
