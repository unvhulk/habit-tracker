import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Landing,
	Homepage,
	MyHabitPage,
	EditPage,
	Labels,
	ArchivePage,
	Signup,
	TrashPage,
	ErrorPage,
	PrivateRoute,
	Login,
	Profile,
	Pomodoro,
} from "components";
import Mockman from "mockman-js";

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path='/home' element={<Homepage />}>
						<Route path='habit' element={<MyHabitPage />}>
							<Route path='pomodoro' element={<Pomodoro />} />
						</Route>
						<Route path='edit' element={<EditPage />} />
					</Route>
					<Route path='/label' element={<Labels />} />
					<Route path='/archive' element={<ArchivePage />} />
					<Route path='/trash' element={<TrashPage />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
				<Route path='/mock' element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
