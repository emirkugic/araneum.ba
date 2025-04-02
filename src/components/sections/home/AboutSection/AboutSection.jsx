import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutSection.css";

const AboutSection = () => {
	const { t } = useTranslation();

	return (
		<section id="about" className="about-section">
			<div className="container">
				<div className="about-content">
					<div className="about-image reveal fade-right">
						<div className="about-image-glow"></div>
						<div className="about-image-frame">
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="Araneum Team"
							/>
						</div>
					</div>

					<div className="about-info reveal fade-left">
						<span className="section-tag">{t("about.tag")}</span>
						<h2 className="about-title">{t("about.title")}</h2>
						<div className="title-underline"></div>

						<p className="about-description">{t("about.description1")}</p>

						<p className="about-description">{t("about.description2")}</p>

						{/* 
                        <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        </div>
                        */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
