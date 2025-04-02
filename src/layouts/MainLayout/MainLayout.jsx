import React, { useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import BackgroundElements from "../../components/layout/BackgroundElements/BackgroundElements";
import "./MainLayout.css";

/**
 * Main layout wrapper component
 * @param {ReactNode} children - Page content
 */
const MainLayout = ({ children }) => {
	// Handle scroll animations
	useEffect(() => {
		// Reveal elements on scroll
		const revealElements = document.querySelectorAll(".reveal");

		const revealOnScroll = () => {
			revealElements.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;

				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add("active");
				}
			});
		};

		window.addEventListener("scroll", revealOnScroll);

		// Initialize
		revealOnScroll();

		return () => {
			window.removeEventListener("scroll", revealOnScroll);
		};
	}, []);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="main-layout">
			<BackgroundElements />
			<Header />
			<main className="main-content">{children}</main>
			<Footer scrollToSection={scrollToSection} />
		</div>
	);
};

export default MainLayout;
