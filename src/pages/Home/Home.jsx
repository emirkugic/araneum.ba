import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/sections/home/HeroSection/HeroSection";
import ServicesSection from "../../components/sections/home/ServicesSection/ServicesSection";
import ProductsSection from "../../components/sections/home/ProductsSection/ProductsSection";
import AboutSection from "../../components/sections/home/AboutSection/AboutSection.jsx";
import TestimonialsSection from "../../components/sections/home/TestimonialsSection/TestimonialsSection";
import ContactSection from "../../components/sections/home/ContactSection/ContactSection";
import SEO from "../../components/common/SEO/SEO";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO
				title="Araneum - Building The Digital Future"
				description={t("hero.description")}
				image="/cover.png"
				type="website"
			/>
			<HeroSection />
			<ServicesSection />
			<ProductsSection />
			<AboutSection />
			{/* <TestimonialsSection /> */}
			<ContactSection />
		</>
	);
};

export default Home;
