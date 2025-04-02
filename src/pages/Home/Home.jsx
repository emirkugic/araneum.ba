import React from "react";
import HeroSection from "../../components/sections/home/HeroSection/HeroSection";
import ServicesSection from "../../components/sections/home/ServicesSection/ServicesSection";
import ProductsSection from "../../components/sections/home/ProductsSection/ProductsSection";
import AboutSection from "../../components/sections/home/AboutSection/AboutSection.jsx";
import TestimonialsSection from "../../components/sections/home/TestimonialsSection/TestimonialsSection";
import ContactSection from "../../components/sections/home/ContactSection/ContactSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<ProductsSection />
			<AboutSection />
			<TestimonialsSection />
			<ContactSection />
		</>
	);
};

export default Home;
