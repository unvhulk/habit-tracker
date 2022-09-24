import React from "react";
import { Card } from "components/Card/Card";
import { useSelector } from "react-redux";

export const TrashPage = () => {
	const { trashed } = useSelector((state) => state.habits);
	return (
		<main className='Archive-right-container'>
			<div className='Archive-cards-container'>
				<div>Trash</div>
				<div>
					{trashed.length !== 0 ? (
						trashed?.map((habit) => <Card habit={habit} key={habit._id} />)
					) : (
						<div className='Archive-empty'> The Trash page is empty</div>
					)}
				</div>
			</div>
		</main>
	);
};
