import "./Pomodoro.css";
import Pause from "@mui/icons-material/PauseCircleOutlineOutlined";
import Stop from "@mui/icons-material/StopCircleOutlined";
import Play from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useRef, useEffect } from "react";
import { useTask } from "contexts/task-context";
import { useSelector } from "react-redux";

export const Pomodoro = () => {
	const [isPaused, setIsPaused] = useState(true);
	const [secondsLeft, setSecondsLeft] = useState(0);
	const [mode, setMode] = useState("work");
	const [task, setTask] = useState({
		time: 25,
		breakTime: 5,
	});
	const { currentHabit } = useSelector((state) => state.habits);
	const { profileStats, setProfileStats } = useTask();

	const secondsLeftRef = useRef(secondsLeft);
	const isPausedRef = useRef(isPaused);
	const modeRef = useRef(mode);

	const titleUpdate = () => {
		document.title = minutes + ":" + seconds;
	};

	const tick = () => {
		secondsLeftRef.current--;
		setSecondsLeft(secondsLeftRef.current);
	};

	const switchMode = () => {
		const nextMode = modeRef.current === "work" ? "break" : "work";
		const nextSeconds = (nextMode === "work" ? task.time : task.breakTime) * 60;

		setMode(nextMode);
		modeRef.current = nextMode;

		setSecondsLeft(nextSeconds);
		secondsLeftRef.current = nextSeconds;
	};

	const stopTimer = () => {
		setIsPaused(true);
		isPausedRef.current = true;

		setMode("work");
		modeRef.current = "work";

		setSecondsLeft(task.time * 60);
		secondsLeftRef.current = task.time * 60;

		return;
	};

	useEffect(() => {
		secondsLeftRef.current = task.time * 60;
		setSecondsLeft(secondsLeftRef.current);

		const interval = setInterval(() => {
			if (isPausedRef.current) {
				return;
			}
			if (secondsLeftRef.current === 0) {
				if (modeRef.current !== "break") return switchMode();
				else {
					setProfileStats({
						...profileStats,
						times: profileStats.times + 1,
						habitScore: profileStats.habitScore + 1,
					});
					switchMode();
				}
			}

			tick();
		}, 1000);
		return () => clearInterval(interval);
	}, [task]);

	const totalSeconds = mode === "work" ? task.time * 60 : task.breakTime * 60;
	const percentage = Math.round((secondsLeft / totalSeconds) * 100);

	const minutes = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;
	if (seconds < 10) seconds = "0" + seconds;

	useEffect(() => {
		titleUpdate();
	}, [minutes, seconds]);
	return (
		<div className='Pomodoro-container'>
			<div className='Pomodoro-main'>
				<div className='Timer'>
					<div className='Stopwatch'>
						<CircularProgressbar
							value={percentage}
							text={minutes + ":" + seconds}
							styles={buildStyles({
								textColor: "#544dac",
								pathColor: mode === "work" ? "#544dac" : "#7975a7",
							})}
						/>
					</div>
					<div className='Buttons'>
						{isPaused ? (
							<div
								className='Play'
								onClick={() => {
									setIsPaused(false);
									isPausedRef.current = false;
								}}>
								<Play />
							</div>
						) : (
							<div
								className='Pause'
								onClick={() => {
									setIsPaused(true);
									isPausedRef.current = true;
								}}>
								<Pause />
							</div>
						)}
						<div className='Stop' onClick={stopTimer}>
							<Stop />
						</div>
					</div>
				</div>
				<div className='Task'>
					<div className='Title'>{currentHabit.name}</div>
					<div className='Description'>{currentHabit.goal}</div>
					<div className='labels'>
						<div>Labels:</div>
						{currentHabit.labels.map((label) => {
							return <div>{label}</div>;
						})}
					</div>

					<div className='Time'>
						Work Time: 25 minutes, Break Time: 5 minutes
					</div>
					<div className='Time'>Repeat : {currentHabit.repeat}</div>
					<div className='BreakTime'>Start Date : {currentHabit.startDate}</div>
					<div className='BreakTime'>End Date : {currentHabit.endDate}</div>
				</div>
			</div>
		</div>
	);
};
