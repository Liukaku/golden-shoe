import Link from "next/link";
import { Router } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Blok,
  ContextState,
  ListObj,
  NavDropdown,
  NavOptions,
} from "./interfaces";

export const Navbar = ({ blok }: Blok) => {
  const [menuContent, toggleMenu] = useState<ContextState>({
    display: false,
    option: 0,
  });

  //this decides if the mobile nav bar is open
  const [mobileState, updateMobile] = useState<boolean>(false);

  //this controls if a sub section is selected
  const [mobileSelected, selectMobile] = useState<boolean>(false);

  //this controls which nav option was selected
  const [mobileNavOpt, updateMobileOption] = useState<number | null>(null);

  //this decides if the parent or sub menu is shown
  const [navPar, updateNavPar] = useState<boolean>(true);

  const [secExpand, updateSub] = useState<number | null>(null);
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          toggleMenu({ display: false, option: 0 });
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const toggleNav = (e: React.MouseEvent<HTMLElement>, option: number) => {
    e.preventDefault();
    toggleMenu({
      display: true,
      option: option,
    });
  };

  const toggleMobileNav = () => {
    updateMobile(!mobileState);
    if (document.body.style.overflowY == "visible") {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflowY = "visible";
      document.body.style.height = "auto";
    }
    if (mobileSelected) {
      selectMobile(false);
      updateMobileOption(null);
      updateNavPar(true);
      updateSub(null);
    }
  };

  return (
    <section className="pb-4">
      <div className="bg-zinc-900 h-12 w-screen flex fixed top-0 z-10 ">
        <button className="robotoBlack text-yellow-200 md:ml-16 ml-5 mr-12 md:mr-10 text-xl">
          <Link href={"/"}>golden shoe</Link>
        </button>
        <div className="md:flex ml-10 hidden">
          {blok.NavOptions.map((navOption: NavOptions, n: number) => {
            return (
              <button
                className={`robotoMedium text-white mx-5 hover:text-green-300 duration-100 ease-in-out ${
                  menuContent.display && menuContent.option === n
                    ? `text-green-300`
                    : ``
                }`}
                onClick={(e) => {
                  toggleNav(e, n);
                }}
                key={navOption._uid}
              >
                {navOption.Title}
              </button>
            );
          })}
        </div>
        <div className="hidden md:inline-flex lg:ml-48 md:ml-20 w-4/12 justify-end">
          <button className="text-white">
            <Link href={"/customer-services/"}>Customer Services</Link>
          </button>
        </div>
        <div className="md:hidden flex w-3/6 justify-end">
          <button
            onClick={() => {
              toggleMobileNav();
            }}
            className="mt-2"
            aria-label="Open navigation"
          >
            {!mobileState ? (
              <span className=" inline-block w-8 h-8">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  fill="white"
                  fill-rule="evenodd"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3h24v2H0V3zm0 8h24v2H0v-2zm24 8H0v2h24v-2z"></path>
                </svg>
              </span>
            ) : (
              <span className="inline-block w-8 h-8">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  fill="white"
                  fill-rule="evenodd"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 1.44L22.59.03 12.01 10.59 1.41 0 0 1.4 10.6 12 0 22.6 1.42 24l10.59-10.58 10.58 10.56 1.41-1.4L13.43 12 24 1.44z"></path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
      {mobileState && navPar ? (
        <div className="w-screen absolute z-50 h-full bg-white">
          {blok.NavOptions.map((navOption: NavOptions, n: number) => {
            return (
              <button
                className={`robotoMedium text-black py-5 border-b border-zinc-300 w-full duration-100 ease-in-out ${
                  menuContent.display && menuContent.option === n
                    ? `text-green-300`
                    : ``
                }`}
                onClick={(e) => {
                  selectMobile(true);
                  updateMobileOption(n);
                  updateNavPar(false);
                }}
                key={navOption._uid}
              >
                {navOption.Title}
              </button>
            );
          })}
          <button
            className={`robotoMedium text-black py-5 border-b border-zinc-300 w-full duration-100 ease-in-out`}
            onClick={(e) => {}}
          >
            <Link href={`/customer-services`}>Customer Services</Link>
          </button>
        </div>
      ) : (
        ""
      )}

      {mobileState && mobileSelected && !navPar ? (
        <div className="absolute z-50 h-full bg-white w-full">
          <button
            className={`robotoMedium text-black py-5 border-b border-zinc-300 w-full duration-100 ease-in-out`}
            onClick={(e) => {
              selectMobile(true);
              updateNavPar(true);
              updateMobileOption(null);
              updateSub(null);
            }}
          >
            Back
          </button>
          {blok.NavOptions[menuContent.option].Options.map(
            (option: NavDropdown, j: number) => {
              return (
                <div className="w-full">
                  <button
                    onClick={() => updateSub(j)}
                    className="robotoMedium text-black py-5 border-b border-zinc-300 w-full duration-100 ease-in-out"
                  >
                    {
                      option.List.content[0].content[0].content[0].content[0]
                        .text
                    }
                  </button>
                  {option.List.content[0].content.map(
                    (listOp: ListObj, k, number) => {
                      // console.log(
                      //   option.List.content[0].content[0].content[0].content[0].text
                      // );
                      if (k !== 0) {
                        return (
                          <div
                            className={`bg-zinc-200 ${
                              secExpand === j ? `h-auto` : `h-0 hidden`
                            } w-full text-center border-b border-zinc-400 py-5`}
                          >
                            <Link
                              href={`/category/${blok.NavOptions[
                                menuContent.option
                              ].Title.toLowerCase().replaceAll(" ", "-")}`}
                            >
                              {listOp.content[0].content[0].text}
                            </Link>
                          </div>
                        );
                      }
                    }
                  )}
                </div>
              );
            }
          )}
        </div>
      ) : (
        ""
      )}
      <div
        className={`w-screen z-10 bg-zinc-100 duration-150 ease-in-out fixed top-12 ${
          menuContent.display ? `opacity-100` : `opacity-0 hidden`
        }`}
        ref={wrapperRef}
      >
        <div className="w-10/12 mx-auto flex ">
          {blok.NavOptions[menuContent.option].Options.map(
            (option: NavDropdown) => {
              return (
                <ul className="text-black w-44 my-5 border-r last:border-r-0 first:ml-0 ml-5">
                  {option.List.content[0].content.map(
                    (listOp: ListObj, k: number) => {
                      return (
                        <li
                          className={`w-44 my-2 ${
                            k === 0 ? `robotoBold text-lg` : ``
                          } ${menuContent.display ? `` : `text-gray-700`}`}
                        >
                          <Link
                            href={`/category/${blok.NavOptions[
                              menuContent.option
                            ].Title.toLowerCase().replaceAll(" ", "-")}`}
                          >
                            {listOp.content[0].content[0].text}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
