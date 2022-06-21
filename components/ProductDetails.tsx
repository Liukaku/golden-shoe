import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ blok }: any) => {
  const [product, updateProduct] = useState<any>(null);
  const [selected, updateSelected] = useState<number>(0);
  const [size, selectSize] = useState<number | null>(null);
  const [basketErr, updateErr] = useState<string>("");

  useEffect(() => {
    const urlArr = document.URL.split("/");
    console.log(urlArr[urlArr.length - 1]);
    const productId = { productID: urlArr[urlArr.length - 1] };
    fetch(
      `http://localhost:5001/golden-shoe-aa08b/europe-west2/api/getProducts?id=${
        urlArr[urlArr.length - 1]
      }`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        updateProduct(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  const addToCart = () => {
    if (!size) {
      updateErr("Please select a size");
    }
  };

  return product ? (
    <div className="w-8/12  mt-5 h-full mx-auto pb-5">
      <h1 className="text-sm robotoMedium">
        <span className="underline text-blue-600">
          <Link href={"/"}>Home</Link>
        </span>{" "}
        {">"} {product.gender} {">"} {product.title} {product.gender}s Shoes
      </h1>
      <div className="w-full bg-zinc-100 pb-2">
        <div className="w-full h-full flex justify-between px-2">
          <div className=" w-32 flex flex-wrap justify-end">
            {product.imageURL.map((url: string, n: number) => {
              return (
                <div
                  onClick={() => {
                    updateSelected(n);
                  }}
                  className={`h-28 w-full bg-cover border-2 my-3 cursor-pointer border-zinc-100  ${
                    selected === n ? `border-b-zinc-300` : ``
                  }`}
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              );
            })}
          </div>
          <div className=" h-productImg border ml-3 mt-3 border-zinc-100 w-productImg relative">
            <Image
              layout="fill"
              className="bg-zinc-100"
              src={product.imageURL[selected]}
            />
            {/* style={{ backgroundImage: `url(${product.imageURL[selected]})` }} */}
          </div>
          <div className="w-4/12 mt-3 ml-12 bg-white">
            <div className="px-5 mt-3">
              <h1 className="text-sm">{product.brand}</h1>
              <h1 className="text-4xl robotoBold">{product.title}</h1>
              <h1>£{product.price} VAT included</h1>
              <h1 className="text-sm">{product.gender}s shoes</h1>
            </div>

            <div className="flex flex-wrap flex-start px-5">
              <hr className="border bg-zinc-200 border-zinc-200 w-full mx-1" />
              {Object.keys(product.sizes).map((key: string, k: number) => {
                if (product.sizes[key] === 0) {
                  return (
                    <div
                      className={`text-center lg:w-20 md:w-16 robotoBold lg:mx-1 my-2 py-2 text-zinc-600 bg-zinc-100 outOfStock`}
                    >
                      <p className="w-full px-5 ">{key}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      onClick={() => {
                        selectSize(k);
                      }}
                      className={`text-center w-20 robotoBold mx-1 my-2 py-2 text-blackbg-zinc-300 cursor-pointer bg-zinc-200 hover:bg-zinc-600 hover:text-white ${
                        size === k ? `text-white bg-zinc-600` : ""
                      }`}
                    >
                      <p className="w-full px-5 ">{key}</p>
                    </div>
                  );
                }
              })}
              {basketErr ? (
                <span className="text-red-500 w-full">{basketErr}</span>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  addToCart();
                }}
                className="w-full mt-3 py-3 bg-black text-white robotoBold mx-1"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProductDetails;
