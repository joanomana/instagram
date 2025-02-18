import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Footer = () => (
  <footer className="sticky bottom-0 w-full flex justify-around p-4 bg-white border-t">
    <FiHeart size={24} />
    <FiMessageCircle size={24} />
    <FiSend size={24} />
    <FaRegUserCircle size={24} />
  </footer>
);

export default Footer;
