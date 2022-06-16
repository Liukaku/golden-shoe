import React, { useContext } from "react";
import { ContextState } from "./interfaces";
import CTX from "./util/store";

interface Blok {
  blok: NavBlok;
}

interface NavBlok {
  component: String;
  NavOptions: Array<NavOptions>;
}

interface NavOptions {
  Title: String;
  Component: String;
  Options: Array<any>;
  _uid: String | any;
}

export const Navbar = ({ blok }: Blok) => {
  const [menuContent, toggleMenu] = useContext<ContextState>(CTX);
  console.log(blok);

  const toggleNav = (e: React.MouseEvent<HTMLElement>, title: String) => {
    e.preventDefault();
    toggleMenu({
      display: true,
      option: title,
    });
  };

  return (
    <div className="bg-gray-900 h-12 w-screen flex">
      {blok.NavOptions.map((navOption: NavOptions) => {
        return (
          <button
            className="text-white mx-5"
            onClick={(e) => {
              toggleNav(e, navOption.Title);
            }}
            key={navOption._uid}
          >
            {navOption.Title}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
