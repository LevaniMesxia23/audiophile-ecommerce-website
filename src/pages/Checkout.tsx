import { useNavigate } from "react-router-dom"

function Checkout() {
  const navigate = useNavigate()
  return (
    <div className='px-6 pt-4 bg-[#FAFAFA]'>
      <span className='text-[0.9375rem] opacity-50 leading-[1.5625rem]' onClick={() => navigate(-1)}>Go Back</span>
      <div className=" bg-white rounded-[0.5rem] mt-6">

      <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[1.75rem] tracking-[0.0625rem] font-bold mb-8">CHECKOUT</span>
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">Billing details</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Name</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="Alexei Ward" type="text" />
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Email Address</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="alexei@mail.com" type="text" />
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Phone Number</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="+1 202-555-0136" type="number" />
        </div>

        </div>

      </div>

      <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">shipping info</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Your Address</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="1137 Williams Avenue" type="text" />
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">ZIP Code</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="10001" type="text" />
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">City</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="New York" type="text" />
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Country</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="United States" type="text" />
        </div>

        </div>

      </div>
      </div>

      
    </div>
  )
}

export default Checkout