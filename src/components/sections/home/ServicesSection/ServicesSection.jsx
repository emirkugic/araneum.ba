import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";

const ServicesSection = () => {
	const { t } = useTranslation();

	const services = [
		{
			id: "web-dev",
			title: t("services.items.webDev.title"),
			description: t("services.items.webDev.description"),
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M9 22V12H15V22"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			delay: "0.1s",
		},
		{
			id: "mobile-apps",
			title: t("services.items.mobileApps.title"),
			description: t("services.items.mobileApps.description"),
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			delay: "0.2s",
		},
		{
			id: "software-solutions",
			title: t("services.items.softwareSolutions.title"),
			description: t("services.items.softwareSolutions.description"),
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 16L12 12V3"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 12L4 8"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M20 8L12 4L4 8L12 12L20 8Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4 16L12 20L20 16"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			delay: "0.3s",
		},
	];

	return (
		<section id="services" className="services-section">
			<div className="container">
				<SectionHeader
					tag={t("services.tag")}
					title={t("services.title")}
					description={t("services.description")}
				/>

				<div className="services-grid">
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							title={service.title}
							description={service.description}
							icon={service.icon}
							delay={service.delay}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
