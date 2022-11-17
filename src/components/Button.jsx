const Button = ({
	children,
	type = "button",
	fullWidth = false,
	loading = false,
	disabled = false,
	...rest
}) => {
	return (
		<button
			className={`btn ${fullWidth && "w-full"}`}
			type={type}
			disabled={disabled || loading}
			{...rest}
		>
			{loading ? (
				<svg
					className="mx-auto w-8 h-8"
					width="200px"
					height="200px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<circle
						cx="50"
						cy="50"
						fill="none"
						stroke="#94a3b8"
						stroke-width="10"
						r="35"
						stroke-dasharray="164.93361431346415 56.97787143782138"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							repeatCount="indefinite"
							dur="1s"
							values="0 50 50;360 50 50"
							keyTimes="0;1"
						></animateTransform>
					</circle>
				</svg>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
