import "./Profile.css";
import quotesUp from "assets/quote-up.png";
import quotesDown from "assets/quote-down.png";
import { quotes } from "./Quotes.js";

export const Profile = () => {
	let index = Math.floor(Math.random() * 10) + 1;
	return (
		<main className='profile-page-container'>
			<div className='profile-heading'>
				<h2>My Profile</h2>
			</div>
			<div className='profile-stats'>
				<div>
					<div>Current Streak</div>
					<div>
						<div>
							<span>0</span> day
						</div>
					</div>
				</div>
				<div>
					<div>Today X times</div>
					<div>
						<div>
							<span>0</span> times
						</div>
					</div>
				</div>
				<div>
					<div>Habit Score</div>
					<div>
						<div>
							<span>0</span> / 100
						</div>
					</div>
				</div>
				<div>
					<div>Mood Score</div>
					<div>
						<div>
							<span>0</span> / 5
						</div>
					</div>
				</div>
			</div>
			<div className='profile-quotes'>
				<div className='quote-otd'>Quote of the day</div>
				<div className='quote-box'>
					<div>{quotes[index].quote}</div>
					<div>{quotes[index].author}</div>
				</div>
				<img src={quotesUp} alt='#' />
				<img src={quotesDown} alt='#' />
			</div>
		</main>
	);
};
