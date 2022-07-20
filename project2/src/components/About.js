import React from "react";
import aboutPicture from "../img/picture3.svg";
import {useTranslation} from "react-i18next";

const About = () => {
	
	const { t } = useTranslation();
	
	return(
		<>
		<div className="about">
			<div className="about-box">
				<div className="textAbout">
					<div className="aboutTitle">{t("about.title")}</div>
					<div className="aftAbout">
						<p>
							{t("about.description.tab1")}
						</p>
						<p>{t("about.description.tab2")}</p>
						<p>{t("about.description.tab2")}</p>
						<p>
							{t("about.description.tab3")}
						</p>
					</div>
				</div>
				<div className="aboutPicture">
					<img src={aboutPicture} alt="" />
				</div>
			</div>
		</div>
		</>
	);
}

export default About;