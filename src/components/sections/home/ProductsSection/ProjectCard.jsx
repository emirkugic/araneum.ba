import React from "react";
import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, tags, link, delay }) => {
	const { t } = useTranslation();

	return (
		<div
			className="project-card reveal fade-up"
			style={{ animationDelay: delay }}
		>
			<div className="project-card-image">
				<img src={image} alt={title} />
				<div className="project-card-overlay">
					<div className="project-tags">
						{tags.map((tag, index) => (
							<span key={index}>{tag}</span>
						))}
					</div>
				</div>
			</div>
			<div className="project-card-content">
				<h4>{title}</h4>
				<p>{description}</p>
				<a href={link} className="project-card-link">
					{t("products.otherProjects.viewProject")}
					<svg
						width="16"
						height="16"
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
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
