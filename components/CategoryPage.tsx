import React, { useEffect, useState } from "react";
import SearchCol from "./subComponents/SearchCol";
import SearchResults from "./subComponents/SearchResults";

const CategoryPage = ({ blok }: any) => {
  const [products, updateProducts] = useState<any>(null);

  const getData = () => {
    const urlArr = document.URL.split("/");

    console.log(urlArr[urlArr.length - 1]);
    const productTag = urlArr[urlArr.length - 1];
    let fetchURL = "";
    if (urlArr.includes("localhost:3000")) {
      fetchURL = "http://localhost:5001/golden-shoe-aa08b/europe-west2/api";
    } else {
      fetchURL =
        "https://europe-west2-golden-shoe-aa08b.cloudfunctions.net/api";
    }
    fetch(`${fetchURL}/getProductsByTag?tag=${productTag}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        updateProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-11/12 mx-auto md:flex block">
      <div className="md:w-2/12 w-11/12 ml-5">
        <SearchCol products={products} />
      </div>
      <div className="md:w-10/12  w-full float-right ml:pl-5">
        <SearchResults products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
