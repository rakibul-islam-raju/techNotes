import React from "react";

const Button = ({ children, type = "button", fullWidth = false, ...rest }) => {
	return (
		<button className={`btn ${fullWidth && "w-full"}`} type={type} {...rest}>
			{children}
		</button>
	);
};

export default Button;
