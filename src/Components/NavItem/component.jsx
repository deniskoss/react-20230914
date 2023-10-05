import classNames from "classnames";
import styles from "./styles.module.css";
import {Button} from "../Button/component.jsx";

export const NavItem = ({ restaurant, onClick, isActive }) => {
    return (
        <Button
            onClick={onClick}
            className={classNames({
                [styles.active]: isActive,
            })}
        >
            {restaurant.name}
        </Button>
    )
};