import {useState} from "react";
import {restaurants} from '../../constants/mock.js';
import {Menu} from '../../Components/Menu/component.jsx';
import {Review} from '../../Components/Rewiev/component.jsx';

export const MainPage = () => {
    const [activeTab, setActiveTab] = useState(0)
    const navigation = restaurants.map((item, index) => {
        return <button onClick={() => setActiveTab(index)}>{item.name}</button>
    });

    return (
        <div>
            <div>{navigation}</div>
            <h1>{restaurants[activeTab].name}</h1>
            <Menu data={restaurants[activeTab].menu} />
            <Review data={restaurants[activeTab].reviews} />
        </div>
    );
};