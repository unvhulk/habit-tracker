import React from "react";
import "./ArchivePage.css";
import { Card } from "components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArchives } from "reducers/habitSlice";

export const ArchivePage = () => {
	const { archives } = useSelector((state) => state.habits);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArchives());
	}, []);
	return (
		<main className='Archive-right-container'>
			<div className='Archive-cards-container'>
				<div>Archive</div>
				<div>
					{archives?.length !== 0 ? (
						archives?.map((habit) => <Card habit={habit} key={habit._id} />)
					) : (
						<div className='Archive-empty'>The Archive page is empty</div>
					)}
				</div>
			</div>
		</main>
	);
};
