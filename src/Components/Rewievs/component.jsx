import styles from './styles.module.css';

export const Rewievs = ({ rewievs }) => {
    return (
        <ul className={styles.root}>
            {rewievs.map((item) => <li key={item.id}>{item.user}: {item.text}</li>)}
        </ul>
    )
}