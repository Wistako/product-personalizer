import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    console.log(props.className);
    return (<button className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;