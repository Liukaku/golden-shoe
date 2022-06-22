import React from "react";

const Footer = ({ blok }: any) => {
  return (
    <div className="w-full bg-zinc-900 mt-20 table">
      <div className="w-10/12 flex mx-auto flex-wrap">
        {blok.Footer.map((column: any, n: number) => {
          return (
            <ul className="text-white mx-5 my-6">
              <li className="my-2 text-xl robotoBold">{column.Title}</li>
              <li className="my-2 ">{column.Option1}</li>
              <li className="my-2 ">{column.Option2}</li>
              <li className="my-2 ">{column.Option3}</li>
              <li className="my-2 ">{column.Option4}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
