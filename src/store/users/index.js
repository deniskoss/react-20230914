import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers} from "../../constants/mock-normalized.js";

const initialState = {
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
}

const { reducer } = createSlice({
    name: 'users',
    initialState,
})

export default reducer;