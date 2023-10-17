import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/mock-normalized.js";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
}

const { reducer} = createSlice({
    name: 'restaurants',
    initialState,
});

export default reducer;