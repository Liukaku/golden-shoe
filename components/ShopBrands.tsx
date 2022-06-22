import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShopBrands = ({ blok }: any) => {
  const ignore = ["_editable", "_uid", "component"];
  const [selected, updateSelected] = useState<number | null>(null);

  const stylesFunc = (size: string) => {
    switch (size) {
      case "Square":
        return "md:h-[30vw] h-[60vw] md:w-[97%] w-[94%] px-20 relative md:my-10 my-5";

      case "Wide":
        return "md:h-[30vw] h-[45vw] md:w-[97%] w-[94%] relative my-10";

      case "Thin":
        return "md:h-[43vw] h-[60vh] w-[97%] relative my-10";

      default:
        return "h-96 md:w-96 w-[97%] relative my-10";
    }
  };

  const containerStylesFunc = (size: string) => {
    switch (size) {
      case "Square":
        return "md:w-[46%] w-full md:pt-[5%] md:pb-[3%] md:pl-[5%] md:pr-[1%] md:mr-5 relative md:my-10";

      case "Wide":
        return "md:h-[35rem] md:w-[56%] w-full pb-[3%] md:pl-[5%] pr-[1%]  relative my-10";

      case "Thin":
        return "md:h-[42rem]  pb-[3%] pl-[5%] pr-[1%] md:w-[37%] w-full relative mr-5 my-10";

      default:
        return "h-96 w-96 relative my-10";
    }
  };

  return (
    <div className="block w-9/12 mx-auto flex-wrap lg:h-[210vh] overflow-hidden">
      {Object.keys(blok).map((key: string, n: number) => {
        if (!ignore.includes(key)) {
          const blokData = blok[key][0];
          console.log(blokData);
          return (
            <div
              className={`md:mb-20 mb-5 box-border float-left ${containerStylesFunc(
                blokData.ImageSize
              )}`}
              onMouseEnter={() => {
                updateSelected(n);
              }}
              onMouseLeave={() => {
                updateSelected(null);
              }}
            >
              <Link href={blokData.Link}>
                <div
                  className={`border-2 border-black  ${
                    selected === n ? `border-black` : `border-white`
                  } `}
                >
                  <div className={`${stylesFunc(blokData.ImageSize)} mx-2`}>
                    <Image layout="fill" src={blokData.Image.filename} />
                  </div>
                  <div
                    className={` border-2 md:border-black  w-2/4 mx-auto text-center py-3 m-[-20px] ${
                      selected === n
                        ? `bg-black text-white border-black`
                        : `bg-white text-black border-white`
                    } `}
                  >
                    {blokData.BrandText}
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ShopBrands;
