import React from "react";
import picture1 from "../img/picture1.svg"
import {useTranslation} from "react-i18next";

const Presentation = () => {
	
	const { t, i18n } = useTranslation();
	
	return(
		<>
			<div className="listOne">
				<div className="presentation-box">
					<div className="textMain">
						<div className="preTitle"><h1>{t("presentation.preTitle")}</h1></div>
						<div className="mainTitle"><h2>{t("presentation.title")}</h2></div>
						<div className="aftTitle"><h3>{t("presentation.aftTitle")}</h3></div>
						<div className="buttons">
							<div className="button1"><a href="#">{t("presentation.button1")}</a></div>
							<div className="button2">
								<div className="figure"><a href="#">{t("presentation.button2")}</a></div>
							</div>
						</div>
					</div>
					<div className="picture1"><img src ={picture1} /></div>
				</div>
			</div>
		</>
		);
	}

export default Presentation;
