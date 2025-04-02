import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, role, text, image, delay }) => {
	return (
		<div
			className="testimonial-card reveal fade-up"
			style={{ animationDelay: delay }}
		>
			<div className="testimonial-content">
				<svg
					className="quote-icon"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V19M16 11H12C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9V7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5H13C13.5304 5 14.0391 5.21071 14.4142 5.58579C14.7893 5.96086 15 6.46957 15 7V19"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<p className="testimonial-text">{text}</p>
			</div>
			<div className="testimonial-author">
				<div className="author-image">
					<img src={image} alt={name} />
				</div>
				<div className="author-info">
					<h4 className="author-name">{name}</h4>
					<p className="author-role">{role}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
