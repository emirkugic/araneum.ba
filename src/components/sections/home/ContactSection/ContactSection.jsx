import React from "react";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

const ContactSection = () => {
	return (
		<section id="contact" className="contact-section">
			<div className="container">
				<SectionHeader
					tag="Get In Touch"
					title="Contact Us"
					description="Ready to start your next digital project? Let's create something amazing together."
				/>

				<div className="contact-content">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
