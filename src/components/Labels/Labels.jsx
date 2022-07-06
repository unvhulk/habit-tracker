import React from "react";
import "./Labels.css";
import Edit from "@mui/icons-material/EditOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Filter from "@mui/icons-material/TuneOutlined";

export const Labels = () => {
	return (
		<main className='Labels-right-container'>
			<div className='Labels-search-container'>
				<div className='Labels-search-bar'>
					<Search />

					<input
						type='text'
						placeholder='Search Posts, People, anything'></input>
					<Filter />
				</div>
			</div>
			<div className='Labels-list-container'>
				<div className='Labels-list-heading'>
					<div> LABELS </div>
					<div> + Create Label</div>
				</div>
				<div className='Labels-list-items'>
					<div>
						<div>LABEL 1</div>
						<Edit />
					</div>
					<div>
						<div>LABEL 2</div>
						<Edit />
					</div>
				</div>
			</div>
		</main>
	);
};
