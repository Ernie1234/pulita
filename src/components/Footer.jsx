import { IoLogoLinkedin } from "react-icons/io5";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-950 py-4 px-5 md:px-0 ">
      <div className="w-full md:max-w-screen-lg lg:max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        <p className="text-white capitalize text-xl">pulita</p>
        <div className="flex gap-5">
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <FaFacebook
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <FaXTwitter
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <FaInstagram
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <IoLogoLinkedin
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <FaGoogle
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link to="www.facebook.com/pulita" target="_blank" rel="noreferrer">
            <FaYoutube
              className="text-gray-100 hover:text-gray-200 hover:scale-90 transition-all duration-300 ease-in-out"
              size={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
