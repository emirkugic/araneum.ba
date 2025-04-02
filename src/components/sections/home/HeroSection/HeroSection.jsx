import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Button from "../../../common/Button/Button";
import CodeEditor from "../../../common/CodeEditor/CodeEditor.jsx";
import "./HeroSection.css";

const HeroSection = () => {
	const { t, i18n } = useTranslation();
	const heroTextRef = useRef(null);

	// Typing effect for hero section - improved version
	useEffect(() => {
		if (!heroTextRef.current) return;

		const texts = t("hero.typingWords", { returnObjects: true });
		let currentIndex = 0;
		let charIndex = 0;
		let isDeleting = false;
		let typingTimer = null;

		const type = () => {
			const currentText = texts[currentIndex];

			if (heroTextRef.current) {
				// Protection in case component unmounts
				if (isDeleting) {
					heroTextRef.current.textContent = currentText.substring(
						0,
						charIndex - 1
					);
					charIndex--;
				} else {
					heroTextRef.current.textContent = currentText.substring(
						0,
						charIndex + 1
					);
					charIndex++;
				}

				let typingSpeed = isDeleting ? 50 : 100;

				if (!isDeleting && charIndex === currentText.length) {
					isDeleting = true;
					typingSpeed = 1000; // Pause at end (reduced from 1500 to match portfolio)
				} else if (isDeleting && charIndex === 0) {
					isDeleting = false;
					currentIndex = (currentIndex + 1) % texts.length;
					typingSpeed = 500; // Pause before typing next
				}

				typingTimer = setTimeout(type, typingSpeed);
			}
		};

		// Reset and start animation
		if (heroTextRef.current) {
			heroTextRef.current.textContent = "";
			charIndex = 0;
			isDeleting = false;
			currentIndex = 0;
			typingTimer = setTimeout(type, 200);
		}

		return () => {
			clearTimeout(typingTimer);
		};
	}, [t, i18n.language]); // Re-run when language changes

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
	};

	// SVG icon components
	const ArrowRightIcon = () => (
		<svg
			width="20"
			height="20"
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
	);

	const LoginIcon = () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M7 12H21M21 12L18 9M21 12L18 15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	return (
		<section id="home" className="hero-section">
			<div className="container">
				<div className="hero-content">
					<div className="hero-text-container reveal fade-right">
						<h1 className="hero-title">
							<span className="hero-subtitle">{t("hero.subtitle")}</span>
							<span className="hero-tagline">
								<Trans i18nKey="hero.tagline">
									Next-Gen <span className="accent">Software</span>
								</Trans>
							</span>
							<span className="dynamic-text">
								<span className="static-text">{t("hero.poweredBy")} </span>
								<span className="typing-container">
									<span ref={heroTextRef} className="typing-text"></span>
								</span>
							</span>
						</h1>

						<p className="hero-description">{t("hero.description")}</p>

						<div className="hero-buttons">
							<Button
								variant="primary"
								icon={<ArrowRightIcon />}
								onClick={() => scrollToSection("services")}
							>
								{t("hero.buttons.services")}
							</Button>

							<Button
								variant="secondary"
								icon={<LoginIcon />}
								onClick={() => scrollToSection("contact")}
							>
								{t("hero.buttons.connect")}
							</Button>
						</div>
					</div>

					<div className="hero-image-container reveal fade-left">
						<div className="hero-image-wrapper">
							<CodeEditor />
							<div className="floating-elements">
								<div className="tech-badge tech-badge-1">React</div>
								<div className="tech-badge tech-badge-2">.NET</div>
								<div className="tech-badge tech-badge-3">Node.js</div>
								<div className="tech-badge tech-badge-4">MongoDB</div>
								<div className="tech-badge tech-badge-5">AWS</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
