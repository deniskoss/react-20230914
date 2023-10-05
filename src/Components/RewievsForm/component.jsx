import { useReducer } from "react";
import { Button } from "../Button/component.jsx";

const DefaultValues = {
    name: '',
    text: '',
    rating: '',
}

const reducer = (state, action) => {
    switch (action?.type) {
        case "setName":
            return { ...state, name: action.payload };
        case "setText":
            return { ...state, text: action.payload };
        case "setRating":
            return { ...state, rating: action.payload };
        case "reset":
            return DefaultValues;
        default:
            return state;
    }
}

export const RewievsForm = () => {
    const [formValues, dispatch] = useReducer(reducer, DefaultValues);
    return (
        <form>
            <div>Имя</div>
            <div>
                <input
                    value={formValues.name}
                    onChange={(ev) => {
                        dispatch({
                            type: 'setName',
                            payload: ev.target.value });
                    }}
                />
            </div>
            <div>Текст комментария</div>
            <div>
                <input
                    value={formValues.text}
                    onChange={(ev) => {
                        dispatch({
                            type: 'setText',
                            payload: ev.target.value });
                    }}
                />
            </div>
            <div>Рейтинг</div>
            <div>
                <input
                    value={formValues.rating}
                    onChange={(ev) => {
                        dispatch({
                            type: 'setRating',
                            payload: ev.target.value });
                    }}
                />
            </div>
            <Button
                text="Сохранить"
                onClick={() => {
                    dispatch({
                        type: 'reset'
                    })
                }}
            />
        </form>
    )
};