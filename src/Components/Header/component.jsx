import styles from './styles.module.css';
import {Button} from "../Button/component.jsx";
import classNames from "classnames";

export const Header = ({theme, toggleTheme, className}) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Fast and tasty</h1>
            <Button
                text='Переключить тему'
                onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            />
        </div>
    )
}