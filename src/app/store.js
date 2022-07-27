import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../../src/reducers/habitSlice";

export const store = configureStore({
	reducer: {
		habits: habitsReducer,
	},
});
