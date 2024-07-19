import BoyImage from "../../public/assets/shared/mobile/image-best-gear.jpg"
import { useContext } from "react"
import { MyContext } from "../App"
function Information() {
  const context = useContext(MyContext)
  if(!context){
    throw new Error("information must be used within a MyContext.Provider")
  }
  const {isDesktop} = context

  return (
    <>
  {!isDesktop ?
     <div className=" flex flex-col justify-center items-center mt-[7rem] gap-8 mb-[7.5rem] xl:flex-row">
        <img src={BoyImage} alt="" className="w-[20.4375rem] md:w-[43.0625rem] xl:w-[35rem] xl:h-[35rem] md:h-[20rem] rounded-xl"/>
          <div className=" flex flex-col">
          <span className=" text-[1.75rem] md:text-[2.5rem] w-[20.4375rem] md:w-[40rem] text-center uppercase px-4 font-bold tracking-[0.0625rem]">Bringing you the <span className=" text-[#D87D4A]">best</span> audio gear</span>
          <span className=" text-black/50 leading-[1.5625rem] text-center w-[20.4375rem] md:w-[40rem]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</span>
          </div>
      </div>
  :
      <div className=" flex flex-col justify-center items-center mt-[7rem] gap-8 mb-[7.5rem] xl:flex-row">
          <div className=" xl:flex flex-col">
          <span className=" text-[1.75rem] md:text-[2.5rem] w-[20.4375rem] md:w-[40rem] text-center uppercase px-4 font-bold tracking-[0.0625rem]">Bringing you the <span className=" text-[#D87D4A]">best</span> audio gear</span>
          <span className=" text-black/50 leading-[1.5625rem] text-center w-[20.4375rem] md:w-[40rem]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</span>
          </div>
        <img src={BoyImage} alt="" className="w-[20.4375rem] md:w-[43.0625rem] xl:w-[35rem] xl:h-[35rem] md:h-[20rem] rounded-xl"/>
      </div>}
    </>
  )
}

export default Information