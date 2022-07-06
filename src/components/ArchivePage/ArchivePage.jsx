import React from "react";
import "./ArchivePage.css";
import Search from "@mui/icons-material/SearchOutlined";
import Filter from "@mui/icons-material/TuneOutlined";
import { Card } from "components/Card/Card";

export const ArchivePage = () => {
	return (
		<main className='Archive-right-container'>
			<div className='Archive-search-contianer'>
				<div className='Archive-search-bar'>
					<Search />
					<input
						type='text'
						placeholder='Search Posts, People, anything'></input>
					<Filter />
				</div>
			</div>
			<div className='Archive-cards-container'>
				<div>{" Archive"}</div>
				<div>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</main>
	);
};
