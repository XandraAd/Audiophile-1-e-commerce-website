/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Gallery = ({handleButtonClick,data}) => {
  // console.log(`this the handleButtonClick in gallery`,handleButtonClick)
  const speakerZX9Data = [
    {
      id: 1,
      slug: "ZX9 Speaker",
      category: "SPEAKER",
      image: "../../resources/assets/home/desktop/image-speaker-zx9.png",
      mobileImage:"../../resources/assets/home/mobile/image-speaker-zx9.png",
      tabletImage:"../../resources/assets/home/tablet/image-speaker-zx9.png",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truely remarkable sound",
    },
  ];

  const speakerZX7Data = [
    {
      id: 2,
      slug: "ZX7 Speaker",
      category: "SPEAKER",
      image: "/resources/assets/home/desktop/image-speaker-zx7.jpg",
      mobileImage:"/resources/assets/home/mobile/image-speaker-zx7.jpg",
      tabletImage:"/resources/assets/home/tablet/image-speaker-zx7.jpg",
    },
  ];

  const EarphoneYX1Data = [
    {
      id: 1,
      slug: "YX1 Wireless Earphones",
      category: "EARPHONES",
      image: "/resources/assets/home/desktop/image-earphones-yx1.jpg",
      mobileImage:"/resources/assets/home/mobile/image-earphones-yx1.jpg",
      tabletImage:"/resources/assets/home/tablet/image-earphones-yx1.jpg",
    },
  ];

  return (
    <>
    <div className="min-h-screen">
    <div
        className="bg-orange my-8 mx-8 border md:mx-20 lg:mx-[9rem] xl:mx-[] 2xl:mx-[15rem] 2xl:relative 2xl:left-20"
        style={{
          backgroundImage:
            'url("../../resources/assets/home/mobile/pattern-circles.svg")',
        }}
      >
        {speakerZX9Data.map((speaker) => (
          <div
            key={speaker.id}
            className="items-center py-10 flex flex-col  lg:flex-row md:items-center lg:items-center lg:justify-center lg:gap-20 lg:px-10  "
          >
            {/* Speaker  ZX9 image */}
            <div className=" h-full">
              <img
                 
                  src={ window.innerWidth < 480
                    ? speaker.mobileImage
                    :window.innerWidth < 800
                    ? speaker.tabletImage 
                    : speaker.image}
                  alt={speaker.name}
                  className="mb-5 w-40 md:w-64  2xl:w-80"
               
              />
            </div>

            {/* text content */}
            <div className="text-white text-center lg:text-start">
              <div className="">
                <div className="text-[36px] font-bold tracking-[1.3px] leading-9 mb-5 md:text-[56px] md:leading-[1em] md:font-bold md:mb-5 lg:tracking-[2px]">
                  <div className="w-40 ml-16 lg:w-60">{speaker.slug}</div>
                  
                </div>
                <div className=" text-[15px] mb-8 px-3  w-72 md:mb-8  lg:px-10 lg:ml-6 ">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truely remarkable <br className="hidden" /> sound
                </div>
              </div>
              {/* product button */}

              <Link to={`/product/${speaker.slug}`}>
                <Button className="bg-black px-6 py-3 font-bold lg:hover:bg-lightgray  lg:ml-16"  onClick={() => handleButtonClick(speaker.slug)}>
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
       <div className="my-8 mx-8  md:mx-20 lg:mx-[6.5rem]   lg:my-0 ">
        {speakerZX7Data.map((speaker) => (
          <div
            key={speaker.id}
            className="items-center relative py-10  md:py-8 lg:flex-row md:object-right lg:items-center lg:justify-center lg:gap-20 lg:px-10  "
          > 
            {/* Speaker  ZX7 image */}
             <div className="h-72">
              <img
                src={ window.innerWidth < 480
                  ? speaker.mobileImage
                  :window.innerWidth < 800
                  ? speaker.tabletImage 
                  : speaker.image}
                alt={speaker.name}
                className="mb-5 md:w-screen md:h-72  lg:h-[20rem]"
              />
            </div> 

            {/* text content */}
             <div className=" absolute top-32 text-black text-center w-64 h-64 md:h-[68px] ">
              <div className="">
                <div className="text-[28px] font-bold tracking-[2px] leading-10 mb-10 md:leading-[1em] md:font-bold md:mb-5 lg:tracking-[2px]">
                  <div className="font-extrabold w-40 ml-16 uppercase h-20 ">{speaker.slug} </div>
                  
                </div>
              </div> 
              {/* product button */}

               <Link to={`/product/${speaker.slug}`}>
                <Button className="bg-inherit border border-black ml-4 px-6 py-3 text-black font-bold lg:hover:bg-lightgray lg:ml-16  lg:text-black" onClick={() => handleButtonClick(speaker.slug)}>
                  SEE PRODUCT
                </Button>
              </Link> 
            </div>
          </div>
        ))}
      </div> 
        <div className="mt-12 mx-4  md:mx-16 md:mt-4 lg:mx-[9rem] lg:my-16  xl:mx-[9rem] ">
        {EarphoneYX1Data.map((earphone) => (
          <div
            key={earphone.id}
            className="px-4 md:grid md:grid-cols-2 md:py-0 lg:px-2  "
          >  
            {/* Earphone image */}
              <div className="h-64 ">
              <img
                 src={ window.innerWidth < 480
                  ? earphone.mobileImage
                  :window.innerWidth < 800
                  ? earphone.tabletImage 
                  : earphone.image}
                alt={earphone.name}
                className=" md:w-80 lg:w-full lg:h-[15rem] xl:h-[18rem] xl2:h-[20rem]"
              />
            </div>  

            {/* text content */}
                <div className="px-8 text-black bg-gray shadow-md h-[180px] -mt-12 
                md:absolute md:left-[25rem] md:top-[136.3rem] md:h-[285px] md:w-[295px] lg:left-[33rem] lg:top-[125.8rem] lg:h-[240px] lg:px-16 lg:w-[355px]   xl:w-[470px] xl:left-[42rem]  xl:top-[127.6rem] xl:h-[290px] xl2:left-[46rem] xl2:w-[560px] xl2:h-[316px] xl2:top-[127.9rem]"> 
              <div className="md:realtive md:left-6 md:top-6 xl:left-24 "> 
                 <div className="text-[25px]  tracking-[1px] leading-8 my-8 md:leading-[1em] md:mb-5  lg:tracking-[2px]"> 
                  <div className="font-extrabold uppercase pt-8">{earphone.slug}</div> 
                  
                 </div> 
              </div> 
              {/* product button */}

              <Link to={`/product/${earphone.slug}`}>

                <Button className="bg-inherit border border-black ml-4  mb-2 px-6 py-3 text-black font-bold lg:hover:bg-lightgray md:relative  md:left-2 md:top-6 lg:top-3 lg:-left-4 xl:-left-3 lg:text-black" onClick={() => handleButtonClick(earphone.slug)}>
                  SEE PRODUCT 
                 </Button>
              </Link>
            </div> 
           </div> 
       ))} 
        </div> 
    </div>
 
     
   
      
    </>
  );
};

export default Gallery;
