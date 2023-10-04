import classNames from "classnames";
import styles from './styles.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../contexts/Theme.jsx";

export const Button = ({text, onClick, isActive, disabled, small}) => {
    const theme = useContext(ThemeContext);
    console.log('button', theme);
    return <button
        onClick={onClick}
        className={classNames(styles.root, styles[theme], {
            [styles.active]: isActive,
            [styles.disabled]: disabled,
            [styles.sm]: small,
        })}
    >{text}</button>
}