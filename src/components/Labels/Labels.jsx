import React, { useState } from "react";
import "./Labels.css";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { postLabels, deleteFromLabels, getLabels } from "reducers/habitSlice";
import { useEffect } from "react";

export const Labels = () => {
	const [label, setLabel] = useState("");
	const [labelBox, setLabelBox] = useState(false);
	const { labels } = useSelector((state) => state.habits);
	const dispatch = useDispatch();
	console.log(labels);
	useEffect(() => {
		dispatch(getLabels());
	}, []);
	const handleLabel = (e) => {
		e.preventDefault();
		dispatch(postLabels(label));
		setLabel("");
	};

	return (
		<main className='Labels-right-container'>
			<div className='Labels-list-container'>
				<div className='Labels-list-heading'>
					<div> LABELS </div>
					<div onClick={() => setLabelBox(!labelBox)}> + Create Label</div>
				</div>
				<div className='Labels-list-items'>
					{labelBox && (
						<form onSubmit={handleLabel}>
							<input
								className='Label-input'
								value={label}
								onChange={(e) => setLabel(e.target.value)}
							/>
							<button className='Label-button'>Create</button>
						</form>
					)}
					{labels?.map((label) => (
						<div key={labels.indexOf(label)}>
							<div>{label}</div>
							<div onClick={() => dispatch(deleteFromLabels(label))}>
								<Delete />
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};
