import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { BiLogOutCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
const SideBarMenu = () => {
  return (
    <div>
      <div
        className="sideBar fixed w-screen h-14 sm:hidden md:hidden
      flex items-center justify-around "
      >
        <GiHamburgerMenu size={28} />
        <img className="h-10 w-28" src={logo} alt="imagen" />
        <div></div>
      </div>
      <div className="hidden sm:block">
        <div className="sideBar flex flex-col items-center sm:h-screen sm:w-80 w-screen h-12 ">
          <img className="h-14 w-40 mt-5" src={logo} alt="imagen" />
          <img className="h-52 w-52 mt-9" src={avatar} alt="imagen" />
          <p className="text-2xl mt-5">ASHK123</p>
          <p className="text">Level 1</p>
          <p className="text mt-6">"Work hard on yout test"</p>
          <div className="h-3/6 w-full"></div>
          <button className="flex items-center justify-between h-12 w-64 bg-white bg-opacity-10 mb-5 p-4">
            <BiLogOutCircle size={28} /> LOG OUT
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
