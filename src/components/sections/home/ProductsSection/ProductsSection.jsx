import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import FeaturedProduct from "./FeaturedProduct";
import ProjectsGrid from "./ProjectsGrid";
import "./ProductsSection.css";

const ProductsSection = () => {
	const { t } = useTranslation();

	return (
		<section id="products" className="products-section">
			<div className="container">
				<SectionHeader
					tag={t("products.tag")}
					title={t("products.title")}
					description={t("products.description")}
				/>

				<FeaturedProduct />

				<ProjectsGrid />
			</div>
		</section>
	);
};

export default ProductsSection;
