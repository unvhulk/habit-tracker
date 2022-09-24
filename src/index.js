import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { makeServer } from "server";
import { AuthProvider } from "contexts/auth-context";
import { HabitProvider } from "contexts/habit-context";
import { TaskProvider } from "contexts/task-context";

const root = createRoot(document.getElementById("root"));
makeServer();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<HabitProvider>
						<TaskProvider>
							<App />
						</TaskProvider>
					</HabitProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
