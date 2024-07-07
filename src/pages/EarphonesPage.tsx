import LastThreeComponents from "../components/LastThreeComponents";
import Data from "../../public/data.json";
import { Link } from "react-router-dom";

function EarphonesPage() {
  const FirstId = Data[0];
  return (
    <div>
      {FirstId && (
        <div className=" flex items-center justify-center flex-col mb-[6.5rem]">
          <div className=" bg-black py-8 w-screen flex items-center justify-center uppercase text-[1.75rem] leadin-[0.125rem] -mt-1 mb-16">
            <p className=" text-white">{FirstId.category}</p>
          </div>
          <img
            src={FirstId.image.mobile}
            alt={FirstId.name}
            className=" max-w-[20.4375rem] rounded-xl mb-8"
          />
          {FirstId.new === true ? (
            <span className=" text-[#D87D4A]">NEW PRODUCT</span>
          ) : null}
          <span className=" font-bold text-[1.75rem] w-[20.4375rem] px-2 text-center my-6">
            {FirstId.name}
          </span>
          <span className=" text-[0.9375rem] text-black/50 max-w-[20.4375rem] text-center">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </span>
          <Link to={"/current/yx1-earphones"}><button className="w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-7 ">
            SEE PRODUCT
          </button></Link>
        </div>
      )}
      <LastThreeComponents />
    </div>
  );
}

export default EarphonesPage;
