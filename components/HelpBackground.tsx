import React from "react";

const HelpBackground = ({ blok }: any) => {
  return (
    <div
      className="md:w-8/12 w-full md:h-72 h-52 bg-cover mx-auto"
      style={{ backgroundImage: `url(${blok.BackgroundImage.filename})` }}
    >
      <div className="md:pt-32 pt-28">
        <h1 className="text-white robotoBlack text-3xl w-full text-center hiddenBg bottom-0">
          {blok.Title}
        </h1>
      </div>
    </div>
  );
};

export default HelpBackground;
