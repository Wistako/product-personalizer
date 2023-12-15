import styles from './Product.module.scss';
import propTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const {name, title, basePrice, colors, sizes} = props;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = () => {
    return basePrice + currentSize.additionalPrice;
  };
  const addToCart = () => {
    console.log('Name: ', title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  }
  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} addToCart={addToCart}/>
      </div>
    </article>
  )
};

Product.propTypes= {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  basePrice: propTypes.number.isRequired,
  colors: propTypes.arrayOf(propTypes.string).isRequired,
  sizes: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    additionalPrice: propTypes.number,
  })).isRequired,

}
export default Product;