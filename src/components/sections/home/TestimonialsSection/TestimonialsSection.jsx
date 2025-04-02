import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
	const { t } = useTranslation();

	const testimonials = [
		{
			id: 1,
			name: "Adnan Hodžić",
			role: "CEO, TechCorp",
			text: "Araneum delivered an exceptional software solution that has transformed our business operations. Their team was professional, responsive, and truly understood our needs from day one.",
			image: "https://randomuser.me/api/portraits/men/32.jpg",
			delay: "0.1s",
		},
		{
			id: 2,
			name: "Amina Bašić",
			role: "Marketing Director, GrowthHub",
			text: "The mobile application developed by Araneum exceeded all our expectations. The attention to detail and user experience design is remarkable. Their ongoing support has been invaluable to our success.",
			image: "https://randomuser.me/api/portraits/women/44.jpg",
			delay: "0.2s",
		},
	];

	return (
		<section id="testimonials" className="testimonials-section">
			<div className="container">
				<SectionHeader
					tag={t("testimonials.tag")}
					title={t("testimonials.title")}
					description={t("testimonials.description")}
				/>

				<div className="testimonials-grid">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							name={testimonial.name}
							role={testimonial.role}
							text={testimonial.text}
							image={testimonial.image}
							delay={testimonial.delay}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
