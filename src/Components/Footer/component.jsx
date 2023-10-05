import styles from './styles.module.css';
import classNames from "classnames";

export const Footer = ({className}) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h4>&copy;&copy;&copy;Р</h4>
        </div>
    )
}