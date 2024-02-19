/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../components/Button";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import BestGear from "../components/BestGear";
import { Link } from "react-router-dom";
import { Center,Image } from "@chakra-ui/react";

const Home = ({ data, handleButtonClick}) => {
  // const products = data || [];


  
  const productName = "XX99 Mark II Headphones";
  return (
    <>
      <div className="text-white ">
      {/* <div className="text-white bg-contain w-screen h-full bg-no-repeat bg-center md:bg-right md:bg-bottom"  style={{backgroundImage: "url('/resources/assets/home/desktop/image-hero.jpg')", height: "40rem", '@media (max-width: 640px)': { backgroundImage: "url('/resources/assets/home/mobile/image-header.jpg')" }, '@media (min-width: 641px) and (max-width: 768px)': { backgroundImage: "url('/resources/assets/home/tablet/image-header.jpg')" }}}>

</div>  */}
 
  <Center>
  <Image
  
    srcSet="
    /resources/assets/home/mobile/img1.jpg 640w,
    /resources/assets/home/tablet/image-header.jpg 780w,
    /resources/assets/home/desktop/image-hero.jpg 1024w
    "
    sizes="(max-width: 640px) 100vw,
    (max-width: 768px) 100vw,
    1024px
    "
    src="/resources/assets/home/desktop/image-header.jpg"
    alt="Hero Image"
    className="w-full h-[40rem] 2xl:h-[80rem] object-cover md:object-right-bottom lg:object-bottom "
  />
</Center> 

         
       

         <div className="mx-28 absolute top-[15rem] md:w-64  md:top-[16rem] md:left-[8rem] lg:text-left lg:w-[379px] lg:h-[400px]  lg:top-[20rem] lg:left-[.5rem]  xl:left-[5rem] 2xl:left-[25rem] 2xl:top-[35rem]">
          <small className="lg:tracking-widest lg:text-sm text-xl 2xl:text-2xl font-thin">
            NEW PRODUCT
          </small>
          <h1 className="lg:text-5xl text-3xl mb:32 my-4 font-bold w-30 2xl:text-6xl ">
            XX99 Mark II Headphones
          </h1>
          <p className="font-medium lg:w-full lg:h-10 lg:tracking-tight text-xs lg:text-[14px] 2xl:text-xl ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <Link to={`/product/${productName}`}>
          <Button
            onClick={() => handleButtonClick("", productName)}
            className="absolute text-white  top-[33rem] left-[6.5rem] md:left-[16rem] lg:left-[7.5em] lg:top-[35rem] xl:left-[12em] 2xl:top-[55rem] 2xl:left-[21.2em] 2xl:px-16 2xl:py-10 2xl:text-2xl  bg-blurOrange px-10 py-6  "
          >
            See Product
          </Button>
        </Link>
      </div> 

      <div className="flex bg-top-4 text-black min-h-80 md:min-h-60 xl:min-h-80 2xl:mb-32">
        <Products data={data}/>
      </div>
      <div className="">
        <Gallery handleButtonClick={handleButtonClick} data={data} />
      </div>
      <BestGear />
    </>
  );
};

export default Home;
