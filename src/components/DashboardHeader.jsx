import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";

const DashboardHeader = () => {
	const [sendLogout, { isLoading, isError, error, isSuccess }] =
		useSendLogoutMutation();

	const navigate = useNavigate();

	const handleLogout = () => sendLogout();

	useEffect(() => {
		if (isSuccess) navigate("/");
	}, [isSuccess, navigate]);

	// TODO: return error msg in a toast or popup

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
						<li className="top-nav-item" onClick={handleLogout}>
							<Link>Logout</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default DashboardHeader;
