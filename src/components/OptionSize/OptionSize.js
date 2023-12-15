import styles from './OptionSize.module.scss';
import Button from '../Button/Button';
import shortid from 'shortid';
import propTypes from 'prop-types';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => 
          <li key={shortid()}><Button action={() => {setCurrentSize(size)}} className={size.name === currentSize.name ? styles.active : ''}>{size.name}</Button></li>)}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    additionalPrice: propTypes.number
  })).isRequired,
  currentSize: propTypes.shape({
    name:propTypes.string,
    additionalPrice: propTypes.number,
  }).isRequired,
  setCurrentSize: propTypes.func.isRequired,
};
export default OptionSize;