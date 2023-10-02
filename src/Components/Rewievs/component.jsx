import styles from './styles.module.css';

export const Rewievs = ({ data }) => {
    return (
        <ul className={styles.root}>
            {data.map((item) => <li key={item.id}>{item.user}: {item.text}</li>)}
        </ul>
    )
}