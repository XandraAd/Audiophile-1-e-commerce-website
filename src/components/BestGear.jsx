/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const BestGear = () => {
  const aboutUs = {
    imageUrl: "../../resources/assets/shared/desktop/image-best-gear.jpg",
    mobileImage: "../../resources/assets/shared/desktop/image-best-gear.jpg",
    tabletImage: "../../resources/assets/shared/tablet/image-best-gear.jpg",
    imageAlt: "Guy with earphones on",

    description:
      "Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
  };

  return (
    <Box mt={20} mb={20} className="px-3 ml-5 lg:grid lg:grid-cols-2 lg:h-80  xl2:h-[500px]  w-[90%] md:w-[82%] lg:w-[72%] xl:w-[78%] xl2:w-[79%] lg:absolute lg:left-[4rem] ">
      {/* Image Section */}
      <img
        src={
          window.innerWidth < 480
            ? aboutUs.mobileImage
            : window.innerWidth < 800
            ? aboutUs.tabletImage
            : aboutUs.imageUrl
        }
        alt={aboutUs.imageAlt}
        className="md:h-[14rem] md:ml-12 md:w-full lg:h-full  lg:order-2 order-1  lg:w-[150%] lg:ml-20  xl2:mt-10  "
      />

      {/* Text Section */}
      <Center>
        <Box>
          <Box mt={{base:'4', md:'8'}} fontWeight="extrabold" as="h4" className="lg:order-1 xl2:justify-around  md:ml-14 xl2:-ml-8 ">
            <Center>
              <Text
                size="md"
                marginInline={{ base: '12', md: '0'}}
                noOfLines={2}
                className="uppercase w-64 text-justify text-[28px] font-medium md:w-screen  md:text-center lg:text-[32px] lg:w-full xl2:w-96  lg:text-start xl2:text-[40px] "
              >
                Bringing you the <span style={{ color: "orange" }}>best</span> audio gear
              </Text>
            </Center>
          </Box>
          <Center>
            <Box
              mt="2"
              fontWeight="semibold"
              as="h4"
              noOfLines={[12,14 ]}
              className="text-center md:items-center md:relative md:ml-14 md:w-[32rem] md:h-[180px] lg:w-full lg:text-[14px] lg:h-[210px] lg:text-start lg:ml-16 xl2:mr-2"
            >
              {aboutUs.description}
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default BestGear;

