import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ContactWin from "../ModalWindow/ContactWin";
import ServicePage from "./ServicePage";
import NavApi from "../Api/NavApi";

const RouterPage = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactWin />} />
				<Route path="/service" element={<ServicePage />} />
				<Route path="/starWars" element={<NavApi />}></Route>
			</Routes>
		</>
	);
};

export default RouterPage;