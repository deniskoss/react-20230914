import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./dishes";
import reviewsReducer from "./reviews";
import restaurantsReducer from "./restaurants";
import usersReducer from "./users";

const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        reviews: reviewsReducer,
        restaurants: restaurantsReducer,
        users: usersReducer,
    }
});

console.log('store', store.getState());

export default store;