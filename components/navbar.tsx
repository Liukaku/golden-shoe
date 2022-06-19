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

  return (
    <section>
      <div className="bg-zinc-900 h-12 w-screen flex">
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
      <div
        className={`w-screen z-10 bg-gray-700 absolute duration-150 ease-in-out ${
          menuContent.display ? `opacity-100` : `opacity-0 hidden`
        }`}
        ref={wrapperRef}
      >
        <div className="w-10/12 mx-auto flex ">
          {blok.NavOptions[menuContent.option].Options.map(
            (option: NavDropdown) => {
              return (
                <ul className="text-white w-44 my-5 ">
                  {option.List.content[0].content.map(
                    (listOp: ListObj, k: number) => {
                      return (
                        <li
                          className={`w-44 my-2 ${
                            k === 0 ? `robotoBold text-lg` : ``
                          } ${menuContent.display ? `` : `text-gray-700`}`}
                        >
                          {listOp.content[0].content[0].text}
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
