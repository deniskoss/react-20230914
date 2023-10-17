import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";
import { AddReviewButton } from "../AddReviewButton/component.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurants/selectors.js";

export const Restaurant = ({ restaurantId }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu menuIds={restaurant.menu} />
            <Reviews reviewsIds={restaurant.reviews} />
            <AddReviewButton />
        </div>
    )};