import { useState } from "react";
import { restaurants } from '../../constants/mock.js';
import { RestaurantsTabs } from '../../Components/RestaurantsTabs/component.jsx';
import { Restaurant } from '../../Components/Restaurant/component.jsx';
import { Header } from '../../Components/Header/component.jsx';
import { Footer } from '../../Components/Footer/component.jsx';

import styles from './styles.module.css';

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.middleWrapper}>
                <RestaurantsTabs
                    restaurants={restaurants}
                    onTabClick={setActiveRestaurantIndex}
                    activeRestaurantIndex={activeRestaurantIndex}/>
                <Restaurant
                    restaurant={restaurants[activeRestaurantIndex]}
                    activeRestaurantIndex={activeRestaurantIndex}/>
            </div>
            <Footer />
        </div>
    );
};