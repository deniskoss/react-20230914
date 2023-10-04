import { Menu } from "../Menu/component.jsx";
import { Rewievs } from "../Rewievs/component.jsx";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu restaurantMenu={restaurant.menu} />
            <Rewievs rewievs={restaurant.reviews} />
        </div>
    )};