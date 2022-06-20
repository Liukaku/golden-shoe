import React, { useState } from "react";

interface Sections {
  Gender: boolean;
  Brand: boolean;
  Price: boolean;
}

const SearchCol = () => {
  const sections = ["Gender", "Brand", "Price"];
  const [sectionOpen, updateOpen] = useState({
    Gender: false,
    Brand: false,
    Price: false,
  });

  const svgMin = (stateSection: string) => {
    if (!sectionOpen[stateSection as unknown as keyof Sections]) {
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          fill="currentColor"
          fill-rule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 11h24v2H0v-2z"></path>
        </svg>
      );
    } else {
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          fill="currentColor"
          fill-rule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13 11V0h-2v11H0v2h11v11h2V13h11v-2H13z"></path>
        </svg>
      );
    }
  };

  return (
    <div className="w-full bg-blue-300 h-screen">
      {sections.map((section: string) => {
        return (
          <div className="w-full border border-black">
            <button className="w-full border border-black bg-zinc-200 relative inline-flex text-left px-5 py-2">
              {section.toUpperCase()}{" "}
              <span className="w-5 h-4 inline-block ml-auto">
                {svgMin(section)}
              </span>
            </button>
            <div className="h-10 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchCol;
