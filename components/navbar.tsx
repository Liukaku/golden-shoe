import Link from "next/link";
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

  const navTitles = ["Sale", "New In", "Men", "Women", "Kids", "Brands"];
  const navBar = {
    Sale: [
      [
        { title: "Men's", link: "mens" },
        { title: "Shoes", link: "mens-shoes" },
        { title: "Clothing", link: "mens-clothing" },
        { title: "Accessories", link: "mens-accessories" },
        { title: "All Men's Sale", link: "mens-sale" },
      ],
      [
        { title: "Women's", link: "womens" },
        { title: "Shoes", link: "womens-shoes" },
        { title: "Clothing", link: "womens-clothing" },
        { title: "Accessories", link: "womens-accessories" },
        { title: "All Women's Sale", link: "womens-sale" },
      ],
      [
        { title: "Kid's", link: "kids" },
        { title: "Shoes", link: "kids-shoes" },
        { title: "Clothing", link: "kids-clothing" },
        { title: "Accessories", link: "kids-accessories" },
        { title: "All Kid's Sale", link: "kids-sale" },
      ],
      [
        { title: "Men's", link: "mens" },
        { title: "Shoes", link: "mens-shoes" },
        { title: "Clothing", link: "mens-clothing" },
        { title: "Accessories", link: "mens-accessories" },
        { title: "All Men's Sale", link: "mens-sale" },
      ],
      [
        { title: "Brands", link: "Brands" },
        { title: "Nike", link: "Nike" },
        { title: "Adidas", link: "Adidas" },
        { title: "Puma", link: "Puma" },
        { title: "Converse", link: "Converse" },
      ],
    ],
    "New In": [
      [
        { title: "Men's", link: "mens" },
        { title: "New In Footwear", link: "mens" },
        { title: "New In Clothing", link: "mens" },
        { title: "New In Accessories", link: "mens" },
      ],
      [
        { title: "Women's", link: "womens" },
        { title: "New In Footwear", link: "womens" },
        { title: "New In Clothing", link: "womens" },
        { title: "New In Accessories", link: "womens" },
      ],
      [
        { title: "Brands", link: "Brands" },
        { title: "Nike", link: "Nike" },
        { title: "Adidas", link: "Adidas" },
        { title: "Puma", link: "Puma" },
        { title: "Converse", link: "Converse" },
        { title: "Dickies", link: "Dickies" },
        { title: "Carhartt WIP", link: "CarharttWIP" },
        { title: "The North Face", link: "TheNorthFace" },
      ],
    ],
    Men: [
      [
        { title: "Shoes", link: "mens" },
        { title: "All Men's Shoes", link: "mens" },
        { title: "New Arrivals", link: "mens" },
        { title: "Running Lifestyle", link: "mens" },
        { title: "Basketball", link: "mens" },
        { title: "Skate", link: "mens" },
        { title: "High Tops", link: "mens" },
        { title: "Boots", link: "mens" },
        { title: "Slides and Sandals", link: "mens" },
      ],
      [
        { title: "Brands", link: "mens" },
        { title: "Nike", link: "Nike" },
        { title: "Adidas", link: "Adidas" },
        { title: "Puma", link: "Puma" },
        { title: "Converse", link: "Converse" },
        { title: "Dickies", link: "Dickies" },
        { title: "Carhartt WIP", link: "CarharttWIP" },
        { title: "The North Face", link: "TheNorthFace" },
      ],
      [
        { title: "Trending Now", link: "mens" },
        { title: "Best Sellers", link: "Nike" },
        { title: "Sustainable Fashion", link: "Adidas" },
        { title: "Fleece Clothing", link: "Puma" },
        { title: "Streetwear", link: "Converse" },
        { title: "Retro Sneakers", link: "Dickies" },
        { title: "Project x Paris", link: "CarharttWIP" },
      ],
      [
        { title: "Sale", link: "mens" },
        { title: "Shoes", link: "Nike" },
        { title: "Clothing", link: "Adidas" },
        { title: "Accessoires", link: "Puma" },
        { title: "All Men's Sale", link: "Converse" },
      ],
    ],
    Women: [
      [
        { title: "Shoes", link: "womens" },
        { title: "All Women's Shoes", link: "womens" },
        { title: "New Arrivals", link: "womens" },
        { title: "Running Lifestyle", link: "womens" },
        { title: "Basketball", link: "womens" },
        { title: "Skate", link: "womens" },
        { title: "High Tops", link: "womens" },
        { title: "Boots", link: "womens" },
        { title: "Slides and Sandals", link: "womens" },
      ],
      [
        { title: "Brands", link: "womens" },
        { title: "Nike", link: "Nike" },
        { title: "Adidas", link: "Adidas" },
        { title: "Puma", link: "Puma" },
        { title: "Converse", link: "Converse" },
        { title: "Dickies", link: "Dickies" },
        { title: "Carhartt WIP", link: "CarharttWIP" },
        { title: "The North Face", link: "TheNorthFace" },
      ],
      [
        { title: "Trending Now", link: "womens" },
        { title: "Best Sellers", link: "Nike" },
        { title: "Sustainable Fashion", link: "Adidas" },
        { title: "Fleece Clothing", link: "Puma" },
        { title: "Streetwear", link: "Converse" },
        { title: "Retro Sneakers", link: "Dickies" },
        { title: "Project x Paris", link: "CarharttWIP" },
      ],
      [
        { title: "Sale", link: "womens" },
        { title: "Shoes", link: "Nike" },
        { title: "Clothing", link: "Adidas" },
        { title: "Accessoires", link: "Puma" },
        { title: "All Women's Sale", link: "Converse" },
      ],
    ],
    Kids: [
      [
        { title: "Trending Now", link: "mens" },
        { title: "Best Sellers", link: "Nike" },
        { title: "Sustainable Fashion", link: "Adidas" },
        { title: "Fleece Clothing", link: "Puma" },
        { title: "Crocs & Slides", link: "Converse" },
      ],
      [
        { title: "Teens", link: "mens" },
        { title: "Shoes (sizes 3.5 - 6.5)", link: "Nike" },
        { title: "Clothing (115 - 176 cm)", link: "Adidas" },
        { title: "Accessories", link: "Puma" },
        { title: "All teens", link: "Converse" },
      ],
    ],
  };

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
