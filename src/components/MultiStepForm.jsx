import React, { useState } from 'react';
import UserD from "./UserD";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import ProductDetails from "./ProductDetails";
import DeliverDetails from "./DeliverDetails";
import ReceiveDetails from "./ReceiveDetails";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    neighborhood: '',
    phone: '',
    typeProduct: '',
    product: '',
    service: '',
    dateReceive: '',
    pointReceive: '',
    addressReceive: '',
    pointDelivery: '',
    deliveryAddress: '',
    observations: '',
  });

 
  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const inputValues = { ...formData };

  switch (step) {
    case 1:
      return <UserD
        nextStep={nextStep}
        handleChange={handleChange}
        inputValues={inputValues}
      />;
    case 2:
      return <AddressDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        inputValues={inputValues}
      />;
    case 3:
      return <ProductDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        inputValues={inputValues}
      />;
    case 4:
      return <ReceiveDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        inputValues={inputValues}
      />;

    case 5:
      return <DeliverDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        inputValues={inputValues}
      />;
    case 6:
      return <Confirmation
        nextStep={nextStep}
        prevStep={prevStep}
        inputValues={inputValues}
      />;
    default:
      return null;
  }
}

export default MultiStepForm;
