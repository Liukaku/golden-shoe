import React from "react";
import { CallToActionProps, TitleStr } from "../interfaces";

const TripleBox = (props: CallToActionProps) => {
  console.log(props);
  return (
    <div className="flex w-screen justify-between">
      {props.blok.map((box: TitleStr, n: number) => {
        return (
          <div>
            <h1>{box.Title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TripleBox;
