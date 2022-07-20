import React from 'react';
import Presentation from "../components/Presentation";
import Sponsors from "../components/Sponsors";
import Slide from "../components/Slide";
import SliderBord from "../components/SliderBord";
import About from "../components/About";
import Footer from "../components/Footer";

const Homepage = () => {
	return (
		<div className="wrapper">
			<Presentation />
			<Sponsors />
			<Slide />
			<SliderBord />
			<About />
			<Footer />
		</div>
	);
}

export default Homepage;
