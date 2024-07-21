import HeadphonesImage from "../../public/assets/cart/image-removebg-preview(41).png";
import EarphonesImage from "../../public/assets/cart/image-removebg-preview(42).png";
import SpeakersImage from "../../public/assets/cart/image-removebg-preview(38).png";
import ArrowRight from "../../public/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { MyContext } from "../App";

function CategoryBoxes({ animation }: { animation: boolean }) {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("CategoryBoxes must be used within a MyContext.Provider");
  }
  const { show, setShow } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <div className={`w-full ${show && animation ? 'animate-slideRight' : ''}`}>
      <div className="bg-white pb-10 flex flex-col md:flex-row md:justify-center md:gap-[0.62rem]">
        {[{
          name: "HEADPHONES",
          link: "/headphones",
          image: HeadphonesImage,
          imgStyle: "left-[38%] md:left-[32%] xl:left-[38%]"
        }, {
          name: "SPEAKERS",
          link: "/speakers",
          image: SpeakersImage,
          imgStyle: "left-[37%] md:left-[30%] xl:left-[38%]"
        }, {
          name: "EARPHONES",
          link: "/earphones",
          image: EarphonesImage,
          imgStyle: "left-[35%] md:left-[25%] xl:left-[34%]"
        }].map(({ name, link, image, imgStyle }, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="w-[23.4375rem] md:w-[13.9375rem] xl:w-[21.875rem] mt-20 relative flex justify-center">
              <div className="w-full bg-[#F1F1F1] rounded-[0.5rem] max-w-[20.4375rem]">
                <div className="flex items-center justify-center flex-col gap-[1.06rem]">
                  <span className="mt-[5.5rem]">{name}</span>
                  <div className="flex items-center gap-[0.83rem] mb-[1.57rem]">
                    <Link to={link} onClick={handleClick}>
                      <span className="text-black opacity-[0.5] cursor-pointer">SHOP</span>
                    </Link>
                    <img src={ArrowRight} alt="" className="w-[0.3125rem] h-[0.625rem]" />
                  </div>
                </div>
              </div>
              <img src={image} alt={name} className={`absolute -top-[53px] ${imgStyle}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBoxes;
