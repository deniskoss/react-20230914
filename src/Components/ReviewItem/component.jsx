import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/reviews/selectors.js";
import { selectUserById } from '../../store/users/selectors.js';

export const ReviewItem = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));
    const userId = review.userId;

    if (!review) {
        return null;
    }

    const user = useSelector((state) => selectUserById(state, userId));

    return <li>{user.name}: {review.text}</li>
}