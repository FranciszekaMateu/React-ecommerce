import React from 'react'
import ProductsCounter from '../productCounter/productCounter';
import './itemDetail.css';
import RelationProducts from '../relationProducts/RelationProducts';
const itemDetail = ({item}) =>
{
    return(
      <div>  
        <div className='itemDetail'>
            <img className='productPhoto' src={item.link_foto}></img>
            <div>
                <h2>{item.nombre}</h2>
                <h2>Precio:  <strong>{item.precio}US$</strong></h2>
                ProductID: <h4>{item.id}</h4>
            </div> 
            <ProductsCounter item={item}/>
       </div>
       <RelationProducts key={item.id} category={item.categoria} />
    </div>  
    )
}
export default itemDetail