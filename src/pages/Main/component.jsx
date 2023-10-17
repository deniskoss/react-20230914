import { useState } from "react";
import { RestaurantsTabs } from '../../Components/RestaurantsTabs/component.jsx';
import { Restaurant } from '../../Components/Restaurant/component.jsx';
import { Layout } from "../../Components/Layout/component.jsx";
import {useSelector} from "react-redux";
import { selectRestaurantsIds } from "../../store/restaurants/selectors.js";


export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const restaurantsIds = useSelector(selectRestaurantsIds);
    return (
        <Layout>
            <RestaurantsTabs
                restaurantsIds={restaurantsIds}
                onTabClick={setActiveRestaurantIndex}
                activeRestaurantIndex={activeRestaurantIndex}/>
            <Restaurant restaurantId={restaurantsIds[activeRestaurantIndex]} />
        </Layout>
    );
};