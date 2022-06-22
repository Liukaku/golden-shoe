import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ blok }: any) => {
  const [product, updateProduct] = useState<any>(null);
  const [selected, updateSelected] = useState<number>(0);
  const [size, selectSize] = useState<number | null>(null);
  const [basketErr, updateErr] = useState<string>("");
  const [basketSucc, updateSucc] = useState<string>("");
  const [theInterval, setTheInt] = useState<any>(null);

  const getData = () => {
    const urlArr = document.URL.split("/");

    console.log(urlArr[urlArr.length - 1]);
    const productId = urlArr[urlArr.length - 1];
    let fetchURL = "";
    if (urlArr.includes("localhost")) {
      fetchURL = "http://localhost:5001/golden-shoe-aa08b/europe-west2/api";
    } else {
      fetchURL =
        "https://europe-west2-golden-shoe-aa08b.cloudfunctions.net/api";
    }
    fetch(`${fetchURL}/getProducts?id=${productId}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("beep");
        updateProduct(data.products);
        setInterval;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    setTheInt(setInterval(() => getData(), 60000));
    return clearInterval(theInterval);
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  const addToCart = () => {
    if (!size) {
      updateErr("Please select a size");
    } else {
      const urlArr = document.URL.split("/");
      const productId = urlArr[urlArr.length - 1];
      let fetchURL;
      console.log(urlArr);
      if (urlArr.includes("localhost:3000")) {
        fetchURL = "http://localhost:5001/golden-shoe-aa08b/europe-west2/api";
      } else {
        fetchURL =
          "https://europe-west2-golden-shoe-aa08b.cloudfunctions.net/api";
      }
      fetch(`${fetchURL}/updateStock`, {
        method: "POST",
        body: JSON.stringify({
          size: size,
          prodId: productId,
        }),
      })
        .then((res) => {
          console.log("wew");
          console.log(res);
          console.log(product);
          updateProduct({
            ...product,
            sizes: {
              ...product.sizes,
              [size]: parseInt(product.sizes[size]) - 1,
            },
          });
          updateSucc("Added to basket");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return product ? (
    <div className="w-9/12  mt-16 h-full mx-auto pb-5">
      <h1 className="text-sm robotoMedium">
        <span className="underline text-blue-600">
          <Link href={"/"}>Home</Link>
        </span>{" "}
        {">"} {product.gender} {">"} {product.title} {product.gender}s Shoes
      </h1>
      <div className="w-full bg-zinc-100 pb-2">
        <div className="w-full h-full flex md:flex-none flex-wrap justify-between px-2">
          <div className="lg:flex lg:w-[66%] w-full">
            <div className="w-32 lg:flex hidden flex-wrap justify-end">
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
            <div className="mx-auto my-auto lg:h-[30vw] lg:w-[30vw] w-[60vw] h-[60vw] inherit">
              <div className=" h-full w-full border mx-auto mt-3 border-zinc-100  relative">
                <Image
                  layout="fill"
                  className="bg-zinc-100"
                  src={product.imageURL[selected]}
                />
                {/* style={{ backgroundImage: `url(${product.imageURL[selected]})` }} */}
              </div>
            </div>
            <div className="w-full lg:hidden flex flex-wrap">
              {product.imageURL.map((url: string, n: number) => {
                return (
                  <div
                    onClick={() => {
                      updateSelected(n);
                    }}
                    className={`h-28 w-2/12 bg-cover border-2 my-3 cursor-pointer border-zinc-100  ${
                      selected === n ? `border-b-zinc-300` : ``
                    }`}
                    style={{ backgroundImage: `url(${url})` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-4/12 w-full mt-3  ml-0 bg-white">
            <div className="px-5 mt-3">
              <h1 className="text-sm">{product.brand}</h1>
              <h1 className="text-4xl robotoBold">{product.title}</h1>
              <h1>£{product.price} VAT included</h1>
              <h1 className="text-sm">{product.gender}s shoes</h1>
            </div>

            <div className="px-5 lg:pb-0 pb-5">
              <hr className="border bg-zinc-200 border-zinc-200 w-full mx-1" />
              <div className="w-11/12 flex lg:flex-start flex-wrap mx-auto">
                {Object.keys(product.sizes).map((key: string, k: number) => {
                  if (product.sizes[key] <= 0) {
                    return (
                      <div
                        className={`text-center lg:w-20 md w-2/12 robotoBold mx-1 my-2 py-2 text-zinc-600 bg-zinc-100 outOfStock`}
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
                        className={`text-center lg:w-20 w-2/12 robotoBold mx-1 my-2 py-2 cursor-pointer bg-zinc-200 hover:bg-zinc-600 hover:text-white ${
                          size === k ? `text-white bg-zinc-600` : "text-black "
                        }`}
                      >
                        <p className="w-full px-5 ">{key}</p>
                      </div>
                    );
                  }
                })}
              </div>
              {basketErr ? (
                <span className="text-red-500 w-full">{basketErr}</span>
              ) : (
                ""
              )}
              {basketSucc ? (
                <span className="text-green-900 w-full">{basketSucc}</span>
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
