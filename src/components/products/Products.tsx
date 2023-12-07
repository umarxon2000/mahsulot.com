import React from "react";
import Image from "next/image";
import img from "@/app/assets/pngtree-letter-m-logo-png-png-image_4565909-removebg-preview.png";
import { ProductType } from "@/interfaces";
import Link from "next/link";
import { FC } from "react";
import CustomImage from "../image";

const Products: FC<{ product: ProductType }> = ({ product }) => {

  return (
    <>
      <Link href={`/product/${product.id}`}>
          <div className="p-4  ">
            {/* 934053065 */}
            <div className="h-full border-2 w-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-4 ">
                <div className=" relative w-full object-contain h-[200px] overflow-hidden flex-1">
                  <img src={product.image} alt={product.title} className=" h-full bg-contain  w-full duration-700 ease-in-out group-hover:opacity-75" />
                </div>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            
                {product.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-300 mb-3">
                <p className='w-44 truncate'>{product.title}</p>
                </h1>
                <p className='leading-relaxed text-base line-clamp-2'>
				{product.description}
			</p>
                <div className="flex flex-col items-start justify-between ">
                <p>${product.price}</p>
                  <Link
                    href={`/product/${product.id}`}
                    className="mr-5 flex gap-1 items-center justify-center text-[white] w-[150px] text-center  cursor-pointer  hover:bg-[#ffa500] p-[8px] bg-[rgb(255,152,0)] hover:shadow-lg shadow-orange-700 rounded-[40px]"
                  >
                    sotib olish
                  </Link>
                </div>
              </div>
            </div>
          </div>

       
      </Link>
    </>
  );
};

export default Products;
