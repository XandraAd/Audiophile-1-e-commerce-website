/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,

  RadioGroup,
  Radio,
  Stack,


 
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem';
import { PaystackButton } from 'react-paystack'





const Checkout = () => {
    // const [open, setOpen] = useState(false);
// const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money'
  });
  const publicKey = import.meta.env.VITE_API_KEY;
  const cartItems = useSelector((state) => state.carts.cartItems);
  console.log(cartItems)
  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 100; 

  const buttonProps = {
    
    amount: subTotal,
    currency:"GHS",
    metadata: {
        formData
    },
    publicKey,
    text: "Pay Now",
  
    onSuccess: () => alert('Payment successful!'),
    onClose: () => alert('Payment closed.'),
  }

  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


 
  
  

  const validateEmail = () => {
    setEmailError(formData.email.trim() === '');
  };

  return (
    <Box className='m-10'>
      <Box className='mb-4'>
        <Text >Go Back</Text>
      </Box>
      <Box>
        <Box className='uppercase font-bold text-xl mb-10'>Checkout</Box>
        <Box>
          <Text className='uppercase font-bold text-orange text-xs mb-2'>Billing Address</Text>
          <FormControl mb={2}>
            <FormLabel  fontSize="sm" fontWeight="bold">Name</FormLabel>
            <Input name='name' value={formData.name} onChange={handleInputChange} />
          </FormControl>

          <FormControl isInvalid={emailError} mb={2}>
            <FormLabel  fontSize="sm" fontWeight="bold">Email Address</FormLabel>
            <Input name='email' type='email' value={formData.email} onChange={handleInputChange} onBlur={validateEmail} />
            
            <FormErrorMessage>{emailError && 'Email is required.'}</FormErrorMessage>
          </FormControl>

          <FormControl mb={2}>
            <FormLabel  fontSize="sm" fontWeight="bold">Phone Number</FormLabel>
            <Input name='phoneNumber' type='number' value={formData.phoneNumber} onChange={handleInputChange} />
          </FormControl>

          <Box>
            <Text className='uppercase font-bold text-orange text-xs my-4'>Shipping Info</Text>
            <FormControl mb={2}>
              <FormLabel  fontSize="sm" fontWeight="bold">Your Address</FormLabel>
              <Input name='address' type='address' value={formData.address} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel  fontSize="sm" fontWeight="bold">Zip Code</FormLabel>
              <Input name='zipCode' type='number' value={formData.zipCode} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel  fontSize="sm" fontWeight="bold">City</FormLabel>
              <Input name='city' type='city' value={formData.city} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel  fontSize="sm" fontWeight="bold">Country</FormLabel>
              <Input name='country' type='country' value={formData.country} onChange={handleInputChange} />
            </FormControl>
          </Box>

          <Box>
  <Text className='uppercase font-bold text-orange text-xs my-4'>Payment details</Text>
  <FormControl as='fieldset' mb={2}>
    <FormLabel as='legend' className='font-bold'>Payment method</FormLabel>
    <RadioGroup name='paymentMethod' defaultValue='e-money' value={formData.paymentMethod}  onChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
      <Stack spacing='24px'>
        <Radio value='e-money'>e-money</Radio>
        <Radio value='cash'>Cash on delivery</Radio>
      </Stack>
    </RadioGroup>
  </FormControl>
</Box>

        </Box>
      </Box>
      <Box>
         
              <Box>

              <>
  {cartItems?.length > 0 && (
    <>
      {cartItems.map((item, id) => (
        <CartItem key={id} product={item} quantity={item.quantity} />
      ))}
      <Stack flexDir="row">
        <Text>Shipping</Text>
        <Text>$50</Text>
      </Stack>
      <Stack flexDir="row">
        <Text>VAT (INCLUDED)</Text>
        <Text>$1,079</Text>
      </Stack>
      <Stack flexDir="row">
        <Text>GRAND TOTAL</Text>
        <Text>total + shipping + VAT</Text>
      </Stack>
    </>
  )}
</>

  
</Box>

              <Box>
              <PaystackButton className="paystack-button" {...buttonProps} />
      {/* <Link onClick={payWithPaystack()}>Continue and Pay</Link> */}
              </Box>
           
        </Box>
    </Box>
  );
};

export default Checkout;
