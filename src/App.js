import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Landing from "components";
import { Landing, Homepage, MyHabitPage } from "components";

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/habit' element={<Landing />} />
				<Route path='/home' element={<Homepage />} />
				<Route path='/' element={<MyHabitPage />} />
			</Routes>
		</div>
	);
}

export default App;
