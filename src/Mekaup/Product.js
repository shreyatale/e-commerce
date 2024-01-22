import React from 'react'
import Companyname from './Companyname'
import Product1 from './Product1'
import Foot from './Foot'


const Product = ({search}) => {
   return (
    <div>
    <Product1 search={search}/>
    <div>
   <Companyname/>
   </div>
   <div><Foot/></div>
    </div>
  )
}

export default Product