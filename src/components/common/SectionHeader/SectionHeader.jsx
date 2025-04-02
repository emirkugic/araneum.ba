import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({ tag, title, description, className = "" }) => {
	return (
		<div className={`section-header reveal fade-up ${className}`}>
			{tag && <span className="section-tag">{tag}</span>}
			{title && (
				<>
					<h2 className="section-title">{title}</h2>
					<div className="title-underline"></div>
				</>
			)}
			{description && <p className="section-description">{description}</p>}
		</div>
	);
};

export default SectionHeader;
