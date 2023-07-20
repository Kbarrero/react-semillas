// 
import { useFormik } from "formik";
import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import ProductDetails from "./ProductDetails";
import DeliverDetails from "./DeliverDetails";
import ReceiveDetails from "./ReceiveDetails";


class MultiStepForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    neigborhood: '',
    phone: '',
    typeProduct: '',
    product: '',
    service: '',
    dateReceive:'',
    pointReceive: '',
    addressReceive: '',
    pointDelivery: '',
    deliveryAddress: '',
    observations: '',

  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { step, firstName, lastName, email, address, city, 
        neigborhood, phone,typeProduct,product,service,dateReceive,pointReceive,addressReceive,pointDelivery,deliveryAddress,
        observations } = this.state;
    const inputValues = { firstName, lastName, email, address, city, 
        neigborhood, phone, typeProduct, product,service,dateReceive,pointReceive,addressReceive,pointDelivery,deliveryAddress,
        observations };

    switch (step) {
      case 1:
        return <UserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          inputValues={inputValues}
        />;
      case 2:
        return <AddressDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          inputValues={inputValues}
        />;
        case 3:
        return <ProductDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          inputValues={inputValues}
        />;
        case 4:
            return <ReceiveDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              inputValues={inputValues}
            />;

            case 5:
                return <DeliverDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  inputValues={inputValues}
                />;
      case 6:
        return <Confirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          inputValues={inputValues}
        />;
      default:
        return null;
    }
  }
}

export default MultiStepForm;




// const MultiStepForm = () => {

//     const {} = useFormik({
//         initialValues: {
//             step: 1,
//             firstName: '',
//             lastName: '',
//             email: '',
//             address: '',
//             city: '',
//             state: '',
//             zip:'',
//         },
//     })

//     return (
//         <div className="MultiStepForm">

//         </div>
  
//     )
// }

// export default MultiStepForm;