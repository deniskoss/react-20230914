import { MenuItem } from "../MenuItem/component.jsx";
export const Menu = ({ data }) => {

    return (
        <ul>
            {data.map((item) => <MenuItem key={item.id} dishName={item.name} />)}
        </ul>
    )
}