import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function CartBox() {
  const context = useContext(MyContext);

  
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { items, localCount, setLocalCount,showCartBox, setShowCartBox, setItems } = context;
  
  useEffect(() => {
    setShowCartBox(true);
  }, []);
  
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString();
  };

  const increment = (item: Product) => {
    setLocalCount(localCount + 1);
    item.quantity += 1;
  };

  const decrement = (item: Product) => {
    if (localCount > 1) {
      setLocalCount(localCount - 1);
      item.quantity -= 1;
    }
  };

  const handleButtonClick = () => {
    setShowCartBox(false);
  }

  const handleRemove = () => {
    setItems(() => {
      localStorage.removeItem("count");
      return [];
    });
    setLocalCount(0);
  }

  return (
    <div className={`absolute w-[20.4375rem] md:w-[23.5625rem] bg-white flex flex-col items-center justify-center right-[1.5rem] top-[109px] px-7 py-8 z-50 rounded-[0.5rem] ${showCartBox ? 'animate-slideIn' : 'animate-slideOut'}`}>
      <div className="flex justify-between items-center w-full mb-[1.94rem]">
        <span className="text-[1.125rem] font-bold tracking-[0.08038rem] uppercase">cart ({items.length})</span>
        <span className="leading-[1.5625rem] underline opacity-50 cursor-pointer" onClick={handleRemove}>Remove all</span>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between w-full mb-4">
          <img className="w-16 h-16 rounded-lg" src={item?.image.mobile} alt={item?.name} />
          <div className="flex flex-col items-start justify-center ml-4">
            <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
            <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
          </div>
          <div className='py-[0.94rem] px-[0.97rem] w-[6rem] ml-5 bg-[#F1F1F1] flex items-center justify-center gap-5 h-8'>
            <span className='text-black/25 cursor-pointer' onClick={() => decrement(item)}>-</span>
            <span>{item.quantity}</span>
            <span className='text-black/25 cursor-pointer' onClick={() => increment(item)}>+</span>
          </div>
        </div>
      ))}

      <div className="mt-8 flex justify-between w-full">
        <span className="leading-[1.5625rem] text-[0.9375rem] opacity-50">TOTAL</span>
        <span className="text-[1.125rem] font-bold">$ {calculateTotal()}</span>
      </div>
      {items.length > 0 ? (<Link to={"/Checkout"}><button onClick={handleButtonClick} className="w-full min-w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-6">CHECKOUT</button></Link>) : null}
    </div>
  );
}

export default CartBox;
