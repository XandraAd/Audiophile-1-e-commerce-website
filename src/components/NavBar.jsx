/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation} from "react-router-dom";
import {
  Flex,
  Text,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  DrawerCloseButton,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
 
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";
import Products from "./Products";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";



const NavBar = ({data,item }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const placement = useBreakpointValue({ base: "right", md: "top" });
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

 

   // Retrieve cart state from the Redux store
  //  const cartState = useSelector((state) => state.carts);

   // Access the count property from the cart state
  //  count= {item.quantity}
 
  const cartCount = useSelector((state) =>
  state.carts.cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
 

useEffect(() => {
  // Update displayed cart count when count changes
  setItemQuantity(prevQuantity => prevQuantity + cartCount);
}, [cartCount,setItemQuantity]);


  

   // Retrieve cart items from the Redux state
const cartItems = useSelector((state) => state.carts.cartItems);

 // Extract unique categories, including Home if not present
 const uniqueCategories = useMemo(() => {
  try {
    return ["Home",...new Set(data?.map((item) => item.category)) ];
  } catch (error) {
    console.error("Error extracting unique categories:", error);
    return []; // Return empty array to avoid rendering errors
  }
}, [data]);

// Define initial state for activeTab, assuming 'Home' if no match
const [activeTab, setActiveTab] = useState(() => {
  const currentTab = data?.find((tab) => location.pathname.includes(tab.category.toLowerCase()));
  return currentTab ? currentTab.category : "Home";
});

const toggleMenu = () => {
  setIsDrawerOpen(!isDrawerOpen);
}; 

const handleTabChange = (category) => {
  setActiveTab(category);
};

 const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Check if window width is greater than or equal to 1024px (example for desktop)
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <nav className="flex bg-navbgColor py-4 text-white max-w-screen  xl:justify-center">
        {/* </nav><div className="flex justify-between items-center"> */}
        <Flex>
          <Box>
            {/* Mobile menu button*/}
            <IconButton
              onClick={toggleMenu}
              aria-label={isDrawerOpen ? "Close" : "Menu"}
              icon={isDrawerOpen ? <CgCloseO /> : <FaBars />}
              display={{ base: "flex", lg: "none" }}
              variant={isDrawerOpen ? "ghost" : "white"}
              style={{ width: "40px", height: "20px", color: "white" }}
            />
          </Box>

          {/* Logo */}
          <Box>
            <Link to="/">
              <img
                src="../../resources/assets/shared/desktop/logo.svg"
                alt="company logo"
                className=" ml-4 mr-40 md:mr-[30rem] lg:ml-[7rem] lg:mt-4  xl:ml-2  xl:mr-0 2xl:mr-[22rem]"
              />
            </Link>
          </Box>
          {/* Navigation Links */}
          {isDesktop && (
            <Box>
              <Box as="div" className={`lg:mx-60 xl:mx-40  xl2:mx-60`}>
                <Box
                  as="div"
                  className={` lg:flex lg:flex-row ${
                    isDrawerOpen ? "" : "flex-col "
                  } ${isDrawerOpen ? "sm:hidden lg:flex " : " hidden sm:flex"}`}
                >
                  {uniqueCategories.map((category) => (
                    <Box
                      key={category}
                      as="h2"
                      cursor="pointer"
                      className={`lg:px-2 ${
                        activeTab === category? "text-orange" : " text-white"
                      }`}
                      onClick={() => handleTabChange(category)}
                    >
                     
                     {category === "Home" ? (
  <Link to="/">Home</Link>
) : (
  <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
)}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
          <Box>
            <RiShoppingCart2Line
              ml={56}
              text="white"
              style={{ width: "40px", height: "20px" }}
              className="lg:mr-3"
              onClick={showModal}
             
              />

<span className="relative -top-9 left-6 text-orange">{cartCount !== 0 ? cartCount : null}</span>
          </Box>
        </Flex>
      </nav>
      <Drawer
        placement={placement}
       onClose={() => setIsDrawerOpen(false)}
        isOpen={isDrawerOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody >
          <Products data={data}/>
        
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} className="w-[2rem]">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text>Cart({cartCount})</Text>
                <Text>Remove all</Text>
              </ModalHeader>
              <ModalBody>
  {console.log("Cart Items in navbar:", cartItems)}
  {/* Map over the cart items and render a CartItem for each item */}
  {cartItems?.map((item, id) => (
    <CartItem key={id} product={item} quantity={item.quantity} />
  ))}
</ModalBody>

              <ModalFooter>
                <Link to="/checkout" onClick={handleCloseModal}>Checkout</Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
    </>
  );
};

export default NavBar;
