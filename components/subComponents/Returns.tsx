import React from "react";
import { CallToActionProps, TitleStr } from "../interfaces";

const Returns = (props: CallToActionProps) => {
  console.log(props);
  return (
    <div>
      <h1 className="w-full text-center">
        {props.blok.map((title: TitleStr) => {
          return `${title.Title.toUpperCase()} `;
        })}
      </h1>
    </div>
  );
};

export default Returns;
