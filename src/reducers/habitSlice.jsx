import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHabits = createAsyncThunk(
	"habits/get",
	async (token, thunkAPI) => {
		try {
			const response = await axios.get("/api/habits", {
				headers: {
					authorization: token,
				},
			});
			console.log(response);
			return response.data.habits;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.data);
		}
	}
);

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
	"habit/post/:habitID",
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

export const deleteHabit = createAsyncThunk(
	"api/habits/habit:ID",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.delete(`/api/habits/${habit._id}`, {
				headers: {
					authorization: token,
				},
			});
			return { habits: response.data.habits, habit };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const addToArchive = createAsyncThunk(
	"/api/archives/:habitId",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				`/api/archives/${habit._id}`,
				{
					habit,
				},
				{
					headers: {
						authorization: token,
					},
				}
			);
			return { archives: response.data.archives, habits: response.data.habits };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const getArchives = createAsyncThunk(
	"/api/archives/get",
	async (thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get(`/api/archives/`, {
				headers: {
					authorization: token,
				},
			});
			return response.data.archives;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const restoreFromArchive = createAsyncThunk(
	"/api/archives/restore/:habitId",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				`/api/archives/restore/${habit._id}`,
				{
					habit,
				},
				{
					headers: {
						authorization: token,
					},
				}
			);
			return { habits: response.data.habits, archives: response.data.archives };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const deleteFromArchive = createAsyncThunk(
	"/api/archives/delete/:habitId",
	async (habit, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.delete(`/api/archives/${habit._id}`, {
				headers: {
					authorization: token,
				},
			});
			return { archives: response.data.archives, habit };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

export const postLabels = createAsyncThunk(
	"/api/labels/:labelName",
	async (label, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				`/api/labels/${label}`,
				{ label },
				{
					headers: {
						authorization: token,
					},
				}
			);
			return { labels: response.data.labels };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.payload.data.errors);
		}
	}
);

export const getLabels = createAsyncThunk("/api/labels/", async (thunkAPI) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.get(`/api/labels/`, {
			headers: {
				authorization: token,
			},
		});
		return { labels: response.data.labels };
	} catch (error) {
		const { rejectWithValue } = thunkAPI;
		return rejectWithValue(error.response);
	}
});

export const deleteFromLabels = createAsyncThunk(
	"/api/labels/delete/:labelName",
	async (label, thunkAPI) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.delete(`/api/labels/${label}`, {
				headers: {
					authorization: token,
				},
			});
			return { labels: response.data.labels };
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response);
		}
	}
);

const habitSlice = createSlice({
	name: "habits",
	initialState: {
		trashed: [],
		labels: ["General"],
	},

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
		[deleteHabit.pending]: (state) => {
			state.status = "loading";
		},
		[deleteHabit.fulfilled]: (state, action) => {
			state.habitsList = action.payload.habits;
			state.trashed.push(action.payload.habit);
			state.status = "success";
		},
		[deleteHabit.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[addToArchive.pending]: (state) => {
			state.status = "loading";
		},
		[addToArchive.fulfilled]: (state, action) => {
			state.habitsList = action.payload.habits;
			state.archives = action.payload.archives;
			state.status = "success";
		},
		[addToArchive.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[getArchives.pending]: (state) => {
			state.status = "loading";
		},
		[getArchives.fulfilled]: (state, action) => {
			state.archives = action.payload;
			state.status = "success";
		},
		[getArchives.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[restoreFromArchive.pending]: (state) => {
			state.status = "loading";
		},
		[restoreFromArchive.fulfilled]: (state, action) => {
			state.archives = action.payload.archives;
			state.habitsList = action.payload.habits;
			state.status = "success";
		},
		[restoreFromArchive.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[deleteFromArchive.pending]: (state) => {
			state.status = "loading";
		},
		[deleteFromArchive.fulfilled]: (state, action) => {
			state.archives = action.payload.archives;
			state.trashed.push(action.payload.habit);
			state.status = "success";
		},
		[deleteFromArchive.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[postLabels.pending]: (state) => {
			state.status = "loading";
		},
		[postLabels.fulfilled]: (state, action) => {
			state.labels = action.payload.labels;
			state.status = "success";
		},
		[postLabels.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[getLabels.pending]: (state) => {
			state.status = "loading";
		},
		[getLabels.fulfilled]: (state, action) => {
			state.labels = action.payload.labels;
			state.status = "success";
		},
		[getLabels.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
		[deleteFromLabels.pending]: (state) => {
			state.status = "loading";
		},
		[deleteFromLabels.fulfilled]: (state, action) => {
			state.labels = action.payload.labels;
			state.status = "success";
		},
		[deleteFromLabels.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

export default habitSlice.reducer;
