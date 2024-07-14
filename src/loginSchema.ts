import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const loginSchema = yup.object().shape({
  name: yup
    .string().required("Name is required")
    .min(5, "Name must be 5 or more characters")
    .test(
      "includes space",
      "Please enter full name",
      (a) => a ? a.includes(" ") && Boolean(a.trim().split(" ")[1]) : false
    ), 
  email: yup
    .string().required("Email address is required")
    .matches(emailRegex, 'Invalid email address'),
  phoneNumber: yup
    .string().required("Phone Number is required")
    .min(18, "Number must be 15 characters"),
  address: yup
    .string().required("Address is required"),
  zipCode: yup
    .string().required("ZipCode is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "ZipCode must be 5 numbers")
    .max(5, "ZipCode must be 5 numbers"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  showCash: yup.boolean(),
  emoneyNum: yup.string().when("showCash", {
  is: false,
  then: () => yup.string().required("emoneyNum is required")
  .min(9, "emoneyNum must be 9 numbers")
  .max(9, "emoneyNum must be 9 numbers"),
  otherwise: () => yup.string().optional()
}),
  emoneyPin: yup.string().when("showCash", {
    is: false,
    then: () => yup.string().required("emoneyPin is required")
    .min(4, "emoneyPin must be 4 numbers")
    .max(4, "emoneyPin must be 4 numbers"),
    otherwise: () => yup.string().optional()
  }),
  
});

export default loginSchema;
