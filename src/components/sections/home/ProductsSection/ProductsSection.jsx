import React from "react";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import FeaturedProduct from "./FeaturedProduct";
import ProjectsGrid from "./ProjectsGrid";
import "./ProductsSection.css";

const ProductsSection = () => {
	return (
		<section id="products" className="products-section">
			<div className="container">
				<SectionHeader
					tag="Our Products"
					title="Featured Solution"
					description="Discover our flagship product that's revolutionizing the education management landscape"
				/>

				<FeaturedProduct />

				<ProjectsGrid />
			</div>
		</section>
	);
};

export default ProductsSection;
