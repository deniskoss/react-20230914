import styles from './styles.module.css';
import { RewievsForm } from "../RewievsForm/component.jsx";

export const Rewievs = ({ rewievs }) => {
    return (
        <div>
            <ul className={styles.root}>
                {rewievs.map((item) => <li key={item.id}>{item.user}: {item.text}</li>)}
            </ul>
            <RewievsForm />
        </div>
    )
}