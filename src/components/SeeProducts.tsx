import ZX9ImageMobile from "../../public/assets/product-zx9-speaker/mobile/image-removebg-preview(38).png"
import ZX9ImageDesktop from "../../public/assets/home/desktop/image-speaker-zx9.png"
import EarphonesImage from "../../public/assets/home/mobile/image-earphones-yx1.jpg"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { MyContext } from "../App";

function SeeProducts() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("SeeProducts must be used within a MyContext.Provider");
  }
  const { isDesktop } = context;
  return (
    <div className=" flex justify-center items-center mt-[7.5rem] md:mt-[3rem] flex-col gap-[2rem] px-8 md:px-8">
    <div className={` max-w-[20.4375rem] md:min-w-[43.0625rem] xl:min-w-[65.5rem] bg-[#D87D4A] rounded-[0.5rem] flex justify-center items-center flex-col pb-[3.44rem] xl:flex-row  xl:gap-[8.64rem] xl:py-20 xl:overflow-hidden`}>
        <div className={`${!isDesktop && "border-[1px] rounded-[20rem] h-[20rem] border-white/50 w-[20rem]"}  flex items-center justify-center`}>
        <div className={` ${!isDesktop && "border-[1px] rounded-[17.4375rem] h-[17.4375rem] border-white/50 "} w-[17.4375rem] flex items-center justify-center`}>
          <img src={!isDesktop ? ZX9ImageMobile : ZX9ImageDesktop} className=" xl:-mb-[114px]" alt="" />
        </div>
        </div>
        <div className=" flex flex-col xl:items-start items-center">
          <h1 className=" text-center mt-8 font-bold text-[2.25rem] text-white leading-[2.5rem] tracking-[0.08038rem]">ZX9 SPEAKER</h1>
          <span className=" w-[20rem] xl:text-start text-center mt-[1.5rem] text-white opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
          <Link to={"/current/zx9-speaker"}><button className=" bg-black text-white py-[0.94rem] px-[1.9rem] mt-6 hover:bg-[#4C4C4C]">See Product</button></Link>
        </div>
      </div>

      <div className={`${isDesktop ? "bg-ZX7-ImageDesktop" : "bg-speaker-image"} md:bg-speaker-image-tablet xl:bg-ZX7-ImageDesktop xl:min-w-[65.5rem] bg-[center] bg-no-repeat h-[20rem] flex flex-col justify-center items-start rounded-[0.5rem] text-[1.75rem] gap-[2rem] min-w-[20.4375rem] md:min-w-[43.0625rem] pl-6`}>
        <span className=" font-bold">ZX7 SPEAKER</span>
        <Link to={"/current/zx7-speaker"}><button className=" w-[10rem] h-[3rem] border-black border-[1px] text-[0.8125rem] font-bold uppercase leading-[0.0625rem] hover:bg-black hover:text-white">See Product</button></Link>
      </div>
      
      <div className=" md:flex md:gap-8 md:h-[20rem]">
        <div className=" mb-8 md:mb-0">
        <img src={EarphonesImage} className="md:h-[20rem] max-w-[20.4375rem] rounded-[0.5rem] xl:max-w-[31.7rem]" alt="" />
        </div>

        <div className=" bg-[#F1F1F1] flex flex-col justify-center items-start rounded-[0.5rem] text-[1.75rem] gap-[2rem] min-w-[20.4375rem] pl-6 py-[2.56rem] xl:w-[31.7rem] ">
          <span className=" font-bold ">YX1 EARPHONES</span>
         <Link to={"/current/yx1-earphones"}><button className=" w-[10rem] h-[3rem] border-black border-[1px] text-[0.8125rem] font-bold uppercase leading-[0.0625rem] hover:bg-black hover:text-white">See Product</button></Link>
      </div>
      </div>
    </div>
  )
}

export default SeeProducts


