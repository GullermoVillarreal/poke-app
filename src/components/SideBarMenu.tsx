import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { BiLogOutCircle } from "react-icons/bi";

const SideBarMenu = () => {
  return (
    <div className="hidden sm:block">
      <div className="sideBar flex flex-col items-center h-screen w-64">
        <img className="h-12 w-36 mt-5" src={logo} alt="imagen" />
        <img className="h-52 w-52 mt-9" src={avatar} alt="imagen" />
        <p>ASHK123</p>
        <p>Level 1</p>
        <p>"Work hard on yout test"</p>
        <div className="h-3/6 w-full"></div>
        <button className="flex items-center justify-around w-44 bg-white bg-opacity-10 mb-5">
          <BiLogOutCircle /> LOG OUT
        </button>
      </div>
    </div>
  );
};

export default SideBarMenu;
