import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, icon, delay }) => {
	return (
		<div
			className="service-card reveal fade-up"
			style={{ animationDelay: delay }}
		>
			<div className="service-icon">{icon}</div>
			<h3 className="service-title">{title}</h3>
			<p className="service-description">{description}</p>
			<button className="service-link">
				Learn More
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 12H19M19 12L12 5M19 12L12 19"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ServiceCard;
