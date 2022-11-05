import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
	return (
		<div className="sticky top-0 z-30 w-full bg-indigo-600 p-4">
			<div className="flex justify-between items-center">
				<Link to="/dashboard">
					<h4>techNotes</h4>
				</Link>
				<nav>
					<ul className="flex gap-4 items-center justify-end">
						<li className="top-nav-item">
							<Link>Notes</Link>
						</li>
						<li className="top-nav-item">
							<Link>Profile</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default DashboardHeader;
