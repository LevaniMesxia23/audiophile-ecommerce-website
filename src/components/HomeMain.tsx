import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

function HomeMain() {
  const context = useContext(MyContext)
  if(!context){
    throw new Error("HomeMain must be used within a MyContext.Provider")
  }
  const { isDesktop } = context
  return (
    <>
      <div className={`${isDesktop? "bg-home-header-desktop" : "bg-home-header-mobile"} bg-[center] bg-100% bg-no-repeat h-[44rem] homeImage flex justify-center items-center flex-col px-8 mb-8 xl:justify-start xl:flex-row xl:pl-[10.31rem]`}>
          <div className=" flex items-center flex-col px-6 justify-center text-center -mb-[8rem] xl:items-start xl:text-start">
          <span className=" font-normal text-[0.875] tracking-[0.625rem] text-white opacity-[0.4964] mb-4">NEW PRODUCT</span>
          <h1 className=" text-[2.25rem] font-semibold tracking-[0.08038rem] leading-[2.5rem] text-white w-[20.5rem] uppercase mb-[1.5rem]">XX99 Mark II HeadphoneS</h1>
          <span className=" text-white opacity-75 w-[20.5rem] font-[0.975rem] leading-[1.5625rem]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</span>
          <Link to={"/current/xx99-mark-one-headphones"}><button className="w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-7 hover:bg-[#FBAF85]">SEE PRODUCT</button></Link>
      </div>
      </div>
    </>
  );
}

export default HomeMain;
