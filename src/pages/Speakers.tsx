import React from 'react';
import LastThreeComponents from "../components/LastThreeComponents";
import Data from "../../starter-code/data.json";

const Speakers: React.FC = () => {
  const firstId: Product[] = Data.slice(4).reverse() as Product[];
  return (
    <div>
      {firstId.map((item, index) => (
        <div key={index} className="flex items-center justify-center flex-col mb-[6.5rem]">
          {item.id === 5 ? null : <div className="bg-black py-8 w-screen flex items-center justify-center uppercase text-[1.75rem] leading-[0.125rem] -mt-1 mb-16">
            <p className="text-white">{item.category}</p>
          </div>}
          <img
            src={item.image.mobile}
            alt={item.name}
            className="max-w-[20.4375rem] rounded-xl mb-8"
          />
          {item.new && (
            <span className="text-[#D87D4A]">NEW PRODUCT</span>
          )}
          <span className="font-bold text-[1.75rem] w-[20.4375rem] px-2 text-center my-6">
            {item.name}
          </span>
          <span className="text-[0.9375rem] text-black/50 max-w-[20.4375rem] text-center">
            {item.description}
          </span>
          <button className="w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-7">
            SEE PRODUCT
          </button>
        </div>
      ))}
      <LastThreeComponents />
    </div>
  );
}

export default Speakers;
