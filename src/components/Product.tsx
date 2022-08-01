import React from 'react'
import {IProduct} from '../model'

interface ProductProps{
    product: IProduct
}


const Product = ({product}: ProductProps) => {
  return (
    <div className='mx-12 m-8 text-center text-2xl font-montserrat-bold'>
        <div>
        {product.id}
        </div>
        <div>
        {product.title}
        </div>
        <div>
        {product.price}
        </div>
        <div>
        {product.description}
        </div>
        <div>
        {product.category}
        </div>
    </div>
  )
}

export default Product