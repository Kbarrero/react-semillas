import * as Yup from "yup";

export const UserDetailsSchema = Yup.object().shape({
    firstName: Yup.string()
      //.min(4, "Full name must be 4 character at least")
      .required("Full name is required"),
    lastName: Yup.string()
      //.min(4, "Full name must be 4 character at least")
      .required("Full name is required"),
    email: Yup.string()
      //.email("Enter a valid email")
      //.required("Email is required"),
    
  });