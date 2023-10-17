import { MenuItem } from "../MenuItem/component.jsx";
import styles from './styles.module.css'
export const Menu = ({ menuIds }) => {

    return (
        <ul>
            {menuIds.map((dishId) => <MenuItem key={dishId} className={styles.menuItem} dishId={dishId}/>)}
        </ul>
    )
}

