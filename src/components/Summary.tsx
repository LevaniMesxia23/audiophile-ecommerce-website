import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

function Summary() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Summary must be used within a MyContext.Provider");
  }
  const { items, calculateVAT, calculateGrandTotal } = context;
  const [clickButton, setClickButton] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [clickButton]);

  return (
    <div className="w-full py-8 px-[2.06rem] bg-white rounded-lg ">
      <span className="text-[1.125rem] font-bold uppercase">Summary</span>
      <div className="mt-[1.94rem]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between w-full mb-4">
            <div className="flex">
              <img className="w-16 h-16 rounded-lg mb-4" src={item?.image.mobile} alt={item?.name} />
              <div className="flex flex-col items-start justify-center ml-4">
                <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
                <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
              </div>
            </div>
            <span>x{item.quantity}</span>
          </div>
        ))}
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-[0.9375rem] leading-[1.5625rem] opacity-50">TOTAL</span>
            <span className="text-[1.125rem] font-bold">$ {(items.reduce((total, item) => total + item.price * item.quantity, 0)).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.9375rem] leading-[1.5625rem] opacity-50">SHIPPING</span>
            <span className="text-[1.125rem] font-bold">$ 50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.9375rem] leading-[1.5625rem] opacity-50">VAT (20%)</span>
            <span className="text-[1.125rem] font-bold">$ {items.reduce((total, item) => total + parseFloat(calculateVAT(item.price * item.quantity)), 0).toFixed(0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.9375rem] leading-[1.5625rem] opacity-50">GRAND TOTAL</span>
            <span className="text-[1.125rem] font-bold text-[#D87D4A]">$ {calculateGrandTotal(items)}</span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">

      <button onClick={() => setClickButton(clickButton + 1)} type="submit" className="w-full mt-8 mb-[9.25rem] h-12 bg-[#D87D4A] text-white font-bold text-[0.8125rem] leading-[0.0625rem] uppercase">CONTINUE & PAY</button>
      </div>
    </div>
  );
}

export default Summary;
