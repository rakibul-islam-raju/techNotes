import React from "react";
import { ReactComponent as Loading } from "../assets/images/loading.svg";
const Loader = () => {
	return (
		<div className="flex justify-center items-center">
			<Loading />
		</div>
	);
};

export default Loader;
