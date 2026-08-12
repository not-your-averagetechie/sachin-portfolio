import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { menu, close } from "../assets";

import resumeFile from "../assets/sachin-yadav.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center fixed top-0 z-30 px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-primary/80 backdrop-blur-md border-b border-frost/10"
          : "py-5 sm:py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex flex-col leading-tight"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-frost text-lg md:text-xl font-semibold uppercase tracking-widest">
            Sachin
          </span>
          <span className="text-frost/50 text-[10px] md:text-xs font-light uppercase tracking-[0.28em] hidden sm:block">
            AI &amp; Web3 Product Head
          </span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row items-center gap-8 md:gap-12">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-frost" : "text-frost/70"
              } hover:opacity-70 hover:text-frost transition-all duration-200 text-sm md:text-base font-medium uppercase tracking-wider cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={resumeFile}
              download
              className="rounded-full border border-frost/50 text-frost text-xs md:text-sm font-medium uppercase tracking-widest px-5 py-2 hover:bg-frost/10 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-100 border border-frost/10 absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium uppercase tracking-wider cursor-pointer text-sm ${
                    active === nav.title ? "text-frost" : "text-frost/60"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-frost/10 w-full">
                <a
                  href={resumeFile}
                  download
                  className="text-frost/60 text-sm font-medium uppercase tracking-wider"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
