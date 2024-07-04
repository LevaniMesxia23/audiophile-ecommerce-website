import data from "../../public/data.json"
import { useLocation } from 'react-router-dom'
import AlsoLike from "./AlsoLike"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function CurrentProduct() {
  const location = useLocation()
  const singleProduct = data.find((item) => item.slug == location.pathname.slice(9))
  const formatedPrice = singleProduct?.price.toLocaleString()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=' px-6 pt-4'>
      <div>
        <span className=' text-[0.9375rem] opacity-50 leanding-[1.5625rem]' onClick={() => navigate(-1)}>Go Back</span>
        <picture className=' flex justify-center items-center mt-6 mb-8'>
          <source
            width="540px"
            height="560px"
            media="(min-width:1440px)"
            srcSet={singleProduct?.image.desktop}
          />
          <source
            width="281px"
            media="(min-width:768px)"
            srcSet={singleProduct?.image.tablet}
          />

          <img
            width="100%"
            height="327px"
            src={singleProduct?.image.mobile}
            alt="product"
          />
        </picture>
        <div>
          {singleProduct?.new ? (
            <h3 className=' text-[#D87D4A] text-[0.875rem] tracking-[0.625rem]'>NEW PRODUCT</h3>
          ) : null}
          <h2 className=' text-[1.75rem] mt-6 font-bold tracking-[0.250rem] uppercase '>{singleProduct?.name}</h2>
          <p className=' text-[0.9375rem] landing-[1.5625rem] my-6 text-black/50'>{singleProduct?.description}</p>
          <p className=' mb-[1.94rem] tracking-[0.08038rem] font-bold uppercase text-[1.125rem]'>$ {formatedPrice}</p>
        </div>
      </div>

      <div className=' flex items-center w-full justify-center gap-4'>
        <div className=' py-[0.94rem] px-[0.97rem] min-w-[7.5rem] bg-[#F1F1F1] flex items-center justify-center gap-5 h-12'>
          <span className=' text-black/25 cursor-pointer'>-</span>
          <span>{1}</span>
          <span className=' text-black/25 cursor-pointer'>+</span>
        </div>
        <button className="w-full min-w-[10rem] h-[3rem] bg-[#D87D4A] text-white text-[0.8125rem]">ADD TO CART</button>
      </div>

      <div>
        <div>
          <h2 className=' mt-[5.5rem] mb-6 text-[1.5rem] font-bold leading-[2.25rem] tracking-[0.05356rem]'>FEATURES</h2>
          <p className=' text-[ 0.9375rem] leading-[1.5625rem] text-black/50 whitespace-pre-line mb-[5.5rem]'>{singleProduct?.features}</p>
        </div>

        <div  className=' mb-[5rem]'> 
          <h2 className=' text-[1.5rem] leanding-[2.25rem] font-bold tracking-[0.05356rem] mb-6'>IN THE BOX</h2>
          <div>
            {singleProduct?.includes.map((item, index) => (
              <div key={index} className=' flex gap-[1.31rem]'>
                <span className=' text-[#D87D4A] text-[0.9375rem] font-bold leading-[1.5625rem]'>{item.quantity}x</span>
                <span className='leading-[1.5625rem] text-[0.9375rem] text-black/50'>{item.item}</span>
              </div>
            ))}
            
          </div>
        </div>
        <div>
          
        </div>

        <div className=" flex items-center flex-col justify-center">
        <picture>
          <source
            width="445px"
            height="280px"
            media="(min-width:1440px)"
            srcSet={singleProduct?.gallery.first.desktop}
          />
          <source
            width="277px"
            height="174px"
            media="(min-width:768px)"
            srcSet={singleProduct?.gallery.first.tablet}
          />

          <img
            className=' rounded-lg mb-5'
            width="327px"
            height="174px"
            src={singleProduct?.gallery.first.mobile}
            alt=""
          />
        </picture>
        <picture>
          <source
            width="445px"
            height="280px"
            media="(min-width:1440px)"
            srcSet={singleProduct?.gallery.second.desktop}
          />
          <source
            width="277px"
            height="174px"
            media="(min-width:768px)"
            srcSet={singleProduct?.gallery.second.tablet}
          />

          <img
            className=' rounded-lg mb-5'
            width=" 327px"
            height="174px"
            src={singleProduct?.gallery.second.mobile}
            alt="product"
          />
        </picture>

      <picture>
        <source
          width="635px"
          height="592px"
          media="(min-width:1440px)"
          srcSet={singleProduct?.gallery.third.desktop}
          />

        <source
          width="395px"
          height="368px"
          media="(min-width:768px)"
          srcSet={singleProduct?.gallery.third.tablet}
          />

        <img
          className=' rounded-lg'
          width="327px"
          height="368px"
          src={singleProduct?.gallery.third.mobile}
          alt=""
          />
      </picture>
      </div>
      </div>
    </div>
      <AlsoLike />
    </>

  )
}

export default CurrentProduct