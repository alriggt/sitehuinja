import React from "react";
import Slider from "react-slick";
import slider1 from "../img/slider1.svg";
import slider2 from "../img/slider2.svg";
import slider3 from "../img/slider3.svg";
import slider4 from "../img/slider4.svg";
import slider5 from "../img/slider5.svg";
import {useTranslation} from "react-i18next";

const SliderBord = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	};
	
	const { t, i18n } = useTranslation();
	
	return(
		<>
			<div className="slider">
				<div className="sliderContainer">
					<Slider {...settings}>
						<div className="sliderBox">
							<div className="sliderPicture">
								<div><img src={slider1} alt="/"/></div>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider2} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider3} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider4} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider5} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider1} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider2} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider3} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider4} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
						<div className="sliderBox">
							<div className="sliderPicture">
								<img src={slider5} alt="/"/>
							</div>
							<div className="sliderTitle"><p>{t("sliderBord.title")}</p></div>
							<div className="sliderContent"><p>{t("sliderBord.description")}</p></div>
						</div>
					</Slider>
				</div>
			</div>
		</>
	);
}

export default SliderBord;

