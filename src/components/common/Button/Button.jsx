import React from "react";
import "./Button.css";

const Button = ({
	children,
	variant = "primary",
	icon,
	className = "",
	onClick,
	...rest
}) => {
	const baseClass =
		variant === "primary" ? "primary-button" : "secondary-button";
	const effectClass = variant === "primary" ? "glow-button" : "outline-button";

	return (
		<button
			className={`${baseClass} ${effectClass} ${className}`}
			onClick={onClick}
			{...rest}
		>
			{children}
			{icon && <span className="button-icon">{icon}</span>}
		</button>
	);
};

export default Button;
