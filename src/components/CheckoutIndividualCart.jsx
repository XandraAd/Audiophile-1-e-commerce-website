/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Flex, Text, Stack, VStack } from "@chakra-ui/react";


const CheckoutIndividualCart = ({ product }) => {
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
        <Stack flexDir="row" className="lg:ml-2">
          <VStack>
            <Text as="b" className="w-32 md:text-lg md:-ml-2 mt-2">
              {product?.name}
            </Text>
            <Text className="text-slate-400 -ml-12 md:-ml-20 ">
              ${product?.price.toLocaleString()}
            </Text>
          </VStack>

          <Flex justify="center" alignItems="center">
            <Box className="flex px-2 py-4 -mt-12 h-6 w-20  ml-10 md:ml-96 md:-mt-[28px] lg:ml-56  xl:ml-[29rem] xl2:ml-[39rem]">
              <span className="-mt-[13px] text-bold">x</span>

              <Text
              as="b"
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

export default CheckoutIndividualCart;