import { Menu } from "../Menu/component.jsx";
import { Rewievs } from "../Rewievs/component.jsx";

export const Restaurant = ({ restaurants, activeRestaurantIndex }) => {
    return (
        <div>
            <h1>{restaurants[activeRestaurantIndex].name}</h1>
            <Menu data={restaurants[activeRestaurantIndex].menu} />
            <Rewievs data={restaurants[activeRestaurantIndex].reviews} />
        </div>
    )};