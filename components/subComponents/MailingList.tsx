import React, { useEffect, useState } from "react";
import { TitleStr } from "../interfaces";
import { Modal } from "./Modal";

const MailingList = (props: TitleStr) => {
  const [displayModal, toggleDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (displayModal) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflowY = "visible";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflowY = "visible";
      document.body.style.height = "auto";
    };
  }, [displayModal]);

  return (
    <>
      <div
        onClick={() => {
          toggleDisplay(!displayModal);
        }}
        className="w-9/12 bg-black mt-3 mb-3 mx-auto text-white py-3 cursor-pointer"
      >
        <h1 className="mx-auto w-full robotoBold text-center">{props.Title}</h1>
      </div>
      {!displayModal ? (
        ""
      ) : (
        <div className="absolute inset-0 w-full h-screen bg-black z-50 hiddenBg">
          <div className="md:w-3/12 w-11/12 px-10 py-3 bg-blue-200 mx-auto md:mt-56 mt-20">
            <div className="md:w-11/12 w-full mx-auto justify-end text-right">
              <button
                className="h-4 w-4 fixed"
                aria-label="Close"
                onClick={() => {
                  toggleDisplay(false);
                }}
              >
                <span className="">
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    fill="currentColor"
                    fill-rule="evenodd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 1.44L22.59.03 12.01 10.59 1.41 0 0 1.4 10.6 12 0 22.6 1.42 24l10.59-10.58 10.58 10.56 1.41-1.4L13.43 12 24 1.44z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <h1 className="robotoBold text-2xl">{props.Title}</h1>
              <p className="text-sm mt-3">First Name</p>
              <input
                type="text"
                className="mt-2 w-full py-2 text-sm border border-black"
                placeholder="Enter your first name"
              />
              <p className="text-sm mt-3">Surname</p>
              <input
                type="text"
                className="mt-2 w-full py-2 text-sm border border-black"
                placeholder="Enter your surname"
              />
              <p className="text-sm mt-3">Email Address</p>
              <input
                type="text"
                className="mt-2 w-full py-2 text-sm border border-black"
                placeholder="Enter your surname"
              />
              <p className="text-sm mt-3">
                Select the ranges you wish to hear about:
              </p>
              <div className="flex justify-between w-10/12 mt-3 text-sm">
                <div>
                  <input type="checkbox" name="Mens" id="ckMens" />
                  <label htmlFor="ckMens">Mens</label>
                </div>
                <div>
                  <input type="checkbox" name="Womens" id="ckWomens" />
                  <label htmlFor="ckWomens">Womens</label>
                </div>
                <div>
                  <input type="checkbox" name="Kids" id="ckKids" />
                  <label htmlFor="ckKids">Kids</label>
                </div>
                <div>
                  <input type="checkbox" name="All" id="ckAll" />
                  <label htmlFor="ckAll">All</label>
                </div>
              </div>
              <button
                onClick={() => {
                  toggleDisplay(false);
                }}
                className="bg-black text-white robotoBold w-full py-3 my-3"
              >
                SIGN ME UP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MailingList;
