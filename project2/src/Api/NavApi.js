import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ApiPeoples from "./StarWarsComponent/ApiPeoples";
import ApiShips from "./StarWarsComponent/ApiShips";
import ApiPlanets from "./StarWarsComponent/ApiPlanets";
import ApiFilms from "./StarWarsComponent/ApiFilms";
import ApiSpecies from "./StarWarsComponent/ApiSpecies";
import ApiVehicles from "./StarWarsComponent/ApiVehicles";
import "../Api/StarWars.scss"
import Header from "../components/Header";


const TabPanel = (props) => {
	const { children, value, index, ...other } = props;
	
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const NavApi = () => {
	const [value, setValue] = React.useState(0);
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	return (
		<div className="background">
			<Box className="starwars-page__tabs">
				<Box sx={{ borderBottom: 1, borderColor: "white" }}>
					<Tabs
						className="nav-link"
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab sx={{ color: "white" }} label="Peoples" {...a11yProps(0)} />
						<Tab sx={{ color: "white" }} label="StarShips" {...a11yProps(1)} />
						<Tab sx={{ color: "white" }} label="Planets" {...a11yProps(2)} />
						<Tab sx={{ color: "white" }} label="Films" {...a11yProps(3)} />
						<Tab sx={{ color: "white" }} label="Species" {...a11yProps(4)} />
						<Tab sx={{ color: "white" }} label="Vehicles" {...a11yProps(5)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<ApiPeoples />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ApiShips />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<ApiPlanets />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<ApiFilms />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<ApiSpecies />
				</TabPanel>
				<TabPanel value={value} index={5}>
					<ApiVehicles />
				</TabPanel>
			</Box>
		</div>
	);
};

export default NavApi;