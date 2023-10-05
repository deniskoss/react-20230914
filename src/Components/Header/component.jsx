import styles from './styles.module.css';
import { Button } from "../Button/component.jsx";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.jsx";

export const Header = ({className}) => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Fast and tasty</h1>
            <Button
                text='Переключить тему'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
        </div>
    )
}