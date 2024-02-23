/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../components/Button";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import BestGear from "../components/BestGear";
import { Link } from "react-router-dom";



const Home = ({ data, handleButtonClick }) => {
  

  const productName = "XX99 Mark II Headphones";
  return (
    <>
   <div className="h-[700px] relative flex flex-col md:h-[650px] lg:flex-row justify-center items-center mb-40 xl:h-[647px] xl2:h-[750px] 2xl:h-[1440px]">
      
      <div className="absolute lg:left-20 xl:left-32 xl2:left-40  2xl:left-64 text-white z-20 flex flex-col items-center lg:items-start">
    <small className="w-[300px] mt-12 ml-4 text-[16px] font-thin tracking-widest  md:mt-12  md:ml-8 md:w-[350px] lg:ml-16 2xl:text-2xl ">
      NEW PRODUCT
    </small>
    <h1 className="w-72 text-[36px] ml-12  my-8 md:text-[56px] md:w-96 md:mt-10  md:ml-4 lg:text-5xl  lg:ml-16 text-3xl   font-bold  2xl:text-6xl ">
      XX99 Mark II Headphones
    </h1>
    <p className="font-medium w-64  text-[15px] tracking-wide leading-4  md:w-[300px] md:text-center md:mt-2 md:-ml-8 lg:tracking-wide  lg:ml-16 lg:text-start 2xl:text-[24px] 2xl:md:w-[400px] 2xl:leading-8 ">
      Experience natural, lifelike audio and exceptional build quality made
      for the passionate music enthusiast.
    </p>
          <Link to={`/product/${productName}`}>
            <Button
              onClick={() => handleButtonClick("", productName)}
              className="relative top-16 md:top-8 md:-left-6  lg:top-10 lg:left-16 bg-orange px-12 py-4 text-white text-md 2xl:text-3xl"
            >
              See Product
            </Button>
          </Link>
        </div>
   
 
        <div className="absolute z-0 -left-[30rem] lg:left-0">
          <img
            srcSet="
  /resources/assets/home/mobile/image-header.jpg 640w,
  /resources/assets/home/tablet/image-header.jpg 780w,
  /resources/assets/home/desktop/image-hero.jpg 1024w
  "
            sizes="(max-width: 640px) 100vw,
  (max-width: 768px) ,
  1024px
  "
            src="/resources/assets/home/desktop/image-hero.jpg"
            alt="Hero Image"
            className=" h-[700px] object-cover md:h-[650px]  lg:h-[650px] xl:h-full xl2:h-[750px] 2xl:h-[1440px]"
          />
        </div>
      </div>

      <div className="flex  text-black min-h-80 md:min-h-60 xl:min-h-80 2xl:mb-32">
        <Products data={data} />
      </div>
      <div className="">
        <Gallery handleButtonClick={handleButtonClick} data={data} />
      </div>
      <BestGear />
    </>
  );
};

export default Home;
