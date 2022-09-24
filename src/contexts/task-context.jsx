import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const taskContext = createContext();

const TaskProvider = ({ children }) => {
	const [profileStats, setProfileStats] = useState({
		times: 0,
		streak: 0,
		habitScore: 0,
		moodScore: 0,
	});

	return (
		<taskContext.Provider value={{ profileStats, setProfileStats }}>
			{children}
		</taskContext.Provider>
	);
};

const useTask = () => useContext(taskContext);
export { useTask, TaskProvider };
