import { NavItem } from "../NavItem/component.jsx";

export const RestaurantsTabs = ({ restaurants, onTabClick }) => {
    return (
        <div>
            { restaurants.map((restaurant, restaurantIndex) => (
               <NavItem restaurant={restaurant} onClick={() => onTabClick(restaurantIndex)} />
            ))}
        </div>
    )};