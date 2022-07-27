import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balak",
		email: "adarshbalak@gmail.com",
		password: "adarshBalak123",
		habits: [
			{
				_id: uuid(),
				name: "Gym",
				goal: "1 Time",
				repeat: "Daily",
				status: "Active",
				startDate: "2022-07-21",
				endDate: "2022-08-21",
				color: "Red",
				labelOne: "On",
				labelTwo: "",
				labelThree: "",
			},
			{
				_id: uuid(),
				name: "Projects",
				goal: "3 Times",
				repeat: "Daily",
				status: "Active",
				startDate: "2022-07-21",
				endDate: "2022-08-21",
				color: "Red",
				labelOne: "",
				labelTwo: "On",
				labelThree: "",
			},
			{
				_id: uuid(),
				name: "Meditate",
				goal: "2 Times",
				repeat: "Daily",
				status: "Active",
				startDate: "2022-07-21",
				endDate: "2022-08-21",
				color: "Green",
				labelOne: "",
				labelTwo: "",
				labelThree: "On",
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
