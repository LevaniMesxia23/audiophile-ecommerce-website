import React from 'react'
import data from "../../public/data.json"
import { useLocation } from 'react-router-dom'

function CurrentProduct() {
  const location = useLocation()
  const singleProduct = data.find((item) => item.slug == location.pathname.slice(9))
  console.log(singleProduct?.image.desktop)
  return (
    <>
      <div>
      <div>
        <p>{singleProduct?.name}</p>
      <picture>
          <img
            width="540px"
            height="560px"

            srcSet={singleProduct?.image.desktop}
          />
          <img
            width="281px"
            height=" 480px"
            srcSet={singleProduct?.image.tablet}
          />

          <img
            width=" 327px"
            height="327px"
            src={singleProduct?.image.mobile}
            alt="product"
          />
        </picture>

        <div>
          {singleProduct?.new ? (
            <h3>NEW PRODUCT</h3>
          ) : null}
          <h2>{singleProduct?.name}</h2>
          <p>{singleProduct?.description}</p>
          <h3>0</h3>
        </div>
      </div>
      <div>
        <div>
          <h2>FEATURES</h2>
          <p>{singleProduct?.features}</p>
        </div>

        <div>
          <h2>IN THE BOX</h2>
        </div>
      </div>
      </div>
    </>

  )
}

export default CurrentProduct