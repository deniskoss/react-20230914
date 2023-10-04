import {useState} from 'react';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';

export const MenuItem = ({dishName}) => {
    const [count, setCount] = useState(0);
    const setMore = () => setCount(count + 1);
    const setLess = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const disabled = count === 0;

    return (
        <li className={styles.root}>{dishName} -
            <Button onClick={setLess} text="-" small disabled={disabled}/>
            {count}
            <Button onClick={setMore} text="+" small />
        </li>
    );
};