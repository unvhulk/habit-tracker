import { createContext, useContext, useState } from "react";
import axios from "axios";

const HabitContext = createContext();
const useHabit = () => useContext(HabitContext);

const HabitProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [habits, setHabits] = useState([]);

	const postHabitAPI = (habit) => {
		return axios.post(
			"/api/habits",
			{ habit },
			{
				headers: {
					authorization: token,
				},
			}
		);
	};

	const getHabitsAPI = () => {
		return axios.get("/api/habits", {
			headers: {
				authorization: token,
			},
		});
	};

	const createHabitHandler = async (habit) => {
		try {
			const response = await postHabitAPI(habit);

			if (response.status === 200) {
				console.log("Habit posted :");
				console.log(response.data.habits);
				setHabits([...habits, ...response.data.habits]);
			}
		} catch (err) {
			console.log("Habit context error :" + err.response.data);
		}
	};

	const getHabitsHandler = async () => {
		try {
			const response = await getHabitsAPI();

			if (response.status === 200) {
				console.log("Habits recieved:");
				console.log(response.data);
				setHabits([...habits, ...response.data.habits]);
			}
		} catch (err) {
			console.log(err.response.data);
		}
	};
	return (
		<HabitContext.Provider
			value={{ createHabitHandler, getHabitsHandler, habits }}>
			{children}
		</HabitContext.Provider>
	);
};
export { useHabit, HabitProvider };
