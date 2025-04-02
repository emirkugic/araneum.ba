import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-top">
					<div className="footer-info">
						<div className="footer-logo">
							<img
								src="/logo-long-white.png"
								alt="Araneum"
								className="footer-logo-image"
							/>
						</div>
						<p className="footer-description">{t("footer.description")}</p>
					</div>

					<div className="footer-links">
						<div className="footer-link-section">
							<h3 className="footer-link-title">{t("footer.quickLinks")}</h3>
							<ul className="footer-link-list">
								<li>
									<button onClick={() => scrollToSection("home")}>
										{t("navigation.home")}
									</button>
								</li>
								<li>
									<button onClick={() => scrollToSection("services")}>
										{t("navigation.services")}
									</button>
								</li>
								<li>
									<button onClick={() => scrollToSection("products")}>
										{t("navigation.products")}
									</button>
								</li>
								<li>
									<button onClick={() => scrollToSection("about")}>
										{t("navigation.about")}
									</button>
								</li>
								<li>
									<button onClick={() => scrollToSection("contact")}>
										{t("navigation.contact")}
									</button>
								</li>
							</ul>
						</div>

						<div className="footer-link-section">
							<h3 className="footer-link-title">{t("footer.services")}</h3>
							<ul className="footer-link-list">
								<li>
									<a href="#">{t("footer.servicesList.webDev")}</a>
								</li>
								<li>
									<a href="#">{t("footer.servicesList.mobileApps")}</a>
								</li>
								<li>
									<a href="#">{t("footer.servicesList.softwareSolutions")}</a>
								</li>
								<li>
									<a href="#">{t("footer.servicesList.uxui")}</a>
								</li>
								<li>
									<a href="#">{t("footer.servicesList.consulting")}</a>
								</li>
							</ul>
						</div>

						<div className="footer-link-section">
							<h3 className="footer-link-title">{t("navigation.contact")}</h3>
							<ul className="footer-contact-list">
								<li>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 6L12 13L2 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span>info@araneum.ba</span>
								</li>
								<li>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8221C20.3769 21.9108 20.0974 21.9434 19.82 21.918C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09451 3.90347 2.12693 3.62476 2.21476 3.36162C2.30258 3.09849 2.44486 2.85669 2.63207 2.65162C2.81928 2.44655 3.04748 2.28271 3.30179 2.17052C3.55611 2.05834 3.83096 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23651 4.68007 9.47149 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5285 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span>+387 62 909 200</span>
								</li>
								<li>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									{/* <span>Sarajevo, Bosnia</span> */}
									{/* translate bosnia */}
									<span>{t("footer.address")}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p className="copyright">
						&copy; {new Date().getFullYear()} Araneum. {t("footer.copyright")}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
