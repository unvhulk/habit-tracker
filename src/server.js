import { Server, Model, RestSerializer } from "miragejs";
import { v4 as uuid } from "uuid";

import {
	archiveHabitHandler,
	deleteFromArchivesHandler,
	getAllArchivedHabitsHandler,
	restoreFromArchivesHandler,
} from "./backend/controllers/ArchiveController";
import {
	loginHandler,
	signupHandler,
	userProfilehandler,
} from "./backend/controllers/AuthController";
import {
	createHabitHandler,
	deleteHabitHandler,
	editHabitHandler,
	getHabitHandler,
	getHabitsHandler,
} from "./backend/controllers/HabitController";
import {
	createLabelHandler,
	deleteLabelHandler,
	getLabelsHandler,
} from "./backend/controllers/LabelController";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
	let server = new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		models: {
			user: Model,
		},

		// Runs on the start of the server
		seeds(server) {
			server.logging = false;
			users.forEach((item) =>
				server.create("user", {
					...item,
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
							labels: ["General"],
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
							labels: ["General"],
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
							labels: ["General"],
						},
						{
							_id: uuid(),
							name: "Meditate",
							goal: "1 Time",
							repeat: "Daily",
							status: "Complete",
							startDate: "2022-07-21",
							endDate: "2022-08-21",
							color: "Green",
							labels: ["General"],
						},
					],
					archives: [
						{
							_id: uuid(),
							name: "Gym",
							goal: "1 Time",
							repeat: "Daily",
							status: "Active",
							startDate: "2022-07-21",
							endDate: "2022-08-21",
							color: "Red",
							labels: ["General"],
						},
					],
					labels: ["General"],
				})
			);
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));

			// user route (private)
			this.get("/user", userProfilehandler.bind(this));

			// habit routes (private)
			this.get("habits", getHabitsHandler.bind(this));
			this.get("habits/:habitId", getHabitHandler.bind(this));
			this.post("habits", createHabitHandler.bind(this));
			this.post("habits/:habitId", editHabitHandler.bind(this));
			this.delete("habits/:habitId", deleteHabitHandler.bind(this));

			// label routes (private)
			this.get("labels", getLabelsHandler.bind(this));
			this.post("labels/:labelName", createLabelHandler.bind(this));
			this.delete("labels/:labelName", deleteLabelHandler.bind(this));

			// archive routes (private)
			this.get("archives", getAllArchivedHabitsHandler.bind(this));
			this.post(
				"archives/restore/:habitId",
				restoreFromArchivesHandler.bind(this)
			);
			this.post("archives/:habitId", archiveHabitHandler.bind(this));
			this.delete("archives/:habitId", deleteFromArchivesHandler.bind(this));
		},
	});
	return server;
}
