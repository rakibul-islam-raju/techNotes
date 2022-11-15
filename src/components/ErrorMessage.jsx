import React from "react";

const ErrorMessage = ({ message }) => {
	return (
		<div className="bg-red-100 p-2 font-semibold text-center text-red-500 rounded w-full overflow-auto">
			{message}
		</div>
	);
};

export default ErrorMessage;
