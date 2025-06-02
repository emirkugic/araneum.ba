import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import "./ProjectsGrid.css";

const ProjectsGrid = () => {
	const { t } = useTranslation();

	const projects = [
		{
			id: "glasnik",
			title: "Glasnik",
			description:
				"A modern news website with real-time updates and a user-friendly interface for reading and sharing articles.",
			image: "/glasnik.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/news",
			delay: "0.1s",
		},
		{
			id: "metalprec",
			title: "MetalPrec",
			description:
				"A CNC machine business website with a product catalog, pricing, and contact form for customers to request quotes.",
			image: "/metalprec.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/metalprec",
			delay: "0.2s",
		},
		{
			id: "barber",
			title: "Barber Reservation",
			description:
				"A barber reservation system with a booking calendar, user profiles, and notifications for appointments.",
			image: "/barber.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/barber",
			delay: "0.3s",
		},
		{
			id: "coffee",
			title: "Coffee Shop",
			description:
				"A coffee shop website with a menu, online ordering, and contact form for customers to place orders and make reservations.",
			image: "/coffee.png",
			tags: ["Web Development", "ReactJS"],
			link: "https://portfolio.araneum.ba/projects/coffee",
			delay: "0.4s",
		},
		{
			id: "photography",
			title: "Photography Portfolio",
			description:
				"A beautiful photography portfolio showcasing nature photography with a responsive design and smooth animations.",
			image: "/photography.png",
			tags: ["Web Development", "HTML/CSS/JS"],
			link: "https://portfolio.araneum.ba/projects/photography",
			delay: "0.5s",
		},
		{
			id: "novamas",
			title: "NovamaS Fashion Blog",
			description:
				"A fashion blog website for children and teens, featuring articles, product reviews, and a user-friendly interface for browsing content.",
			image: "/novamas.png",
			tags: ["Web Development", "ReactJS, Headless CMS"],
			link: "https://novamas.ba",
			delay: "0.6s",
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
