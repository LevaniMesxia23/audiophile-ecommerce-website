import { useNavigate } from "react-router-dom"

function Checkout() {
  const navigate = useNavigate()
  return (
    <div className='px-6 pt-4 bg-[#FAFAFA]'>
      <span className='text-[0.9375rem] opacity-50 leading-[1.5625rem]' onClick={() => navigate(-1)}>Go Back</span>
      <div className=" bg-white rounded-[0.5rem] mt-6 mb-8 pb-[1.94rem]">

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
        <div className=" p-6 flex flex-col items-start justify-center">
        <span className=" text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase mb-4">payment details</span>

        <div className=" flex flex-col gap-4 w-full">
        <div className=" gap-[0.56rem] flex flex-col">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">Payment Method</span>
          <div className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
              <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>
            </div>
              <span>e-Money</span>
          </div>
        </div>

        <div className=" gap-[0.56rem] flex flex-col">
          <div className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 flex items-center gap-4">
            <div className=" w-5 h-5 border-[0.0625rem] border-[#CFCFCF] rounded-[50%] flex items-center justify-center">
              <div className="w-[0.625rem] h-[0.625rem] border-none border-[#CFCFCF] rounded-[50%] bg-[#D87D4A]"></div>
            </div>
              <span>Cash on Delivery</span>
          </div>
        </div>

        </div>

        <div className=" w-full">

        <div className=" gap-[0.56rem] flex flex-col mt-8">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">e-Money Number</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="238521993" type="text" />
        </div>
        <div className=" gap-[0.56rem] flex flex-col mt-6">
          <span className=" text-[0.75rem] font-bold -tracking-[0.01563rem]">e-Money PIN</span>
          <input className=" border-[0.0625rem] border-[#CFCFCF] w-full h-[3.5rem] rounded-[0.5rem] pl-6 placeholder:font-bold placeholder:text-[0.875rem] placeholder:-tracking-[0.01563rem]" placeholder="6891" type="text" />
        </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Checkout