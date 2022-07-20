import React, {useState} from "react";
import logo from "../img/logo.svg"
import { Link } from "react-router-dom";
import SingUpWin from "../ModalWindow/SingUpWin";
import ContactWin from "../ModalWindow/ContactWin";
import {useTranslation} from "react-i18next";

const Header = () => {
	
	const { t, i18n } = useTranslation();
	
	const [text, setText] = useState(false);
	
	const setStyle = () => {
		setText(true);
	}
	
	const [windowActive, setWindowActive] = useState(false);
	
	const [open, setOpen] = useState(false);
	
	return(
		<header>
			<div className="head">
				<div className="head-box">
					<div className="logo">
						<Link to="/"><img src={logo} alt="" /></Link>
					</div>
					<ul className="nav">
						<li>
							<Link
								onMouseEnter={setStyle}
								onMouseLeave={() => setText(false)}
								className={text ? "colorActive" : "colorNoActive"}
								to="/">
								{t("navbar.home")}
							</Link>
						</li>
						<li>
							<Link to="/about">{t("navbar.about")}</Link>
						</li>
						<li>
							<Link to="/service">{t("navbar.services")}</Link>
						</li>
						<li>
							<Link to="/starWars">{t("navbar.starWars")}</Link>
						</li>
						<li>
							<a onClick={() => setOpen(true)}>{t("navbar.contact")}</a>
						</li>
						<li>
							<a
								onClick={() => setWindowActive(true)}
								className={windowActive ? "signNoActive" : "signActive"}
							>{t("navbar.signUp")}</a>
						</li>
					</ul>
				</div>
			</div>
			<SingUpWin active={windowActive} setActive={setWindowActive} />
			<ContactWin click={open} setClick={setOpen}/>
		</header>
	);
};

export default Header;
