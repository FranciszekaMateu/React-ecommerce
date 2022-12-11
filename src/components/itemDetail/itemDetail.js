import React from 'react'
const itemDetail = ({product}) =>
{
    return(
        <div>
            <img src={product.img}></img>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
        </div>
    )
}
export default itemDetail