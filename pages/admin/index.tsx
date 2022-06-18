import React from "react";
import { app } from "../../firebase/init";

export const index = () => {
  console.log(app);

  return <div>index</div>;
};

export default index;
