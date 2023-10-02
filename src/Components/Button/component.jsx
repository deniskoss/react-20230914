import classNames from "classnames";
import styles from './styles.module.css';

export const Button = ({text, onClick, isActive, disabled, small}) => {
    return <button
        onClick={onClick}
        className={classNames(styles.root, {
            [styles.active]: isActive,
            [styles.disabled]: disabled,
            [styles.sm]: small,
        })}
    >{text}</button>
}