import ZX9Image from "../../public/assets/product-zx9-speaker/mobile/image-removebg-preview(38).png"
function SeeProducts() {
  return (
    <div className=" flex justify-center items-center mt-[7.5rem]">
      <div className=" w-full max-w-[20rem] bg-[#D87D4A] rounded-[0.5rem] flex justify-center items-center flex-col pb-[3.44rem]">
        <div className=" border-[1px] rounded-[20rem] h-[20rem] border-white/50 w-[20rem] flex items-center justify-center">
        <div className=" border-[1px] rounded-[17.4375rem] h-[17.4375rem] border-white/50 w-[17.4375rem] flex items-center justify-center">
          <img src={ZX9Image} alt="" />
        </div>
        </div>
          <h1 className=" w-min text-center mt-8 font-bold text-[2.25rem] text-white leading-[2.5rem] tracking-[0.08038rem]">ZX9 SPEAKER</h1>
          <span className=" text-center mt-[1.5rem] text-white opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
          <button className=" bg-black text-white py-[0.94rem] px-[1.9rem] mt-6">See Product</button>
      </div>
    </div>
  )
}

export default SeeProducts