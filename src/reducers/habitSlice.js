import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHabits = createAsyncThunk("habits/get", async (thunkAPI) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.get("/api/habits", {
			headers: {
				authorization: token,
			},
		});
		return response.data.habits;
	} catch (error) {
		const { rejectWithValue } = thunkAPI;
		return rejectWithValue(error.response.data);
	}
});

export const createHabit = createAsyncThunk(
	"habits/post",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				"/api/habits",
				{ habit },
				{
					headers: {
						authorization: token,
					},
				}
			);
			if (response.status === 200) {
				return response.data.habits;
			}
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const getHabit = createAsyncThunk(
	"habit/get",
	async (habitID, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get(`/api/habits/${habitID}`, {
				headers: {
					authorization: token,
				},
			});
			return response.data.habit;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const postHabit = createAsyncThunk(
	"habit/post/habit:ID",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				`/api/habits/${habit._id}`,
				{
					habit,
				},
				{
					headers: {
						authorization: token,
					},
				}
			);
			return { habits: response.data.habits, habit };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);
const habitSlice = createSlice({
	name: "habits",
	initialState: {},
	reducers: {},
	extraReducers: {
		[getHabits.pending]: (state) => {
			state.status = "loading";
		},
		[getHabits.fulfilled]: (state, action) => {
			state.habitsList = action.payload;
			state.status = "success";
		},
		[getHabits.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.error;
		},
		[createHabit.pending]: (state) => {
			state.status = "loading";
		},
		[createHabit.fulfilled]: (state, action) => {
			state.habitsList = action.payload;
			state.status = "success";
		},
		[createHabit.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},

		[getHabit.fulfilled]: (state, action) => {
			state.currentHabit = action.payload;
			state.status = "success";
		},
		[getHabit.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[postHabit.pending]: (state) => {
			state.status = "loading";
		},
		[postHabit.fulfilled]: (state, action) => {
			state.habitsList = action.payload.habits;
			state.currentHabit = action.payload.habit;
			state.status = "success";
		},
		[postHabit.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

export default habitSlice.reducer;
