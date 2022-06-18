import React from "react";
import { CallToActionProps, TitleStr } from "../interfaces";

const Returns = (props: CallToActionProps) => {
  console.log(props);
  const styleArr = [``, `robotoBlack`, `underline`];
  return (
    <div className="bg-green-300">
      <h1 className="w-full text-center my-3 py-3">
        {props.blok.map((title: TitleStr, n: number) => {
          return (
            <span
              className={`text-2xl ${styleArr[n]}`}
            >{`${title.Title.toUpperCase()} `}</span>
          );
        })}
      </h1>
    </div>
  );
};

export default Returns;
