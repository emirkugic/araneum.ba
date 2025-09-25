import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

// Import flag icons
import flagEN from "../../../assets/flags/en.svg";
import flagBS from "../../../assets/flags/bs.svg";
import flagHR from "../../../assets/flags/hr.svg";
import flagDE from "../../../assets/flags/de.svg";
import flagSR from "../../../assets/flags/sr.svg";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Language options with flags
	const languages = [
		{ code: "en", name: "English", flag: flagEN },
		{ code: "bs", name: "Bosanski", flag: flagBS },
		{ code: "hr", name: "Hrvatski", flag: flagHR },
		{ code: "sr", name: "Српски", flag: flagSR },
		{ code: "de", name: "Deutsch", flag: flagDE },
	];

	// Find current language
	const currentLanguage =
		languages.find((lang) => lang.code === i18n.language) || languages[0];

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const changeLanguage = (code) => {
		i18n.changeLanguage(code);
		setIsOpen(false);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="language-switcher" ref={dropdownRef}>
			<button className="language-dropdown-btn" onClick={toggleDropdown}>
				<img
					src={currentLanguage.flag}
					alt={currentLanguage.code}
					className="language-flag"
				/>
				<span className="language-name">
					{currentLanguage.code.toUpperCase()}
				</span>
				<svg
					className={`dropdown-arrow ${isOpen ? "open" : ""}`}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L5 5L9 1"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			{isOpen && (
				<ul className="language-dropdown">
					{languages.map((lang) => (
						<li key={lang.code}>
							<button
								className={`language-option ${
									i18n.language === lang.code ? "active" : ""
								}`}
								onClick={() => changeLanguage(lang.code)}
							>
								<img
									src={lang.flag}
									alt={lang.code}
									className="language-flag"
								/>
								<span className="language-option-name">{lang.name}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageSwitcher;
