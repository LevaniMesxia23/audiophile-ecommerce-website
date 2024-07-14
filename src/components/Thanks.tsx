import { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Summary must be used within a MyContext.Provider");
  }
  const { items, calculateGrandTotal, setLocalCount, setItems, setShowThanks } = context;
  const [showOthers, setShowOthers] = useState(false);
  const navigate = useNavigate();

  const handleRemove = () => {
    setItems(() => {
      localStorage.removeItem("count");
      return [];
    });
    setLocalCount(0);
  };

  const handleClick = () => {
    navigate("/");
    handleRemove();
    setShowThanks(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="px-6 absolute top-[4rem] bg-white pb-8 mx-6 rounded-lg z-50">
        <div className="flex flex-col p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
            <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" strokeWidth="4"/>
          </svg>
          <span className="text-[1.5rem] font-bold tracking-[0.05356rem] mt-[1.44rem]">THANK YOU FOR YOUR ORDER</span>
          <span className="leading-[1.5625rem] text-black/50 mt-4">You will receive an email confirmation shortly.</span>
        </div>

        <div>
          <div className="px-6">
            {items.slice(0, 1).map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-between w-full min-w-[300px] bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg py-6">
                <div className="w-full px-6">
                  <div className="flex justify-between">
                    <img className="w-[3.125rem] h-[3.125rem] rounded-lg mb-4" src={item?.image.mobile} alt={item?.name} />
                    <div className="flex flex-col justify-start ml-4">
                      <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
                      <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
                    </div>
                    <span className="ml-6 opacity-50">x{item.quantity}</span>
                  </div>
                  <div className="flex flex-col items-center gap-[0.75rem]">
                    {!showOthers && <div className="w-full bg-black/50 h-[1px] mt-3"></div>}
                    {items.length > 1 && (
                      <span className="text-black/50" onClick={() => setShowOthers(!showOthers)}>
                        {showOthers ? null : `and ${items.length - 1} other item(s)`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {showOthers && items.slice(1).map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-between w-full min-w-[300px] bg-[#F1F1F1] py-6">
                <div className="w-full px-6">
                  <div className="flex justify-between">
                    <img className="w-[3.125rem] h-[3.125rem] rounded-lg mb-4" src={item?.image.mobile} alt={item?.name} />
                    <div className="flex flex-col justify-start ml-4">
                      <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
                      <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
                    </div>
                    <span className="ml-6 opacity-50">x{item.quantity}</span>
                  </div>
                  <div className="flex flex-col items-center gap-[0.75rem]">
                    {showOthers && <div className="w-full bg-black/50 h-[1px] mt-3"></div>}
                    {items.length > 1 && (
                      <span className="text-black/50" onClick={() => setShowOthers(!showOthers)}>
                        {showOthers ? `No other items` : `and ${items.length - 1} other item(s)`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full bg-black rounded-br-lg rounded-bl-lg h-100px px-6 py-[0.94rem] flex flex-col gap-2">
              <span className="text-white/50 leading-[1.5625rem]">GRAND TOTAL</span>
              <span className="text-white font-bold text-[1.125rem]">$ {calculateGrandTotal(items)}</span>
            </div>
            <button className="w-full mt-8 h-12 bg-[#D87D4A] text-white font-bold text-[0.8125rem] leading-[0.0625rem] uppercase" onClick={handleClick}>BACK TO HOME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;