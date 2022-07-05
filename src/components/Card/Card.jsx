import ArchiveBox from "@mui/icons-material/Inventory2Outlined";

export const Card = () => {
	return (
		<div>
			<div className='Archive-card-top'>
				<div className='Archive-card-heading'>
					<div>Task #1</div>
					<div>
						<ArchiveBox />
					</div>
				</div>
				<div className='Archive-card-label'>
					<div>Label</div>
					<div>Label</div>
					<div>Label</div>
				</div>
				<div className='Archive-card-date'>26/05/2021-27/06/2021</div>
			</div>
			<div className='Archive-card-bottom'>2 Times Once</div>
		</div>
	);
};
