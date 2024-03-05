import React from "react";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

type MobileNavType = {
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileNav = ({ openMobileNav, setOpenMobileNav }: MobileNavType) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full z-50 flex md:hidden transition ease-in-out duration-500  py-4 ${
        openMobileNav ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* EMPTY LEFT SIDE */}
      <div className="w-[50%] h-full" onClick={() => setOpenMobileNav(false)} />
      {/* right content */}
      <div className="w-[50%] h-full shadow-2xl bg-white">
        <div className="container flex justify-end mb-3">
          <RxCross2 size={24} onClick={() => setOpenMobileNav(false)} />
        </div>
        <div className="h-[0.5px] w-[90%] mx-auto bg-n-4/20 my-3" />
        <div className="flex flex-col items-center">
          {navItems.map((nav, index) => (
            <Link
              to={nav.href}
              key={index}
              className="mb-5"
              onClick={() => setOpenMobileNav(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
