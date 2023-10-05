import styles from './styles.module.css';
import classNames from "classnames";

export const Header = ({className}) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Fast and tasty</h1>
        </div>
    )
}