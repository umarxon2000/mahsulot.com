"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

function Bottombar() {
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);



  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (value) => {
    setTextSearch(value);
    if (!value.length) {
      setSearchResult(null);
    } else {
      const result = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(result);
    }
  };
  return (
    <div className="container mx-auto w-full ">
      <div className="fixed bottom-0 md:hidden mx-auto z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <Link href={"/"}>
            <button
              data-tooltip-target="tooltip-home"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="sr-only">Home</span>
            </button>
          </Link>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-bookmark"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 20"
            >
              <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
            </svg>
            <span className="sr-only">Bookmark</span>
          </button>
          <div
            id="tooltip-bookmark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Bookmark
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New post</span>
          </button>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            New post
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-search"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => setSearch(!search)}
          >
            {/* <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg> */}
            <IoIosSearch className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
          <div
            id="tooltip-search"
            role="tooltip"
            onClick={() => setSearch(!search)}
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Search
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link href={"/profil"}>
            <button
              data-tooltip-target="tooltip-settings"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                />
              </svg>
              <span className="sr-only">profile</span>
            </button>
          </Link>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      {search && (
          <div className="w-[100%] h-[88vh] bg-white z-40 fixed bottom-0 left-0 ">
            <div className="pt-2 relative mx-auto text-gray-600 ">
              <div className="flex ">
                <input
                  className="border-2 w-[80%] m-auto border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  name="search"
                  placeholder="Search"
                />
                <button onClick={() => setSearch(!search)} className="absolute right-5">
                  Close
                </button>
              </div>
              <ul className="overflow-y-scroll">
                {searchResult &&
                  searchResult.map((item) => (
                    <Link key={item.id} href={`/product/${item.id}`}>
                    <li >{item.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        )}
    </div>
  );
}

export default Bottombar;
