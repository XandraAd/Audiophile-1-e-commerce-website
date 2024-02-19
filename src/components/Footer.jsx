/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo } from "react";
import { Box, HStack, VStack, Container} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Footer = ({handleTabChange}) => {
  const{activeTab}=useParams()
  // const location = useLocation();
  const socialIcons = {
    facebook: "/resources/assets/shared/desktop/icon-facebook.svg",
    instagram: "/resources/assets/shared/desktop/icon-instagram.svg",
    twitter: "/resources/assets/shared/desktop/icon-twitter.svg",
  };

  // Define the category route paths
  const categoryPaths = useMemo(() => [
   
    "/category/headphones",
    "/category/speakers",
    "/category/earphones",
  ], []);

  // Define the corresponding category titles
  const categoryTitles = useMemo(() => [
 
    "Headphones",
    "Speakers",
    "Earphones",
  ], []);

 

  

 

  return (
    <Container
      mt={10}
      maxW={{ base: "container.sm", md: "1440px" }}
      className="bg-black text-white  md:h-80 lg:relative lg:top-[35rem] lg:h-96  xl:top-[45rem] xl2:top-[55rem]"
    >
      <HStack
        spacing={{ base: 6, md: 8 }}
        justify={{ base: "center", md: "flex-start" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Box>
         
          <VStack>
            <img
              src="../../resources/assets/shared/desktop/logo.svg"
              alt="companylogo"
              className="mb-6 pt-4 md:-ml-[35rem] lg:-ml-[22rem] lg:pt-8"
            />
           <VStack
              flexDir={{ base: "column", md: "row" }}
              className={`md:-ml-[24rem] lg:relative lg:-top-16  lg:left-[40rem]  xl:left-[55rem] xl2:left-[65rem] md:mb-6 text:[13px] font-bold ${
                activeTab === "Home" ? "text-orange" : " text-white"
              }`}
            >
                  <a
                href="/"
                className={`cursor-pointer ${
                  activeTab === "Home" ? "text-orange" : "text-white"
                }`}
                onClick={() => handleTabChange("Home")}
              >
                Home
              </a>
              {categoryTitles.map((title, index) => (
                <a
                  key={title}
                  href={categoryPaths[index]}
                  className={`cursor-pointer ${
                    activeTab === title ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleTabChange(title)}
                >
                  {title}
                </a>
              ))}
            </VStack>

            <p className=" md:ml-[1rem] lg:ml-2 lg:w-[32rem] md:mb-10  text:[15px] font-medium ">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <Box>
              <VStack
                flexDir={{ base: "column", md: "row" }}
                className="lg:flex lg:space-between text:[15px] font-medium"
              >
                <p className="md:-ml-[10rem] md:w-[25rem] lg:ml-[3rem]">
                  Copyright 2021. All Rights Reserved
                </p>

                <VStack
                  flexDir={{ base: "row", md: "row" }}
                  className="md:ml-10 lg:relative lg:-top-28  lg:left-[20rem] xl:left-[35rem] xl2:left-[45rem]"
                >
                  {Object.entries(socialIcons).map(([key, value]) => (
                    <img key={key} src={value} alt={`${key} icon`} />
                  ))}
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Footer;
