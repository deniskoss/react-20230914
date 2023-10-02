import { useState } from "react";
import { restaurants } from '../../constants/mock.js';
import { Navigation } from '../../Components/Navigation/component.jsx';
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
                <Navigation
                    restaurants={restaurants}
                    onChange={setActiveRestaurantIndex}
                    activeRestaurantIndex={activeRestaurantIndex}/>
                <Restaurant
                    restaurants={restaurants}
                    activeRestaurantIndex={activeRestaurantIndex}/>
            </div>
            <Footer />
        </div>
    );
};