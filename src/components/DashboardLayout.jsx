import React from "react";
import { Outlet } from "react-router-dom";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
	return (
		<div className="min-h-screen">
			<DashboardHeader />
			<div className="px-4">
				<Outlet />
			</div>
			<DashboardFooter />
		</div>
	);
};

export default DashboardLayout;
