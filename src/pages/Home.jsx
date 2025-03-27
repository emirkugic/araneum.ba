import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faLaptopCode,
	faMobile,
	faServer,
	faEnvelope,
	faPhone,
	faBars,
	faTimes,
	faArrowRight,
	faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);

			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.container}>
			<div className={styles.backgroundEffect}></div>
			{/* Header */}
			<header
				className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
			>
				<div className={styles.logo}>
					<div className={styles.logoGlow}></div>
					<h1>araneum</h1>
				</div>
				<div className={styles.mobileMenuToggle} onClick={toggleMenu}>
					<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
				</div>
				<nav
					className={`${styles.nav} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
				>
					<ul>
						<li>
							<a href="#home" onClick={() => setIsMenuOpen(false)}>
								Home
							</a>
						</li>
						<li>
							<a href="#services" onClick={() => setIsMenuOpen(false)}>
								Services
							</a>
						</li>
						<li>
							<a href="#products" onClick={() => setIsMenuOpen(false)}>
								Products
							</a>
						</li>
						<li>
							<a href="#about" onClick={() => setIsMenuOpen(false)}>
								About
							</a>
						</li>
						<li>
							<a href="#contact" onClick={() => setIsMenuOpen(false)}>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>

			{/* Hero Section */}
			<section id="home" className={styles.hero}>
				<div className={styles.heroGrid}>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
					<div className={styles.gridItem}></div>
				</div>
				<div className={styles.heroContent}>
					<h1>
						Next-Gen Software <span>Solutions</span>
					</h1>
					<p>Building the digital future with cutting-edge technology</p>
					<div className={styles.heroCta}>
						<a href="#services" className={styles.primaryBtn}>
							Explore Services
						</a>
						<a href="#contact" className={styles.secondaryBtn}>
							Connect With Us
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className={styles.services}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>What We Do</span>
					<h2>Our Services</h2>
					<div className={styles.glowBar}></div>
					<p>Innovative solutions for the digital age</p>
				</div>
				<div className={styles.serviceGrid}>
					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faLaptopCode} />
						</div>
						<h3>Web Development</h3>
						<p>
							Cutting-edge web applications and sites using the latest
							technologies and frameworks.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Discover More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>

					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faServer} />
						</div>
						<h3>Software Solutions</h3>
						<p>
							Custom software applications engineered to optimize workflows and
							drive business growth.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Discover More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>

					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faMobile} />
						</div>
						<h3>Mobile Applications</h3>
						<p>
							Native and cross-platform mobile experiences designed for
							performance and usability.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Discover More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
				</div>
			</section>

			{/* Featured Product Section */}
			<section id="products" className={styles.featuredProduct}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>Our Products</span>
					<h2>Featured Solution</h2>
					<div className={styles.glowBar}></div>
					<p>Revolutionary school management system</p>
				</div>
				<div className={styles.productContent}>
					<div className={styles.productImageBox}>
						<div className={styles.productImageGlow}></div>
						<div className={styles.productImageFrame}>
							<img src="/image1.png" alt="School Management System Interface" />
						</div>
					</div>
					<div className={styles.productInfo}>
						<h3>
							mojDnevnik<span className={styles.blinkCursor}>_</span>
						</h3>
						<p className={styles.productSubtitle}>Next-Gen School Management</p>
						<p>
							A comprehensive digital platform revolutionizing how educational
							institutions manage their operations, with advanced features and
							an intuitive interface.
						</p>
						<ul className={styles.productFeatures}>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Student Information
								System
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Intelligent Grade
								Tracking
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Automated Attendance
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Real-time Communication
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Resource Management
							</li>
						</ul>
						<a
							href="https://mojdnevnik.araneum.ba"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.productBtn}
						>
							Explore Platform <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className={styles.about}>
				<div className={styles.aboutGrid}>
					<div className={styles.aboutGridBg}></div>
				</div>
				<div className={styles.aboutContent}>
					<div className={styles.aboutImageContainer}>
						<div className={styles.aboutImageGlow}></div>
						<div
							className={styles.aboutImage}
							style={{
								transform:
									scrollPosition > 100
										? `translateY(${Math.min(scrollPosition * 0.03, 20)}px)`
										: "none",
							}}
						>
							<div className={styles.aboutImageFrame}>
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Our Team"
								/>
							</div>
						</div>
					</div>
					<div className={styles.aboutText}>
						<span className={styles.sectionTag}>Who We Are</span>
						<h2>About Araneum</h2>
						<div className={styles.glowBar}></div>
						<p>
							We are a forward-thinking software development company dedicated
							to creating innovative digital solutions that push the boundaries
							of what's possible.
						</p>
						<p>
							Our team of expert developers, designers, and strategists work
							together to deliver cutting-edge products that transform
							businesses and enhance user experiences.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className={styles.testimonials}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>Client Feedback</span>
					<h2>What Our Clients Say</h2>
					<div className={styles.glowBar}></div>
					<p>Real experiences from our partners</p>
				</div>
				<div className={styles.testimonialContainer}>
					<div className={styles.testimonialCard}>
						<div className={styles.testimonialContent}>
							<p>
								"Araneum delivered an exceptional software solution that has
								transformed our business operations. Their team was
								professional, responsive, and truly understood our needs."
							</p>
						</div>
						<div className={styles.testimonialAuthor}>
							<div className={styles.authorImage}>
								<img
									src="https://randomuser.me/api/portraits/men/32.jpg"
									alt="Client"
								/>
							</div>
							<div className={styles.authorInfo}>
								<h4>Adnan Hodžić</h4>
								<p>CEO, TechCorp</p>
							</div>
						</div>
					</div>

					<div className={styles.testimonialCard}>
						<div className={styles.testimonialContent}>
							<p>
								"The mobile application developed by Araneum exceeded all our
								expectations. The attention to detail and user experience design
								is remarkable. Highly recommended!"
							</p>
						</div>
						<div className={styles.testimonialAuthor}>
							<div className={styles.authorImage}>
								<img
									src="https://randomuser.me/api/portraits/women/44.jpg"
									alt="Client"
								/>
							</div>
							<div className={styles.authorInfo}>
								<h4>Amina Bašić</h4>
								<p>Marketing Director, GrowthHub</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className={styles.contact}>
				<div className={styles.contactContent}>
					<div className={styles.contactInfo}>
						<span className={styles.sectionTag}>Get In Touch</span>
						<h2>Contact Us</h2>
						<div className={styles.glowBar}></div>
						<p>
							Ready to start your next digital project? Let's create something
							amazing together.
						</p>
						<div className={styles.contactDetails}>
							<div className={styles.contactItem}>
								<FontAwesomeIcon
									icon={faEnvelope}
									className={styles.contactIcon}
								/>
								<div>
									<h4>Email Us</h4>
									<p>info@araneum.ba</p>
								</div>
							</div>
							<div className={styles.contactItem}>
								<FontAwesomeIcon
									icon={faPhone}
									className={styles.contactIcon}
								/>
								<div>
									<h4>Call Us</h4>
									<p>+387 XX XXX XXX</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.contactForm}>
						<form>
							<div className={styles.formRow}>
								<div className={styles.formGroup}>
									<label>Name</label>
									<input type="text" placeholder="Your name" required />
								</div>
								<div className={styles.formGroup}>
									<label>Email</label>
									<input type="email" placeholder="Your email" required />
								</div>
							</div>
							<div className={styles.formGroup}>
								<label>Subject</label>
								<input type="text" placeholder="What is this regarding?" />
							</div>
							<div className={styles.formGroup}>
								<label>Message</label>
								<textarea
									placeholder="Tell us about your project"
									rows="4"
									required
								></textarea>
							</div>
							<button type="submit" className={styles.submitBtn}>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={styles.footer}>
				<div className={styles.footerContent}>
					<div className={styles.footerAbout}>
						<h3>
							araneum<span className={styles.blinkCursor}>_</span>
						</h3>
						<p>
							Crafting innovative digital solutions that power the future of
							business and technology.
						</p>
					</div>
					<div className={styles.footerNav}>
						<h4>Quick Links</h4>
						<ul>
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#products">Products</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerContact}>
						<h4>Contact Us</h4>
						<p>
							<FontAwesomeIcon icon={faEnvelope} /> info@araneum.ba
							<br />
							<FontAwesomeIcon icon={faPhone} /> +387 XX XXX XXX
						</p>
					</div>
				</div>
				<div className={styles.footerBottom}>
					<p>&copy; {new Date().getFullYear()} Araneum. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
