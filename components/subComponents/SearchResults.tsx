import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SearchResults = ({ products }: any) => {
  const [hovered, updateHovered] = useState<number | null>(null);
  useEffect(() => {}, [products]);
  return (
    <div className="w-full h-auto">
      {!products ? (
        ""
      ) : (
        <div className=" w-full h-auto flex flex-wrap justify-between">
          {products.res.map((product: any, n: number) => {
            let key: string = Object.keys(product)[0];
            return (
              <Link className="bg-white" href={`/product/${key}`}>
                <div
                  onMouseEnter={() => {
                    updateHovered(n);
                  }}
                  onMouseLeave={() => {
                    updateHovered(null);
                  }}
                  className="md:w-3/12 w-full max-w-[20rem] h-72 mx-10 mb-40 bg-white"
                >
                  <div
                    className={`w-full mx-auto h-full bg-zinc-200 relative ${
                      hovered === n
                        ? `border-x-4 border-t-4 border-black`
                        : `border-l-2 border-r-2 border-t-2 border-zinc-500`
                    } duration-75 ease-in-out`}
                  >
                    <Image layout="fill" src={product[key].imageURL[0]} />
                  </div>
                  <div
                    className={`${
                      hovered === n
                        ? `border-x-4 border-b-4 border-black`
                        : `border-l-2 border-r-2 border-b-2 border-zinc-500`
                    }  duration-75 ease-in-out`}
                  >
                    <div className="w-full bg-white px-5">
                      <h1 className=" bg-white text-xl robotoBold">
                        {product[key].title}
                      </h1>
                      <h1 className="bg-white text-md text-zinc-700 pb-3">
                        {product[key].gender}s Shoes
                      </h1>
                      <h1 className="bg-white ">£{product[key].price}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
