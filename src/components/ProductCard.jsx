/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Center, Text, Stack, VStack,Image } from "@chakra-ui/react";
import Button from "./Button";
import { Link} from "react-router-dom";


const ProductCard = ({handleButtonClick, categoryProducts}) => {
  


  
  return (
    <>
      <Box>
        { categoryProducts.map((product,index) => (
       
          <Box
            key={index}
            mt={20}
            mb={{base:"20", md:"2"}}
            className="px-3 ml-4  h-[40rem] relative  lg:grid lg:grid-cols-2 lg:h-[26rem] lg:w-[72%] lg:ml-28 xl2:h-[588px] w-[92%] md:ml-20 md:w-[80%]  md:h-[49rem]  xl:w-[78%] xl:h-[32rem] xl2:w-[82%]  "
          >
            {/* Image Section */}
            <Center className={`order-${index % 2 === 0 ? '2' : ''} lg:order-${index % 2 === 0 ? '1' : '2'}`}>
           
            <Image
              src={product.image.desktop}
               srcSet={`
               ${product.categoryImage.mobile} 480w,
               ${product.categoryImage.tablet} 800w,
               ${product.categoryImage.desktop} 1200w
             `}
             sizes="(max-width: 480px) 480px,
                    (max-width: 800px) 800px
                    1200px"
           
              alt={product.name}
              className=" h-[20rem] w-full object-cover bg-gray  md:h-[30rem] md: md:w-[80rem] lg:h-full lg:order-2 order-1 lg:w-[150%] lg:ml-20 lg:object-contain "
            />
             </Center>

            {/* Text Section */}

            <Center className={`order-${index % 2 === 0 ? '0' : '1'} lg:order-${index % 2 === 0 ? '1' : '0'} mt-4 lg:mt-0 flex flex-col`}>
              <Stack flexDir={{ base: "column",lg:"row" }}>
                <Box>
                  <Box
                    flexDir={{ base: "column",lg:"row" }}
                    mt="4"
                    fontWeight="extrabold"
                    as="h4"
                    className=" xl2:justify-around  lg:ml-14 xl2:-ml-8 "
                  >
                    <Center>
                      <VStack flexDir={{ base: "column"}}>
                        <Text
                          style={{
                            fontFamily: "Manrope",
                            fontSize: "14px",
                            fontWeight: "regular",
                            textTransform: "uppercase",
                            
                          }}
                          className="text-orange tracking-widest"
                        >
                         {product.new}
                        </Text>
                        <VStack  flexDir={{ base: "column", md:"column-reverse"}} >
                        <Text
                          style={{
                            fontFamily: "Manrope",
                            // fontSize: "28px",
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                          size="md"
                          marginInline={{ base: "1", md: "0" }}
                          noOfLines={3}
                          className="w-48  text-center lg:text-[32px] lg:w-[14rem]  
                            xl:text-[32px] xl:h-[8rem] xl:w-54   xl2:w-96  lg:text-start  xl2:text-[40px] xl2:justify-around  xl2:-ml-8 "
                        >
                          {product.name}
                        </Text>
                     
                        </VStack>
                        
                      </VStack>
                    </Center>
                  </Box>
                  <Center>
                    <Box
                      mt="2"
                      fontWeight="semibold"
                      as="h4"
                      noOfLines={8}
                      className="text-center  md:items-center md:relative  md:w-[30rem] md:h-[180px] lg:w-full lg:text-[14px] lg:h-[210px] lg:text-start lg:ml-24 xl2:mr-2"
                    >
                      {product.description}
                    </Box>
                  </Center>
                
                </Box>
            
              </Stack>
              <Box>
              <Link to={`/product/${product.name}`}>
              <Button className="text-white bg-blurOrange py-2 px-4 mt-4 md:relative md:-top-20 lg:-ml-6  xl:-top-28" onClick={() => handleButtonClick(product.slug, product.name)}>
  See Product
</Button>
              </Link>
              </Box>
            
            </Center>
           
          </Box>
          // </Link>
        ))}
        
      </Box>
    </>
  );
};

export default ProductCard;
