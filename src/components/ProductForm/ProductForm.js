import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor,addToCart}) => {

  
  return (
    <form>
      <OptionSize sizes={sizes} currentSize={currentSize}  setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />
          <Button 
            className={styles.button} 
            action={ (e) => {
              e.preventDefault();
              addToCart();
            }}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  );
};

ProductForm.propTypes = {
  sizes: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    additionalPrice: propTypes.number
  })).isRequired,
  currentSize: propTypes.shape({
    name:propTypes.string,
    additionalPrice: propTypes.number,
  }).isRequired,
  setCurrentSize: propTypes.func.isRequired,
  colors: propTypes.arrayOf(propTypes.string).isRequired,
  currentColor: propTypes.string.isRequired,
  setCurrentColor: propTypes.func.isRequired,
  addToCart: propTypes.func.isRequired,

};

export default ProductForm;