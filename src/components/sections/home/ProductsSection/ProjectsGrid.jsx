import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import "./ProjectsGrid.css";

const ProjectsGrid = () => {
	const { t } = useTranslation();

	const projects = [
		{
			id: "metalprec",
			title: t("products.otherProjects.items.metalprec.title"),
			description: t("products.otherProjects.items.metalprec.description"),
			image: "/metalprec.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/metalprec",
			delay: "0.2s",
		},
		{
			id: "mechanic",
			title: t("products.otherProjects.items.mechanic.title"),
			description: t("products.otherProjects.items.mechanic.description"),
			image: "/mechanic.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://bosch-automehanicar.araneum.ba/",
			delay: "0.3s",
		},
		{
			id: "barber",
			title: t("products.otherProjects.items.barber.title"),
			description: t("products.otherProjects.items.barber.description"),
			image: "/barber.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/barber",
			delay: "0.4s",
		},
		{
			id: "coffee",
			title: t("products.otherProjects.items.coffee.title"),
			description: t("products.otherProjects.items.coffee.description"),
			image: "/coffee.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/coffee",
			delay: "0.5s",
		},
		{
			id: "electrician",
			title: t("products.otherProjects.items.electrician.title"),
			description: t("products.otherProjects.items.electrician.description"),
			image: "/electrician.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://elektricar.araneum.ba/",
			delay: "0.6s",
		},
		{
			id: "photography",
			title: t("products.otherProjects.items.photography.title"),
			description: t("products.otherProjects.items.photography.description"),
			image: "/photography.png",
			tags: ["Web Development", "HTML/CSS/JS"],
			link: "https://portfolio.araneum.ba/projects/photography",
			delay: "0.7s",
		},
		{
			id: "glasnik",
			title: t("products.otherProjects.items.glasnik.title"),
			description: t("products.otherProjects.items.glasnik.description"),
			image: "/glasnik.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/news",
			delay: "0.8s",
		},
		{
			id: "novamas",
			title: t("products.otherProjects.items.novamas.title"),
			description: t("products.otherProjects.items.novamas.description"),
			image: "/novamas.png",
			tags: ["Web Development", "ReactJS, Headless CMS"],
			link: "https://novamas.ba",
			delay: "0.9s",
		},
	];

	return (
		<div className="projects-section">
			<h3 className="projects-section-title reveal fade-up">
				{t("products.otherProjects.title")}
			</h3>
			<div className="projects-grid">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						image={project.image}
						tags={project.tags}
						link={project.link}
						delay={project.delay}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsGrid;
