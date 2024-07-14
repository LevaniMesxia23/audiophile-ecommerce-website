import { useContext } from "react";
import { MyContext } from "../App";
function Thanks() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Summary must be used within a MyContext.Provider");
  }
  const { items, calculateGrandTotal } = context;
  return (
    <div className=" px-6 w-full fixed top-[18rem]">
      <div className=" flex flex-col p-8 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
        <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4"/>
      </svg>
      <span>THANK YOU
      FOR YOUR ORDER</span>
      <span>You will receive an email confirmation shortly.</span>
      </div>

      <div>
        <div className="px-6 ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-between w-full bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg p-6">
            <div>
            <div className="flex justify-between">
              <img className="w-[3.125rem] h-[3.125rem] rounded-lg mb-4" src={item?.image.mobile} alt={item?.name} />
              <div className="flex flex-col justify-start ml-4">
                <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
                <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
              </div>
            <span className=" ml-6">x{item.quantity}</span>
            </div>
          <div className=" flex flex-col items-center gap-[0.75rem]">
        <div className=" w-full bg-black/50 h-[1px]"></div>
          <span className=" text-black/50">and {items.length - 1} other item(s)</span>
        </div>
            </div>
          </div>
        ))}
        <div className=" w-full bg-black rounded-br-lg rounded-bl-lg h-100px px-6 py-[0.94rem] flex flex-col gap-2">
          <span className=" text-white/50">GRAND TOTAL</span>
          <span className=" text-white">$ {calculateGrandTotal(items)}</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Thanks