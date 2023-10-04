import styles from './styles.module.css';
import {Button} from "../Button/component.jsx";

export const RestaurantsTabs = ({ restaurants, onTabClick, activeRestaurantIndex }) => {
    return (
        <div className={styles.root}>
            { restaurants.map((restaurant, restaurantIndex) => {
                const isActive = restaurantIndex === activeRestaurantIndex;
                return (
                    <Button
                        key={restaurant.id}
                        text={restaurant.name}
                        isActive={isActive}
                        onClick={() => onTabClick(restaurantIndex)}
                />
                )}
            )}
        </div>
    )};