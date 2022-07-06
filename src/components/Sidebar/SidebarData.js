import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export const SidebarData = [
	{
		id: 1,
		icon: <HomeOutlinedIcon />,
		title: "Home",
		link: "/home",
	},
	{
		id: 2,
		icon: <LabelOutlinedIcon />,
		title: "Labels",
		link: "/label",
	},
	{
		id: 3,
		icon: <Inventory2OutlinedIcon />,
		title: "Archive",
		link: "/archive",
	},
	{
		id: 4,
		icon: <DeleteOutlinedIcon />,
		title: "Trash",
		link: "/trash",
	},
];
