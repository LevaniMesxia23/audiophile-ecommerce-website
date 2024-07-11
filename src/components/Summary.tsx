import { useContext } from "react"
import { MyContext } from "../App"

function Summary() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { items,localCount} = context;

  return (
    <div className=" w-full py-8 px-[2.06rem] bg-white rounded-lg">
      <span className=" text-[1.125rem] font-bold uppercase">summary</span>
      <div className=" mt-[1.94rem]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between w-full mb-4">
          <div className=" flex">
          <img className="w-16 h-16 rounded-lg" src={item?.image.mobile} alt={item?.name} />
          <div className="flex flex-col items-start justify-center ml-4">
            <span className="font-bold leading-[1.5625rem] text-[0.9375rem]">{item?.name}</span>
            <span className="leading-[1.5625rem] text-[0.875rem] font-bold opacity-50">$ {item.price.toLocaleString()}</span>
          </div>
          </div>
          <span>x{localCount}</span>
        </div>
      ))}
      </div>
      <button type="submit" className=" w-[17.4375rem] h-12 bg-[#D87D4A] text-white font-bold text-[0.8125rem] leading-[0.0625rem] uppercase">CONTINUE & PAY</button>
    </div>
  )
}

export default Summary