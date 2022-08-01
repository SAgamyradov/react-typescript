import React from 'react'
import { products } from './components/data/products'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Product product={products[0]}/>
      <Product product={products[1]}/>

    </div>
  )
}

export default App