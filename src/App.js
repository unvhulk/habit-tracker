import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Landing from "components";
import { Landing, Homepage, MyHabitPage } from "components";

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Homepage />} />
				<Route path='/habit' element={<MyHabitPage />} />
			</Routes>
		</div>
	);
}

export default App;
