import { useState } from "react";
import { restaurants } from '../../constants/mock.js';
import { RestaurantsTabs } from '../../Components/RestaurantsTabs/component.jsx';
import { Restaurant } from '../../Components/Restaurant/component.jsx';
import { Header } from '../../Components/Header/component.jsx';
import { Footer } from '../../Components/Footer/component.jsx';

import styles from './styles.module.css';
import {ThemeContext} from "../../contexts/Theme.jsx";

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <div className={styles.root}>
                <Header theme={theme} toggleTheme={setTheme} />
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
        </ThemeContext.Provider>
    );
};