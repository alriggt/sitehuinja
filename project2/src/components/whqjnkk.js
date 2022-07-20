import React, {useState} from "react";
import footerLogo from "../img/footerlogo.svg"
import message from "../img/message.svg"
import loc from "../img/location.svg"
import phone from "../img/phone.svg"
import twitter from "../img/twitter.svg"
import instagram from "../img/inst.svg"
import facebook from "../img/facebook.svg"
import inSocial from "../img/in.svg"
import youtube from "../img/youtube.svg"
import { useTranslation } from "react-i18next";

const Footer = () => {
	
	const { t, i18n } = useTranslation();
	
	
	const languages = [
		{
			code: "en",
			name: "ENG",
			countryCode: "gb",
		},
		{
			code: "de",
			name: "DEN",
			countryCode: "de",
		},
	];
	return(
		<footer>
			<div className="foot">
				<div className="foot-box">
					<div className="footerContainer">
						<div className="footerContainer-1">
							<span className="footerLogo"><img src={footerLogo} alt="" /></span>
							<div className="footerText">{t("about.description.tab1")}</div>
							<div className="contact">
								<div className="icons"><img src={message} alt="" /><a href="#">Company@gmail.com.com</a></div>
								<div className="icons"><img src={phone} alt="" /><a href="#">Phone: (064) 332-1233</a></div>
								<div className="icons"><img src={loc} alt="" /><a href="#">C450 Wall Street, USA, New York</a></div>
							</div>
						</div>
						<div className="footerContainer-1">
							<div className="footerMainText">{t("footer.information")}</div>
							<ul className="footerNav">
								<li><a href="#">{t("footer.links.newCollections")}</a></li>
								<li><a href="#">{t("footer.links.aboutStore")}</a></li>
								<li><a href="#">{t("footer.links.contact")}</a></li>
								<li><a href="#">{t("footer.links.bews")}</a></li>
								<li><a href="#">{t("footer.links.siteMap")}</a></li>
								<li><a href="#">{t("footer.links.orders")}</a></li>
							</ul>
						</div>
						<div className="footerContainer-1">
							<div className="footerMainText">{t("footer.footerMenu")}</div>
							<ul className="footerNav">
								<li><a href="#">{t("footer.links.inst")}</a></li>
								<li><a href="#">{t("footer.links.aboutStore")}</a></li>
								<li><a href="#">{t("footer.links.contact")}</a></li>
								<li><a href="#">{t("footer.links.bews")}</a></li>
								<li><a href="#">{t("footer.links.terms")}</a></li>
								<li><a href="#">{t("footer.links.purchase")}</a></li>
							</ul>
						</div>
						<div className="footerContainer-1">
							<div className="footerMainText">USEFUL LINKS</div>
							<ul className="footerNav">
								<li><a href="#">{t("footer.links.inst")}</a></li>
								<li><a href="#">{t("footer.links.aboutStore")}</a></li>
								<li><a href="#">{t("footer.links.contact")}</a></li>
								<li><a href="#">{t("footer.links.bews")}</a></li>
								<li><a href="#">{t("footer.links.terms")}</a></li>
								<li><a href="#">{t("footer.links.purchase")}</a></li>
							</ul>
						</div>
						<div className="footerContainer-1">
							<div className="footerTextAbout">ABOUT THE STORE</div>
							<div className="footerText">Lorem ipsum is placeholder text<br/> commonly used in the graphic, print, and<br/> layouts and visual mockups.</div>
							<div className="site"><a href="#">www.company.com</a></div>
							<div className="social">
								<div className="socialIcons"><a href="#"><img src ={twitter} alt="" /></a></div>
								<div className="socialIcons"><a href="#"><img src ={instagram} alt="" /></a></div>
								<div className="socialIcons"><a href="#"><img src ={facebook} alt="" /></a></div>
								<div className="socialIcons"><a href="#"><img src ={inSocial} alt="" /></a></div>
								<div className="socialIcons"><a href="#"><img src ={youtube} alt="" /></a></div>
							</div>
							<div className="language">
								<select
									className="selectLanguage"
									defaultValue={i18n.resolvedLanguage}
									onChange={(e) => {
										i18n.changeLanguage(e.target.value);
									}}
								>
									{languages.map(({ code, name, countryCode }) => {
										return (
											<option className="optionLanguage" key={countryCode} value={code}>
												{name}
											</option>
										);
									})}
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
