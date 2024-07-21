import { useNavigate } from "react-router-dom";
import { FieldError, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../loginSchema";
import { InputMask } from '@react-input/mask';
import { useEffect, useState } from "react";
import Shape from "../../public/Shape.svg";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MyContext } from "../App";
import Thanks from "../components/Thanks";

function Checkout() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Checkout must be used within a MyContext.Provider");
  }
  const { showThanks, setShowThanks } = context;
  const [showCash, setShowCash] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      showCash: showCash
    }
  });

  useEffect(() => {
    reset({
      showCash: showCash,
    });
  }, [showCash, reset]);

  const onSubmit = async (data: unknown) => {
    console.log(data);
    setShowThanks(true);
  };

  const getInputClassName = (error: FieldError | undefined) => error ? "border-[#CD2C2C] border-[2px]" : "border-[#CFCFCF]";
  const getErrorText = (error: FieldError | undefined) => error ? "text-[#CD2C2C]" : "text-black";

  return (
    <>
    <div className=" relative ">
      {showThanks && <Thanks />}
      <form onSubmit={handleSubmit(onSubmit)} className='px-6 pt-4 bg-[#FAFAFA] xl:py-[4.94rem] xl:pl-[10.31rem] xl:flex xl:items-start xl:gap-[1.88rem]'>
      <div>
      <span className='text-[0.9375rem] opacity-50 leading-[1.5625rem] cursor-pointer hover:text-[#D87D4A]' onClick={() => navigate(-1)}>Go Back</span>
      <div className=" bg-white rounded-[0.5rem] mt-6 mb-8 pb-[1.94rem]">

      <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[1.75rem] tracking-[0.0625rem] font-bold mb-8">CHECKOUT</span>
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">Billing details</span>

        <div className=" flex flex-col gap-4 w-full">
          <div className=" md:w-full md:flex md:gap-4">
            <div className="gap-[0.56rem] flex flex-col md:w-full">
              <span className={`${getErrorText(errors.name)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Name</span>
              <input {...register("name")} className={`border-[0.0625rem] ${getInputClassName(errors.name)} w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="Alexei Ward" type="text" />
              {errors.name && <p className="text-[#CD2C2C]">{errors.name.message}</p>}
            </div>

            <div className=" gap-[0.56rem] flex flex-col md:w-full">
              <span className={`${getErrorText(errors.email)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Email Address</span>
              <input {...register("email")} className={`${getInputClassName(errors.email)} border-[0.0625rem]  w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="alexei@mail.com" type="text" />
              {errors.email && <p className="text-[#CD2C2C]">{errors.email.message}</p>}
            </div>
          </div>

        <div className=" gap-[0.56rem] flex flex-col md:w-[50%]">
          <span className={` ${getErrorText(errors.phoneNumber)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Phone Number</span>
          <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <InputMask
                    {...field}
                    mask="+1 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    className={`${getInputClassName(errors.phoneNumber)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`}
                    placeholder="+1 202-555-0136"
                  />
                )}
              />
          {errors.phoneNumber && <p className="text-[#CD2C2C]">{errors.phoneNumber.message}</p>}
        </div>

        </div>
      </div>

      <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">shipping info</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className=" gap-[0.56rem] flex flex-col">
          <span className={` ${getErrorText(errors.address)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Your Address</span>
          <input {...register("address")} className={` ${getInputClassName(errors.address)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="1137 Williams Avenue" type="text" />
          {errors.address && <p className="text-[#CD2C2C]">{errors.address.message}</p>}
        </div>
      <div className=" md:w-full md:flex md:gap-4">
        <div className=" gap-[0.56rem] flex flex-col md:w-full">
          <span className={` ${getErrorText(errors.zipCode)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>ZIP Code</span>
          <input {...register("zipCode")} className={` ${getInputClassName(errors.zipCode)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="10001" type="text" />
          {errors.zipCode && <p className="text-[#CD2C2C]">{errors.zipCode.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col md:w-full">
          <span className={` ${getErrorText(errors.city)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>City</span>
          <input {...register("city")} className={` ${getInputClassName(errors.city)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="New York" type="text" />
          {errors.city && <p className="text-[#CD2C2C]">{errors.city.message}</p>}
        </div>
      </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={`${getErrorText(errors.country)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Country</span>
          <input {...register("country")} className={` ${getInputClassName(errors.country)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="United States" type="text" />
          {errors.country && <p className="text-[#CD2C2C]">{errors.country.message}</p>}
        </div>
        </div>

      </div>
        <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">payment details</span>

          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Payment Method</span>
        <div className=" flex flex-col gap-4 w-full md:items-end">
        <div className=" gap-[0.56rem] flex flex-col md:w-[50%] cursor-pointer">
          <div onClick={() => setShowCash(false)} className=" border-[0.0625rem] hover:border-[#D87D4A] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
            {!showCash && <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>}
            </div>
              <span>e-Money</span>
          </div>
        </div>

        <div className=" gap-[0.56rem] flex flex-col md:w-[50%] cursor-pointer">
          <div onClick={() => setShowCash(true)} className=" border-[0.0625rem] hover:border-[#D87D4A] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
              {showCash && <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>}
            </div>
              <span>Cash on Delivery</span>
          </div>
        </div>
        </div>

        {!showCash &&
         <div className=" w-full md:w-full md:flex md:gap-4 xl:w-[614.46px]">
          <div className=" gap-[0.56rem] flex flex-col mt-8 md:w-[50%]">
          <span className={` ${getErrorText(errors.emoneyNum)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>e-Money Number</span>
          <input {...register("emoneyNum")} className={` ${getInputClassName(errors.emoneyNum)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="238521993" type="text" />
          {errors.emoneyNum && <p className="text-[#CD2C2C]">{errors.emoneyNum.message}</p>}
        </div>
        <div className=" gap-[0.56rem] flex flex-col mt-8 md:w-[50%]">
          <span className={` ${getErrorText(errors.emoneyPin)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>e-Money PIN</span>
          <input {...register("emoneyPin")} className={` ${getInputClassName(errors.emoneyPin)} border-[0.0625rem] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="6891" type="text" />
          {errors.emoneyPin && <p className="text-[#CD2C2C]">{errors.emoneyPin.message}</p>}
        </div>
        </div>}
        {showCash && <div className=" flex gap-8 items-center mt-[1.88rem]">
          <img src={Shape} alt="" />
        <span className=" text-[0.9375rem] leading-[1.5625rem] text-black/50">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</span>
          </div>}
          </div>
         </div>
          </div>
          <div className=" w-full flex items-center justify-center xl:mt-12">
           <Summary />
          </div>
        </form> 
        </div>
    <Footer />
    </>
  )
}

export default Checkout