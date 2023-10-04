import { useState } from "react";
import { restaurants } from '../../constants/mock.js';
import { RestaurantsTabs } from '../../Components/RestaurantsTabs/component.jsx';
import { Restaurant } from '../../Components/Restaurant/component.jsx';

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            <RestaurantsTabs restaurants={restaurants} onTabClick={setActiveRestaurantIndex} />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
};