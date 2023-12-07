"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "@/app/assets/pngtree-letter-m-logo-png-png-image_4565909-removebg-preview.png";
import "./Swiper.css";

export default function carousel() {
  return (
    <>
      <main className=" container h-[80vh] w-[100%] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[100%]"
        >
          <SwiperSlide>
            <Link href={"/"} className="flex items-center ">
              <Image src={img} alt="" width={100} height={100} />{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="flex items-center">
            <Image src={img} alt="" width={100} height={100} />{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="flex items-center">
            <Image src={img} alt="" width={100} height={100} />{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="flex items-center">
            <Image src={img} alt="" width={100} height={100} />{" "}
            </Link>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
