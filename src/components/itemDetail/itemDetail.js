import React from 'react'
import './itemDetail.css';
const itemDetail = ({product}) =>
{
    console.log(product)
    return(
        <div>
            <img className='productPhoto' src={product.img}></img>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
        </div>
    )
}
export default itemDetail