import styles from './styles.module.css';
import { ReviewItem } from "../ReviewItem/component.jsx";

export const Reviews = ({ reviewsIds }) => {
    return (
        <div>
            <ul className={styles.root}>
                {reviewsIds.map((reviewId) => <ReviewItem key={reviewId} reviewId={reviewId} />)}
            </ul>
        </div>
    )
}