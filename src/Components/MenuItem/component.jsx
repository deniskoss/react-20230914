import {useState} from 'react';
import {Button} from '../Button/component.jsx';

export const MenuItem = ({dishName, className}) => {
    const [count, setCount] = useState(0);
    const setMore = () => setCount(count + 1);
    const setLess = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const disabled = count === 0;

    return (
        <li className={className}>{dishName} -
            <Button onClick={setLess} text="-" small disabled={disabled}/>
            {count}
            <Button onClick={setMore} text="+" small />
        </li>
    );
};