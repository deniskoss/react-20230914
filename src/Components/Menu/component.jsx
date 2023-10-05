import { MenuItem } from "../MenuItem/component.jsx";
import styles from './styles.module.css'
export const Menu = ({ restaurantMenu }) => {

    return (
        <ul>
            {restaurantMenu.map((item) => <MenuItem className={styles.menuItem} dishName={item.name} />)}
        </ul>
    )
}