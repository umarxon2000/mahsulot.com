"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import img from "@/app/assets/pngtree-letter-m-logo-png-png-image_4565909-removebg-preview.png";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const API = "https://fakestoreapi.com/products";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

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
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex p-5 px-11 md:flex-row items-center justify-between ">
          <Link href={"/"} className="flex items-center">
            <Image src={img} alt="" width={50} height={50} />
            <span className="ml-3 text-xl ">mahsulot</span>
          </Link>

          <nav className="md:ml-auto md:mr-auto sm:hidden hidden md:flex items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 flex gap-1 items-center justify-center text-[white] lg:w-[150px] text-center cursor-pointer hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded "
            >
              <IoHome />
              <span className="hidden lg:inline-block">asosiy</span>
            </Link>
            <Link
              href={"/about"}
              className="mr-5 w-[50px] flex gap-1 items-center justify-center text-[white] lg:w-[150px] text-center cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
            >
              <HiOutlineClipboardList />{" "}
              <span className="hidden lg:inline-block">about</span>
            </Link>
            <Link
              href={"/shopping-cart"}
              className="mr-5 flex gap-1 items-center justify-center text-[white] lg:w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
            >
              <FaShoppingCart />
              <span className="hidden lg:inline-block">Savatcha</span>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setSearch(!search)}
            className="inline-flex flex-col items-center justify-center p-4 dark:hover:bg-gray-800 group hidden md:block"
          >
            <IoIosSearch />
            <span className="sr-only">Search</span>
          </button>

          <div className="flex items-center justify-center">
            <Link href={"/profil"} className="hidden md:block">
              <button className="inline-flex w-[50px] h-[50px] items-center justify-center bg-gray-100 text-[50px] rounded-[100px] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                <FaUserAlt />
              </button>
            </Link>
          </div>
        </div>

        {search && (
          <div className="w-[100%] h-[88vh] bg-[rgba(4, 27, 43, 0.54)] z-index-[999] sticky bottom-0 left-0 ">
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
              <ul>
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
       
      </header>
      <nav className="w-[80%]  flex items-center gap-1 m-auto overflow-x-auto  justify-center">
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          hammasi
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          med texnika
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          sovg'alar
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          uy-hovli uchun
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          smart watch
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          avtomobillar uchun
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          foydali mahsulotlar
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          erkaklar uchun
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          ayollar uchun
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          kitoblar
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          smartfonlar
        </button>
        <button className="btn border-t-orange-50 p-2 text-sm  hover:bg-orange-400 rounded focus:bg-orange-400  text-white  mb-2">
          bolalar uchun
        </button>
      </nav>
    </div>
  );
};

export default Header;
