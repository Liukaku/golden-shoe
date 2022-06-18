import Image from "next/image";
import React, { useState } from "react";
import { HeroImageObj } from "./interfaces";

interface FeatureBlok {
  blok: TripleHero | any;
}

interface TripleHero {
  Feature1: HeroImageObj;
  Feature2: HeroImageObj;
  Feature3: HeroImageObj;
}

const TripleFeature = ({ blok }: FeatureBlok) => {
  const ignore = ["_editable", "_uid", "component"];
  const [hoverVal, updateOver] = useState<number | null>(null);

  return (
    <div className="w-screen flex h-tripleImg justify-between my-5">
      {Object.keys(blok).map((feature: string, n: number) => {
        if (!ignore.includes(feature)) {
          return (
            <div
              onMouseEnter={() => {
                updateOver(n);
              }}
              onMouseLeave={() => {
                updateOver(null);
              }}
              className={`relative w-31 hover:cursor-pointer ${
                n === 2 ? `mx-3` : ``
              }`}
            >
              <Image src={blok[feature].filename} layout="fill" />
              <h1
                className={`absolute text-center w-full bottom-0 robotoBlack  bg-white duration-150 ease-in-out text-xl ${
                  hoverVal === n ? `underline` : ``
                }`}
              >
                {blok[feature].name}
              </h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TripleFeature;
