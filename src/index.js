import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { makeServer } from "server";
import { AuthProvider } from "contexts/auth-context";
import { HabitProvider } from "contexts/habit-context";

const root = createRoot(document.getElementById("root"));
makeServer();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<HabitProvider>
						<App />
					</HabitProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
