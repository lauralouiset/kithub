import React from 'react';
import Product from './Product';

const ProductList = (props) => {
    return (
        <ul className="product-list">
            {props.products.map((product, i) => {
                return (
                <li>
                    <Product 
                        brand={product.brand}
                            description={product.description}
                            id={product.id}
                            image_link={product.image_link}
                            name={product.name}
                            price={product.price}
                    />
                </li>
                )
            })}
        </ul>
    )
}

export default ProductList;