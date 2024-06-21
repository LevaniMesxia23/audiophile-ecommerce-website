import HeadphonesImage from "../../public/assets/cart/image-removebg-preview(41).png";
import EarphonesImage from "../../public/assets/cart/image-removebg-preview(42).png";
import SpeakersImage from "../../public/assets/cart/image-removebg-preview(38).png";
import ArrowRight from "../../public/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function SuggestItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className=" bg-white pb-10">
      <div className=" flex flex-col justify-center items-center">
        <div className="w-[23.4375rem] mt-20 relative flex justify-center">
          <div className=" w-full bg-[#F1F1F1] rounded-[0.5rem] max-w-[20.4375rem]">
            <div className=" flex items-center justify-center flex-col gap-[1.06rem]">
              <span className=" mt-[5.5rem]">HEADPHONES</span>
              <div className=" flex items-center gap-[0.83rem] mb-[1.57rem]">
                <Link to={"/headphones"}><span className=" text-black opacity-[0.5] cursor-pointer">SHOP</span></Link>
                <img
                  src={ArrowRight}
                  alt=""
                  className=" w-[0.3125rem] h-[0.625rem]"
                />
              </div>
            </div>
          </div>
          <img
            src={HeadphonesImage}
            alt=""
            className=" absolute -top-[53px] left-[38%]"
          />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-[23.4375rem] mt-20 relative flex justify-center">
          <div className=" w-full bg-[#F1F1F1] rounded-[0.5rem] max-w-[20.4375rem]">
            <div className=" flex items-center justify-center flex-col gap-[1.06rem]">
              <span className=" mt-[5.5rem]">SPEAKERS</span>
              <div className=" flex items-center gap-[0.83rem] mb-[1.57rem]">
                <Link to={"/speakers"}><span className=" text-black opacity-[0.5] cursor-pointer">SHOP</span></Link>
                <img
                  src={ArrowRight}
                  alt=""
                  className=" w-[0.3125rem] h-[0.625rem]"
                />
              </div>
            </div>
          </div>
          <img
            src={SpeakersImage}
            alt=""
            className=" absolute -top-[53px] left-[37%]"
          />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-[23.4375rem] mt-20 relative flex justify-center">
          <div className=" w-full bg-[#F1F1F1] rounded-[0.5rem] max-w-[20.4375rem]">
            <div className=" flex items-center justify-center flex-col gap-[1.06rem]">
              <span className=" mt-[5.5rem]">EARPHONES</span>
              <div className=" flex items-center gap-[0.83rem] mb-[1.57rem]">
                <Link to={"/earphones"}><span className=" text-black opacity-[0.5] cursor-pointer">SHOP</span></Link>
                <img
                  src={ArrowRight}
                  alt=""
                  className=" w-[0.3125rem] h-[0.625rem]"
                />
              </div>
            </div>
          </div>
          <img
            src={EarphonesImage}
            alt=""
            className=" absolute -top-[53px] left-[35%]"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default SuggestItems;
