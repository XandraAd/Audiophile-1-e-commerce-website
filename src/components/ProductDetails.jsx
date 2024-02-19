/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Center,
  Stack,
  Text,
  Flex,
  Image,
  Link,
 
} from "@chakra-ui/react";
import Button from "./Button";
import { GrFormAdd } from "react-icons/gr";
import { RxMinus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { increaseCart, decreaseCart, addToCart,resetCartCount } from "../slices/CartSlices";
import Products from "./Products";
import BestGear from "./BestGear";


const ProductDetailsPage = ({ product, handleButtonClick}) => {
  const [selected, setSelected] = useState(null);
 


  const { productName, categoryName, slug, name } = useParams();
  const dispatch = useDispatch();
 const cartCount = useSelector((state) => state.carts?.count ?? 0);


  

  useEffect(() => {
    // Reset count when component unmounts
    return () => {
      dispatch(resetCartCount()); // Assuming resetCount action is available
    };
  }, [dispatch]);

  // Fetch selected product based on slug when component mounts
  useEffect(() => {
    const selectedProduct = productName
      ? product?.find((p) => p.name === productName)
      : product?.find((p) => p.slug === slug);
    setSelected(selectedProduct);
    console.log(`selected in details `, selectedProduct);
  }, [product, productName, slug]);

  // Check if the selected product exists
  if (!selected) {
    return <div>Product not found.</div>;
  }

  // Destructure product properties
  const {
    others,
    gallery,
    description,
    price,
    categoryImage,
    features,
    includes,
  } = selected;

  // Destructure gallery images
 const { first, second, third } = gallery || [];

 const handleDecrease = () => {
    dispatch(decreaseCart());
    // Update local count after dispatching
  };
  const handleIncrease = () => {
    dispatch(increaseCart());
    // dispatch(addToCart(selected));
    };

  
  const handleAddtoCart = () => {
    if (selected) {
       const quantity = cartCount; 
      dispatch(addToCart({ item: selected, quantity,image: selected.image}));
    }
  };
  


  return (
    <>
      <Box className="">
      

        <Box>
          <Link to={`/category/${categoryName}`}>
            <Button> Go back</Button>
          </Link>
        </Box>

        <Box
          mt={20}
          mb={20}
          className="px-3 ml-4   relative  lg:grid lg:grid-cols-2 lg:h-[26rem] xl2:h-[588px] w-[92%] md:ml-20 md:w-[80%]   lg:w-[72%] xl:w-[78%] xl:h-[32rem] xl2:w-[79%]  "
        >
          <Box className="md:w-96">
            {/* Image Section */}
            <Flex flexDir={{ base: "column", md: "row" }}>
              <Center>
                <Image
                  srcSet={`
    ${categoryImage.mobile} 480w,
    ${categoryImage.tablet} 800w,
    ${categoryImage.desktop} 1200w
  `}
                  sizes="(max-width: 480px) 480px,
         (max-width: 800px) 800px
         1200px"
                  src={categoryImage.desktop}
                  alt={name}
                  className="h-[20rem] w-full object-cover bg-gray md:h-[30rem] md:w-[80rem] lg:h-full lg:order-2 order-1 lg:w-[150%] lg:ml-20 xl2:mt-10"
                />
              </Center>

              {/* Text Section */}
              <Box flex={{ base: "none", lg: "1" }} mr={{ base: "0", lg: "4" }}>
                <Center>
                  <Box flexDir={{ base: "column", lg: "row" }}>
                    <Stack flexDir={{ base: "column", lg: "row" }}>
                      <Box>
                        <Box mb="1rem">
                          <Text
                            as="b"
                            style={{
                              marginBottom: "1rem",
                              fontFamily: "Manrope",
                              fontSize: "28px",

                              textTransform: "uppercase",
                            }}
                          >
                            {name}
                          </Text>
                        </Box>
                        <Box mb="1rem">
                          {" "}
                          <Text
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "15px",
                              fontWeight: "medium",
                            }}
                          >
                            {description}
                          </Text>
                        </Box>
                        <Box mb="1rem">
                          {" "}
                          <Text
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "18px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                            }}
                          >
                            ${price}
                          </Text>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </Center>
              </Box>
            </Flex>
          </Box>

          <Center>
            <Box flexDir={{ base: "column", lg: "row" }}>
              <Flex justify="center" alignItems="center">
                <Box mr="1rem" mb="1rem" className="flex border py-2 px-6">
                  <Button>
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
                    <span>{cartCount}</span>
                  </Text>
                  <Button>
                    <GrFormAdd onClick={handleIncrease} />
                  </Button>
                </Box>
                <Box>
                  <Button
                    className="bg-orange py-2 px-4 text-white mb-[1rem]"
                    onClick={handleAddtoCart}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Flex>

              <Box>
                <Text
                  as="b"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Features
                </Text>
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "15px",
                    fontWeight: "medium",
                  }}
                >
                  {features}
                </Text>
              </Box>
              <Box mt="1rem">
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  In the box
                </Text>
                <ul>
                  <li>Includes:</li>
                  {Array.isArray(includes) ? (
                    includes.map((item, id) => (
                      <li key={id}>
                        <p>
                          <span className="text-orange">{item.quantity}</span>
                          <span className="text-orange">x </span>
                          {item.item}
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>No information available.</li>
                  )}
                </ul>
              </Box>
            </Box>
          </Center>
          <Box>
            <Stack>
              {/* Gallery images */}
              {[first, second, third].map((gallery, index) => (
                <Image
                  key={index}
                  srcSet={`
              ${gallery?.mobile} 480w,
              ${gallery?.tablet} 800w,
              ${gallery?.desktop} 1200w
            `}
                  sizes="(max-width: 480px) 480px,
              (max-width: 800px) 800px
              1200px"
                  src={gallery?.desktop || categoryImage.desktop} // Use desktop image by default
                  alt={`Gallery Image ${index + 1}`}
                  className="mt-4"
                />
              ))}
            </Stack>
          </Box>
          <Box>
            <Center>
              <Text className="uppercase font-bold mt-32 mb-4 text-[24px]">
                You may also like
              </Text>
            </Center>

            <Box>
              <Stack>
                {others.map((item, index) => {
                  const { image, name } = item;
                  const { mobile, tablet, desktop } = image;
                  return (
                    <Stack key={index}>
                      <Image
                        key={index}
                        srcSet={`
          ${mobile} 480w,
          ${tablet} 800w,
          ${desktop} 1200w
        `}
                        sizes="(max-width: 480px) 480px,
          (max-width: 800px) 800px
          1200px"
                        src={desktop || categoryImage.desktop}
                        alt={`others Image ${index + 1}`}
                        className="mt-4 h-[150px] w-full object-contain bg-gray"
                      />
                      <Text className="font-bold text-[24px] m-auto">
                        {name}
                      </Text>
                      <Box marginLeft={32}>
                        <Link
                          onClick={() =>
                            handleButtonClick("seeProduct", slug, productName)
                          }
                        >
                          <Button className="bg-orange py-2 px-2 text-white mb-[1rem]">
                            See Product
                          </Button>
                        </Link>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Products data={product} />
      </Box>
      <Box>
        <BestGear />
      </Box>
    </>
  );
};

export default ProductDetailsPage;
