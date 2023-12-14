import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {
  const {name, title, basePrice, colors, sizes} = props;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
                <li key={shortid()}><Button className={size.name === currentSize ? styles.active : ''}>{size.name}</Button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => {
                const colorStyle = color[0].toUpperCase() + color.slice(1);
              return <li key={shortid()}><Button className={styles[`color${colorStyle}`] + `${currentColor === color ? ' , ' + styles.active : ''}` } /></li>}
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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