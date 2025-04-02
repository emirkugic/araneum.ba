import React from "react";
import "./Navigation.css";

const Navigation = ({ isMenuOpen, activeSection, scrollToSection }) => {
	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "services", label: "Services" },
		{ id: "products", label: "Products" },
		{ id: "about", label: "About" },
		{ id: "testimonials", label: "Testimonials" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
			<ul className="nav-list">
				{navItems.map((item) => (
					<li
						key={item.id}
						className={activeSection === item.id ? "active" : ""}
					>
						<button onClick={() => scrollToSection(item.id)}>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
