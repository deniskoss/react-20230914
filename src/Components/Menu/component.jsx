import { MenuItem } from "../MenuItem/component.jsx";
export const Menu = ({ restaurantMenu }) => {

    return (
        <ul>
            {restaurantMenu.map((item) => <MenuItem dishName={item.name} />)}
        </ul>
    )
}