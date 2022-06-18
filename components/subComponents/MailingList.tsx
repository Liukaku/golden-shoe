import React from "react";
import { TitleStr } from "../interfaces";

const MailingList = (props: TitleStr) => {
  return (
    <div className="w-9/12 bg-black my-3 mx-auto text-white py-3">
      <h1 className="mx-auto w-full robotoBold text-center">{props.Title}</h1>
    </div>
  );
};

export default MailingList;
