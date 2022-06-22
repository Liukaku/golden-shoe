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
  return (
    <div className="w-screen md:h-96 h-36 relative my-5">
      <Image src={blok.HeroImage.filename} layout="fill" />
    </div>
  );
};

export default Feature;
