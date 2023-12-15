import styles from './OptionColor.module.scss';
import Button from '../Button/Button';
import shortid from 'shortid';
import propTypes from 'prop-types';

const OptionColor = ({colors, setCurrentColor, currentColor}) => {
  return (
    <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => {
                const colorStyle = color[0].toUpperCase() + color.slice(1);
              return <li key={shortid()}><Button action={() => {setCurrentColor(color)}} className={styles[`color${colorStyle}`] + `${currentColor === color ? ' , ' + styles.active : ''}` } /></li>}
              )}
            </ul>
          </div>
  );
};
OptionColor.propTypes = {
  colors: propTypes.arrayOf(propTypes.string).isRequired,
  currentColor: propTypes.string.isRequired,
  setCurrentColor: propTypes.func.isRequired,
}
export default OptionColor;