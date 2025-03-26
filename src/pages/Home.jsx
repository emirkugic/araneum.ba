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

	useEffect(() => {
		const handleScroll = () => {
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
			{/* Header */}
			<header
				className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
			>
				<div className={styles.logo}>
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
				<div className={styles.heroOverlay}></div>
				<div className={styles.heroContent}>
					<h1>Innovative Software Solutions</h1>
					<p>
						We build custom software that helps businesses thrive in the digital
						world
					</p>
					<div className={styles.heroCta}>
						<a href="#services" className={styles.primaryBtn}>
							Our Services
						</a>
						<a href="#contact" className={styles.secondaryBtn}>
							Get in Touch
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className={styles.services}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>What We Do</span>
					<h2>Our Services</h2>
					<p>We deliver tailored solutions to meet your business needs</p>
				</div>
				<div className={styles.serviceGrid}>
					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faLaptopCode} />
						</div>
						<h3>Web Development</h3>
						<p>
							Custom websites and web applications designed to enhance your
							online presence and drive customer engagement.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Learn More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>

					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faServer} />
						</div>
						<h3>Software Solutions</h3>
						<p>
							Bespoke software applications tailored to streamline your
							operations and improve workflow efficiency.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Learn More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>

					<div className={styles.serviceCard}>
						<div className={styles.serviceIcon}>
							<FontAwesomeIcon icon={faMobile} />
						</div>
						<h3>Mobile Applications</h3>
						<p>
							Powerful, user-friendly mobile apps that provide seamless
							experiences across iOS and Android platforms.
						</p>
						<a href="#" className={styles.serviceLink}>
							<span>Learn More</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className={styles.about}>
				<div className={styles.aboutContent}>
					<div className={styles.aboutImage}>
						<img
							src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							alt="Team working together"
						/>
					</div>
					<div className={styles.aboutText}>
						<span className={styles.sectionTag}>Who We Are</span>
						<h2>About Araneum</h2>
						<p>
							We are a passionate team of developers, designers, and strategists
							dedicated to creating innovative digital solutions that solve
							real-world problems.
						</p>
						<p>
							With years of experience in software development, we combine
							technical expertise with creative thinking to deliver products
							that exceed expectations.
						</p>
						<div className={styles.aboutStats}>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>50+</span>
								<span className={styles.statLabel}>Projects Completed</span>
							</div>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>30+</span>
								<span className={styles.statLabel}>Happy Clients</span>
							</div>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>5+</span>
								<span className={styles.statLabel}>Years Experience</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Product Section */}
			<section id="products" className={styles.featuredProduct}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>Our Products</span>
					<h2>Featured Solution</h2>
					<p>Our flagship product for educational institutions</p>
				</div>
				<div className={styles.productContent}>
					<div className={styles.productInfo}>
						<h3>mojDnevnik</h3>
						<p className={styles.productSubtitle}>School Management System</p>
						<p>
							A comprehensive platform designed to streamline educational
							processes, enhance communication, and simplify administrative
							tasks for schools of all sizes.
						</p>
						<ul className={styles.productFeatures}>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Student Information
								Management
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Grade Tracking &
								Reporting
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Attendance Monitoring
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Teacher-Parent
								Communication
							</li>
							<li>
								<FontAwesomeIcon icon={faCheckCircle} /> Resource Scheduling
							</li>
						</ul>
						<a
							href="https://mojdnevnik.araneum.ba"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.productBtn}
						>
							Explore mojDnevnik <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
					<div className={styles.productImage}>
						<img
							src="https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							alt="School Management System Interface"
						/>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className={styles.testimonials}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>Testimonials</span>
					<h2>What Our Clients Say</h2>
					<p>Don't just take our word for it</p>
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
						<p>
							Ready to discuss your project? We're here to help transform your
							ideas into reality.
						</p>
						<div className={styles.contactDetails}>
							<div className={styles.contactItem}>
								<FontAwesomeIcon
									icon={faEnvelope}
									className={styles.contactIcon}
								/>
								<div>
									<h4>Email</h4>
									<p>info@araneum.ba</p>
								</div>
							</div>
							<div className={styles.contactItem}>
								<FontAwesomeIcon
									icon={faPhone}
									className={styles.contactIcon}
								/>
								<div>
									<h4>Phone</h4>
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
						<h3>araneum</h3>
						<p>
							Building innovative software solutions that drive digital
							transformation and business growth.
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
