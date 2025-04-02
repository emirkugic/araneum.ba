import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import "./Navigation.css";

const Navigation = ({ isMenuOpen, activeSection, scrollToSection }) => {
	const { t } = useTranslation();

	const navItems = [
		{ id: "home", label: t("navigation.home") },
		{ id: "services", label: t("navigation.services") },
		{ id: "products", label: t("navigation.products") },
		{ id: "about", label: t("navigation.about") },
		{ id: "testimonials", label: t("navigation.testimonials") },
		{ id: "contact", label: t("navigation.contact") },
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
			<LanguageSwitcher />
		</nav>
	);
};

export default Navigation;
