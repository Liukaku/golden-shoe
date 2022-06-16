import React from "react";

export const Navbar = ({ blok }: any) => {
  console.log(blok);
  const options: Array<String> = [
    "Sale",
    "New In",
    "Men",
    "Women",
    "Kid",
    "Brands",
  ];

  return (
    <div className="bg-gray-900 h-12 w-screen flex">
      {options.map((title: String) => {
        return (
          <div className="text-white">
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
