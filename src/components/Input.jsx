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
			<label className="text-lg" htmlFor={id}>
				{label}
			</label>
			<input
				className="w-full rounded text-slate-800"
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				id={id}
				{...rest}
			/>
		</div>
	);
};

export default Input;
