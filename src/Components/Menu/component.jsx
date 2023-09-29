import { MenuItem } from "../MenuItem/component.jsx";
export const Menu = ({ data }) => {

    return (
        <ul>
            {data.map((item) => <MenuItem dishName={item.name} />)}
        </ul>
    )
}