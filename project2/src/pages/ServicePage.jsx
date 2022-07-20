import React from 'react';
import "../styles/ServicePage.scss"
import computer from "../img/computer.svg"
import call from "../img/call.svg"
import roadMap from "../img/roadmap.svg"

const ServicePage = () => {
	return (
		<>
			<div className="service-box">
				<div className="service-content">
						<p className="service-title">Our Service</p>
						<p className="service-description">We provide the best services for our customers</p>
					<div className="service-container">
						<div className="service-content-box">
							<div className="design-box"></div>
							<div className="content-box">
								<p className="roadMap">
									<img src={roadMap} alt="/" />
								</p>
								<p className="content-title">Road Map</p>
								<p className="content-description">
									We'll help you put together the best RoadMap for you<br/>
									based on your employment. With our RoapMap you can<br/>
									learn the language in a short period of time and find a job.
								</p>
							</div>
							<button className="find-more">Find Out More</button>
						</div>
						<div className="service-content-box">
							<div className="design-box"></div>
							<div className="content-box">
								<p className="computer">
									<img src={computer} alt="/" />
								</p>
								<p className="content-title">Programming languages</p>
								<p className="content-description">
									We will help you choose a programming language and learn it.<br/>
									Here you can learn languages such as JS, Java, Python, C++,<br/>
									C#, Ruby and many others
								</p>
							</div>
							<button className="find-more">Find Out More</button>
						</div>
						<div className="service-content-box">
							<div className="design-box"></div>
							<div className="content-box">
								<p className="call">
									<img src={call} alt="/" />
								</p>
								<p className="content-title">Professional coaches</p>
								<p className="content-description">
									Our coaches will help you to make your first project.<br/>
									We have a special program, after studying which you can<br/>
									turn from a beginner into a real IT-specialist
								</p>
							</div>
							<button className="find-more">Find Out More</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicePage;