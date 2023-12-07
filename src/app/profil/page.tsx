"use client";
import React, { useState } from "react";
import Link from "next/link";
import Myprfil from "@/components/myprfil";
import Products from "@/components/products/Products";

const page = () => {
  const [page, setPage] = useState("profil");
  console.log(page);
  
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <button onClick={() => setPage("profil")} 
                className="mr-5 flex gap-1 items-center justify-center  text-[white] w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded "
              >
                Profilim
              </button>
              <button onClick={() => setPage("mahsulotlar")}
                className="mr-5 flex gap-1 items-center justify-center text-[white]  w-[150px] text-center cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
              >
                mahsulotlar
              </button>
              <button onClick={() => setPage("oqim")}
                className="mr-5 flex gap-1 items-center justify-center text-[white] w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
              >
                Oqim
              </button>
              <button onClick={() => setPage("statistika")}
                className="mr-5 flex gap-1 items-center justify-center text-[white] w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
              >
                statistika
              </button>
              <button onClick={() => setPage("konkurs")}
                className="mr-5 flex gap-1 items-center justify-center text-[white] w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] rounded"
              >
                konkurs
              </button>
            </nav>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
          {page === "profil" && <Myprfil />}
            {page === "mahsulotlar" && <h1>mahsulotlar</h1>}
            {page === "oqim" && <h1>Oqim</h1>}
            {page === "statistika" && <h1>Statistika</h1>}
            {page === "konkurs" && <h1>Konkurs</h1>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
