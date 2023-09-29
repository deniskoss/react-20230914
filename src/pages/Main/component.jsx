import { useState } from "react";
import { restaurants } from '../../constants/mock.js';
import { Navigation } from '../../Components/Navigation/component.jsx';
import { Restaurant } from '../../Components/Restaurant/component.jsx';

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            <Navigation restaurants={restaurants} onChange={setActiveRestaurantIndex} />
            <Restaurant restaurants={restaurants} activeRestaurantIndex={activeRestaurantIndex}/>
        </div>
    );
};