/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import ProductCard from "../components/ProductCard";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import BestGear from "../components/BestGear";

const CategoryPage = ({ data, handleButtonClick }) => {
  const { categoryName } = useParams();

  // Filter products based on the category name
  const categoryProducts = data.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <Box className="bg-black text-white uppercase h-40 flex justify-center items-center">
        <Center>
          <Text as="h1" fontSize="4xl">{categoryName}</Text>
        </Center>
      </Box>
      <Box>
        <ProductCard
        data={data}
          handleButtonClick={handleButtonClick}
          categoryProducts={categoryProducts}
        />
      </Box>
      <Box className="lg:h-80  xl2:mt-16">
        <Products  data={data} />
      </Box>
      <Box className="lg:-mt-10 lg:relative lg:-left-4">
        <BestGear />
      </Box>
    </>
  );
};

export default CategoryPage;
