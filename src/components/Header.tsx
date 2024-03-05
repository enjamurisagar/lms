import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileNav from "./MobileNav";
export default function Header() {
  const location = useLocation();
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  return (
    <header className="w-full h-[50px] md:h-[72px] bg-white border-b sticky top-0 z-[49]">
      <div className="container h-full flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="logo"
            className="scale-[1.1]"
            width={24}
            height={24}
          />
          <h1 className="text-[24px] font-semibold">EduOnline</h1>
        </div>
        {/* medium HIDDEN IN SM */}
        <div className="hidden md:flex  gap-5 h-full items-center">
          {navItems.map((nav, index) => (
            <Link
              to={nav.href}
              key={index}
              className={`hover:text-hover transition ${
                location.pathname === nav.href && "text-default"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {/* right HIDDEN IN SM*/}
        <div className="hidden md:flex gap-3 h-full items-center ">
          <Link to="/auth" className="hover:text-hover transition">
            Login / Register
          </Link>

          <CiSearch
            className="text-default bg-white hover:text-white hover:bg-default cursor-pointer transition border-[1.5px] border-default rounded-full p-1.5"
            size={35}
          />
        </div>
        {/* MOBILE NAV */}
        <div className="flex md:hidden h-full items-center">
          <GiHamburgerMenu
            size={24}
            className="hover:text-hover transition"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          />
        </div>

        <MobileNav
          openMobileNav={openMobileNav}
          setOpenMobileNav={setOpenMobileNav}
        />
      </div>
    </header>
  );
}
