import React from "react";

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

const toggleNav = (e: React.MouseEvent<HTMLElement>, tile: String) => {
  e.preventDefault();
};

export const Navbar = ({ blok }: Blok) => {
  console.log(blok);

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
