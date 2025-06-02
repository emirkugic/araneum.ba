import React from "react";
import { useTranslation } from "react-i18next";
import "./FeaturedProduct.css";

const FeaturedProduct = () => {
	const { t } = useTranslation();
	const features = t("products.featuredProduct.features", {
		returnObjects: true,
	});

	const CheckIcon = () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 4L12 14.01L9 11.01"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const ExternalLinkIcon = () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3H21V9"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 14L21 3"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	return (
		<div className="product-showcase">
			<div className="product-image reveal fade-right">
				<div className="product-image-glow"></div>
				<div className="product-image-frame">
					<img src="/ednevnik.png" alt="mojDnevnik School Management System" />
				</div>
			</div>

			<div className="product-info reveal fade-left">
				<h3 className="product-title">
					mojDnevnik<span className="blink-cursor">_</span>
				</h3>
				<span className="product-tagline">
					{t("products.featuredProduct.tagline")}
				</span>

				<p className="product-description">
					{t("products.featuredProduct.description")}
				</p>

				<ul className="product-features">
					{features.map((feature, index) => (
						<li key={index} className="product-feature">
							<span className="feature-icon">
								<CheckIcon />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>

				<a
					href="https://mojdnevnik.araneum.ba"
					className="product-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("products.featuredProduct.exploreButton")}
					<ExternalLinkIcon />
				</a>
			</div>
		</div>
	);
};

export default FeaturedProduct;
