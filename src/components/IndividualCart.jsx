/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Flex, Text, Stack, VStack } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

const IndividualCart = ({ product }) => {
const [itemQuantity, setItemQuantity] = useState(product?.quantity);

 

  return (
    <>
      <Stack
        flexDir="row"
        key={product?.id}
        className={`w-[80%] mb-6 `}
      >
        <img
          src={product?.image?.mobile}
          alt={product?.name}
          className="h-20 w-20 md:h-28 md:w-28"
        />
        <Stack flexDir="row"  >
          <VStack  className="lg:ml-2">
            <Text as="b" className="w-32  md:-ml-8 mt-4 lg:w-48 ">
              {product?.name}
            </Text>
            <Text className="text-slate-400 -ml-12 md:-ml-28 lg:-ml-40  ">
              ${product?.price.toLocaleString()}
            </Text>
          </VStack>

          <Flex justify="center" alignItems="center">
            <Box className="flex px-2 py-4 -mt-12 h-6 w-20  ml-10 md:-ml-6 md:-mt-[28px] lg:-ml-12 lg:mt-8">
              <span className="-mt-[13px]">x</span>

              <Text
              as={"b"}
                marginInline={2}
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "medium",
                  textTransform: "uppercase",
                }}
              >
                <span className="flex self-center -mt-3 w-[10px]">
                  {itemQuantity}
                </span>
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default IndividualCart;
