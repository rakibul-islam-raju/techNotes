import React from "react";

const Input = ({
	label,
	type = "text",
	id,
	name,
	placeholder = "",
	required = false,
	...rest
}) => {
	return (
		<div className="mb-2 w-full">
			<label htmlFor={id}>{label}</label>
			<input
				className="w-full rounded"
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				{...rest}
			/>
		</div>
	);
};

export default Input;
