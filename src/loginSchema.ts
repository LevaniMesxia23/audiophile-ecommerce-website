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
      return a && a.includes(" ") && a.trim().split(" ")[1]
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
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(5, "ZipCode must be 5 number")
  .max(5, "ZipCode must be 5 number"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),

  emoneyNum: yup.string().required("Number is required")
  .min(9, "Number must be 9 number")
  .max(9, "Number must be 9 number"),
  emoneyPin: yup.string().required("Number is required")
  .min(4, "Number must be 4 number")
  .max(4, "Number must be 4 number"),
})

export default loginSchema 