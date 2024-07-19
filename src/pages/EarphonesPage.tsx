import LastThreeComponents from "../components/LastThreeComponents";
import Data from "../../public/data.json";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function EarphonesPage() {
  const filtered = Data.filter(item => item.category === "earphones");

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Earphones</title>
        </Helmet>
      </HelmetProvider>
      {filtered.length > 0 && (
        <div className="bg-black py-8 md:py-[6.2rem] w-screen flex items-center justify-center uppercase text-[1.75rem] md:text-[2.5rem] md:font-bold leading-[0.125rem] -mt-1 mb-16">
          <p className="text-white">{filtered[0].category}</p>
        </div>
      )}
      {filtered.map((item, index) => (
        <div key={index} className="flex items-center justify-center flex-col mb-[6.5rem]">
          <picture className="flex justify-center items-center mt-6 mb-8">
            <source
              width="540px"
              height="560px"
              media="(min-width:1280px)"
              srcSet={item.categoryImage.desktop} />
            <source
              width="689px"
              media="(min-width:768px)"
              srcSet={item.categoryImage.tablet} />
            <img
              width="327px"
              height="352px"
              src={item.categoryImage.mobile}
              alt={item.name}/>
          </picture>
          {item.new && (
            <span className="text-[#D87D4A] md:tracking-[10px]">NEW PRODUCT</span>
          )}
          <span className="font-bold text-[1.75rem] md:text-[2.5rem] w-[20.4375rem] px-2 text-center my-6 md:tracking:[1.429px]">
            {item.name}
          </span>
          <div className='min-w-[20.4375rem] md:min-w-[35.75rem] md:max-w-[60rem] px-[5rem] flex flex-col justify-center'>
            <span className="text-[0.9375rem] text-black/50 text-center">
              {item.description}
            </span>
          </div>
          <Link to={`/current/${item.slug}`}>
            <button className="w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem] mt-7 hover:bg-[#FBAF85]">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      ))}
      <LastThreeComponents />
    </div>
  );
}

export default EarphonesPage;
