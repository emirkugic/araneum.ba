import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
	const [formStatus, setFormStatus] = useState({
		submitting: false,
		success: false,
		error: null,
	});

	// Handle contact form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Set submitting state
		setFormStatus({ submitting: true, success: false, error: null });

		// Get form data
		const form = e.target;
		const formData = new FormData(form);

		try {
			// Use the provided Cloudflare Worker URL
			const response = await fetch(
				"https://araneum-contact.emirkugic0.workers.dev/",
				{
					method: "POST",
					body: formData,
				}
			);

			if (response.ok) {
				// Form submitted successfully
				setFormStatus({ submitting: false, success: true, error: null });
				form.reset(); // Clear the form
			} else {
				// Handle error
				const errorData = await response.json();
				setFormStatus({
					submitting: false,
					success: false,
					error:
						errorData.message || "Failed to send message. Please try again.",
				});
			}
		} catch (err) {
			// Handle network errors
			setFormStatus({
				submitting: false,
				success: false,
				error: "Network error. Please check your connection and try again.",
			});
		}
	};

	// Success message component
	const SuccessMessage = () => (
		<div className="form-success-message">
			<div className="success-icon">
				<svg
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="checkmark-animation"
						d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="checkmark-animation"
						d="M22 4L12 14.01L9 11.01"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<h4 className="success-title">Message Sent Successfully!</h4>
			<p className="success-description">
				Thank you for reaching out to us. Our team will review your message and
				get back to you shortly.
			</p>
			<button
				onClick={() =>
					setFormStatus({
						submitting: false,
						success: false,
						error: null,
					})
				}
				className="secondary-button"
			>
				Send Another Message
			</button>
		</div>
	);

	// Error message component
	const ErrorMessage = () => (
		<div className="form-error-message">
			<div className="error-icon">
				<svg
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<h4 className="error-title">Something Went Wrong</h4>
			<p className="error-description">{formStatus.error}</p>
			<button
				onClick={() =>
					setFormStatus({
						submitting: false,
						success: false,
						error: null,
					})
				}
				className="secondary-button"
			>
				Try Again
			</button>
		</div>
	);

	return (
		<div className="contact-form reveal fade-left">
			{!formStatus.success ? (
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your name"
								required
								disabled={formStatus.submitting}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your email"
								required
								disabled={formStatus.submitting}
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="What is this regarding?"
							disabled={formStatus.submitting}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Tell us about your project"
							rows="4"
							required
							disabled={formStatus.submitting}
						></textarea>
					</div>
					<button
						type="submit"
						className={`submit-button ${
							formStatus.submitting ? "submitting" : ""
						}`}
						disabled={formStatus.submitting}
					>
						{formStatus.submitting ? "Sending..." : "Send Message"}
						{!formStatus.submitting && (
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
						)}
					</button>
				</form>
			) : (
				<SuccessMessage />
			)}

			{formStatus.error && <ErrorMessage />}
		</div>
	);
};

export default ContactForm;
