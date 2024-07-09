import * as yup from "yup"
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const loginSchema = yup.object().shape({
  name: yup
  .string().required("Name is required")
  .min(5, "Name must be 5 or more characters")
  .test(
    "includes space",
    "Please enter full name",
    (a) => {
      return a?.includes(" ")
    }
  ), 
  email: yup
  .string().required("Email address is required")
  .matches(emailRegex, 'Invalid email address'),
  phoneNumber: yup
  .string().required("Phone Number is required")
  .min(15, "Number must be 15 characters"),
  address: yup
  .string().required("Address is required"),
  zipCode: yup
  .string().required("ZipCode is required")
  .min(5, "ZipCode must be 5 number")
})

export default loginSchema 