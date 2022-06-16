import React from "react";
import { Actions } from "./interfaces";
import MailingList from "./subComponents/MailingList";
import Returns from "./subComponents/Returns";
import TripleBox from "./subComponents/TripleBox";

interface CallToActionBlok {
  blok: Actions;
}

const CallToAction = ({ blok }: CallToActionBlok) => {
  const ignore = ["_editable", "_uid", "component"];
  console.log(blok);
  return (
    <div className="w-screen">
      <MailingList Title={blok.MailingList} />
      <TripleBox blok={blok.TripleBox} />
      <Returns blok={blok.Returns} />
    </div>
  );
};

export default CallToAction;
