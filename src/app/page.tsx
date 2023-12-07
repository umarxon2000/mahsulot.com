import React from 'react';
import { FaArrowUp } from "react-icons/fa";

// Import Swiper React components
import { ProductType } from '@/interfaces';
import Carousel from '../components/swiper/Swiper'
import Products from '@/components/products/Products';

import axios from "axios";

const API = "https://fakestoreapi.com/products";


export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
	const products: ProductType[] = await res.json();

  return (
    <main className=" container flex min-h-screen flex-col items-center justify-between m-auto">
      <div className='w-[100%] flex items-center justify-center'>

      </div>
      <Carousel />
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map(product => (
						<Products key={product.id} product={product} />
					))}
				</div>
     
      <a href="#" className="top"><FaArrowUp /></a>

    </main>
  )
}
