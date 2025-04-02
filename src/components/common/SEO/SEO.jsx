import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEO = ({
	title,
	description,
	image = "/cover.png",
	url = window.location.href,
	type = "website",
}) => {
	const { t, i18n } = useTranslation();

	// Default values if not provided
	const metaTitle = title || "Araneum - Building The Digital Future";
	const metaDescription = description || t("hero.description");
	const metaImage = `${window.location.origin}${image}`;

	return (
		<Helmet>
			{/* Basic meta tags */}
			<title>{metaTitle}</title>
			<meta name="description" content={metaDescription} />
			<meta name="image" content={metaImage} />
			<link rel="canonical" href={url} />
			<meta name="language" content={i18n.language} />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>

			{/* Open Graph tags (Facebook, LinkedIn) */}
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:image" content={metaImage} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content="Araneum" />
			<meta property="og:image:width" content="1920" />
			<meta property="og:image:height" content="1080" />
			<meta property="og:locale" content={i18n.language} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:description" content={metaDescription} />
			<meta name="twitter:image" content={metaImage} />

			{/* Additional meta tags for better SEO */}
			<meta name="theme-color" content="#6e57ff" />
			<meta name="robots" content="index, follow" />
			<link rel="icon" href="/favicon.ico" />
		</Helmet>
	);
};

export default SEO;
