import { NavItem } from "../NavItem/component.jsx";

export const Navigation = ({ restaurants, onChange }) => {
    return (
        <div>
            { restaurants.map((restaurant, restaurantIndex) => (
               <NavItem restaurant={restaurant} onClick={() => onChange(restaurantIndex)} />
            ))}
        </div>
    )};