import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

const ContactSection = () => {
	const { t } = useTranslation();

	return (
		<section id="contact" className="contact-section">
			<div className="container">
				<SectionHeader
					tag={t("contact.tag")}
					title={t("contact.title")}
					description={t("contact.description")}
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
