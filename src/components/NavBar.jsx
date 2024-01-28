import Headroom from "react-headroom";
import { useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

import { pageLinks } from "../libs/data";
import Button from "./Button";

function NavBar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <Headroom>
        <nav className="w-full bg-white transition-all duration-300 ease-in-out shadow-sm md:shadow-md lg:shadow-lg">
          <div className="md:max-w-screen-md lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/assets/Pulita logo.png" alt="Logo" className="h-16" />
            </Link>

            {/* to show the menu button for toggle the mobile nav bar */}
            {!isOpen && (
              <IoMenu
                onClick={handleClose}
                size={45}
                className="block md:hidden hover:text-slate-950 text-slate-900"
              />
            )}

            {/* navbar links for the desktop view */}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className=" flex flex-row justify-center items-center md:space-x-8 rtl:space-x-reverse ">
                {pageLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `capitalize text-xl flex justify-center items-center gap-1 font-normal text-gray-500 hover:text-black transition-all duration-300 ease-in-out  ${
                          isActive ? "text-black" : ""
                        }`
                      }
                    >
                      {pathname === link.path ? (
                        <BsLightningFill color="red" />
                      ) : (
                        " "
                      )}
                      {link.text}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="hidden md:block">
                    <Button title="CONTACT US NOW" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Headroom>
      {/* mobile nav */}
      {isOpen && (
        <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 block md:hidden bg-blue-950/70 z-40 transition-all duration-300 ease-in-out">
          {isOpen && (
            <IoClose
              onClick={handleClose}
              size={45}
              className="block md:hidden mt-3 ml-3 text-slate-100"
            />
          )}
          <ul className="font-medium flex flex-col gap-5 ml-5 mt-8 w-full rtl:space-x-reverse">
            {pageLinks.map((link) => (
              <li key={link.id} className="text-left  py-3">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    " capitalize text-xl block " +
                    (isActive ? "text-gray-300" : "text-white")
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li className="text-left  py-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  " capitalize text-xl block " +
                  (isActive ? "text-gray-300" : "text-white")
                }
              >
                Contact Us Now
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
