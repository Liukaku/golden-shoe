import Link from "next/link";
import React from "react";

export const CustomerServices = ({ blok }: any) => {
  const unNeeded = ["_uid", "component", "_editable"];
  return (
    <div className="md:w-6/12 w-10/12 mx-auto flex flex-wrap mt-10">
      {Object.keys(blok)
        .reverse()
        .map((key: string, n: number) => {
          if (!unNeeded.includes(key)) {
            return (
              <div className="md:w-4/12 w-11/12 d:mx-0 mx-auto bg-zinc-200 md:py-10 py-14 text-center hover:underline duration-150 ease-in-out">
                <Link href={`/customer-service/${key.toLowerCase()}`}>
                  {blok[key].toUpperCase()}
                </Link>
              </div>
            );
          }
        })}
    </div>
  );
};

export default CustomerServices;
