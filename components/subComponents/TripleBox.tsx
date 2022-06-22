import React from "react";
import { CallToActionProps, TitleStr } from "../interfaces";

const TripleBox = (props: CallToActionProps) => {
  return (
    <div className="md:flex block justify-between md:w-10/12 w-screen mx-auto">
      {props.blok.map((box: TitleStr, n: number) => {
        return (
          <div className="bg-zinc-200 robotoBold md:w-4/12 w-screen md:border-0 border border-zinc-300 md:mt-0 mt-1 text-center md:mx-5 py-2 md:px-0 px-2">
            <h1>{box.Title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TripleBox;
