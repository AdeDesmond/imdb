import Menu from "./Menu";
import { FcHome } from "react-icons/fc";
import { BsInfoSquare } from "react-icons/bs";
import Link from "next/link";
import DarkModeASwitch from "./DarkModeASwitch";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <Menu title="Home" address="/" Icon={FcHome} />
        <Menu title="About" address="/about" Icon={BsInfoSquare} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeASwitch />
        <Link href="/">
          <h2 className="text-sxl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMBD
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
