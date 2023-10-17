import { Button } from "../Button/component.jsx";
import { useState } from "react";
import { ReviewsForm } from "../ReviewsForm/component.jsx";
import { Modal } from "../Modal/component.jsx";

export const AddReviewButton = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const onClose = () => setIsModalOpened(false);
    return (
        <>
            <Button onClick={() => setIsModalOpened(true)}>Добавить комментарий</Button>
            {isModalOpened &&
                <Modal onClose={onClose}>
                    <ReviewsForm onSubmit={onClose} />
                </Modal>
            }
        </>
    )
};