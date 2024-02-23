/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Gallery = ({handleButtonClick}) => {
  // console.log(`this the handleButtonClick in gallery`,handleButtonClick)
  const speakerZX9Data = [
    {
      id: 1,
      slug: "ZX9 Speaker",
      category: "SPEAKER",
      image: "/resources/assets/home/desktop/image-speaker-zx9.png",
      mobileImage:"/resources/assets/home/mobile/image-speaker-zx9.png",
      tabletImage:"/resources/assets/home/tablet/image-speaker-zx9.png",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truely remarkable sound",
        patternimage: "/resources/assets/home/desktop/pattern-circles.svg",
     

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
    <div className="min-h-screen mx-[2rem] mt-10 md:mx-[5rem] lg:mx-[9rem] xl2:mx-[15rem] 2xl:mx-[31rem]">
      <div className="bg-orange 2xl:h-[45rem] 2xl:mr-12">
      <div className="">
        {/* Content */}
        {speakerZX9Data.map((speaker) => (
          <div
            key={speaker.id}
            className="relative z-999 items-center  py-10 flex flex-col lg:flex-row md:items-center lg:items-center lg:justify-center lg:gap-20 lg:px-10 xl2:px-0"
          >
            {/* Pattern  Image */}
            <div className="absolute -top-8 md:-top-16  lg:w-2/3 lg:-left-4">
              <img src={speaker.patternimage} alt="pattern circles" />
            </div>
             {/* Speaker Image */}
            <div className="h-full">
              <img
                src={
                  window.innerWidth < 480
                    ? speaker.mobileImage
                    : window.innerWidth < 800
                    ? speaker.tabletImage
                    : speaker.image
                }
                alt={speaker.name}
                className="mb-2 w-40 md:w-50 lg:w-48 2xl:w-96 relative md:top-[2rem] xl:lg:w-56 xl:-left-32 xl:top-[3rem] 2xl:-left-[8rem] 2xl:top-[12rem] "
              />
            </div>

            {/* Text content */}
            <div className="text-white text-center lg:text-start ">
              <div className="text-[36px] font-bold tracking-[1.3px] leading-9 mb-5 md:text-[48px] md:leading-[1em] lg:tracking-[2px] 2xl:tracking-[6px]  2xl:text-[56px]">
                <div className="w-40 ml-16 md:w-64 lg:w-60 md:relative md:top-[4rem] md:-left-[2rem] lg:top-[4rem] 2xl:top-[10rem] 2xl:w-[20rem]">
                  {speaker.slug}
                </div>
              </div>
              <div className="text-[15px] mb-8 px-3 w-72 md:mb-8  md:relative md:top-[4rem] md:left-[1rem] lg:px-10 lg:ml-6 lg:-left-[2rem] lg:top-[4rem] 2xl:top-[10rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable <br className="hidden" /> sound
              </div>
              {/* Product button */}
              <Link to={`/product/${speaker.slug}`}>
                <Button
                  className="bg-black px-6 py-3 font-bold   md:relative md:top-[2rem]  lg:hover:bg-lightgray lg:ml-10 2xl:top-[10rem]"
                  onClick={() => handleButtonClick(speaker.slug)}
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
  

 

       <div className="md:mx-0 lg:-mx-[2.5rem] lg:my-0 xl:px-[1rem] xl2:relative xl2:-left-8 xl2:-mx-6 2xl:mx-[0rem] 2xl:-left-14 2xl:h-[28.5rem]">
        {speakerZX7Data.map((speaker) => (
          <div
            key={speaker.id}
            className="items-center relative py-10  md:py-8 lg:flex-row md:object-right lg:items-center lg:justify-center lg:gap-20 lg:px-10 xl:px-6 xl2:px-2 xl2:left-8"
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
                className="mb-5 md:w-screen md:h-72  lg:h-[20rem] xl2:h-[22rem] 2xl:h-[28rem] "
              />
            </div> 

            {/* text content */}
             <div className=" absolute top-32 text-black text-center w-64 h-64 md:h-[68px] ">
              <div className="">
                <div className="text-[28px] font-bold tracking-[2px] leading-10 mb-10 md:leading-[1em] md:font-bold md:mb-5 lg:tracking-[2px]">
                  <div className="font-extrabold uppercase pt-8">{speaker.slug} </div>
                  
                </div>
              </div> 
              {/* product button */}

               <Link to={`/product/${speaker.slug}`}>
                <Button className="bg-inherit border border-black ml-4 px-6 py-3 text-black md:-ml-[3rem] font-bold lg:hover:bg-lightgray lg:-ml-10  lg:text-black" onClick={() => handleButtonClick(speaker.slug)}>
                  SEE PRODUCT
                </Button>
              </Link> 
            </div>
          </div>
        ))}
      </div> 
        <div className="mt-12   md:mx-1 md:mt-4  lg:my-8 xl:mx-[0] xl2:mt-16 2xl:mx-[0rem] ">
        {EarphoneYX1Data.map((earphone) => (
          <div
            key={earphone.id}
            className=" md:grid md:grid-cols-2 md:py-0"
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
                className=" md:w-80 lg:w-full lg:h-[15rem] xl:h-[18rem] xl2:h-[22rem] 2xl:h-[30rem]"
              />
            </div>  

            {/* text content */}
                <div className="px-8 text-black bg-gray shadow-md h-[180px] -mt-12 
                md:absolute md:left-[25rem] md:top-[132rem] md:h-[285px] md:w-[295px] lg:left-[33rem] lg:top-[128.7rem] lg:h-[240px] lg:px-16 lg:w-[355px]   xl:w-[465px] xl:left-[42rem]  xl:top-[131.5rem] xl:h-[290px] xl2:left-[47rem] xl2:w-[450px] xl2:h-[350px] xl2:top-[141.8rem] 2xl:left-[81rem]  2xl:h-[490px]  2xl:top-[227.4rem] 2xl:w-[720px]"> 
              <div className="md:absolute md:left-12 md:top-6 xl:left-24 "> 
                 <div className="text-[25px]  tracking-[1px] leading-8 my-8 md:leading-[1em] md:mb-5  lg:tracking-[2px]"> 
                  <div className="font-extrabold uppercase pt-8">{earphone.slug}</div> 
                  
                 </div> 
              </div> 
              {/* product button */}

              <Link to={`/product/${earphone.slug}`}>

                <Button className="bg-inherit border border-black ml-4  mb-2 px-6 py-3 text-black font-bold lg:hover:bg-lightgray md:relative  md:left-2 md:top-48 lg:top-[10rem] lg:-left-8 xl:left-4 lg:text-black" onClick={() => handleButtonClick(earphone.slug)}>
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
