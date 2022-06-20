import React from "react";
import SearchCol from "./subComponents/SearchCol";

const CategoryPage = ({ blok }: any) => {
  console.log({ blok });
  return (
    <div className="w-11/12 mx-auto flex">
      <div className="w-2/12">
        <SearchCol />
      </div>
    </div>
  );
};

export default CategoryPage;
