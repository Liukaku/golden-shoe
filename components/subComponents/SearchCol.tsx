import React, { useEffect, useState } from "react";

interface Sections {
  Gender: boolean | any;
  Brand: boolean | any;
  Price: boolean | any;
}

const SearchCol = ({ products }: any) => {
  const sections = ["Gender", "Brand", "Price"];
  const [currentProducts, updateCurrent] = useState<Array<any>>([]);
  const [options, updateOptions] = useState<any>({
    Gender: [],
    Brand: [],
    Price: [],
  });
  const [currentPricesState, updatePrice] = useState<Array<any>>([]);
  const [sectionOpen, updateOpen] = useState({
    Gender: false,
    Brand: false,
    Price: false,
  });

  useEffect(() => {
    let currentGenders: Array<any> = [];
    let currentBrands: Array<any> = [];
    let currentPrices: Array<any> = [];
    if (products) {
      products.res.map((obj: any) => {
        let keys: string = Object.keys(obj)[0];
        if (!currentGenders.includes(obj[keys].gender)) {
          currentGenders.push(obj[keys].gender);
        }
        if (!currentBrands.includes(obj[keys].brand)) {
          currentBrands.push(obj[keys].brand);
        }
        if (!currentPrices.includes(obj[keys].price)) {
          currentPrices.push(obj[keys].price);
        }
      });
      updateOptions({
        Gender: currentGenders,
        Brand: currentBrands,
        Price: currentPrices,
      });
      updateCurrent(products);
    }
  }, [products]);

  const svgMin = (stateSection: string) => {
    if (!sectionOpen[stateSection as unknown as keyof Sections]) {
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          fill="currentColor"
          fill-rule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 11h24v2H0v-2z"></path>
        </svg>
      );
    } else {
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          fill="currentColor"
          fill-rule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13 11V0h-2v11H0v2h11v11h2V13h11v-2H13z"></path>
        </svg>
      );
    }
  };

  return (
    <div className="w-full h-screen">
      {sections.map((section: string) => {
        return (
          <div className="w-full border border-black">
            <button
              onClick={() => {
                updateOpen({
                  ...sectionOpen,
                  [section]: !sectionOpen[section as unknown as keyof Sections],
                });
              }}
              className="w-full border border-black bg-zinc-200 relative inline-flex text-left px-5 py-2"
            >
              {section.toUpperCase()}{" "}
              <span className="w-5 h-4 inline-block ml-auto">
                {svgMin(section)}
              </span>
            </button>
            {sectionOpen[section as unknown as keyof Sections] ? (
              <div className="h-auto my-3 w-full">
                {options[section].map((opt: string) => {
                  return (
                    <p className="w-8/12 mx-auto text-left">
                      {opt.toUpperCase()}
                    </p>
                  );
                })}
              </div>
            ) : (
              ``
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SearchCol;
