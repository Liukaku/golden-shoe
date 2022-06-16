import React from "react";
import { TitleStr } from "../interfaces";

const MailingList = (props: TitleStr) => {
  return (
    <div className="w-full">
      <h1 className="mx-auto w-3/12">{props.Title}</h1>
    </div>
  );
};

export default MailingList;
