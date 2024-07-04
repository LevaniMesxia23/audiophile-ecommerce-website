import data from "../../public/data.json";
import { useLocation } from 'react-router-dom';
import LastThreeComponents from "./LastThreeComponents";

function AlsoLike() {
  const location = useLocation();
  const singleProduct = data.find((item) => item.slug === location.pathname.slice(9));

  return (
    <>
    <div className=" flex items-center justify-center flex-col mt-[5rem] mb-[4rem]">
      <h1 className=" uppercase text-6 leanding-[2.25rem] font-bold tracking-[0.05356rem]">you may also like</h1>
      <div>
        {singleProduct?.others.map((item, index) => (
          <div key={index} className=" flex items-center flex-col justify-center">
            <picture className="flex justify-center items-center mt-6 mb-8">
              <source
                width="540px"
                height="560px"
                media="(min-width:1440px)"
                srcSet={item.image.desktop} />
              <source
                width="281px"
                media="(min-width:768px)"
                srcSet={item.image.tablet} />
              <img
                width="327px"
                height="327px"
                src={item.image.mobile}
                alt={item.name}
                className=" rounded-lg" />
            </picture>
            <h2 className="uppercase text-6 leanding-[2.25rem] font-bold tracking-[0.10713rem]">{item.name}</h2>
            <button className="w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-8 mb-[3.5rem]">
              SEE PRODUCT
            </button>
          </div>
        ))}
      </div>
    </div>
    <LastThreeComponents />
    </>
  );
}

export default AlsoLike;
