import Image from "next/image";
import React from "react";
import { HeroImageObj } from "./interfaces";

interface FeatureBlok {
  blok: HeroBlok;
}

interface HeroBlok {
  HeroImage: HeroImageObj;
}

const Feature = ({ blok }: FeatureBlok) => {
  // <div
  //   style={{ background: `url(${blok.HeroImage.filename})` }}
  //   className={`bg-cover h-72 w-screen`}
  // />
  return (
    <div className="w-screen h-96 relative my-5">
      <Image src={blok.HeroImage.filename} layout="fill" />
    </div>
  );
};

export default Feature;
