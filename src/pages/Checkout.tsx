import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import loginSchema from "../loginSchema"
import InputMask from "react-input-mask"
import { useState } from "react"
import Shape from "../../public/Shape.svg"
function Checkout() {
  const {register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(loginSchema)
  })
  const onSubmit = async (data: unknown) => {
    console.log(data);
  }
  const navigate = useNavigate()
  const [showCash, setShowCash] = useState(true)

  const getInputClassName = (error) => error ? "border-[#CD2C2C] && border-[2px]" : "border-[#CFCFCF]";
  const getErrorText = (error) => error ? "text-[#CD2C2C]" : "text-black";
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='px-6 pt-4 bg-[#FAFAFA]'>
      <span className='text-[0.9375rem] opacity-50 leading-[1.5625rem]' onClick={() => navigate(-1)}>Go Back</span>
      <div className=" bg-white rounded-[0.5rem] mt-6 mb-8 pb-[1.94rem]">

      <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[1.75rem] tracking-[0.0625rem] font-bold mb-8">CHECKOUT</span>
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">Billing details</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className="gap-[0.56rem] flex flex-col">
          <span className={`${getErrorText(errors.name)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Name</span>
          <input {...register("name")} className={`border-[0.0625rem] ${getInputClassName(errors.name)} w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="Alexei Ward" type="text" />
          {errors.name && <p className="text-[#CD2C2C]">{errors.name.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={`${getErrorText(errors.email)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Email Address</span>
          <input {...register("email")} className={`${getInputClassName(errors.email)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="alexei@mail.com" type="text" />
          {errors.email && <p className="text-[#CD2C2C]">{errors.email.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={` ${getErrorText(errors.phoneNumber)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Phone Number</span>
          <InputMask className={` ${getInputClassName(errors.phoneNumber)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`}
            {...register("phoneNumber")}
            id="phoneNumber"
            mask="+1 999-999-9999"
            placeholder="+1 202-555-0136"
            maskChar={""}
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
          <input {...register("address")} className={` ${getInputClassName(errors.address)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="1137 Williams Avenue" type="text" />
          {errors.address && <p className="text-[#CD2C2C]">{errors.address.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={` ${getErrorText(errors.zipCode)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>ZIP Code</span>
          <input {...register("zipCode")} className={` ${getInputClassName(errors.zipCode)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="10001" type="number" />
          {errors.zipCode && <p className="text-[#CD2C2C]">{errors.zipCode.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={` ${getErrorText(errors.city)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>City</span>
          <input {...register("city")} className={` ${getInputClassName(errors.city)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="New York" type="text" />
          {errors.city && <p className="text-[#CD2C2C]">{errors.city.message}</p>}
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className={`${getErrorText(errors.country)} text-[0.75rem] font-bold -tracking-[0.01563rem]`}>Country</span>
          <input {...register("country")} className={` ${getInputClassName(errors.country)} border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]`} placeholder="United States" type="text" />
          {errors.country && <p className="text-[#CD2C2C]">{errors.country.message}</p>}
        </div>
        </div>


      </div>
        <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">payment details</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Payment Method</span>
          <div onClick={() => setShowCash(!showCash)} className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
            {!showCash && <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>}
            </div>
              <span>e-Money</span>
          </div>
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <div onClick={() => setShowCash(!showCash)} className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
              {showCash && <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>}
            </div>
              <span>Cash on Delivery</span>
          </div>
        </div>

        </div>

        {!showCash && <div className=" w-full">

        <div className=" gap-[0.56rem] flex flex-col mt-8">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">e-Money Number</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="238521993" type="text" />
        </div>
        <div className=" gap-[0.56rem] flex flex-col mt-6">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">e-Money PIN</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="6891" type="text" />
        </div>
        </div>}
        {showCash && <div className=" flex gap-8 items-center mt-[1.88rem]">
          <img src={Shape} alt="" />
        <span className=" text-[0.9375rem] leading-[1.5625rem] text-black/50">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</span>
        </div>}
      </div>
      </div>

    <div className=" w-full flex items-center justify-center">

    <button type="submit" className=" w-[17.4375rem] h-12 bg-[#D87D4A] text-white font-bold text-[0.8125rem] leading-[0.0625rem] uppercase">CONTINUE & PAY</button>
    </div>
    </form>
  )
}

export default Checkout