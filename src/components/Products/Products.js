import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={shortid()} {...product} />)}
    </section>
    // ...product
    // 
    // To to samo co: 
    // 
    // id={product.id}
    // name={product.name}
    // title={products[0].title}
    // colors={products[0].colors}
    // sizes={products[0].sizes}
    // basePrice={products[0].basePrice} 
  );
};

export default Products;