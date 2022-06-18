import React from "react";
import { CallToActionProps, TitleStr } from "../interfaces";

const TripleBox = (props: CallToActionProps) => {
  console.log(props);
  return (
    <div className="flex justify-between w-10/12 mx-auto">
      {props.blok.map((box: TitleStr, n: number) => {
        return (
          <div className="bg-zinc-200 robotoBold w-4/12 text-center mx-5 py-2">
            <h1>{box.Title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TripleBox;
