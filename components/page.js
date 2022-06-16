import React from "react";
import DynamicComponent from "./dynamic-component";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => (
  <main className="" {...sbEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
