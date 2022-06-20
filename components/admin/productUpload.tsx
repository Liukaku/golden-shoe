import Image from "next/image";
import Router from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import CTX from "../util/ctx";

interface SizesObj {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
  12: number;
  13: number;
}

const ProductUpload = () => {
  const [loginAuth, updateAuth] = useContext(CTX);
  useEffect(() => {
    if (!loginAuth.accessToken) {
      Router.push("/admin/login");
    }
  }, []);
  const [imageArr, updateImgArr] = useState<Array<string>>([]);

  const [sizeState, updateSizes] = useState<SizesObj>({
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
  });
  const fileUpload = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [tagsRef, updateTags] = useState<string>("");

  const imagePreview = () => {
    let fileObj = [];
    let fileArray = [];
    if (fileUpload.current) {
      fileObj.push(fileUpload.current.files);
      if (fileObj[0] !== null) {
        for (let i = 0; i < fileObj[0].length; i++) {
          fileArray.push(URL.createObjectURL(fileObj[0][i]));
        }
        updateImgArr(fileArray);
      }
    }
  };

  const uploadMultipleFiles = async (e: any) => {
    e.preventDefault();
    const uploadImages = async () => {
      let fileObj = [];
      let fileArray = [];
      const formData = new FormData();
      if (fileUpload.current) {
        fileObj.push(fileUpload.current.files);
        if (fileObj[0]) {
          for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]));
            formData.append("image", fileObj[0][i], fileObj[0][i].name);
          }

          console.log(fileArray);

          const postData = await fetch(
            "http://localhost:5001/golden-shoe-aa08b/europe-west2/api/newproduct",
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await postData.json();
          return data;
        }
      }
    };
    const createProducts = async (imagesArr: Array<string>) => {
      if (titleRef.current && tagsRef) {
        console.log(imagesArr);
        const currentSizes = sizeState;
        const products = {
          sizes: currentSizes,
          imageURL: imagesArr,
          title: titleRef.current.value,
          tags: tagsRef.split(","),
        };
        const postData = await fetch(
          "http://localhost:5001/golden-shoe-aa08b/europe-west2/api/createproduct",
          {
            method: "POST",
            body: JSON.stringify(products),
          }
        );
        const response = await postData.json();
        return response;
      }
    };
    uploadImages()
      .then((res) => {
        createProducts(res.message)
          .then((createRes) => {
            console.log(createRes);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-3/12 mx-auto">
        <form
          onSubmit={(e) => {
            uploadMultipleFiles(e);
          }}
        >
          <label htmlFor="productName">Product Name: </label>
          <input
            ref={titleRef}
            required
            type="text"
            name=""
            id="productName"
            placeholder="Product Name"
            className="w-full border border-black"
          />
          <label htmlFor="productName">Product Tags: </label>
          <input
            required
            type="text"
            name=""
            id="Product Tags"
            value={tagsRef}
            onChange={(e) => {
              updateTags(e.target.value);
            }}
            placeholder="mens, nike, "
            className="w-full border border-black"
          />
          {tagsRef ? (
            <div className="w-full flex flex-wrap">
              <h1 className="w-full">Current tags:</h1>
              {tagsRef.split(",").map((tag: string) => {
                return <p className="mx-5">{tag}</p>;
              })}
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap">
            <h1 className="w-full text-center">Product Size Quantities:</h1>
            {Object.keys(sizeState).map((size: string) => {
              return (
                <div className="w-3/12 mx-2 my-2">
                  <label htmlFor={`size${size}`}>Size {size}:</label>
                  <input
                    type="number"
                    name=""
                    id={`size${size}`}
                    placeholder="0"
                    value={sizeState[size as unknown as keyof SizesObj]}
                    className="w-6/12 border border-black"
                    onChange={(e) => {
                      updateSizes({ ...sizeState, [size]: e.target.value });
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full overflow-hidden">
            <input
              ref={fileUpload}
              onChange={() => {
                imagePreview();
              }}
              required
              multiple
              type="file"
              accept="image/png, image/jpeg"
              src=""
              alt="Image Upload"
              className="mt-5 overflow-hidden"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="mx-auto border border-black w-20 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {!imageArr ? (
        ""
      ) : (
        <div className="h-20 w-8/12 mx-auto mt-5 flex relative flex-wrap">
          <h1 className="w-full text-center">Image Preview</h1>
          {imageArr.map((imageURL: string) => {
            return (
              <div
                className="w-3/12 h-32 bg-cover"
                style={{ backgroundImage: `url(${imageURL})` }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductUpload;
