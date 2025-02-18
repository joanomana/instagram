import { FaRegUserCircle} from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { LuMessageCirclePlus } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import logo from "../storage/img/logos.png";



const Header = () => (
  <header className="flex justify-between p-2 ">
    <img src={logo} alt="ig" />
    <div className="flex gap-4">
      <IoHeartOutline size={26} />
      <LuMessageCirclePlus size={24} />
      <CiSquareMore size={24} />
    </div>
  </header>
);

export default Header;
