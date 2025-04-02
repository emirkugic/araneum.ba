import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	// Handle scroll effects
	useEffect(() => {
		const handleScroll = () => {
			// Update header style when scrolled
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			// Update active section based on scroll position
			const sections = document.querySelectorAll("section[id]");
			const scrollPosition = window.pageYOffset + 100;

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute("id");

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					setActiveSection(sectionId);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		// Initialize
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = "auto";
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			closeMenu();
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
	};

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="header-container">
				<Logo />

				<Navigation
					isMenuOpen={isMenuOpen}
					activeSection={activeSection}
					scrollToSection={scrollToSection}
				/>

				<div className="mobile-menu-toggle" onClick={toggleMenu}>
					<div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
