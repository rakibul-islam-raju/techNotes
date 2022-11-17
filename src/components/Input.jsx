const Input = ({
	label,
	type = "text",
	id,
	name,
	placeholder = "",
	required = false,
	register,
	error,
	msg,
	...rest
}) => {
	return (
		<div className="mb-2 w-full">
			<label className="text-lg" htmlFor={id}>
				{label}
			</label>
			<input
				className={`w-full rounded text-slate-800 ${
					error ? "border-red-500" : ""
				}`}
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				id={id}
				{...register(name)}
				{...rest}
			/>
			{msg && (
				<div className={`ml-2 ${error ? "text-red-500" : "text-white"}`}>
					{msg}
				</div>
			)}
		</div>
	);
};

export default Input;
