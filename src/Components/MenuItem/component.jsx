import {useState} from 'react';
import {Button} from '../Button/component.jsx';
export const MenuItem = ({dishName}) => {
    const [count, setCount] = useState(0);
    const setMore = () => setCount(count + 1);
    const setLess = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <li>{dishName}-
            <Button handler={setLess} type="-"/>
            {count}
            <Button handler={setMore} type="+"/>
        </li>
    );
};