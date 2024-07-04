import { useLocation } from "react-router-dom";
import data from "../../public/data.json"

function CartBox() {
  const location = useLocation();
  const singleProduct = data.find((item) => item.slug === location.pathname.slice(9));
  const formatedPrice = singleProduct?.price.toLocaleString()
  
  return (
    <>
    <div className='absolute w-[20.4375rem] bg-white flex flex-col items-center justify-center right-[1.5rem] top-[109px] px-7 py-8 z-50 rounded-[0.5rem]'>
      <div className=" flex justify-between items-center w-full mb-[1.94rem]">
        <span className=" text-[1.125rem] font-bold tracking-[0.08038rem] uppercase">cart (3)</span>
        <span className=" leanding-[1.5625rem] underline opacity-50">Remove all</span>
      </div>
      <div className=" flex items-center justify-center">
      <img className=" w-16 h-16 rounded-lg" src={singleProduct?.image.mobile} alt="" />
      <div className=" flex flex-col items-start justify-center ml-4">
        <span className=" font-bold leanding-[1.5625rem] text-[0.9375rem]">{singleProduct?.name}</span>
        <span className=" leanding-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {formatedPrice}</span>
      </div>
      <div className=' py-[0.94rem] px-[0.97rem] w-[6rem] ml-5 bg-[#F1F1F1] flex items-center justify-center gap-5 h-8'>
          <span className=' text-black/25 cursor-pointer'>-</span>
          <span>{1}</span>
          <span className=' text-black/25 cursor-pointer'>+</span>
        </div>
      </div>

      <div className=" mt-8 flex justify-between w-full">
        <span className=" leanding-[1.5625rem] text-[0.9375rem] opacity-50">TOTAL</span>
        <span className=" text-[1.125rem] font-bold">$3,923</span>
      </div>
      <button className="w-full min-w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-6">CHECKOUT</button>
    </div>
    </>
    
  )
}

export default CartBox