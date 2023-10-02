// import { NavItem } from "../NavItem/component.jsx";
import styles from './styles.module.css';
import {Button} from "../Button/component.jsx";

export const Navigation = ({ restaurants, onChange, activeRestaurantIndex }) => {
    return (
        <div className={styles.root}>
            { restaurants.map((restaurant, restaurantIndex) => {
                const isActive = restaurantIndex === activeRestaurantIndex;
                return (
                    <Button
                        key={restaurant.id}
                        text={restaurant.name}
                        isActive={isActive}
                        onClick={() => onChange(restaurantIndex)}
                />
                )}
            )}
        </div>
    )};