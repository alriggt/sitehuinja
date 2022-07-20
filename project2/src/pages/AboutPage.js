import React from "react";
import Footer from "../components/Footer";
import aboutPagePictureFirst from "../img/aboutpage1.svg"
import aboutPagePictureSecond from "../img/aboutpage2.svg"

const AboutPage = () => {
	return(
		<>
			<div className="aboutPage">
				<div className="aboutPage-container">
					<p className="aboutPage-mainTitle">About Artificial Intelligence</p>
					<div className="aboutPage-info">
						<div className="aboutPage-textContainer1">
							<p className="aboutPage-title">Who we are?</p>
							<p className="aboutPage-aftTitle">Lorem ipsum is placeholder text commonly used in the <br/>
								graphic, print, and publishing industries for previewing<br/>
								layouts and visual mockups.</p>
							<p className="aboutPage-aftTitle">One of the most important and extensive <br/>
								areas of natural science, the science that<br/>
								studies substances, also their composition </p>
							<p className="aboutPage-aftTitle">Lorem ipsum is placeholder <br/>
								graphic, print, and publishing industries for previewing<br/>
								layouts and visual mockups.</p>
						</div>
						<span className="aboutPage-picture-first">
							<img src={aboutPagePictureFirst} alt=""/>
						</span>
					</div>
					<div className="aboutPage-info">
						<span className="aboutPage-picture-second">
							<img src={aboutPagePictureSecond} alt=""/>
						</span>
						<div className="aboutPage-textContainer2">
							<p className="aboutPage-title">Our goals</p>
							<p className="aboutPage-aftTitle">Lorem ipsum is placeholder text commonly used in the <br/>
								graphic, print, and publishing industries for previewing<br/>
								layouts and visual mockups.</p>
							<p className="aboutPage-aftTitle">One of the most important and extensive <br/>
								areas of natural science, the science that<br/>
								studies substances, also their composition </p>
							<p className="aboutPage-aftTitle">Lorem ipsum is placeholder <br/>
								graphic, print, and publishing industries for previewing<br/>
								layouts and visual mockups.</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default AboutPage;
