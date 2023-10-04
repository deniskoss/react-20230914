import styles from './styles.module.css';
import {Button} from "../Button/component.jsx";

export const Header = ({ theme, toggleTheme }) => {
    return (
        <div className={styles.root}>
            <h1>Fast and tasty</h1>
            <Button
                text='Переключить тему'
                onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            />
        </div>
    )
}