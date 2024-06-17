import ZX9Image from "../../public/assets/product-zx9-speaker/mobile/image-removebg-preview(38).png"
import EarphonesImage from "../../public/assets/home/mobile/image-earphones-yx1.jpg"

function SeeProducts() {
  return (
    <div className=" flex justify-center items-center mt-[7.5rem] flex-col gap-[2rem]">
      <div className=" w-full max-w-[20.4375rem]  bg-[#D87D4A] rounded-[0.5rem] flex justify-center items-center flex-col pb-[3.44rem] ">
        <div className=" border-[1px] rounded-[20rem] h-[20rem] border-white/50 w-[20rem] flex items-center justify-center">
        <div className=" border-[1px] rounded-[17.4375rem] h-[17.4375rem] border-white/50 w-[17.4375rem] flex items-center justify-center">
          <img src={ZX9Image} alt="" />
        </div>
        </div>
          <h1 className=" text-center mt-8 font-bold text-[2.25rem] text-white leading-[2.5rem] tracking-[0.08038rem]">ZX9 SPEAKER</h1>
          <span className=" text-center mt-[1.5rem] text-white opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
          <button className=" bg-black text-white py-[0.94rem] px-[1.9rem] mt-6">See Product</button>
      </div>

      <div className=" bg-speaker-image bg-[center] bg-no-repeat h-[20rem] flex flex-col justify-center items-start rounded-[0.5rem] text-[1.75rem] gap-[2rem] min-w-[20.4375rem] pl-6">
    <span className=" font-bold">ZX7 SPEAKER</span>
    <button className=" w-[10rem] h-[3rem] border-black border-[1px] text-[0.8125rem] font-bold uppercase leading-[0.0625rem]">See Product</button>
      </div>
      
      <div>
        <div className=" mb-8">
        <img src={EarphonesImage} className=" max-w-[20.4375rem] rounded-[0.5rem]" alt="" />
        </div>

        <div className=" bg-[#F1F1F1] flex flex-col justify-center items-start rounded-[0.5rem] text-[1.75rem] gap-[2rem] min-w-[20.4375rem] pl-6 py-[2.56rem] ">
          <span className=" font-bold ">YX1 EARPHONES</span>
          <button className=" w-[10rem] h-[3rem] border-black border-[1px] text-[0.8125rem] font-bold uppercase leading-[0.0625rem]">See Product</button>
      </div>
      </div>
    </div>
  )
}

export default SeeProducts


