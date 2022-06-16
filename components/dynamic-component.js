import React from "react";
import Page from "./page";
import NavBar from "./navbar";
import Feature from "./feature";

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  feature: Feature,
  NavBar: NavBar,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
