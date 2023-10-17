import { useState } from 'react';
import { useSelector } from "react-redux";
import { Button } from '../Button/component.jsx';
import { selectDishById } from "../../store/dishes/selectors.js";


export const MenuItem = ({dishId, className}) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const [count, setCount] = useState(0);
    const setMore = () => setCount(count + 1);
    const setLess = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const disabled = count === 0;

    return (
        <li className={className}>{dish.name} -
            <Button onClick={setLess} small disabled={disabled}>-</Button>
            {count}
            <Button onClick={setMore} small>+</Button>
        </li>
    );
};