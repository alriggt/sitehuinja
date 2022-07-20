import React from "react";
import picture2 from "../img/picture2.svg"
import {useTranslation} from "react-i18next";

const Slide = () => {
	
	const { t, i18n } = useTranslation();
	
	return(
		<>
		<div className="slide">
			<div className="slide-box">
				<div className="picture2">
					<img src={picture2} />
				</div>
				<div className="textSlide">
					<div className="slideTitle">{t("slide.title")}</div>
					<div className="aftTitle"><h3>{t("slide.aftTitle")}</h3></div>
					<div className="learnMore">
						<a href="#">{t("slide.button")}</a>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Slide;
