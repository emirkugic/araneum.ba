import React, { useState, useEffect, useRef } from "react";
import styles from "./Home.module.css";

const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const heroTextRef = useRef(null);

	// Handle scroll effects
	useEffect(() => {
		const handleScroll = () => {
			// Update header style when scrolled
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			// Update active section based on scroll position
			const sections = document.querySelectorAll("section[id]");
			const scrollPosition = window.pageYOffset + 100;

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute("id");

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					setActiveSection(sectionId);
				}
			});
		};

		// Reveal elements on scroll
		const revealElements = document.querySelectorAll(".reveal");
		const revealOnScroll = () => {
			revealElements.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;

				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add("active");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("scroll", revealOnScroll);

		// Initialize
		handleScroll();
		revealOnScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("scroll", revealOnScroll);
		};
	}, []);

	// Typing effect for hero section
	useEffect(() => {
		if (!heroTextRef.current) return;

		const texts = ["Innovation", "Excellence", "Future", "Solutions"];
		let currentIndex = 0;
		let charIndex = 0;
		let isDeleting = false;
		let typingTimer = null;

		const type = () => {
			const currentText = texts[currentIndex];

			if (heroTextRef.current) {
				if (isDeleting) {
					heroTextRef.current.textContent = currentText.substring(
						0,
						charIndex - 1
					);
					charIndex--;
				} else {
					heroTextRef.current.textContent = currentText.substring(
						0,
						charIndex + 1
					);
					charIndex++;
				}

				let typingSpeed = isDeleting ? 50 : 100;

				if (!isDeleting && charIndex === currentText.length) {
					isDeleting = true;
					typingSpeed = 1500; // Pause at end
				} else if (isDeleting && charIndex === 0) {
					isDeleting = false;
					currentIndex = (currentIndex + 1) % texts.length;
					typingSpeed = 500; // Pause before typing next
				}

				typingTimer = setTimeout(type, typingSpeed);
			}
		};

		// Reset and start animation
		if (heroTextRef.current) {
			heroTextRef.current.textContent = "";
			charIndex = 0;
			isDeleting = false;
			currentIndex = 0;
			typingTimer = setTimeout(type, 200);
		}

		return () => {
			clearTimeout(typingTimer);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = "auto";
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			closeMenu();
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className={styles.container}>
			{/* Tech Background Elements */}
			<div className={styles.backgroundElements}>
				<div className={styles.gridBackground}></div>
				<div className={styles.gradientOrbs}>
					<div className={styles.orb1}></div>
					<div className={styles.orb2}></div>
					<div className={styles.orb3}></div>
				</div>
				<div className={styles.particlesDots}></div>
			</div>

			{/* Header */}
			<header
				className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
			>
				<div className={styles.headerContainer}>
					<div className={styles.logo}>
						<div className={styles.logoGlow}></div>
						<span className={styles.logoText}>
							araneum<span className={styles.blinkCursor}>_</span>
						</span>
					</div>

					<nav
						className={`${styles.navigation} ${
							isMenuOpen ? styles.active : ""
						}`}
					>
						<ul className={styles.navList}>
							<li className={activeSection === "home" ? styles.active : ""}>
								<button onClick={() => scrollToSection("home")}>Home</button>
							</li>
							<li className={activeSection === "services" ? styles.active : ""}>
								<button onClick={() => scrollToSection("services")}>
									Services
								</button>
							</li>
							<li className={activeSection === "products" ? styles.active : ""}>
								<button onClick={() => scrollToSection("products")}>
									Products
								</button>
							</li>
							<li className={activeSection === "about" ? styles.active : ""}>
								<button onClick={() => scrollToSection("about")}>About</button>
							</li>
							<li
								className={
									activeSection === "testimonials" ? styles.active : ""
								}
							>
								<button onClick={() => scrollToSection("testimonials")}>
									Testimonials
								</button>
							</li>
							<li className={activeSection === "contact" ? styles.active : ""}>
								<button onClick={() => scrollToSection("contact")}>
									Contact
								</button>
							</li>
						</ul>
					</nav>

					<div className={styles.mobileMenuToggle} onClick={toggleMenu}>
						<div
							className={`${styles.hamburger} ${
								isMenuOpen ? styles.active : ""
							}`}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section id="home" className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={`${styles.heroTextContainer} reveal fade-right`}>
						<h1 className={styles.heroTitle}>
							<span className={styles.heroSubtitle}>
								Building The Digital Future
							</span>
							<span className={styles.heroTagline}>
								Next-Gen <span className={styles.accent}>Software</span>
							</span>
							<span className={styles.dynamicText}>
								<span className={styles.staticText}>Powered by </span>
								<span ref={heroTextRef} className={styles.typingText}></span>
							</span>
						</h1>

						<p className={styles.heroDescription}>
							We create cutting-edge digital solutions that transform businesses
							and elevate user experiences in the technology-driven world.
						</p>

						<div className={styles.heroButtons}>
							<button
								className={`${styles.primaryButton} ${styles.glowButton}`}
								onClick={() => scrollToSection("services")}
							>
								Our Services
								<span className={styles.buttonIcon}>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 12H19M19 12L12 5M19 12L12 19"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</button>

							<button
								className={`${styles.secondaryButton} ${styles.outlineButton}`}
								onClick={() => scrollToSection("contact")}
							>
								Connect With Us
								<span className={styles.buttonIcon}>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M7 12H21M21 12L18 9M21 12L18 15"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>

					<div className={`${styles.heroImageContainer} reveal fade-left`}>
						<div className={styles.heroImageWrapper}>
							<div className={styles.codeEditorCard}>
								<div className={styles.codeEditorHeader}>
									<div className={styles.editorControls}>
										<span className={styles.editorControl}></span>
										<span className={styles.editorControl}></span>
										<span className={styles.editorControl}></span>
									</div>
									<div className={styles.editorTitle}>araneum.js</div>
								</div>
								<div className={styles.codeEditorBody}>
									<div className={styles.codeLine}>
										<span className={styles.codeComment}>
											// Araneum - Building the future
										</span>
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeKeyword}>class</span>
										<span className={styles.codeClass}> AraneumSolutions </span>
										{"{"}
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeKeyword}>
											constructor
										</span>() {"{"}
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeThis}>this</span>.technologies =
										[<span className={styles.codeString}>'Web'</span>,
										<span className={styles.codeString}> 'Mobile'</span>,
										<span className={styles.codeString}> 'Cloud'</span>];
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeThis}>this</span>.expertise ={" "}
										{"{"}
										<span className={styles.codeProperty}>years</span>:
										<span className={styles.codeNumber}> 10</span>,
										<span className={styles.codeProperty}> clients</span>:
										<span className={styles.codeNumber}> 100</span>
										{"}"};
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										{"}"}
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeFunction}>createSolution</span>(
										<span className={styles.codeParam}>client</span>) {"{"}
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeKeyword}>return</span> {"{"}
										<span className={styles.codeProperty}>innovation</span>:
										<span className={styles.codeString}> 'Advanced'</span>,
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeProperty}>quality</span>:
										<span className={styles.codeString}> 'Exceptional'</span>,
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeIndent}></span>
										<span className={styles.codeProperty}>support</span>:
										<span className={styles.codeString}> '24/7'</span>
										{"}"};
									</div>
									<div className={styles.codeLine}>
										<span className={styles.codeIndent}></span>
										{"}"}
									</div>
									<div className={styles.codeLine}>{"}"}</div>
								</div>
							</div>

							<div className={styles.floatingElements}>
								<div className={`${styles.techBadge} ${styles.techBadge1}`}>
									React
								</div>
								<div className={`${styles.techBadge} ${styles.techBadge2}`}>
									.NET
								</div>
								<div className={`${styles.techBadge} ${styles.techBadge3}`}>
									Node.js
								</div>
								<div className={`${styles.techBadge} ${styles.techBadge4}`}>
									MongoDB
								</div>
								<div className={`${styles.techBadge} ${styles.techBadge5}`}>
									AWS
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={styles.scrollIndicator}
					onClick={() => scrollToSection("services")}
				>
					<div className={styles.mouseIcon}>
						<span className={styles.mouseWheel}></span>
					</div>
					<span className={styles.scrollText}>Scroll Down</span>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className={styles.services}>
				<div className={styles.sectionContainer}>
					<div className={`${styles.sectionHeader} reveal fade-up`}>
						<span className={styles.sectionTag}>What We Do</span>
						<h2 className={styles.sectionTitle}>Our Services</h2>
						<div className={styles.titleUnderline}></div>
						<p className={styles.sectionDescription}>
							We offer comprehensive software solutions designed to elevate your
							business with cutting-edge technology and exceptional user
							experiences.
						</p>
					</div>

					<div className={styles.servicesGrid}>
						<div
							className={`${styles.serviceCard} reveal fade-up`}
							style={{ animationDelay: "0.1s" }}
						>
							<div className={styles.serviceIcon}>
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9 22V12H15V22"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<h3 className={styles.serviceTitle}>Web Development</h3>
							<p className={styles.serviceDescription}>
								Custom websites and web applications built with modern
								frameworks and best practices, delivering exceptional user
								experiences.
							</p>
							<button className={styles.serviceLink}>
								Learn More
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12H19M19 12L12 5M19 12L12 19"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>

						<div
							className={`${styles.serviceCard} reveal fade-up`}
							style={{ animationDelay: "0.2s" }}
						>
							<div className={styles.serviceIcon}>
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<h3 className={styles.serviceTitle}>Mobile Applications</h3>
							<p className={styles.serviceDescription}>
								Native and cross-platform mobile apps that provide seamless
								experiences across iOS and Android devices with innovative
								features.
							</p>
							<button className={styles.serviceLink}>
								Learn More
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12H19M19 12L12 5M19 12L12 19"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>

						<div
							className={`${styles.serviceCard} reveal fade-up`}
							style={{ animationDelay: "0.3s" }}
						>
							<div className={styles.serviceIcon}>
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20 16L12 12V3"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12 12L4 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M20 8L12 4L4 8L12 12L20 8Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M4 16L12 20L20 16"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<h3 className={styles.serviceTitle}>Software Solutions</h3>
							<p className={styles.serviceDescription}>
								Enterprise-grade software solutions that optimize workflows,
								increase efficiency, and drive business growth with scalable
								architecture.
							</p>
							<button className={styles.serviceLink}>
								Learn More
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12H19M19 12L12 5M19 12L12 19"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Product Section */}
			<section id="products" className={styles.featuredProduct}>
				<div className={styles.sectionContainer}>
					<div className={`${styles.sectionHeader} reveal fade-up`}>
						<span className={styles.sectionTag}>Our Products</span>
						<h2 className={styles.sectionTitle}>Featured Solution</h2>
						<div className={styles.titleUnderline}></div>
						<p className={styles.sectionDescription}>
							Discover our flagship product that's revolutionizing the education
							management landscape
						</p>
					</div>

					<div className={styles.productShowcase}>
						<div className={`${styles.productImage} reveal fade-right`}>
							<div className={styles.productImageGlow}></div>
							<div className={styles.productImageFrame}>
								<img
									src="/image1.png"
									alt="mojDnevnik School Management System"
								/>
							</div>
						</div>

						<div className={`${styles.productInfo} reveal fade-left`}>
							<h3 className={styles.productTitle}>
								mojDnevnik<span className={styles.blinkCursor}>_</span>
							</h3>
							<span className={styles.productTagline}>
								Next-Gen School Management
							</span>

							<p className={styles.productDescription}>
								A comprehensive digital platform revolutionizing how educational
								institutions manage their operations, with advanced features and
								an intuitive interface designed for teachers, students, and
								parents.
							</p>

							<ul className={styles.productFeatures}>
								<li className={styles.productFeature}>
									<span className={styles.featureIcon}>
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
									</span>
									<span>Student Information System</span>
								</li>
								<li className={styles.productFeature}>
									<span className={styles.featureIcon}>
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
									</span>
									<span>Intelligent Grade Tracking</span>
								</li>
								<li className={styles.productFeature}>
									<span className={styles.featureIcon}>
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
									</span>
									<span>Automated Attendance</span>
								</li>
								<li className={styles.productFeature}>
									<span className={styles.featureIcon}>
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
									</span>
									<span>Real-time Communication</span>
								</li>
								<li className={styles.productFeature}>
									<span className={styles.featureIcon}>
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
									</span>
									<span>Resource Management</span>
								</li>
							</ul>

							<a
								href="https://mojdnevnik.araneum.ba"
								className={styles.productLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Explore Platform
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
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className={styles.about}>
				<div className={styles.sectionContainer}>
					<div className={styles.aboutContent}>
						<div className={`${styles.aboutImage} reveal fade-right`}>
							<div className={styles.aboutImageGlow}></div>
							<div className={styles.aboutImageFrame}>
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Araneum Team"
								/>
							</div>
						</div>

						<div className={`${styles.aboutInfo} reveal fade-left`}>
							<span className={styles.sectionTag}>Who We Are</span>
							<h2 className={styles.aboutTitle}>About Araneum</h2>
							<div className={styles.titleUnderline}></div>

							<p className={styles.aboutDescription}>
								We are a forward-thinking software development company dedicated
								to creating innovative digital solutions that push the
								boundaries of what's possible in today's technology landscape.
							</p>

							<p className={styles.aboutDescription}>
								Our team of expert developers, designers, and strategists work
								together to deliver cutting-edge products that transform
								businesses and enhance user experiences across web, mobile, and
								cloud platforms.
							</p>

							<div className={styles.aboutStats}>
								<div className={styles.statItem}>
									<span className={styles.statNumber}>10+</span>
									<span className={styles.statLabel}>Years Experience</span>
								</div>
								<div className={styles.statItem}>
									<span className={styles.statNumber}>100+</span>
									<span className={styles.statLabel}>Projects Completed</span>
								</div>
								<div className={styles.statItem}>
									<span className={styles.statNumber}>50+</span>
									<span className={styles.statLabel}>Happy Clients</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className={styles.testimonials}>
				<div className={styles.sectionContainer}>
					<div className={`${styles.sectionHeader} reveal fade-up`}>
						<span className={styles.sectionTag}>What Clients Say</span>
						<h2 className={styles.sectionTitle}>Testimonials</h2>
						<div className={styles.titleUnderline}></div>
						<p className={styles.sectionDescription}>
							Don't just take our word for it – hear what our clients have to
							say about our work
						</p>
					</div>

					<div className={styles.testimonialsGrid}>
						<div
							className={`${styles.testimonialCard} reveal fade-up`}
							style={{ animationDelay: "0.1s" }}
						>
							<div className={styles.testimonialContent}>
								<svg
									className={styles.quoteIcon}
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V19M16 11H12C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9V7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5H13C13.5304 5 14.0391 5.21071 14.4142 5.58579C14.7893 5.96086 15 6.46957 15 7V19"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p className={styles.testimonialText}>
									Araneum delivered an exceptional software solution that has
									transformed our business operations. Their team was
									professional, responsive, and truly understood our needs from
									day one.
								</p>
							</div>
							<div className={styles.testimonialAuthor}>
								<div className={styles.authorImage}>
									<img
										src="https://randomuser.me/api/portraits/men/32.jpg"
										alt="Adnan Hodžić"
									/>
								</div>
								<div className={styles.authorInfo}>
									<h4 className={styles.authorName}>Adnan Hodžić</h4>
									<p className={styles.authorRole}>CEO, TechCorp</p>
								</div>
							</div>
						</div>

						<div
							className={`${styles.testimonialCard} reveal fade-up`}
							style={{ animationDelay: "0.2s" }}
						>
							<div className={styles.testimonialContent}>
								<svg
									className={styles.quoteIcon}
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V19M16 11H12C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9V7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5H13C13.5304 5 14.0391 5.21071 14.4142 5.58579C14.7893 5.96086 15 6.46957 15 7V19"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p className={styles.testimonialText}>
									The mobile application developed by Araneum exceeded all our
									expectations. The attention to detail and user experience
									design is remarkable. Their ongoing support has been
									invaluable to our success.
								</p>
							</div>
							<div className={styles.testimonialAuthor}>
								<div className={styles.authorImage}>
									<img
										src="https://randomuser.me/api/portraits/women/44.jpg"
										alt="Amina Bašić"
									/>
								</div>
								<div className={styles.authorInfo}>
									<h4 className={styles.authorName}>Amina Bašić</h4>
									<p className={styles.authorRole}>
										Marketing Director, GrowthHub
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className={styles.contact}>
				<div className={styles.sectionContainer}>
					<div className={`${styles.sectionHeader} reveal fade-up`}>
						<span className={styles.sectionTag}>Get In Touch</span>
						<h2 className={styles.sectionTitle}>Contact Us</h2>
						<div className={styles.titleUnderline}></div>
						<p className={styles.sectionDescription}>
							Ready to start your next digital project? Let's create something
							amazing together.
						</p>
					</div>

					<div className={styles.contactContent}>
						<div className={`${styles.contactInfo} reveal fade-right`}>
							<h3 className={styles.contactInfoTitle}>Contact Information</h3>
							<p className={styles.contactInfoDescription}>
								Have questions or want to discuss your project requirements?
								Reach out to us through any of the following channels.
							</p>

							<div className={styles.contactDetails}>
								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<svg
											width="24"
											height="24"
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
									</div>
									<div className={styles.contactDetail}>
										<h4>Phone</h4>
										<p>+387 XX XXX XXX</p>
									</div>
								</div>

								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<svg
											width="24"
											height="24"
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
									</div>
									<div className={styles.contactDetail}>
										<h4>Email</h4>
										<p>info@araneum.ba</p>
									</div>
								</div>

								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<svg
											width="24"
											height="24"
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
									</div>
									<div className={styles.contactDetail}>
										<h4>Location</h4>
										<p>Sarajevo, Bosnia</p>
									</div>
								</div>
							</div>

							<div className={styles.socialLinks}>
								<a href="#" className={styles.socialLink} aria-label="Facebook">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								<a href="#" className={styles.socialLink} aria-label="Twitter">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.6635 22.6608 4.39271 23 3Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								<a href="#" className={styles.socialLink} aria-label="LinkedIn">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M6 9H2V21H6V9Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								<a
									href="#"
									className={styles.socialLink}
									aria-label="Instagram"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.5 6.5H17.51"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
							</div>
						</div>

						<div className={`${styles.contactForm} reveal fade-left`}>
							<form className={styles.form}>
								<div className={styles.formRow}>
									<div className={styles.formGroup}>
										<label htmlFor="name">Name</label>
										<input
											type="text"
											id="name"
											placeholder="Your name"
											required
										/>
									</div>
									<div className={styles.formGroup}>
										<label htmlFor="email">Email</label>
										<input
											type="email"
											id="email"
											placeholder="Your email"
											required
										/>
									</div>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="subject">Subject</label>
									<input
										type="text"
										id="subject"
										placeholder="What is this regarding?"
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										placeholder="Tell us about your project"
										rows="4"
										required
									></textarea>
								</div>
								<button type="submit" className={styles.submitButton}>
									Send Message
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 2L11 13"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 2L15 22L11 13L2 9L22 2Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={styles.footer}>
				<div className={styles.footerContainer}>
					<div className={styles.footerTop}>
						<div className={styles.footerInfo}>
							<div className={styles.footerLogo}>
								<span className={styles.logoText}>
									araneum<span className={styles.blinkCursor}>_</span>
								</span>
							</div>
							<p className={styles.footerDescription}>
								Crafting innovative digital solutions that power the future of
								business and technology.
							</p>
						</div>

						<div className={styles.footerLinks}>
							<div className={styles.footerLinkSection}>
								<h3 className={styles.footerLinkTitle}>Quick Links</h3>
								<ul className={styles.footerLinkList}>
									<li>
										<button onClick={() => scrollToSection("home")}>
											Home
										</button>
									</li>
									<li>
										<button onClick={() => scrollToSection("services")}>
											Services
										</button>
									</li>
									<li>
										<button onClick={() => scrollToSection("products")}>
											Products
										</button>
									</li>
									<li>
										<button onClick={() => scrollToSection("about")}>
											About
										</button>
									</li>
									<li>
										<button onClick={() => scrollToSection("contact")}>
											Contact
										</button>
									</li>
								</ul>
							</div>

							<div className={styles.footerLinkSection}>
								<h3 className={styles.footerLinkTitle}>Services</h3>
								<ul className={styles.footerLinkList}>
									<li>
										<a href="#">Web Development</a>
									</li>
									<li>
										<a href="#">Mobile Applications</a>
									</li>
									<li>
										<a href="#">Software Solutions</a>
									</li>
									<li>
										<a href="#">UX/UI Design</a>
									</li>
									<li>
										<a href="#">Consulting</a>
									</li>
								</ul>
							</div>

							<div className={styles.footerLinkSection}>
								<h3 className={styles.footerLinkTitle}>Contact</h3>
								<ul className={styles.footerContactList}>
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
										<span>+387 XX XXX XXX</span>
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
										<span>Sarajevo, Bosnia</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.footerBottom}>
						<p className={styles.copyright}>
							&copy; {new Date().getFullYear()} Araneum. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
