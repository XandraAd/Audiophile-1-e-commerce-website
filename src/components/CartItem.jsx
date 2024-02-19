/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box,Flex,Button,Text,Stack,VStack } from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
import { RxMinus } from "react-icons/rx";
import { increaseCart, decreaseCart, addToCart,removeFromCart, editCart,reduceCart} from "../slices/CartSlices"



const CartItem = ({ product}) => {
  // console.log("Quantity prop:", quantity);
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const dispatch = useDispatch();


  
  const cartItems = useSelector((state) => state?.carts.cartItems);


 
  const handleDecrease = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
      // dispatch(decreaseCart(product.id));
      const payload = { item: product, quantity: 1 };
      dispatch(reduceCart(payload));
    }
  };
  
  const handleIncrease = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
    const payload = { item: product, quantity: 1 };
    dispatch(addToCart(payload));
  };
  
  
  //  const cartCount = useSelector((state) => state.carts?.count ?? 0);


  return (
    <>
       {console.log("Cart Items in cartitems:", cartItems)}
     
       <Stack  flexDir="row" key={product.id} className="">
      <img src={product?.image?.mobile} alt={product.name}  className="h-20 w-20"/>
      <Stack flexDir="row" className="">
        <VStack> 
          <Text>{product.name}</Text>
        <Text>${product.price}</Text>
        </VStack>
        
        <Flex justify="center" alignItems="center">
                <Box className="flex border px-2 -mt-16 h-6 w-32">
                  <Button className="">
                    <RxMinus onClick={handleDecrease} />
                  </Button>
                  <Text
                    marginInline={2}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{itemQuantity}</span>
                  </Text>
                  <Button>
                    <GrFormAdd onClick={handleIncrease} />
                  </Button>
                </Box>
                <Box>

                </Box>
                </Flex>
       
        
      </Stack>
   
    </Stack>
    <Box>   
        <Text className="ml-20">Total :<span className="ml-[6rem]">${product.price * itemQuantity}</span> </Text>
        </Box>
   
    </>
  );
};

export default CartItem;

