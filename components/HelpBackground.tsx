import React from "react";

const HelpBackground = ({ blok }: any) => {
  return (
    <div
      className="w-8/12 h-72 bg-cover mx-auto"
      style={{ backgroundImage: `url(${blok.BackgroundImage.filename})` }}
    >
      <div className="pt-32 ">
        <h1 className="text-white robotoBlack text-3xl w-full text-center hiddenBg bottom-0">
          {blok.Title}
        </h1>
      </div>
    </div>
  );
};

export default HelpBackground;
