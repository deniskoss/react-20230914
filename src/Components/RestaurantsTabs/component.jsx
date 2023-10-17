import styles from './styles.module.css';
import { Button } from "../Button/component.jsx";
import { useSelector } from "react-redux";
import {selectRestaurantById} from "../../store/restaurants/selectors.js";

export const RestaurantsTabs = ({ restaurantsIds, onTabClick, activeRestaurantIndex }) => {
    return (
        <div className={styles.root}>
            { restaurantsIds.map((restaurantId, restaurantIndex) => {
                const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
                const isActive = restaurantIndex === activeRestaurantIndex;
                return (
                    <Button
                        key={restaurant.id}
                        isActive={isActive}
                        onClick={() => onTabClick(restaurantIndex)}
                    >{restaurant.name}</Button>
                )}
            )}
        </div>
    )};